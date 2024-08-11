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




exports.permissions = [
  // Dashboards
  {
    permissionName: 'full_access',
    permissionComponent: 'Dashboard',
    permissionCode: 'HMSW_PERM_1',
    permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
  },
  {
    permissionName: 'user_management',
    permissionComponent: 'Dashboard',
    permissionCode: 'HMSW_PERM_2',
    permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
  },
  {
    permissionName: 'access_all_case_files',
    permissionComponent: 'Dashboard',
    permissionCode: 'HMSW_PERM_3',
    permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
  },
  {
    permissionName: 'generate_view_all_reports',
    permissionComponent: 'Dashboard',
    permissionCode: 'HMSW_PERM_4',
    permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
  },
  {
    permissionName: 'system_configuration',
    permissionComponent: 'Dashboard',
    permissionCode: 'HMSW_PERM_5',
    permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
  },
  {
    permissionName: 'create_record',
    permissionComponent: 'Dashboard',
    permissionCode: 'HMSW_PERM_6',
    permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
  },
  {
    permissionName: 'read_record',
    permissionComponent: 'Dashboard',
    permissionCode: 'HMSW_PERM_7',
    permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
  },
  {
    permissionName: 'update_record',
    permissionComponent: 'Dashboard',
    permissionCode: 'HMSW_PERM_8',
    permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
  },
  {
    permissionName: 'delete_record',
    permissionComponent: 'Dashboard',
    permissionCode: 'HMSW_PERM_9',
    permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
  },

  // CaseManagement

  {
    permissionName: 'full_access',
    permissionComponent: 'CaseManagement',
    permissionCode: 'HMSW_PERM_1',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
  },
  {
    permissionName: 'user_management',
    permissionComponent: 'CaseManagement',
    permissionCode: 'HMSW_PERM_2',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
  },
  {
    permissionName: 'access_all_case_files',
    permissionComponent: 'CaseManagement',
    permissionCode: 'HMSW_PERM_3',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
  },
  {
    permissionName: 'generate_view_all_reports',
    permissionComponent: 'CaseManagement',
    permissionCode: 'HMSW_PERM_4',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
  },
  {
    permissionName: 'system_configuration',
    permissionComponent: 'CaseManagement',
    permissionCode: 'HMSW_PERM_5',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
  },
  {
    permissionName: 'create_record',
    permissionComponent: 'CaseManagement',
    permissionCode: 'HMSW_PERM_6',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
  },
  {
    permissionName: 'read_record',
    permissionComponent: 'CaseManagement',
    permissionCode: 'HMSW_PERM_7',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
  },
  {
    permissionName: 'update_record',
    permissionComponent: 'CaseManagement',
    permissionCode: 'HMSW_PERM_8',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
  },
  {
    permissionName: 'delete_record',
    permissionComponent: 'CaseManagement',
    permissionCode: 'HMSW_PERM_9',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
  },

  //   ClientManagement

  {
    permissionName: 'full_access',
    permissionComponent: 'ClientManagement',
    permissionCode: 'HMSW_PERM_1',
    permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
  },
  {
    permissionName: 'user_management',
    permissionComponent: 'ClientManagement',
    permissionCode: 'HMSW_PERM_2',
    permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
  },
  {
    permissionName: 'access_all_case_files',
    permissionComponent: 'ClientManagement',
    permissionCode: 'HMSW_PERM_3',
    permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
  },
  {
    permissionName: 'generate_view_all_reports',
    permissionComponent: 'ClientManagement',
    permissionCode: 'HMSW_PERM_4',
    permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
  },
  {
    permissionName: 'system_configuration',
    permissionComponent: 'ClientManagement',
    permissionCode: 'HMSW_PERM_5',
    permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
  },
  {
    permissionName: 'create_record',
    permissionComponent: 'ClientManagement',
    permissionCode: 'HMSW_PERM_6',
    permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
  },
  {
    permissionName: 'read_record',
    permissionComponent: 'ClientManagement',
    permissionCode: 'HMSW_PERM_7',
    permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
  },
  {
    permissionName: 'update_record',
    permissionComponent: 'ClientManagement',
    permissionCode: 'HMSW_PERM_8',
    permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
  },
  {
    permissionName: 'delete_record',
    permissionComponent: 'ClientManagement',
    permissionCode: 'HMSW_PERM_9',
    permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
  },

  // DocumentManagement

  {
    permissionName: 'full_access',
    permissionComponent: 'DocumentManagement',
    permissionCode: 'HMSW_PERM_1',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
  },
  {
    permissionName: 'user_management',
    permissionComponent: 'DocumentManagement',
    permissionCode: 'HMSW_PERM_2',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
  },
  {
    permissionName: 'access_all_case_files',
    permissionComponent: 'DocumentManagement',
    permissionCode: 'HMSW_PERM_3',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
  },
  {
    permissionName: 'generate_view_all_reports',
    permissionComponent: 'DocumentManagement',
    permissionCode: 'HMSW_PERM_4',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
  },
  {
    permissionName: 'system_configuration',
    permissionComponent: 'DocumentManagement',
    permissionCode: 'HMSW_PERM_5',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
  },
  {
    permissionName: 'create_record',
    permissionComponent: 'DocumentManagement',
    permissionCode: 'HMSW_PERM_6',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
  },
  {
    permissionName: 'read_record',
    permissionComponent: 'DocumentManagement',
    permissionCode: 'HMSW_PERM_7',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
  },
  {
    permissionName: 'update_record',
    permissionComponent: 'DocumentManagement',
    permissionCode: 'HMSW_PERM_8',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
  },
  {
    permissionName: 'delete_record',
    permissionComponent: 'DocumentManagement',
    permissionCode: 'HMSW_PERM_9',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
  },

  // BillingAndFinance

  {
    permissionName: 'full_access',
    permissionComponent: 'BillingAndFinance',
    permissionCode: 'HMSW_PERM_1',
    permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
  },
  {
    permissionName: 'user_management',
    permissionComponent: 'BillingAndFinance',
    permissionCode: 'HMSW_PERM_2',
    permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
  },
  {
    permissionName: 'access_all_case_files',
    permissionComponent: 'BillingAndFinance',
    permissionCode: 'HMSW_PERM_3',
    permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
  },
  {
    permissionName: 'generate_view_all_reports',
    permissionComponent: 'BillingAndFinance',
    permissionCode: 'HMSW_PERM_4',
    permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
  },
  {
    permissionName: 'system_configuration',
    permissionComponent: 'BillingAndFinance',
    permissionCode: 'HMSW_PERM_5',
    permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
  },
  {
    permissionName: 'create_record',
    permissionComponent: 'BillingAndFinance',
    permissionCode: 'HMSW_PERM_6',
    permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
  },
  {
    permissionName: 'read_record',
    permissionComponent: 'BillingAndFinance',
    permissionCode: 'HMSW_PERM_7',
    permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
  },
  {
    permissionName: 'update_record',
    permissionComponent: 'BillingAndFinance',
    permissionCode: 'HMSW_PERM_8',
    permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
  },
  {
    permissionName: 'delete_record',
    permissionComponent: 'BillingAndFinance',
    permissionCode: 'HMSW_PERM_9',
    permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
  },

  // Communication

  {
    permissionName: 'full_access',
    permissionComponent: 'Communication',
    permissionCode: 'HMSW_PERM_1',
    permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
  },
  {
    permissionName: 'user_management',
    permissionComponent: 'Communication',
    permissionCode: 'HMSW_PERM_2',
    permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
  },
  {
    permissionName: 'access_all_case_files',
    permissionComponent: 'Communication',
    permissionCode: 'HMSW_PERM_3',
    permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
  },
  {
    permissionName: 'generate_view_all_reports',
    permissionComponent: 'Communication',
    permissionCode: 'HMSW_PERM_4',
    permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
  },
  {
    permissionName: 'system_configuration',
    permissionComponent: 'Communication',
    permissionCode: 'HMSW_PERM_5',
    permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
  },
  {
    permissionName: 'create_record',
    permissionComponent: 'Communication',
    permissionCode: 'HMSW_PERM_6',
    permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
  },
  {
    permissionName: 'read_record',
    permissionComponent: 'Communication',
    permissionCode: 'HMSW_PERM_7',
    permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
  },
  {
    permissionName: 'update_record',
    permissionComponent: 'Communication',
    permissionCode: 'HMSW_PERM_8',
    permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
  },
  {
    permissionName: 'delete_record',
    permissionComponent: 'Communication',
    permissionCode: 'HMSW_PERM_9',
    permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
  },

  // TasksAndReminders

  {
    permissionName: 'full_access',
    permissionComponent: 'TasksAndReminders',
    permissionCode: 'HMSW_PERM_1',
    permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
  },
  {
    permissionName: 'user_management',
    permissionComponent: 'TasksAndReminders',
    permissionCode: 'HMSW_PERM_2',
    permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
  },
  {
    permissionName: 'access_all_case_files',
    permissionComponent: 'TasksAndReminders',
    permissionCode: 'HMSW_PERM_3',
    permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
  },
  {
    permissionName: 'generate_view_all_reports',
    permissionComponent: 'TasksAndReminders',
    permissionCode: 'HMSW_PERM_4',
    permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
  },
  {
    permissionName: 'system_configuration',
    permissionComponent: 'TasksAndReminders',
    permissionCode: 'HMSW_PERM_5',
    permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
  },
  {
    permissionName: 'create_record',
    permissionComponent: 'TasksAndReminders',
    permissionCode: 'HMSW_PERM_6',
    permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
  },
  {
    permissionName: 'read_record',
    permissionComponent: 'TasksAndReminders',
    permissionCode: 'HMSW_PERM_7',
    permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
  },
  {
    permissionName: 'update_record',
    permissionComponent: 'TasksAndReminders',
    permissionCode: 'HMSW_PERM_8',
    permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
  },
  {
    permissionName: 'delete_record',
    permissionComponent: 'TasksAndReminders',
    permissionCode: 'HMSW_PERM_9',
    permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
  },

  // ReportsAndAnalytics

  {
    permissionName: 'full_access',
    permissionComponent: 'ReportsAndAnalytics',
    permissionCode: 'HMSW_PERM_1',
    permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
  },
  {
    permissionName: 'user_management',
    permissionComponent: 'ReportsAndAnalytics',
    permissionCode: 'HMSW_PERM_2',
    permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
  },
  {
    permissionName: 'access_all_case_files',
    permissionComponent: 'ReportsAndAnalytics',
    permissionCode: 'HMSW_PERM_3',
    permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
  },
  {
    permissionName: 'generate_view_all_reports',
    permissionComponent: 'ReportsAndAnalytics',
    permissionCode: 'HMSW_PERM_4',
    permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
  },
  {
    permissionName: 'system_configuration',
    permissionComponent: 'ReportsAndAnalytics',
    permissionCode: 'HMSW_PERM_5',
    permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
  },
  {
    permissionName: 'create_record',
    permissionComponent: 'ReportsAndAnalytics',
    permissionCode: 'HMSW_PERM_6',
    permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
  },
  {
    permissionName: 'read_record',
    permissionComponent: 'ReportsAndAnalytics',
    permissionCode: 'HMSW_PERM_7',
    permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
  },
  {
    permissionName: 'update_record',
    permissionComponent: 'ReportsAndAnalytics',
    permissionCode: 'HMSW_PERM_8',
    permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
  },
  {
    permissionName: 'delete_record',
    permissionComponent: 'ReportsAndAnalytics',
    permissionCode: 'HMSW_PERM_9',
    permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
  },

  // UserManagement
  {
    permissionName: 'user',
    permissionComponent: 'UserManagement',
    permissionCode: 'HMSW_PERM_1',
    permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
  },
  {
    permissionName: 'create_employee',
    permissionComponent: 'UserManagement',
    permissionCode: 'HMSW_PERM_2',
    permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
  },
  {
    permissionName: 'view_all_employees',
    permissionComponent: 'UserManagement',
    permissionCode: 'HMSW_PERM_3',
    permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
  },
  {
    permissionName: 'view_employee_details',
    permissionComponent: 'UserManagement',
    permissionCode: 'HMSW_PERM_4',
    permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
  },
  {
    permissionName: 'edit_employee_details',
    permissionComponent: 'UserManagement',
    permissionCode: 'HMSW_PERM_5',
    permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
  },
  {
    permissionName: 'deactivate_employee',
    permissionComponent: 'UserManagement',
    permissionCode: 'HMSW_PERM_6',
    permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
  },
  

  // Settings

  {
    permissionName: 'full_access',
    permissionComponent: 'Settings',
    permissionCode: 'HMSW_PERM_1',
    permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
  },
  {
    permissionName: 'user_management',
    permissionComponent: 'Settings',
    permissionCode: 'HMSW_PERM_2',
    permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
  },
  {
    permissionName: 'access_all_case_files',
    permissionComponent: 'Settings',
    permissionCode: 'HMSW_PERM_3',
    permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
  },
  {
    permissionName: 'generate_view_all_reports',
    permissionComponent: 'Settings',
    permissionCode: 'HMSW_PERM_4',
    permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
  },
  {
    permissionName: 'system_configuration',
    permissionComponent: 'Settings',
    permissionCode: 'HMSW_PERM_5',
    permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
  },
  {
    permissionName: 'create_record',
    permissionComponent: 'Settings',
    permissionCode: 'HMSW_PERM_6',
    permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
  },
  {
    permissionName: 'read_record',
    permissionComponent: 'Settings',
    permissionCode: 'HMSW_PERM_7',
    permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
  },
  {
    permissionName: 'update_record',
    permissionComponent: 'Settings',
    permissionCode: 'HMSW_PERM_8',
    permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
  },
  {
    permissionName: 'delete_record',
    permissionComponent: 'Settings',
    permissionCode: 'HMSW_PERM_9',
    permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
  },

  // CaseStatus

  {
    permissionName: 'full_access',
    permissionComponent: 'CaseStatus',
    permissionCode: 'HMSW_PERM_1',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
  },
  {
    permissionName: 'user_management',
    permissionComponent: 'CaseStatus',
    permissionCode: 'HMSW_PERM_2',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
  },
  {
    permissionName: 'access_all_case_files',
    permissionComponent: 'CaseStatus',
    permissionCode: 'HMSW_PERM_3',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
  },
  {
    permissionName: 'generate_view_all_reports',
    permissionComponent: 'CaseStatus',
    permissionCode: 'HMSW_PERM_4',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
  },
  {
    permissionName: 'system_configuration',
    permissionComponent: 'CaseStatus',
    permissionCode: 'HMSW_PERM_5',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
  },
  {
    permissionName: 'create_record',
    permissionComponent: 'CaseStatus',
    permissionCode: 'HMSW_PERM_6',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
  },
  {
    permissionName: 'read_record',
    permissionComponent: 'CaseStatus',
    permissionCode: 'HMSW_PERM_7',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
  },
  {
    permissionName: 'update_record',
    permissionComponent: 'CaseStatus',
    permissionCode: 'HMSW_PERM_8',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
  },
  {
    permissionName: 'delete_record',
    permissionComponent: 'CaseStatus',
    permissionCode: 'HMSW_PERM_9',
    permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
  },
  // Documents
  {
    permissionName: 'full_access',
    permissionComponent: 'Documents',
    permissionCode: 'HMSW_PERM_1',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
  },
  {
    permissionName: 'user_management',
    permissionComponent: 'Documents',
    permissionCode: 'HMSW_PERM_2',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
  },
  {
    permissionName: 'access_all_case_files',
    permissionComponent: 'Documents',
    permissionCode: 'HMSW_PERM_3',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
  },
  {
    permissionName: 'generate_view_all_reports',
    permissionComponent: 'Documents',
    permissionCode: 'HMSW_PERM_4',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
  },
  {
    permissionName: 'system_configuration',
    permissionComponent: 'Documents',
    permissionCode: 'HMSW_PERM_5',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
  },
  {
    permissionName: 'create_record',
    permissionComponent: 'Documents',
    permissionCode: 'HMSW_PERM_6',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
  },
  {
    permissionName: 'read_record',
    permissionComponent: 'Documents',
    permissionCode: 'HMSW_PERM_7',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
  },
  {
    permissionName: 'update_record',
    permissionComponent: 'Documents',
    permissionCode: 'HMSW_PERM_8',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
  },
  {
    permissionName: 'delete_record',
    permissionComponent: 'Documents',
    permissionCode: 'HMSW_PERM_9',
    permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
  },
];
