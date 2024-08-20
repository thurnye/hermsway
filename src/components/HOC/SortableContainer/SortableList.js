import React, { useState, useEffect } from 'react';
import {
  DndContext,
  closestCorners,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Paper, IconButton, Divider, Box } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const SortableItem = ({ id, content }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Box
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      sx={{ p: 0.2, width: '100%', height: '100%' }}
    >
      <Paper>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {content}
          <IconButton sx={{ float: 'inline-end' }}>
            <DragIndicatorIcon sx={{ color: 'text.secondary' }} />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

const SortableContainer = ({ items }) => {
  return (
    <Box>
      <SortableContext items={items.map((item) => item.id)}>
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <SortableItem id={item.id} content={item.content} />
          </React.Fragment>
        ))}
      </SortableContext>
    </Box>
  );
};

const SortableList = ({ items: initialItems }) => {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 6,
      },
    })
  );

  const move = (oldIndex, newIndex) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      const [movedItem] = updatedItems.splice(oldIndex, 1);
      updatedItems.splice(newIndex, 0, movedItem);
      return updatedItems;
    });
  };

  const handleSortEnd = ({ active, over }) => {
    if (active && over && active.id && over.id && active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        move(oldIndex, newIndex);
      }
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleSortEnd}
    >
      <SortableContainer items={items} />
    </DndContext>
  );
};

export default SortableList;
