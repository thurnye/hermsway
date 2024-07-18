
exports.defaultRoles = [
    {
        roleName: 'Admin',
        refCode: "HMSW-ADM-001"
    },
    {
        roleName: 'Associate',
        refCode: 'HMSW-ASS-002'
    },
    {
        roleName: 'Client',
        refCode: 'HMSW-CLI-003'
    }
];


exports.defaultPortals = [

    { portalName: 'Dashboard', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminDashboard', route: 'Dashboard',},
    { portalName: 'Case Management', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminCaseManagement', route: 'case-management',},
    { portalName: 'Client Management', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminClientManagement', route: 'client-management',},
    { portalName: 'Document Management', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminDocumentManagement', route: 'document-management',},
    { portalName: 'Billing and Finance', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminBillingAndFinances', route: 'billing-and-finances',},
    { portalName: 'Communication', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminCommunication', route: 'Communication',},
    { portalName: 'Tasks and Reminders', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminTasksAndReminders', route: 'tasks-and-reminders',},
    { portalName: 'Reports and Analytics', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminReportsAndAnalytics', route: 'reports-and-analytics',},
    { portalName: 'User Management', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminUserManagement', route: 'user-management',},
    { portalName: 'Settings', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminUserSettings', route: 'settings',},


    { portalName: 'Dashboard', roleRefCode: 'HMSW-ASS-002', portalRoleName: 'AssociateDashboard', route: 'dashboard',},
    { portalName: 'Case Management', roleRefCode: 'HMSW-ASS-002', portalRoleName: 'AssociateCaseManagement', route: 'case-management',},
    { portalName: 'Client Management', roleRefCode: 'HMSW-ASS-002', portalRoleName: 'AssociateClientManagement', route: 'client-management',},
    { portalName: 'Document Management', roleRefCode: 'HMSW-ASS-002', portalRoleName: 'AssociateDocumentManagement', route: 'document-management',},
    { portalName: 'Billing and Finance', roleRefCode: 'HMSW-ASS-002', portalRoleName: 'AssociateBillingAndFinances', route: 'billing-and-finances',},
    { portalName: 'Tasks and Reminders', roleRefCode: 'HMSW-ASS-002', portalRoleName: 'AssociateTasksAndReminders', route: 'tasks-and-reminders',},
    { portalName: 'Reports and Analytics', roleRefCode: 'HMSW-ASS-002', portalRoleName: 'AssociateReportsAndAnalytics', route: 'reports-and-analytics',},
    { portalName: 'Settings', roleRefCode: 'Admin', portalRoleName: 'AdminUserSettings', route: 'settings',},
    { portalName: 'Communication', roleRefCode: 'Admin', portalRoleName: 'AdminCommunication', route: 'communication',},


    { portalName: 'Dashboard', roleRefCode: 'HMSW-CLI-003', portalRoleName: 'ClientDashboard', route: 'dashboard',},
    { portalName: 'Case Status', roleRefCode: 'HMSW-CLI-003', portalRoleName: 'ClientCaseStatus', route: 'case-status',},
    { portalName: 'Documents', roleRefCode: 'HMSW-CLI-003', portalRoleName: 'ClientDocuments', route: 'documents',},
    { portalName: 'Billing and Finance', roleRefCode: 'HMSW-CLI-003', portalRoleName: 'ClientBillingAndFinances', route: 'billing-and-finances',},
    { portalName: 'Communication', roleRefCode: 'HMSW-CLI-003', portalRoleName: 'ClientCommunication', route: 'communication',},
    { portalName: 'Settings', roleRefCode: 'HMSW-CLI-003', portalRoleName: 'ClientSettings', route: 'settings',},
];

