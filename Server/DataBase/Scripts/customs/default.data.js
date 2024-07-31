
exports.defaultRoles = [
    { roleName: 'admin', refCode: 'HMSW-ADM-001' },
    { roleName: 'managingPartner', refCode: 'HMSW-MGN_PTN-002' },
    { roleName: 'associate', refCode: 'HMSW-ASS-003' },
    { roleName: 'paralegal', refCode: 'HMSW-PAL-004' },
    { roleName: 'client', refCode: 'HMSW-CLI-0115' }
];


// exports.defaultPortals = [
//     { portalName: 'Dashboard', route: 'dashboard', ordinal: 1, portalCode: 'hmsw-portal-010' },
//     { portalName: 'Case Management', route: 'case-management', ordinal: 2, portalCode: 'hmsw-portal-001' },
//     { portalName: 'Case Status', route: 'case-status', ordinal: 2, portalCode: 'hmsw-portal-012' },
//     { portalName: 'Client Management', route: 'client-management', ordinal: 3, portalCode: 'hmsw-portal-002' },
//     { portalName: 'Documents', route: 'documents', ordinal: 3, portalCode: 'hmsw-portal-013' },
//     { portalName: 'Document Management', route: 'document-management', ordinal: 4, portalCode: 'hmsw-portal-003' },
//     { portalName: 'Billing and Finance', route: 'billing-and-finances', ordinal: 5, portalCode: 'hmsw-portal-004' },
//     { portalName: 'Communication', route: 'Communication', ordinal: 6, portalCode: 'hmsw-portal-005' },
//     { portalName: 'Tasks and Reminders', route: 'tasks-and-reminders', ordinal: 7, portalCode: 'hmsw-portal-006' },
//     { portalName: 'Reports and Analytics', route: 'reports-and-analytics', ordinal: 8, portalCode: 'hmsw-portal-007' },
//     { portalName: 'Communication', route: 'communication', ordinal: 8, portalCode: 'hmsw-portal-011' },
//     { portalName: 'User Management', route: 'user-management', ordinal: 9, portalCode: 'hmsw-portal-008' },
//     { portalName: 'Settings', route: 'settings', ordinal: 10, portalCode: 'hmsw-portal-009' }
// ];


// portals are associated with roles
exports.defaultPortals = [
    // Admin
    { portalName: 'Dashboard', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'Dashboard', route: 'Dashboard', ordinal: 1},
    { portalName: 'Case Management', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'CaseManagement', route: 'case-management', ordinal: 2},
    { portalName: 'Client Management', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'ClientManagement', route: 'client-management', ordinal: 3},
    { portalName: 'Document Management', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'DocumentManagement', route: 'document-management', ordinal: 4},
    { portalName: 'Billing and Finance', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'BillingAndFinances', route: 'billing-and-finances', ordinal: 5},
    { portalName: 'Communication', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'Communication', route: 'Communication', ordinal: 6},
    { portalName: 'Tasks and Reminders', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'TasksAndReminders', route: 'tasks-and-reminders', ordinal: 7},
    { portalName: 'Reports and Analytics', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'ReportsAndAnalytics', route: 'reports-and-analytics', ordinal: 8},
    { portalName: 'User Management', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'UserManagement', route: 'user-management', ordinal:9 },
    { portalName: 'Settings', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'UserSettings', route: 'settings', ordinal: 10},

    // Managing Partner
    { portalName: 'Dashboard', roleRefCode: 'HMSW-MGN_PTN-002', portalRoleName: 'Dashboard', route: 'dashboard', ordinal: 1},
    { portalName: 'Case Management', roleRefCode: 'HMSW-MGN_PTN-002', portalRoleName: 'CaseManagement', route: 'case-management', ordinal: 2},
    { portalName: 'Client Management', roleRefCode: 'HMSW-MGN_PTN-002', portalRoleName: 'ClientManagement', route: 'client-management', ordinal: 3},
    { portalName: 'Document Management', roleRefCode: 'HMSW-MGN_PTN-002', portalRoleName: 'DocumentManagement', route: 'document-management', ordinal: 4},
    { portalName: 'Billing and Finance', roleRefCode: 'HMSW-MGN_PTN-002', portalRoleName: 'BillingAndFinances', route: 'billing-and-finances', ordinal: 5},
    { portalName: 'Tasks and Reminders', roleRefCode: 'HMSW-MGN_PTN-002', portalRoleName: 'TasksAndReminders', route: 'tasks-and-reminders', ordinal: 6},
    { portalName: 'Reports and Analytics', roleRefCode: 'HMSW-MGN_PTN-002', portalRoleName: 'ReportsAndAnalytics', route: 'reports-and-analytics', ordinal: 7},
    { portalName: 'Communication', roleRefCode: 'HMSW-MGN_PTN-002', portalRoleName: 'Communication', route: 'communication', ordinal: 8},
    { portalName: 'Settings', roleRefCode: 'HMSW-MGN_PTN-002', portalRoleName: 'UserSettings', route: 'settings', ordinal: 9},

    // Associate
    { portalName: 'Dashboard', roleRefCode: 'HMSW-ASS-003', portalRoleName: 'Dashboard', route: 'dashboard', ordinal: 1},
    { portalName: 'Case Management', roleRefCode: 'HMSW-ASS-003', portalRoleName: 'CaseManagement', route: 'case-management', ordinal: 2},
    { portalName: 'Client Management', roleRefCode: 'HMSW-ASS-003', portalRoleName: 'ClientManagement', route: 'client-management', ordinal: 3},
    { portalName: 'Document Management', roleRefCode: 'HMSW-ASS-003', portalRoleName: 'DocumentManagement', route: 'document-management', ordinal: 4},
    { portalName: 'Billing and Finance', roleRefCode: 'HMSW-ASS-003', portalRoleName: 'BillingAndFinances', route: 'billing-and-finances', ordinal: 5},
    { portalName: 'Tasks and Reminders', roleRefCode: 'HMSW-ASS-003', portalRoleName: 'TasksAndReminders', route: 'tasks-and-reminders', ordinal: 6},
    { portalName: 'Reports and Analytics', roleRefCode: 'HMSW-ASS-003', portalRoleName: 'ReportsAndAnalytics', route: 'reports-and-analytics', ordinal: 7},
    { portalName: 'Communication', roleRefCode: 'HMSW-ASS-003', portalRoleName: 'Communication', route: 'communication', ordinal: 8},
    { portalName: 'Settings', roleRefCode: 'HMSW-ASS-003', portalRoleName: 'UserSettings', route: 'settings', ordinal: 9},


    // client
    { portalName: 'Dashboard', roleRefCode: 'HMSW-CLI-0115', portalRoleName: 'Dashboard', route: 'dashboard', ordinal: 1},
    { portalName: 'Case Status', roleRefCode: 'HMSW-CLI-0115', portalRoleName: 'CaseStatus', route: 'case-status', ordinal: 2},
    { portalName: 'Documents', roleRefCode: 'HMSW-CLI-0115', portalRoleName: 'Documents', route: 'documents', ordinal: 3},
    { portalName: 'Billing and Finance', roleRefCode: 'HMSW-CLI-0115', portalRoleName: 'BillingAndFinances', route: 'billing-and-finances', ordinal: 4},
    { portalName: 'Communication', roleRefCode: 'HMSW-CLI-0115', portalRoleName: 'Communication', route: 'communication', ordinal: 5},
    { portalName: 'Settings', roleRefCode: 'HMSW-CLI-0115', portalRoleName: 'Settings', route: 'settings', ordinal: 6},
];

  

exports.defaultDashboardSections = [
    // Admin
    {
        sectionName: 'AdminKeyMetrics',
        sectionCode: 'HMSW-ADM-SC1',
        roleRefCode:'HMSW-ADM-001',
        ordinal: 1
    },
    {
        sectionName: 'AdminActivitiesMetrics',
        sectionCode: 'HMSW-ADM-SC2',
        roleRefCode:'HMSW-ADM-001',
        ordinal: 2
    },
    {
        sectionName: 'AdminEmployeeMetrics',
        sectionCode: 'HMSW-ADM-SC3',
        roleRefCode:'HMSW-ADM-001',
        ordinal: 3
    },
    {
        sectionName: 'AdminClientMetrics',
        sectionCode: 'HMSW-ADM-SC4',
        roleRefCode:'HMSW-ADM-001',
        ordinal: 4
    },

    // Associate
    {
        sectionName: 'AssociateKeyMetrics',
        sectionCode: 'HMSW-ASS-SC1',
        roleRefCode:'HMSW-ASS-003',
        ordinal: 1
    },
    {
        sectionName: 'AssociateActivitiesMetrics',
        sectionCode: 'HMSW-ASS-SC2',
        roleRefCode:'HMSW-ASS-003',
        ordinal: 2
    },
    {
        sectionName: 'AssociateClientKeyMetrics',
        sectionCode: 'HMSW-ASS-SC3',
        roleRefCode:'HMSW-ASS-003',
        ordinal: 3
    },
    {
        sectionName: 'AssociateClientKeyMetrics',
        sectionCode: 'HMSW-ASS-SC4',
        roleRefCode:'HMSW-ASS-003',
        ordinal: 4
    },
]

exports.defaultDashboardSectionWidgets = [
    {
        widgetName: 'Spending Summary',
        sectionWidgetName: 'AdminSpendingSummary',
        sectionCode: 'HMSW-ADM-SC1',
        widgetDimension: '{xs={12} sm={12} md={6}}',
        ordinal: 1,
        widgetComponentName: 'spendingSummary'
    },
    {
        widgetName: 'New Case',
        sectionWidgetName: 'AdminNewCase',
        sectionCode: 'HMSW-ADM-SC1',
        widgetDimension: '{xs={6} sm={6} md={3}}',
        ordinal: 2,
        widgetComponentName: 'newCase'
    },
    {
        widgetName: 'Active Cases',
        sectionWidgetName: 'AdminActiveCases',
        sectionCode: 'HMSW-ADM-SC1',
        widgetDimension: '{xs={6} sm={6} md={3}}',
        ordinal: 3,
        widgetComponentName: 'activeCases'
    },
    {
        widgetName: 'Outstanding Tasks and Assignments',
        sectionWidgetName: 'AdminOutstandingTasksAndAssignments',
        sectionCode: 'HMSW-ADM-SC2',
        widgetDimension: '{xs={12} sm={12} md={4}}',
        ordinal: 1,
        widgetComponentName: 'outstandingTasksAndAssignments'
    },
    {
        widgetName: 'Recent Activities',
        sectionWidgetName: 'AdminRecentActivities',
        sectionCode: 'HMSW-ADM-SC2',
        widgetDimension: '{xs={6} sm={6} md={4}}',
        ordinal: 2,
        widgetComponentName: 'recentActivities'
    },
    {
        widgetName: 'Appointments',
        sectionWidgetName: 'AdminAppointments',
        sectionCode: 'HMSW-ADM-SC2',
        widgetDimension: '{xs={6} sm={6} md={4}}',
        ordinal: 3,
        widgetComponentName: 'appointments'
    },
    {
        widgetName: 'Employees Reports',
        sectionWidgetName: 'AdminEmployeesReports',
        sectionCode: 'HMSW-ADM-SC3',
        widgetDimension: '{xs={6} sm={6} md={6}}',
        ordinal: 1,
        widgetComponentName: 'employeesReports'
    },
    {
        widgetName: 'Something Here',
        sectionWidgetName: 'AdminSomethingHere',
        sectionCode: 'HMSW-ADM-SC3',
        widgetDimension: '{xs={6} sm={6} md={6}}',
        ordinal: 2,
        widgetComponentName: 'somethingHere'
    },
    {
        widgetName: 'Client Reports',
        sectionWidgetName: 'AdminClientReports',
        sectionCode: 'HMSW-ADM-SC4',
        widgetDimension: '{xs={6} sm={6} md={6}}',
        ordinal: 1,
        widgetComponentName: 'clientReports'
    },
    {
        widgetName: 'Pending Client Payment',
        sectionWidgetName: 'AdminPendingClientPayment',
        sectionCode: 'HMSW-ADM-SC4',
        widgetDimension: '{xs={6} sm={6} md={6}}',
        ordinal: 2,
        widgetComponentName: 'pendingClientPayment'
    },
    {
        widgetName: 'something',
        sectionWidgetName: 'AssociateSomething',
        sectionCode: 'HMSW-ASS-SC1',
        widgetDimension: '{xs={6} sm={6} md={3}}',
        ordinal: 1,
        widgetComponentName: 'something'
    },
    {
        widgetName: 'New Case',
        sectionWidgetName: 'AssociateNewCase',
        sectionCode: 'HMSW-ASS-SC1',
        widgetDimension: '{xs={6} sm={6} md={3}}',
        ordinal: 2,
        widgetComponentName: 'newCase'
    },
    {
        widgetName: 'Active Cases',
        sectionWidgetName: 'AssociateActiveCases',
        sectionCode: 'HMSW-ASS-SC1',
        widgetDimension: '{xs={6} sm={6} md={3}}',
        ordinal: 3,
        widgetComponentName: 'activeCases'
    },
    {
        widgetName: 'Something Cases',
        sectionWidgetName: 'AssociateSomething',
        sectionCode: 'HMSW-ASS-SC1',
        widgetDimension: '{xs={6} sm={6} md={3}}',
        ordinal: 4,
        widgetComponentName: 'somethingCases'
    },
    {
        widgetName: 'Outstanding Tasks and Assignments',
        sectionWidgetName: 'AssociateOutstandingTasksAndAssignments',
        sectionCode: 'HMSW-ASS-SC2',
        widgetDimension: '{xs={12} sm={12} md={4}}',
        ordinal: 1,
        widgetComponentName: 'outstandingTasksAndAssignments'
    },
    {
        widgetName: 'Recent Activities',
        sectionWidgetName: 'AssociateRecentActivities',
        sectionCode: 'HMSW-ASS-SC2',
        widgetDimension: '{xs={6} sm={6} md={4}}',
        ordinal: 2,
        widgetComponentName: 'recentActivities'
    },
    {
        widgetName: 'Appointments',
        sectionWidgetName: 'AssociateAppointments',
        sectionCode: 'HMSW-ASS-SC2',
        widgetDimension: '{xs={6} sm={6} md={4}}',
        ordinal: 3,
        widgetComponentName: 'appointments'
    },
    {
        widgetName: 'Something Here',
        sectionWidgetName: 'AssociateEmployeesReports',
        sectionCode: 'HMSW-ASS-SC3',
        widgetDimension: '{xs={6} sm={6} md={6}}',
        ordinal: 1,
        widgetComponentName: 'somethingHere'
    },
    {
        widgetName: 'Recent Communication',
        sectionWidgetName: 'AssociateSomethingHere',
        sectionCode: 'HMSW-ASS-SC3',
        widgetDimension: '{xs={6} sm={6} md={6}}',
        ordinal: 2,
        widgetComponentName: 'recentCommunication'
    },
    {
        widgetName: 'Client Reports',
        sectionWidgetName: 'AssociateClientReports',
        sectionCode: 'HMSW-ASS-SC4',
        widgetDimension: '{xs={6} sm={6} md={6}}',
        ordinal: 1,
        widgetComponentName: 'clientReports'
    },
    {
        widgetName: 'Pending Client Payment',
        sectionWidgetName: 'AssociatePendingClientPayment',
        sectionCode: 'HMSW-ASS-SC4',
        widgetDimension: '{xs={6} sm={6} md={6}}',
        ordinal: 2,
        widgetComponentName: 'pendingClientPayment'
    }
]

exports.defaultPermissionTypes = [
    { "permissionType": "Dashboard", "permissionTypeName": "Dashboard", "permissionTypeCode": "HMSW_PERM_TYPE_DASH" },
    { "permissionType": "CaseManagement", "permissionTypeName": "Case Management", "permissionTypeCode": "HMSW_PERM_TYPE_CASE_MGNT" },
    { "permissionType": "ClientManagement", "permissionTypeName": "Client Management", "permissionTypeCode": "HMSW_PERM_TYPE_CLT_MGNT" },
    { "permissionType": "DocumentManagement", "permissionTypeName": "Document Management", "permissionTypeCode": "HMSW_PERM_TYPE_DOC_MGNT" },
    { "permissionType": "BillingAndFinance", "permissionTypeName": "Billing And Finance", "permissionTypeCode": "HMSW_PERM_TYPE_BILL_FIN" },
    { "permissionType": "Communication", "permissionTypeName": "Communication", "permissionTypeCode": "HMSW_PERM_TYPE_COMM" },
    { "permissionType": "TasksAndReminders", "permissionTypeName": "Tasks And Reminders", "permissionTypeCode": "HMSW_PERM_TYPE_TASK_REM" },
    { "permissionType": "ReportsAndAnalytics", "permissionTypeName": "Reports And Analytics", "permissionTypeCode": "HMSW_PERM_TYPE_RPT_ANL" },
    { "permissionType": "UserManagement", "permissionTypeName": "User Management", "permissionTypeCode": "HMSW_PERM_TYPE_USER_MGNT" },
    { "permissionType": "Settings", "permissionTypeName": "Settings", "permissionTypeCode": "HMSW_PERM_TYPE_SETT" },
    { "permissionType": "CaseStatus", "permissionTypeName": "CaseStatus", "permissionTypeCode": "HMSW_PERM_TYPE_CASE_STAT" },
    { "permissionType": "Documents", "permissionTypeName": "Documents", "permissionTypeCode": "HMSW_PERM_TYPE_DOC" }
]


// Give the different types of permissions their permissions
[
    { "permission": "full_access", "permissionCode": "HMSW_PERM_1", "permissionTypeCode": "" },
    { "permission": "user_management", "permissionCode": "HMSW_PERM_2", "permissionTypeCode": "" },
    { "permission": "access_all_case_files", "permissionCode": "HMSW_PERM_3", "permissionTypeCode": "" },
    { "permission": "generate_view_all_reports", "permissionCode": "HMSW_PERM_4", "permissionTypeCode": "" },
    { "permission": "system_configuration", "permissionCode": "HMSW_PERM_5", "permissionTypeCode": "" },
    { "permission": "create_record", "permissionCode": "HMSW_PERM_6", "permissionTypeCode": "" },
    { "permission": "read_record", "permissionCode": "HMSW_PERM_7", "permissionTypeCode": "" },
    { "permission": "update_record", "permissionCode": "HMSW_PERM_8", "permissionTypeCode": "" },
    { "permission": "delete_record", "permissionCode": "HMSW_PERM_9", "permissionTypeCode": "" }
  ]
  

  exports.companyProfile  = [
    {
        companyName: 'HemsWay',
        companyLogo: '',
        companyAddress: '1 main Street ',
        companyPhoneNumber: '1234567890',
        companyEmail: 'company@company.com',
        companyId: 'A0947',
        companyConfig: {
            colors: {}
        }
    }
  ]


