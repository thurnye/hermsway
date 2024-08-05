exports.companyProfile = [
  {
    companyName: 'HemsWay',
    companyLogo: '',
    companyAddress: '1 main Street ',
    companyPhoneNumber: '1234567890',
    companyEmail: 'company@company.com',
    companyId: 'A0947',
    companyConfig: {
      colors: {},
    },
  },
];

exports.defaultRoles = [
  { roleName: 'admin', refCode: 'HMSW-ADM-001', role: 'Admin' },
  { roleName: 'managingPartner', refCode: 'HMSW-MGN_PTN-002', role: 'Managing Partner' },
  { roleName: 'associate', refCode: 'HMSW-ASS-003', role: 'Associate' },
  { roleName: 'paralegal', refCode: 'HMSW-PAL-004', role: '' , role: 'Paralegal'},
  { roleName: 'client', refCode: 'HMSW-CLI-0115', role: 'Client' },
];

exports.defaultPortals = [
  {
    portalName: 'Dashboard',
    route: 'dashboard',
    ordinal: 1,
    portalCode: 'hmsw-portal-010',

    permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
  },
  {
    portalName: 'Case Management',
    route: 'case-management',
    ordinal: 2,
    portalCode: 'hmsw-portal-001',

    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
  },
  {
    portalName: 'Case Status',
    route: 'case-status',
    ordinal: 2,
    portalCode: 'hmsw-portal-012',

    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
  },
  {
    portalName: 'Client Management',
    route: 'client-management',
    ordinal: 3,
    portalCode: 'hmsw-portal-002',

    permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
  },
  {
    portalName: 'Documents',
    route: 'documents',
    ordinal: 3,
    portalCode: 'hmsw-portal-013',

    permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
  },
  {
    portalName: 'Document Management',
    route: 'document-management',
    ordinal: 4,
    portalCode: 'hmsw-portal-003',

    permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
  },
  {
    portalName: 'Billing and Finance',
    route: 'billing-and-finances',
    ordinal: 5,
    portalCode: 'hmsw-portal-004',

    permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
  },
  {
    portalName: 'Communication',
    route: 'Communication',
    ordinal: 6,
    portalCode: 'hmsw-portal-005',

    permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
  },
  {
    portalName: 'Tasks and Reminders',
    route: 'tasks-and-reminders',
    ordinal: 7,
    portalCode: 'hmsw-portal-006',

    permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
  },
  {
    portalName: 'Reports and Analytics',
    route: 'reports-and-analytics',
    ordinal: 8,
    portalCode: 'hmsw-portal-007',

    permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
  },
  {
    portalName: 'User Management',
    route: 'user-management',
    ordinal: 9,
    portalCode: 'hmsw-portal-008',

    permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
  },
  {
    portalName: 'Settings',
    route: 'settings',
    ordinal: 10,
    portalCode: 'hmsw-portal-009',

    permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
  },
];

exports.defaultDashboardSections = [
  {
    sectionName: 'generalMetrics',
    sectionCode: 'HMSW-Met-Gen',
    ordinal: 1,
  },
  {
    sectionName: 'activitiesMetrics',
    sectionCode: 'HMSW-Met-Avt',
    ordinal: 2,
  },
  {
    sectionName: 'employeeMetrics',
    sectionCode: 'HMSW-Met-Emp',
    ordinal: 3,
  },
  {
    sectionName: 'teamMetrics',
    sectionCode: 'HMSW-Met-Team',
    ordinal: 4,
  },
  {
    sectionName: 'clientMetrics',
    sectionCode: 'HMSW-Met-Clt',
    ordinal: 5,
  },
];


exports.defaultDashboardSectionWidgets = [
  // generalMetrics
  {
    widgetName: 'Spending Summary',
    sectionCode: 'HMSW-Met-Gen',
    sectionWidgetName: 'generalMetrics_spendingSummary',
    widgetDimension: '{xs={12} sm={12} md={12}',
    ordinal: 1,
    widgetComponentName: 'spendingSummary',
  },
  {
    widgetName: 'New Case',
    sectionCode: 'HMSW-Met-Gen',
    sectionWidgetName: 'generalMetrics_newCase',
    widgetDimension: '{xs={6} sm={6} md={6}',
    ordinal: 2,
    widgetComponentName: 'newCase',
  },
  {
    widgetName: 'Active Cases',
    sectionCode: 'HMSW-Met-Gen',
    sectionWidgetName: 'generalMetrics_activeCases',
    widgetDimension: '{xs={6} sm={6} md={6}',
    ordinal: 3,
    widgetComponentName: 'activeCases',
  },

  //   activitiesMetrics:
  {
    widgetName: 'Outstanding Tasks and Assignments',
    sectionCode: 'HMSW-Met-Avt',
    sectionWidgetName: 'activitiesMetrics_outstandingTasksAndAssignments',
    widgetDimension: '{xs={12} sm={12} md={4}',
    ordinal: 1,
    widgetComponentName: 'outstandingTasksAndAssignments',
  },
  {
    widgetName: 'Recent Activities',
    sectionCode: 'HMSW-Met-Avt',
    sectionWidgetName: 'activitiesMetrics_recentActivities',
    widgetDimension: '{xs={6} sm={6} md={4}',
    ordinal: 2,
    widgetComponentName: 'recentActivities',
  },
  {
    widgetName: 'Appointments',
    sectionCode: 'HMSW-Met-Avt',
    sectionWidgetName: 'activitiesMetrics_appointments',
    widgetDimension: '{xs={6} sm={6} md={4}',
    ordinal: 3,
    widgetComponentName: 'appointments',
  },

  //   employeeMetrics
  {
    widgetName: 'Employees Reports',
    sectionCode: 'HMSW-Met-Emp',
    sectionWidgetName: 'employeeMetrics_employeeReports',
    widgetDimension: '{xs={6} sm={6} md={4}',
    ordinal: 1,
    widgetComponentName: 'employeeReports',
  },
  {
    widgetName: 'Something Here',
    sectionCode: 'HMSW-Met-Emp',
    sectionWidgetName: 'employeeMetrics_somethingHere',
    widgetDimension: '{xs={6} sm={6} md={4}',
    ordinal: 2,
    widgetComponentName: 'somethingHere',
  },

  //   teamMetrics
  {
    widgetName: 'Team Reports',
    sectionCode: 'HMSW-Met-Team',
    sectionWidgetName: 'teamMetrics_teamReports',
    widgetDimension: '{xs={6} sm={6} md={4}',
    ordinal: 1,
    widgetComponentName: 'teamReports',
  },
  {
    widgetName: 'Something Here',
    sectionCode: 'HMSW-Met-Team',
    sectionWidgetName: 'teamMetrics_somethingHere',
    widgetDimension: '{xs={6} sm={6} md={4}',
    ordinal: 2,
    widgetComponentName: 'somethingHere',
  },

  //   clientMetrics
  {
    widgetName: 'Client Reports',
    sectionCode: 'HMSW-Met-Clt',
    sectionWidgetName: 'clientMetrics_clientReports',
    widgetDimension: '{xs={6} sm={6} md={6}',
    ordinal: 1,
    widgetComponentName: 'clientReports',
  },
  {
    widgetName: 'Pending Client Payment',
    sectionCode: 'HMSW-Met-Clt',
    sectionWidgetName: 'clientMetrics_pendingClientPayment',
    widgetDimension: '{xs={6} sm={6} md={6}',
    ordinal: 2,
    widgetComponentName: 'pendingClientPayment',
  },
  {
    widgetName: 'something',
    sectionCode: 'HMSW-Met-Clt',
    sectionWidgetName: 'clientMetrics_somethingHere',
    widgetDimension: '{xs={6} sm={6} md={4}',
    ordinal: 3,
    widgetComponentName: 'somethingHere',
  },
];
