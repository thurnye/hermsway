export const getRandomInt = () => {
  return Math.floor(Math.random() * 500000000000);
};

export const roleCodes = {
  admin: 'hmsw-ADM-001',
  managingPartner: 'hmsw-MGNPTNR-002',
  associate: 'hmsw-ASS-003',
  paralegal: 'hmsw-PAL-004',
  client: 'hmsw-CLI-005',
};

export const roles = [
  { label: 'Admin', value: 'admin', rolesCode: 'hmsw-ADM-001' },
  { label: 'Managing Partner', value: 'managingPartner', rolesCode: 'hmsw-MGNPTNR-002' },
  { label: 'Senior Lawyer', value: 'seniorLawyer', rolesCode: 'hmsw-ASS-003' },
  { label: 'Associate Lawyer', value: 'associate', rolesCode: 'hmsw-ASS-003' },
  { label: 'Paralegal', value: 'paralegal', rolesCode: 'hmsw-PAL-004' },
];

export const portalsLinks = {
  Dashboard: 'Dashboard',
  CaseManagement: 'case-management',
  ClientManagement: 'client-management',
  DocumentManagement: 'document-management',
  BillingAndFinance: 'billing-and-finances',
  Communication: 'Communication',
  TasksAndReminders: 'tasks-and-reminders',
  ReportsAndAnalytics: 'reports-and-analytics',
  UserManagement: 'user-management',
  Settings: 'settings',
  CaseStatus: 'case-status',
  Documents: 'documents',
};


export const allPortals = [
    {
      permissionType: 'Dashboard',
      permissionTypeName: 'Dashboard',
      permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
    },
    {
      permissionType: 'CaseManagement',
      permissionTypeName: 'Case Management',
      permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
    },
    {
      permissionType: 'ClientManagement',
      permissionTypeName: 'Client Management',
      permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
    },
    {
      permissionType: 'DocumentManagement',
      permissionTypeName: 'Document Management',
      permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
    },
    {
      permissionType: 'BillingAndFinance',
      permissionTypeName: 'Billing And Finance',
      permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
    },
    {
      permissionType: 'Communication',
      permissionTypeName: 'Communication',
      permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
    },
    {
      permissionType: 'TasksAndReminders',
      permissionTypeName: 'Tasks And Reminders',
      permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
    },
    {
      permissionType: 'ReportsAndAnalytics',
      permissionTypeName: 'Reports And Analytics',
      permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
    },
    {
      permissionType: 'UserManagement',
      permissionTypeName: 'User Management',
      permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
    },
    {
      permissionType: 'Settings',
      permissionTypeName: 'Settings',
      permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
    },
    {
      permissionType: 'CaseStatus',
      permissionTypeName: 'CaseStatus',
      permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
    },
    {
      permissionType: 'Documents',
      permissionTypeName: 'Documents',
      permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
    },
  ];

export const dashboardSections = {
  generalMetrics: [
    {
      widgetName: 'Total Client',
      sectionCode: 'HMSW-Met-Gen',
      widgetComponentName: 'totalClients',
    },
    {
      widgetName: 'Spending Summary',
      sectionCode: 'HMSW-Met-Gen',
      widgetComponentName: 'spendingSummary',
    },
    {
      widgetName: 'New Case',
      sectionCode: 'HMSW-Met-Gen',
      widgetComponentName: 'newCase',
    },
    {
      widgetName: 'Active Cases',
      sectionCode: 'HMSW-Met-Gen',
      widgetComponentName: 'activeCases',
    },
    {
      widgetName: 'UnAssigned Cases',
      sectionCode: 'HMSW-Met-Gen',
      widgetComponentName: 'unassignedCases',
    },
  ],
  activitiesMetrics: [
    {
      widgetName: 'Outstanding Tasks',
      sectionCode: 'HMSW-Met-Avt',
      widgetComponentName: 'outstandingTasks',
    },
    // {
    //   widgetName: 'Recent Activities',
    //   sectionCode: 'HMSW-Met-Avt',
    // },
    {
      widgetName: 'Appointments',
      sectionCode: 'HMSW-Met-Avt',
      widgetComponentName: 'appointments',
    },
  ],
  employeeMetrics: [
    {
      widgetName: 'Case Load Distribution',
      sectionCode: 'HMSW-Met-Emp',
      widgetComponentName: 'caseLoadDistribution',
    },
    {
      widgetName: 'Cases Wins and Losses',
      sectionCode: 'HMSW-Met-Emp',
      widgetComponentName: 'casesWinAndLoss',
    },
  ],
  // teamMetrics: [
  //   {
  //     widgetName: 'Team Reports',
  //     sectionCode: 'HMSW-Met-Team',
  //   },
  //   {
  //     widgetName: 'Something Here',
  //     sectionCode: 'HMSW-Met-Team',
  //   },
  // ],
  clientMetrics: [
    {
      widgetName: 'OutCome Trends',
      sectionCode: 'HMSW-Met-Clt',
      widgetComponentName: 'outcomeTrends',
    },
    {
      widgetName: 'Client Satisfaction',
      sectionCode: 'HMSW-Met-Clt',
      widgetComponentName: 'clientSatisfaction',
    },
    {
      widgetName: 'Client Filing',
      sectionCode: 'HMSW-Met-Clt',
      widgetComponentName: 'clientFiling',
    },
    {
      widgetName: 'Client Demographics',
      sectionCode: 'HMSW-Met-Clt',
      widgetComponentName: 'clientDemographics',
    },
    {
      widgetName: 'Client and Cases',
      sectionCode: 'HMSW-Met-Clt',
      widgetComponentName: 'clientAndCases',
    },
  ],
};
