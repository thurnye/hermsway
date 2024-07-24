import React,{useState, useEffect} from 'react';
import styles from './Home.module.css';
import { useSelector } from 'react-redux';
import {roleCodes} from '../../util/globalVar'
import FirmDashboard from '../../components/DashBoardManager/FirmDashboard/FirmDashboard'
import ClientDashboard from '../../components/DashBoardManager/ClientDashboard/ClientDashboard'


const Home = () => {
  const user = useSelector((state) => state.userLog.user);
  const [role, setRole] = useState()
  const tech = [
    'Active Cases',
    'Upcoming Deadlines',
    'Recent Activities',
    'Outstanding Tasks',
    'Case Summary',
    'Case Progress',
    'Document Management',
    'Client List',
    'Recent Communications',
    'Client Requests',
    'Outstanding Invoices',
    'Payment History',
    'Financial Overview',
    'To-Do List',
    'Reminders',
    'Case Win/Loss Ratio',
    'Client Satisfaction',
    'Time Tracking',
  ];

  useEffect(() => {
    if(user.role){
      setRole(user.role.refCode)
    }
  },[user])

  
  return (
    <div className={styles.Home}>
      {role === roleCodes.admin && <FirmDashboard/>}
      {role === roleCodes.associate && <FirmDashboard/>}
      {role === roleCodes.client && <ClientDashboard/>}
    </div>
  );
};

export default Home;
