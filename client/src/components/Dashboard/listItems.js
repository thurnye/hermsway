import * as React from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import PaymentIcon from '@mui/icons-material/Payment';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useSelector } from 'react-redux';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';



const getIcons = (pageName) => {
  let icon = '';
  switch (pageName) {
    case 'Dashboard':
      icon = <DashboardIcon />; 
      break;
    case 'Case Management':
      icon = <InventoryIcon />; 
      break;
    case 'Client Management':
      icon = <PersonIcon />; 
      break;
    case 'Document Management':
      icon = <FolderIcon />; 
      break;
    case 'Billing and Finance':
      icon = <PaymentIcon />; 
      break;
    case 'Communication':
      icon = <MessageIcon />; 
      break;
    case 'Tasks and Reminders':
      icon = <ListAltIcon />; 
      break;
    case 'Reports and Analytics':
      icon = <AssessmentIcon />; 
      break;
    case 'User Management':
      icon = <GroupIcon/>; 
      break;
    case 'Settings':
      icon = <SettingsIcon/>
      break;
    case 'CaseStatus':
      icon = <BusinessCenterIcon/>
      break;
    case 'Documents':
      icon = <InsertDriveFileIcon/>
      break;
    default:
      icon = <FolderIcon />
      break;
  }
  return icon;
};


const MainListItems = ({ header, setHeader }) => {
  const portals = useSelector((state) => state.userLog.portals);


  return (
    <React.Fragment>
      {portals.map((page) => (
        <Link
          key={page.portalName}
          to={page.route}
          style={{
            color: header === page.portalName ? 'black' : '#0000008a',
            textDecoration: 'none',
          }}
        >
          <ListItemButton onClick={() => setHeader(page.portalName)}>
            <ListItemIcon
              sx={{ color: header === page.portalName ? 'black' : '#0000008a' }}
            >
              {getIcons(page.portalName)}
            </ListItemIcon>
            <ListItemText primary={page.portalName} />
          </ListItemButton>
        </Link>
      ))}
    </React.Fragment>
  );
};

export default MainListItems;
