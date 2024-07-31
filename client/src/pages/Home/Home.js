import React,{useState, useEffect} from 'react';
import styles from './Home.module.css';
import { useSelector } from 'react-redux';
import {roleCodes} from '../../util/globalVar'
import FirmDashboard from '../../components/DashBoardManager/FirmDashboard/FirmDashboard'
import ClientDashboard from '../../components/DashBoardManager/ClientDashboard/ClientDashboard'


const Home = () => {
  const user = useSelector((state) => state.userLog.user);
  const [role, setRole] = useState()


  useEffect(() => {
    if(user.role){
      setRole(user.role.refCode)
    }
  },[user])

  
  return (
    <div className={styles.Home}>
      {role === roleCodes.client ? <ClientDashboard/> : <FirmDashboard/>}
    </div>
  );
};

export default Home;
