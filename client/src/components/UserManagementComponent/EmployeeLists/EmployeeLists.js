import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './EmployeeLists.module.css';
import Box from '@mui/material/Box';
import { Paper, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
// import EventList from '../EventList/EventList';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import services from '../../../../util/services';
import services from '../../../util/employee.services';
// import AlertDialog from '../../../AlertDialog/AlertDialog';
// import { getDateShort } from '../../../../util/commons';
import Avatar from '@mui/material/Avatar';
import DataGridTable from '../../DataGridTable/DataGridTable'
import { getDateShort } from '../../../util/helperFunc';
import { permissionNames } from '../../../util/permissions.services';

const columns = [
  { field: 'id', headerName: '', width: 80 },
  {
    field: 'avatar',
    headerName: '',
    width: 50,
    renderCell: (params) => (
      <Box sx={{ height: 'inherit' }}>
        {console.log({params})}
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Box>
    ),
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    renderCell: (params) => (
      <Box
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {params.value}
      </Box>
    ),
  },
  { field: 'role', headerName: 'Role', width: 150 },
  { field: 'employmentStartDate', headerName: 'Start Date', width: 200 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'employeeId', headerName: 'Employee ID', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },

];

const getRows = (data) => {
  const rows = [];

  data.forEach((employee, i) => {
    const { _id, firstName, lastName, role, createdAt, active, employeeId, email, avatar } =
      employee;
    rows.push({
      id: _id,
      avatar,
      name: `${firstName} ${lastName}`,
      role: role,
      employmentStartDate : getDateShort(createdAt),
      status: active,
      employeeId,
      email,
    });
  });
  console.log(rows);
  return rows;
};

const EmployeeLists = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLog.user);
  const company = useSelector((state) => state.company.companyProfile);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState();
  const [employees, setEmployees] = useState([]);
  const [counts, setCounts] = useState(10);
  const [isDelete, setIsDelete] = useState(false);
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 25,
    page: 1,
  });
  const [rows, setRows] = useState([]);
  const [message, setMessage] = useState();



  const fetchEmployees = async (query, profiles) => {
    try {
      const allEmployees = await services.findAllEmployees({profiles, query});
      console.log('allEmployees:::', allEmployees);
      setEmployees(allEmployees.data.employees);
      setCounts(allEmployees.data.count);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(paginationModel)
  console.log(`Employees for page ${paginationModel.page}::`, employees)

  useEffect(() => {
    setRows(getRows(employees));
  }, [employees]);

  useEffect(() => {
    if (user && paginationModel) {
      // Check if both user and paginationModel exist
      const filter = {
        currentPage: paginationModel.page + 1,
        perPage: paginationModel.pageSize,
      };
      user._id && fetchEmployees(filter, {employeeId: user.employeeId, companyId: company.companyId, permission: permissionNames.view_all_employees});
    }
  }, [user, paginationModel.page, paginationModel.pageSize, company]);



  // Add the data to redux for preview
  useEffect(() => {
    if (selectedEmployeeId) {
      // setPreviewEvent(false);
      console.log({ selectedEmployeeId, employees });
    }
  }, [selectedEmployeeId]);

  const handleSectionDelete = async () => {
    console.log(selectedEmployeeId);
    try {
    } catch (err) {
      console.log(err);
    }
  };


  return (
      <div className={styles.EmployeeLists}>
        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex',  alignItems: 'center' }}>
                  <Typography variant='body1' gutterBottom sx={{ flexGrow: 1, textAlign: 'start' }}>
                    Employees
                  </Typography>
                  <Stack direction='row' spacing={2}>
                    <Button
                      variant='text'
                      disabled={selectedEmployeeId !== undefined ? false : true}
                      onClick={() => setIsDelete(true)}
                      sx={{ textTransform: 'none' }}
                      color='error'
                    >
                      Delete
                    </Button>
                    <Button
                      variant='text'
                      disabled={selectedEmployeeId !== undefined ? false : true}
                      onClick={() =>
                        navigate('/account/recipe/create-recipe', {
                          state: { edit: false, id: selectedEmployeeId },
                        })
                      }
                      sx={{ textTransform: 'none' }}
                    >
                      Edit
                    </Button>
                    {/* {previewEvent ? <Preview data={previewEvent} edit={true}/> 
                  : 
                  <Button  variant="text" disabled={true} sx={{textTransform: 'none'}}> Preview </Button>
                } */}
                  </Stack>
                </Box>
                {/* <RecipeList/> */}
                <DataGridTable
                  setSelected={setSelectedEmployeeId}
                  data={employees}
                  paginationModel={paginationModel}
                  setPaginationModel={setPaginationModel}
                  rowCount={counts}
                  rows={rows}
                  columns={columns}
                />
              </Paper>
            </Grid>
          </Grid>
          {/* <AlertDialog
            open={isDelete}
            setOpen={setIsDelete}
            setConfirmDelete={() => handleSectionDelete()}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                variant='button'
                display='block'
                gutterBottom
                sx={{
                  transform: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 50,
                  width: 50,
                  borderRadius: '50%',
                  backgroundColor: '#f8f7fa',
                }}
              >
                <PiTrashThin fontSize={30} />
              </Typography>
              <Typography variant='h6' gutterBottom color='error'>
                Delete
              </Typography>
              <Typography variant='caption' gutterBottom>
                {message}
              </Typography>
            </Box>
          </AlertDialog> */}
        </Container>
      </div>
  );
};

export default EmployeeLists;
