import React from 'react';
import styles from './UnAuthorizedAccess.module.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ErrorIcon from '@mui/icons-material/Error';

const UnAuthorizedAccess = ({ userPermissions, requiredPermissions, action }) => {

  const hasPermission = userPermissions.some(permission => 
    permission.permissionType === requiredPermissions && permission[action] === "true"
  );


  if (!hasPermission) {
    return(
    <Box className={styles.UnAuthorizedAccess} sx={{mt: 15}}>
      <Card sx={{ width: 275, m: 'auto', }}>
        <CardContent>
          <Box sx={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
            <ErrorIcon sx={{fontSize: 50, color: 'salmon'}}/>
          <Typography variant="h5"  component="div"  color="text.secondary" gutterBottom>
             Access Denied
          </Typography>
          </Box>
         
        </CardContent>
        <CardActions>
        <Typography  variant="caption" sx={{ mx: 1.5, textAlign: 'center' }} color="text.secondary">
            <i>If you believe this is an error please contact the system admin. </i>
          </Typography>
        </CardActions>
      </Card>
    </Box>
  )};
    
  }


export default UnAuthorizedAccess;
