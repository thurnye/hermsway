import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './EmployeeLogin.module.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { decodeJWToken } from '../../../util/helperFunc';
import services from '../../../util/employee.services';
import { userActions } from '../../../store/userSlice';
import RequestFeedback from '../../../components/RequestFeedback/RequestFeedback';
import { companyActions } from '../../../store/companySlice';



const defaultTheme = createTheme();

const EmployeeLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // FeedBack States
  const [open, setOpen] = useState(false);
  const [reqLoading, setReqLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsError(false);
      setSaved(false);
      setReqLoading(true);
      setOpen(true);
      setMessage('');
      setShowCancel(false);

      const data = new FormData(event.currentTarget);
      const loginData = {
        companyId: data.get('companyId'),
        employeeId: data.get('employeeId'),
        email: data.get('email'),
        password: data.get('password'),
      };

      // console.log(loginData);

      const result = await services.postLoginEmployee(loginData);
      let token = result.data;
      localStorage.setItem('token', token);
      const userDoc = decodeJWToken(token);

      // console.log(userDoc)
      dispatch(
        userActions.login({
          user: userDoc,
        })
      );
      dispatch(
        companyActions.getCompany(userDoc.company)
      );
      setReqLoading(false);
      navigate('/');
    } catch (error) {
      console.log('ERROR:::', error);
      const errMsg = error.response?.data;
      setMessage(errMsg);
      setReqLoading(false);
      setShowCancel(false);
      setSaved(false);
      setIsError(true);
      setOpen(true);
    }
  };

  return (
    <div className={styles.EmployeeLogin}>
      <ThemeProvider theme={defaultTheme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Employee Sign In Portal
            </Typography>
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                      size='small'
                      autoComplete='given-name'
                      name='companyId'
                      required
                      fullWidth
                      id='companyId'
                      label='Company ID'
                      autoFocus
                      defaultValue={'A0947'}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      size='small'
                      required
                      fullWidth
                      id='employeeId'
                      label='Employee ID'
                      name='employeeId'
                    />
                  </Grid>
              </Grid>
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              

              <Grid container>
                <Grid item xs>
                  <Link href='/forgotPassword' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>

          <RequestFeedback
            successMessage={message}
            errorMessage={message}
            open={open}
            setOpen={setOpen}
            loading={reqLoading}
            isError={isError}
            saved={saved}
            showCancel={showCancel}
            handleError={() => setOpen(!open)}
            errorBtnLabel={'close'}
            handleSuccess={() => {
              setOpen(!open);
              navigate('/all');
            }}
            successBtnLabel={'close'}
          />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default EmployeeLogin;
