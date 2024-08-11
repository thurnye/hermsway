import React, { useEffect, useState } from 'react';
import styles from './EditPortal.module.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';
import { allPortals } from '../../../../util/globalVar';

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

const EditPortal = ({ defaultPortals, setPortals }) => {
  const [selectedPortals, setSelectedPortals] = useState([]);

  const handleSelectChange = (event, type) => {
    const {
      target: { value },
    } = event;

    setSelectedPortals(value);
    setPortals(
      allPortals.filter((portal) => value.includes(portal.permissionTypeName)),
      'portals'
    );
  };

  useEffect(() => {
    if (defaultPortals.length > 0) {
      setSelectedPortals(defaultPortals.map((el) => el.permissionTypeName));
    }
  }, [defaultPortals]);

  return (
    <div className={styles.EditPortal}>
      <FormControl fullWidth>
        <InputLabel id='portal-management-label'>Portal Management</InputLabel>
        <Select
          labelId='portal-management-label'
          id='portal-management'
          multiple
          value={selectedPortals}
          onChange={(e) => handleSelectChange(e, 'portals')}
          input={<OutlinedInput label='Portal Management' />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {allPortals.map((option) => (
            <MenuItem
              key={option.permissionTypeName}
              value={option.permissionTypeName}
            >
              <Checkbox
                checked={
                  selectedPortals.indexOf(option.permissionTypeName) > -1
                }
              />
              {option.permissionTypeName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default EditPortal;
