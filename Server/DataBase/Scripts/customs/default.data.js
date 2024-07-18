
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

    { portalName: 'Dashboard', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminDashboard', route: 'Dashboard', ordinal: 1},
    { portalName: 'Case Management', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminCaseManagement', route: 'case-management', ordinal: 2},
    { portalName: 'Client Management', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminClientManagement', route: 'client-management', ordinal: 3},
    { portalName: 'Document Management', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminDocumentManagement', route: 'document-management', ordinal: 4},
    { portalName: 'Billing and Finance', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminBillingAndFinances', route: 'billing-and-finances', ordinal: 5},
    { portalName: 'Communication', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminCommunication', route: 'Communication', ordinal: 6},
    { portalName: 'Tasks and Reminders', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminTasksAndReminders', route: 'tasks-and-reminders', ordinal: 7},
    { portalName: 'Reports and Analytics', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminReportsAndAnalytics', route: 'reports-and-analytics', ordinal: 8},
    { portalName: 'User Management', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminUserManagement', route: 'user-management', ordinal:9 },
    { portalName: 'Settings', roleRefCode: 'HMSW-ADM-001', portalRoleName: 'AdminUserSettings', route: 'settings', ordinal: 10},


    { portalName: 'Dashboard', roleRefCode: 'HMSW-ASS-002', portalRoleName: 'AssociateDashboard', route: 'dashboard', ordinal: 1},
    { portalName: 'Case Management', roleRefCode: 'HMSW-ASS-002', portalRoleName: 'AssociateCaseManagement', route: 'case-management', ordinal: 2},
    { portalName: 'Client Management', roleRefCode: 'HMSW-ASS-002', portalRoleName: 'AssociateClientManagement', route: 'client-management', ordinal: 3},
    { portalName: 'Document Management', roleRefCode: 'HMSW-ASS-002', portalRoleName: 'AssociateDocumentManagement', route: 'document-management', ordinal: 4},
    { portalName: 'Billing and Finance', roleRefCode: 'HMSW-ASS-002', portalRoleName: 'AssociateBillingAndFinances', route: 'billing-and-finances', ordinal: 5},
    { portalName: 'Tasks and Reminders', roleRefCode: 'HMSW-ASS-002', portalRoleName: 'AssociateTasksAndReminders', route: 'tasks-and-reminders', ordinal: 6},
    { portalName: 'Reports and Analytics', roleRefCode: 'HMSW-ASS-002', portalRoleName: 'AssociateReportsAndAnalytics', route: 'reports-and-analytics', ordinal: 7},
    { portalName: 'Communication', roleRefCode: 'Admin', portalRoleName: 'AdminCommunication', route: 'communication', ordinal: 8},
    { portalName: 'Settings', roleRefCode: 'Admin', portalRoleName: 'AdminUserSettings', route: 'settings', ordinal: 9},


    { portalName: 'Dashboard', roleRefCode: 'HMSW-CLI-003', portalRoleName: 'ClientDashboard', route: 'dashboard', ordinal: 1},
    { portalName: 'Case Status', roleRefCode: 'HMSW-CLI-003', portalRoleName: 'ClientCaseStatus', route: 'case-status', ordinal: 2},
    { portalName: 'Documents', roleRefCode: 'HMSW-CLI-003', portalRoleName: 'ClientDocuments', route: 'documents', ordinal: 3},
    { portalName: 'Billing and Finance', roleRefCode: 'HMSW-CLI-003', portalRoleName: 'ClientBillingAndFinances', route: 'billing-and-finances', ordinal: 4},
    { portalName: 'Communication', roleRefCode: 'HMSW-CLI-003', portalRoleName: 'ClientCommunication', route: 'communication', ordinal: 5},
    { portalName: 'Settings', roleRefCode: 'HMSW-CLI-003', portalRoleName: 'ClientSettings', route: 'settings', ordinal: 6},
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
        roleRefCode:'HMSW-ASS-002',
        ordinal: 1
    },
    {
        sectionName: 'AssociateActivitiesMetrics',
        sectionCode: 'HMSW-ASS-SC2',
        roleRefCode:'HMSW-ASS-002',
        ordinal: 2
    },
    {
        sectionName: 'AssociateClientKeyMetrics',
        sectionCode: 'HMSW-ASS-SC3',
        roleRefCode:'HMSW-ASS-002',
        ordinal: 3
    },
    {
        sectionName: 'AssociateClientKeyMetrics',
        sectionCode: 'HMSW-ASS-SC4',
        roleRefCode:'HMSW-ASS-002',
        ordinal: 4
    },
]

exports.defaultDashboardSectionWidgets = [
    // Admin
    {
        widgetName: 'Spending Summary',
        sectionWidgetName: 'AdminSpendingSummary',
        sectionCode: 'HMSW-ADM-SC1',
        widgetDimension: '{xs={12} sm={12} md={6}}',
        ordinal: 1
    },
    {
        widgetName: 'New Case',
        sectionWidgetName: 'AdminNewCase',
        sectionCode: 'HMSW-ADM-SC1',
        widgetDimension: '{xs={6} sm={6} md={3}}',
        ordinal: 2
    },
    {
        widgetName: 'Active Cases',
        sectionWidgetName: 'AdminActiveCases',
        sectionCode: 'HMSW-ADM-SC1',
        widgetDimension: '{xs={6} sm={6} md={3}}',
        ordinal: 3
    },
    {
        widgetName: 'Outstanding Tasks and Assignments',
        sectionWidgetName: 'AdminOutstandingTasksAndAssignments',
        sectionCode: 'HMSW-ADM-SC2',
        widgetDimension: '{xs={12} sm={12} md={4}}',
        ordinal: 1
    },
    {
        widgetName: 'Recent Activities',
        sectionWidgetName: 'AdminRecentActivities',
        sectionCode: 'HMSW-ADM-SC2',
        widgetDimension: '{xs={6} sm={6} md={4}}',
        ordinal: 2
    },
    {
        widgetName: 'Appointments',
        sectionWidgetName: 'AdminAppointments',
        sectionCode: 'HMSW-ADM-SC2',
        widgetDimension: '{xs={6} sm={6} md={4}}',
        ordinal: 3
    },
    {
        widgetName: 'Employees Reports',
        sectionWidgetName: 'AdminEmployeesReports',
        sectionCode: 'HMSW-ADM-SC3',
        widgetDimension: '{xs={6} sm={6} md={6}}',
        ordinal: 1
    },
    {
        widgetName: 'Something Here',
        sectionWidgetName: 'AdminSomethingHere',
        sectionCode: 'HMSW-ADM-SC3',
        widgetDimension: '{xs={6} sm={6} md={6}}',
        ordinal: 2
    },
    {
        widgetName: 'Client Reports',
        sectionWidgetName: 'AdminClientReports',
        sectionCode: 'HMSW-ADM-SC4',
        widgetDimension: '{xs={6} sm={6} md={6}}',
        ordinal: 1
    },
    {
        widgetName: 'Pending Client Payment',
        sectionWidgetName: 'AdminPendingClientPayment',
        sectionCode: 'HMSW-ADM-SC4',
        widgetDimension: '{xs={6} sm={6} md={6}}',
        ordinal: 2
    },
    // Associate
    {
        widgetName: 'something',
        sectionWidgetName: 'AssociateSomething',
        sectionCode: 'HMSW-ASS-SC1',
        widgetDimension: '{xs={6} sm={6} md={3}}',
        ordinal: 1
    },
    {
        widgetName: 'New Case',
        sectionWidgetName: 'AssociateNewCase',
        sectionCode: 'HMSW-ASS-SC1',
        widgetDimension: '{xs={6} sm={6} md={3}}',
        ordinal: 2
    },
    {
        widgetName: 'Active Cases',
        sectionWidgetName: 'AssociateActiveCases',
        sectionCode: 'HMSW-ASS-SC1',
        widgetDimension: '{xs={6} sm={6} md={3}}',
        ordinal: 3
    },
    {
        widgetName: 'Something Cases',
        sectionWidgetName: 'AssociateSomething',
        sectionCode: 'HMSW-ASS-SC1',
        widgetDimension: '{xs={6} sm={6} md={3}}',
        ordinal: 4
    },
    {
        widgetName: 'Outstanding Tasks and Assignments',
        sectionWidgetName: 'AssociateOutstandingTasksAndAssignments',
        sectionCode: 'HMSW-ASS-SC2',
        widgetDimension: '{xs={12} sm={12} md={4}}',
        ordinal: 1
    },
    {
        widgetName: 'Recent Activities',
        sectionWidgetName: 'AssociateRecentActivities',
        sectionCode: 'HMSW-ASS-SC2',
        widgetDimension: '{xs={6} sm={6} md={4}}',
        ordinal: 2
    },
    {
        widgetName: 'Appointments',
        sectionWidgetName: 'AssociateAppointments',
        sectionCode: 'HMSW-ASS-SC2',
        widgetDimension: '{xs={6} sm={6} md={4}}',
        ordinal: 3
    },
    {
        widgetName: 'Something Here',
        sectionWidgetName: 'AssociateEmployeesReports',
        sectionCode: 'HMSW-ASS-SC3',
        widgetDimension: '{xs={6} sm={6} md={6}}',
        ordinal: 1
    },
    {
        widgetName: 'Recent Communication',
        sectionWidgetName: 'AssociateSomethingHere',
        sectionCode: 'HMSW-ASS-SC3',
        widgetDimension: '{xs={6} sm={6} md={6}}',
        ordinal: 2
    },
    {
        widgetName: 'Client Reports',
        sectionWidgetName: 'AssociateClientReports',
        sectionCode: 'HMSW-ASS-SC4',
        widgetDimension: '{xs={6} sm={6} md={6}}',
        ordinal: 1
    },
    {
        widgetName: 'Pending Client Payment',
        sectionWidgetName: 'AssociatePendingClientPayment',
        sectionCode: 'HMSW-ASS-SC4',
        widgetDimension: '{xs={6} sm={6} md={6}}',
        ordinal: 2
    },
]
