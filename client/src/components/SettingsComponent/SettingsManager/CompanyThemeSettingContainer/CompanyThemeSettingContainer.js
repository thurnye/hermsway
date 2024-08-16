import React, { useState } from 'react';
import styles from './CompanyThemeSettingContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ColorPicker from './ColorPicker';
import { companyActions } from '../../../../store/companySlice';
import CustomizedButton from '../../../CustomizedButton/CustomizedButton';
import {
  permissionNames,
  permissionActions,
} from '../../../../util/permissions.services';
import appServices from '../../../../util/app.services';
import RequestFeedback from '../../../RequestFeedback/RequestFeedback';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const CompanyThemeSettingContainer = ({ permissionTypeCode }) => {
  const dispatch = useDispatch();
  const {
    companyProfile: { companyId },
    colorTheme,
  } = useSelector((state) => state.company);
  const user = useSelector((state) => state.userLog.user);

  // Feedback States
  const [open, setOpen] = useState(false);
  const [reqLoading, setReqLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [message, setMessage] = useState('');

  const handleColorChange = (type, key, color) => {
    dispatch(companyActions.getCompanyColorTheme({ type, key, color }));
  };

  const handleSave = async () => {
    try {
      setIsError(false);
      setSaved(false);
      setReqLoading(true);
      setOpen(true);
      setMessage('');
      setShowCancel(false);

      const profiles = {
        employeeId: user.employeeId,
        companyId,
        permission: permissionNames.colors,
        permissionTypeCode,
        action: permissionActions.edit,
      };
      const result = await appServices.postColorTheme({
        colorTheme,
        profiles,
      });
      setReqLoading(false);
      setSaved(true);
      setMessage(result.data);
    } catch (error) {
      console.log(error.response.data);
      const errMsg = error.response?.data;
      setMessage(errMsg);
      setReqLoading(false);
      setShowCancel(false);
      setSaved(false);
      setIsError(true);
      setOpen(!open);
    }
  };

  return (
    <div className={styles.CompanyThemeSettingContainer}>
      <Box sx={{ textAlign: 'end', mb: 5 }}>
        <CustomizedButton
          variant={'text'}
          label={'Save Changes'}
          id='color-shades'
          disableElevation
          onClick={handleSave}
          sx={{
            borderRadius: 0,
            textTransform: 'none',
          }}
        />
      </Box>
      <Box>
        {Object.keys(colorTheme).map((colTheme, index) => (
          <Box
            sx={{
              flexGrow: 1,
              mt: index === 0 ? '' : 6,
              pb: 2,
            }}
            key={colTheme}
          >
            <Typography
              variant={'h6'}
              gutterBottom
              sx={{
                textAlign: 'center',
                mb: 3,
              }}
            >
              {colTheme.toUpperCase()}
            </Typography>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Object.entries(colorTheme[colTheme]).map(([key, value]) => (
                <Grid item xs={2} sm={4} md={4} key={key}>
                  <Box sx={{}}>
                    <Card sx={{ height: 50, background: value }}></Card>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      {capitalizeFirstLetter(key)}
                    </Typography>
                    <Box
                      sx={{
                        mt: -3,
                      }}
                    >
                      <ColorPicker
                        color={value}
                        setColor={(color) =>
                          handleColorChange(colTheme, key, color)
                        }
                      />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>

      <RequestFeedback
        successMessage={message}
        errorMessage={message}
        open={open}
        setOpen={setOpen}
        loading={reqLoading}
        isError={isError}
        saved={saved}
        savingMessage={`Updating...`}
        showCancel={showCancel}
        handleError={() => setOpen(!open)}
        errorBtnLabel={'close'}
        handleSuccess={() => {
          setOpen(!open);
        }}
        successBtnLabel={'close'}
      />
    </div>
  );
};

export default CompanyThemeSettingContainer;
