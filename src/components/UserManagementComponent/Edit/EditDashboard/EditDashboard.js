import React, { useEffect, useState } from 'react';
import styles from './EditDashboard.module.css';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { dashboardSections } from '../../../../util/globalVar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import MenuItem from '@mui/material/MenuItem';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const EditDashboard = ({ dashboards, getSelectedDashboards }) => {
  const [selectedDashboards, setSelectedDashboards] = useState({});
  const [openCollapse, setOpenCollapse] = React.useState();

  const groupSelected = (selectedObject) => {
    const grouped = {};
    Object.entries(selectedObject).forEach(([category, items]) => {
      if (items.length > 0) {
        grouped[category] = items;
      }
    });
    return grouped;
  };

  const renderSelected = (selected) => {
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        {Object.entries(selected).map(([category, items]) => (
          <Box key={category} sx={{ mr: 2, textWrap: 'wrap' }}>
            <strong>{category}:</strong>
            {items.map((item, index) => {
              return (
                <Chip
                  key={`${item}_${index}`}
                  label={item}
                  sx={{ my: 1, ml: 1 }}
                />
              );
            })}
          </Box>
        ))}
      </Box>
    );
  };
  const handleClick = (category) => {
    if (openCollapse === category) {
      setOpenCollapse('');
    } else {
      setOpenCollapse(category);
    }
  };

  const handleDashboardManagementChange = (category, value) => {
    setSelectedDashboards((prevDashboards) => {
      const categoryDashboards = prevDashboards[category] || [];
      const newDashboards = categoryDashboards.includes(value)
        ? categoryDashboards.filter((perm) => perm !== value)
        : [...categoryDashboards, value];

      return {
        ...prevDashboards,
        [category]: newDashboards,
      };
    });
  };

  useEffect(() => {
    console.log('selectedDashboards:::', selectedDashboards)
    const result = {};

    for (const [key, selectedWidgets] of Object.entries(selectedDashboards)) {
        if (dashboardSections[key]) {
            result[key] = dashboardSections[key].filter(widget => 
                selectedWidgets.includes(widget.widgetName)
            );
        }
    }
    getSelectedDashboards(result, 'dashboards');
  }, [getSelectedDashboards, selectedDashboards]);

  useEffect(() => {
    const dt = {};
    for (const property in dashboards) {

      const data = dashboards[property].map((widget) => widget.widgetName);
      dt[property] = data;
    }
    setSelectedDashboards(dt);
  }, [dashboards]);

  return (
    <div className={styles.EditDashboard}>
      <FormControl fullWidth>
        <InputLabel id='Dashboard-management-label'>
          Dashboard Management
        </InputLabel>
        <Select
          labelId='Dashboard-management-label'
          id='Dashboard-management'
          multiple
          input={<OutlinedInput label='Dashboard Management' />}
          value={Object.values(selectedDashboards).flat()}
          renderValue={() => renderSelected(groupSelected(selectedDashboards))}
          MenuProps={MenuProps}
        >
          {Object.entries(dashboardSections).map(([category, widgets]) => (
            <List
              component='nav'
              aria-labelledby='nested-list-subheader'
              sx={{ mb: -2 }}
              key={category}
            >
              <ListItemButton onClick={() => handleClick(category)}>
                <Checkbox
                  checked={
                    selectedDashboards[category]?.length === widgets.length
                  }
                  indeterminate={
                    selectedDashboards[category]?.length > 0 &&
                    selectedDashboards[category]?.length < widgets.length
                  }
                />
                <ListItemText primary={category} />
                {openCollapse === category ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={openCollapse === category}
                timeout='auto'
                unmountOnExit
              >
                {widgets.map((widget) => (
                  <MenuItem
                    key={widget.widgetName}
                    value={widget.widgetName}
                    sx={{ ml: 4 }}
                  >
                    <Checkbox
                      checked={selectedDashboards[category]?.includes(
                        widget.widgetName
                      )}
                      onChange={() =>
                        handleDashboardManagementChange(
                          category,
                          widget.widgetName
                        )
                      }
                    />
                    <ListItemText primary={widget.widgetName} />
                  </MenuItem>
                ))}
              </Collapse>
            </List>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default EditDashboard;
