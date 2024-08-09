import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './PermissionTable.module.css';
import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  flexRender,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Checkbox,
} from '@mui/material';
import { ExpandMore, ChevronRight } from '@mui/icons-material';

const headers = [
  { header: 'Resources', accessor: 'permissionType' },
  { header: 'Create', accessor: 'create' },
  { header: 'Read', accessor: 'read' },
  { header: 'Edit', accessor: 'edit' },
  { header: 'Delete', accessor: 'del' },
  { header: 'View All', accessor: 'viewAll' },
  { header: 'Modify All', accessor: 'modifyAll' },
  { header: '', accessor: 'permissionTypeCode' },
];

const convertToTableData = (data) => {
  return data.map((permissionType) => {
    if (!permissionType.permissions?.length) return permissionType;

    const newPermissionType = {
      ...permissionType,
      subRows: permissionType.permissions.map((child) => {
        if (!child.permissions?.length) return child;

        const newChild = {
          ...child,
          subRows: child.permissions,
        };

        delete newChild.permissions;
        return newChild;
      }),
    };

    delete newPermissionType.permissions;
    return newPermissionType;
  });
};

function TableData({ columns, data, onCheckboxChange }) {
  const [expanded, setExpanded] = useState({});

  const table = useReactTable({
    data,
    columns,
    state: { expanded },
    onExpandedChange: setExpanded,
    getSubRows: (row) => row?.subRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <Table>
      <TableHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableCell key={header.id} colSpan={header.colSpan}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {cell.column.columnDef.accessorKey === 'permissionType' ? (
                  <div
                    className='expander'
                    style={{ paddingLeft: `${row.depth * 2}rem` }}
                  >
                    {row.getCanExpand() && (
                      <IconButton
                        size='small'
                        onClick={row.getToggleExpandedHandler()}
                      >
                        {row.getIsExpanded() ? (
                          <ExpandMore />
                        ) : (
                          <ChevronRight />
                        )}
                      </IconButton>
                    )}
                    {cell.getValue()}
                  </div>
                ) : (
                  <Checkbox
                    checked={cell.getValue() === 'true'}
                    onChange={(e) => onCheckboxChange(e, row, cell)}
                  />
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const PermissionTable = ({tableData, getPermissions}) => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState(JSON.parse(JSON.stringify(data)));

  useEffect(() => {
    if(tableData.length > 0){
      setData(convertToTableData(tableData))
      setOriginalData(JSON.parse(JSON.stringify(convertToTableData(tableData))))
    }
  },[tableData])

  const columns = useMemo(() => {
    return [
      {
        header: headers[0].header,
        accessorKey: headers[0].accessor,
        cell: ({ row, getValue }) => (
          <div
            className='expander'
            style={{ paddingLeft: `${row.depth * 2}rem` }}
          >
            {row.getCanExpand() && (
              <IconButton size='small' onClick={row.getToggleExpandedHandler()}>
                {row.getIsExpanded() ? <ExpandMore /> : <ChevronRight />}
              </IconButton>
            )}
            {getValue()}
          </div>
        ),
      },
      ...headers.slice(1).map((header) => ({
        header: header.header,
        accessorKey: header.accessor,
      })),
    ];
  }, []);

  const handleCheckboxChange = (event, row, cell) => {
    const { checked } = event.target;
    const columnId = cell.column.id;
  
    const updateSubRows = (subRows) => {
      return subRows.map((subItem) => {
        const updatedSubItem = { ...subItem, [columnId]: checked ? 'true' : '' };
  
        if (subItem.subRows) {
          updatedSubItem.subRows = updateSubRows(subItem.subRows);
        }
  
        return updatedSubItem;
      });
    };
  
    const updateRow = (item, rowToUpdate) => {
      if (item.permissionType === rowToUpdate.original.permissionType) {
        const updatedItem = { ...item, [columnId]: checked ? 'true' : '' };
  
        if (item.subRows) {
          updatedItem.subRows = updateSubRows(item.subRows);
        }
  
        return updatedItem;
      }
  
      if (item.subRows) {
        const updatedSubRows = item.subRows.map((subItem) =>
          updateRow(subItem, rowToUpdate)
        );
  
        const allSubRowsChecked = updatedSubRows.every(
          (subRow) => subRow[columnId] === 'true'
        );
        const anySubRowChecked = updatedSubRows.some(
          (subRow) => subRow[columnId] === 'true'
        );
  
        return {
          ...item,
          [columnId]: allSubRowsChecked ? 'true' : (anySubRowChecked ? 'indeterminate' : ''),
          subRows: updatedSubRows,
        };
      }
  
      return item;
    };
  
    const updatedData = data.map((item) => updateRow(item, row));
  
    setData(updatedData);

    const changedData = findChanges(originalData, updatedData);
    getPermissions(changedData, 'permissions')
    
  }; 
  
  return (
    <Box sx={{ height: 520, width: '100%' }}>
      <Paper>
        <Toolbar>
          <Typography variant='h6' component='div'>
            Permissions
          </Typography>
        </Toolbar>
        <TableContainer>
          <TableData
            columns={columns}
            data={data}
            onCheckboxChange={handleCheckboxChange}
          />
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default PermissionTable;


const findChanges = (oldData, newData) => {
  const changes = [];

  const relevantFields = ['read', 'create', 'edit', 'del', 'viewAll', 'modifyAll'];

  const compareItems = (oldItem, newItem) => {
    let hasChanges = false;
    const updatedItem = { ...newItem };

    // Check if any of the relevant fields have changed
    relevantFields.forEach((field) => {
      if (newItem[field] !== oldItem[field]) {
        updatedItem[field] = newItem[field];
        hasChanges = true;
      }
    });

    if (hasChanges) {
      // Recursively check subRows
      const subRowsChanges = findChanges(oldItem.subRows || [], newItem.subRows || []);
      if (subRowsChanges.length > 0) {
        updatedItem.subRows = subRowsChanges;
      } else {
        delete updatedItem.subRows;
      }

      return updatedItem;
    }

    return null;
  };

  // Compare each item in the new data with the old data
  newData.forEach((newItem) => {
    const oldItem = oldData.find(item => item.permissionType === newItem.permissionType);
    if (oldItem) {
      const change = compareItems(oldItem, newItem);
      if (change) {
        changes.push(change);
      }
    } else {
      // If the item is new
      changes.push(newItem);
    }
  });

  return changes;
};

