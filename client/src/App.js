import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decodeJWToken } from './util/helperFunc';
import { userActions } from './store/userSlice';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Auth/Login/Login';
import SignUp from './pages/Auth/SignUp/SignUp';
import Single from './pages/Single/Single';
import NoMatch from './pages/NoMatch/NoMatch';
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import Dashboard from './components/Dashboard/Dashboard';
// import PortalRoutes from './routes/PortalRoutes';

import DashboardContents from './pages/Portals/DashboardContents/DashboardContents';
import CaseManagement from './pages/Portals/CaseManagement/CaseManagement';
import ClientManagement from './pages/Portals/ClientManagement/ClientManagement';
import DocumentManagement from './pages/Portals/DocumentManagement/DocumentManagement';
import Communication from './pages/Portals/Communication/Communication';
import TasksAndReminders from './pages/Portals/TasksAndReminders/TasksAndReminders';
import ReportsAndAnalytics from './pages/Portals/ReportsAndAnalytics/ReportsAndAnalytics';
import UserManagement from './pages/Portals/UserManagement/UserManagement';
import Settings from './pages/Portals/Settings/Settings';
import CaseStatus from './pages/Portals/CaseStatus/CaseStatus';
import Documents from './pages/Portals/Documents/Documents';
import BillingAndFinance from './pages/Portals/BillingAndFinance/BillingAndFinance';
import CreateUser from './components/UserManagementComponent/CreateUser/CreateUser';
import AccessPortal from './pages/AccessPortal/AccessPortal';
import ClientLogin from './pages/Auth/ClientLogin/ClientLogin';
import EmployeeLogin from './pages/Auth/EmployeeLogin/EmployeeLogin';

// Utility function to check if token is expired
const isTokenExpired = (token) => {
  const { exp } = decodeJWToken(token);
  return exp * 1000 < Date.now();
};

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLog.user);
  const portals = useSelector((state) => state.userLog.portals);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token && !isTokenExpired(token)) {
      const userDoc = decodeJWToken(token);

      // console.log(userDoc);

      dispatch(
        userActions.login({
          user: userDoc.user,
        })
      );
      dispatch(userActions.getRoles(userDoc.userPortals));
      dispatch(userActions.getDashboardWidget(userDoc.dashboardWidgets));
    } else {
      localStorage.removeItem('token');
    }
  }, [dispatch, token]);

  const getPages = (pageName) => {
    switch (pageName) {
      case 'Dashboard':
        return <DashboardContents />;
      case 'Case Management':
        return <CaseManagement />;
      case 'Client Management':
        return <ClientManagement />;
      case 'Document Management':
        return <DocumentManagement />;
      case 'Billing and Finance':
        return <BillingAndFinance />;
      case 'Communication':
        return <Communication />;
      case 'Tasks and Reminders':
        return <TasksAndReminders />;
      case 'Reports and Analytics':
        return <ReportsAndAnalytics />;
      case 'User Management':
        return <UserManagement />;
      case 'Settings':
        return <Settings />;
      case 'Case Status':
        return <CaseStatus />;
      case 'Documents':
        return <Documents />;
      default:
        return <React.Fragment></React.Fragment>;
    }
  };


  // console.log("PORTALS:::", portals)
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        {/* <Container sx={{ mt: 5 }}> */}
        <Routes>
          {/* Dashboard */}
          {user ? (
            <Route path='/' element={<Dashboard />}>
              <>
                <Route path='dashboard' element={<Home />} />
                {portals.map((page, index) => (
                  <Route
                    key={index}
                    path={page.route}
                    element={getPages(page.portalName)}
                  />
                ))}

                <Route path='single/:id' element={<Single />} />
                <Route path='edit/:id' element={<SignUp />} />

                {/* USER MANAGEMENT ROUTES */}
                <Route
                  path='user-management/create-user'
                  element={<CreateUser />}
                />

                <Route index element={<Navigate to='dashboard' />}></Route>
              </>
            </Route>
          ) : (
            <Route path='/' element={<LandingPage />}>
              <>
                <Route path='access-portal' element={<AccessPortal />} />
                <Route path='employee-login' element={<EmployeeLogin />} />
                <Route path='client-login' element={<ClientLogin />} />
                <Route path='signup' element={<SignUp />} />
                <Route index element={<Navigate to='access-portal' />}></Route>
              </>
            </Route>
          )}
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
        {/* </Container> */}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
