import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decodeJWToken } from './util/helperFunc';
import { userActions } from './store/userSlice';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Single from './pages/Single/Single';
import NoMatch from './pages/NoMatch/NoMatch';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
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

// Utility function to check if token is expired
const isTokenExpired = (token) => {
  const { exp } = decodeJWToken(token);
  return exp * 1000 < Date.now();
};

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLog.user);
  const portals = useSelector((state) => state.userLog.portals);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !isTokenExpired(token)) {
      const userDoc = decodeJWToken(token);
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
  }, [dispatch]);

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

  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        {/* <Container sx={{ mt: 5 }}> */}
        <Routes>
          <Route path='/welcome' exact element={<Home />} />

          {user ? (
            <>
              {/* <Route path='/all' element={<ViewAll />} />
                

              {/* Dashboard */}
              <Route path='/' element={<Dashboard />}>
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

                <Route index element={<Navigate to='dashboard' />}></Route>
              </Route>
            </>
          ) : (
            <>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
            </>
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
