import React, { useEffect, useState } from 'react';
import styles from './EditProfile.module.css';
import DOMPurify from 'dompurify'; 
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  roles,
} from '../../../../util/globalVar';

const defaultTheme = createTheme();
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

const EditProfile = ({ defaultProfile, setProfile }) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    roleRefCode: '',
  });
  const [selectedRoles, setSelectedRoles] = useState('');

  useEffect(() => {
    if (defaultProfile) {
      const { roleRefCode } = defaultProfile;
      setData(defaultProfile);
      const role = roles.find(
        (role) => role.rolesCode.toLowerCase() === roleRefCode.toLowerCase()
      );
      if (role) {
        setSelectedRoles(role.label);
      }
    }
  }, [defaultProfile]);

  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input);
  };

  // Update data and notify the parent component
  const handleDataChange = (newData) => {
    setData(newData);
    setProfile(newData); // Call the parent's callback function
  };

  const handleRoleChange = (event) => {
    const { target: { value } } = event;
    setSelectedRoles(value);
    handleDataChange({
      ...data,
      roleRefCode: roles.find((role) => role.label === value)?.rolesCode || ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value); // Sanitize the input value
    handleDataChange({
      ...data,
      [name]: sanitizedValue, // Use sanitized value
    });
  };

  return (
    <div className={styles.Roles}>
      <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <Box>
          <ThemeProvider theme={defaultTheme}>
            <Box
              component="form"
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    autoComplete="given-name"
                    name="firstName"
                    value={data.firstName}
                    onChange={handleInputChange}
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    required
                    fullWidth
                    id="lastName"
                    value={data.lastName}
                    onChange={handleInputChange}
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    required
                    fullWidth
                    id="email"
                    value={data.email}
                    onChange={handleInputChange}
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="roles-label">Roles</InputLabel>
                    <Select
                      size="small"
                      labelId="roles-label"
                      id="roles"
                      value={selectedRoles}
                      onChange={handleRoleChange}
                      input={<OutlinedInput label="Roles" />}
                      renderValue={(selected) => selected}
                      MenuProps={MenuProps}
                    >
                      {roles.map((role) => (
                        <MenuItem key={role.value} value={role.label}>
                          <Checkbox checked={selectedRoles === role.label} />
                          {role.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          </ThemeProvider>
        </Box>
      </Container>
    </div>
  );
};

export default EditProfile;
