export const roleCodes = {
  admin: 'hmsw-ADM-001',
  managingPartner: 'hmsw-MGNPTNR-002',
  associate: 'hmsw-ASS-003',
  paralegal: 'hmsw-PAL-004',
  client: 'hmsw-CLI-005',
};

export const roles = [
  { label: 'Admin', value: 'admin' },
  { label: 'Managing Partner', value: 'managingPartner' },
  { label: 'Senior Lawyer', value: 'seniorLawyer' },
  { label: 'Associate Lawyer', value: 'associate' },
  { label: 'Paralegal', value: 'paralegal' }
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

export const rolesAndPermissions = {
  admin: {
    permissions: {
      Dashboard: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
      ],
      CaseManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
      ],
      ClientManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
      ],
      DocumentManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
      ],
      BillingAndFinance: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
      ],
      Communication: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
      ],
      TasksAndReminders: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
      ],
      ReportsAndAnalytics: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
      ],
      UserManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
      ],
      Settings: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
      ],
      CaseStatus: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
      ],
      Documents: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: '',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: '',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
      ],
    },
    defaultDashboard: [
      {
        sectionName: 'AdminKeyMetrics',
        sectionCode: 'HMSW-ADM-SC1',
        roleRefCode: 'HMSW-ADM-001',
        ordinal: 1,
      },
      {
        sectionName: 'AdminActivitiesMetrics',
        sectionCode: 'HMSW-ADM-SC2',
        roleRefCode: 'HMSW-ADM-001',
        ordinal: 2,
      },
      {
        sectionName: 'AdminEmployeeMetrics',
        sectionCode: 'HMSW-ADM-SC3',
        roleRefCode: 'HMSW-ADM-001',
        ordinal: 3,
      },
      {
        sectionName: 'AdminClientMetrics',
        sectionCode: 'HMSW-ADM-SC4',
        roleRefCode: 'HMSW-ADM-001',
        ordinal: 4,
      },
    ],
    defaultPortal: [],
  },
  managingPartner: {
    permissions: {
      Dashboard: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
      ],
      CaseManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
      ],
      ClientManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
      ],
      DocumentManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
      ],
      BillingAndFinance: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
      ],
      Communication: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
      ],
      TasksAndReminders: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
      ],
      ReportsAndAnalytics: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
      ],
      UserManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
      ],
      Settings: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
      ],
      CaseStatus: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
      ],
      Documents: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: '',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: '',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
      ],
    },
    defaultDashboard: [],
    defaultPortal: [],
  },
  seniorLawyer: {
    permissions: {
      Dashboard: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
      ],
      CaseManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
      ],
      ClientManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
      ],
      DocumentManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
      ],
      BillingAndFinance: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
      ],
      Communication: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
      ],
      TasksAndReminders: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
      ],
      ReportsAndAnalytics: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
      ],
      UserManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
      ],
      Settings: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
      ],
      CaseStatus: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
      ],
      Documents: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: '',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: '',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
      ],
    },
    defaultDashboard: [],
    defaultPortal: [],
  },
  associateLawyer: {
    permissions: {
      Dashboard: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
      ],
      CaseManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
      ],
      ClientManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
      ],
      DocumentManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
      ],
      BillingAndFinance: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
      ],
      Communication: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
      ],
      TasksAndReminders: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
      ],
      ReportsAndAnalytics: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
      ],
      UserManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
      ],
      Settings: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
      ],
      CaseStatus: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
      ],
      Documents: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: '',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: '',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
      ],
    },
    defaultDashboard: [],
    defaultPortal: [],
  },
  paralegal: {
    permissions: {
      Dashboard: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_DASH',
        },
      ],
      CaseManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_MGNT',
        },
      ],
      ClientManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_CLT_MGNT',
        },
      ],
      DocumentManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC_MGNT',
        },
      ],
      BillingAndFinance: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_BILL_FIN',
        },
      ],
      Communication: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_COMM',
        },
      ],
      TasksAndReminders: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_TASK_REM',
        },
      ],
      ReportsAndAnalytics: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_RPT_ANL',
        },
      ],
      UserManagement: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_USER_MGNT',
        },
      ],
      Settings: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_SETT',
        },
      ],
      CaseStatus: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_CASE_STAT',
        },
      ],
      Documents: [
        {
          permissionName: 'full_access',
          permissionCode: 'HMSW_PERM_1',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'user_management',
          permissionCode: 'HMSW_PERM_2',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'access_all_case_files',
          permissionCode: 'HMSW_PERM_3',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'generate_view_all_reports',
          permissionCode: 'HMSW_PERM_4',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'system_configuration',
          permissionCode: 'HMSW_PERM_5',
          permissionTypeCode: '',
        },
        {
          permissionName: 'create_record',
          permissionCode: 'HMSW_PERM_6',
          permissionTypeCode: '',
        },
        {
          permissionName: 'read_record',
          permissionCode: 'HMSW_PERM_7',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'update_record',
          permissionCode: 'HMSW_PERM_8',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
        {
          permissionName: 'delete_record',
          permissionCode: 'HMSW_PERM_9',
          permissionTypeCode: 'HMSW_PERM_TYPE_DOC',
        },
      ],
    },
    defaultDashboard: [],
    defaultPortal: [],
  },
};

export const portalAndDashboards = {
  dashboard: [
    {
      widgetName: 'Spending Summary',
      sectionWidgetName: 'AdminSpendingSummary',
      sectionCode: 'HMSW-ADM-SC1',
      widgetDimension: '{xs={12} sm={12} md={6}}',
      ordinal: 1,
      widgetComponentName: 'spendingSummary',
    },
    {
      widgetName: 'New Case',
      sectionWidgetName: 'AdminNewCase',
      sectionCode: 'HMSW-ADM-SC1',
      widgetDimension: '{xs={6} sm={6} md={3}}',
      ordinal: 2,
      widgetComponentName: 'newCase',
    },
    {
      widgetName: 'Active Cases',
      sectionWidgetName: 'AdminActiveCases',
      sectionCode: 'HMSW-ADM-SC1',
      widgetDimension: '{xs={6} sm={6} md={3}}',
      ordinal: 3,
      widgetComponentName: 'activeCases',
    },
    {
      widgetName: 'Outstanding Tasks and Assignments',
      sectionWidgetName: 'AdminOutstandingTasksAndAssignments',
      sectionCode: 'HMSW-ADM-SC2',
      widgetDimension: '{xs={12} sm={12} md={4}}',
      ordinal: 1,
      widgetComponentName: 'outstandingTasksAndAssignments',
    },
    {
      widgetName: 'Recent Activities',
      sectionWidgetName: 'AdminRecentActivities',
      sectionCode: 'HMSW-ADM-SC2',
      widgetDimension: '{xs={6} sm={6} md={4}}',
      ordinal: 2,
      widgetComponentName: 'recentActivities',
    },
    {
      widgetName: 'Appointments',
      sectionWidgetName: 'AdminAppointments',
      sectionCode: 'HMSW-ADM-SC2',
      widgetDimension: '{xs={6} sm={6} md={4}}',
      ordinal: 3,
      widgetComponentName: 'appointments',
    },
    {
      widgetName: 'Employees Reports',
      sectionWidgetName: 'AdminEmployeesReports',
      sectionCode: 'HMSW-ADM-SC3',
      widgetDimension: '{xs={6} sm={6} md={6}}',
      ordinal: 1,
      widgetComponentName: 'employeesReports',
    },
    {
      widgetName: 'Something Here',
      sectionWidgetName: 'AdminSomethingHere',
      sectionCode: 'HMSW-ADM-SC3',
      widgetDimension: '{xs={6} sm={6} md={6}}',
      ordinal: 2,
      widgetComponentName: 'somethingHere',
    },
    {
      widgetName: 'Client Reports',
      sectionWidgetName: 'AdminClientReports',
      sectionCode: 'HMSW-ADM-SC4',
      widgetDimension: '{xs={6} sm={6} md={6}}',
      ordinal: 1,
      widgetComponentName: 'clientReports',
    },
    {
      widgetName: 'Pending Client Payment',
      sectionWidgetName: 'AdminPendingClientPayment',
      sectionCode: 'HMSW-ADM-SC4',
      widgetDimension: '{xs={6} sm={6} md={6}}',
      ordinal: 2,
      widgetComponentName: 'pendingClientPayment',
    },
    {
      widgetName: 'something',
      sectionWidgetName: 'AssociateSomething',
      sectionCode: 'HMSW-ASS-SC1',
      widgetDimension: '{xs={6} sm={6} md={3}}',
      ordinal: 1,
      widgetComponentName: 'something',
    },
    {
      widgetName: 'New Case',
      sectionWidgetName: 'AssociateNewCase',
      sectionCode: 'HMSW-ASS-SC1',
      widgetDimension: '{xs={6} sm={6} md={3}}',
      ordinal: 2,
      widgetComponentName: 'newCase',
    },
    {
      widgetName: 'Active Cases',
      sectionWidgetName: 'AssociateActiveCases',
      sectionCode: 'HMSW-ASS-SC1',
      widgetDimension: '{xs={6} sm={6} md={3}}',
      ordinal: 3,
      widgetComponentName: 'activeCases',
    },
    {
      widgetName: 'Something Cases',
      sectionWidgetName: 'AssociateSomething',
      sectionCode: 'HMSW-ASS-SC1',
      widgetDimension: '{xs={6} sm={6} md={3}}',
      ordinal: 4,
      widgetComponentName: 'somethingCases',
    },
    {
      widgetName: 'Outstanding Tasks and Assignments',
      sectionWidgetName: 'AssociateOutstandingTasksAndAssignments',
      sectionCode: 'HMSW-ASS-SC2',
      widgetDimension: '{xs={12} sm={12} md={4}}',
      ordinal: 1,
      widgetComponentName: 'outstandingTasksAndAssignments',
    },
    {
      widgetName: 'Recent Activities',
      sectionWidgetName: 'AssociateRecentActivities',
      sectionCode: 'HMSW-ASS-SC2',
      widgetDimension: '{xs={6} sm={6} md={4}}',
      ordinal: 2,
      widgetComponentName: 'recentActivities',
    },
    {
      widgetName: 'Appointments',
      sectionWidgetName: 'AssociateAppointments',
      sectionCode: 'HMSW-ASS-SC2',
      widgetDimension: '{xs={6} sm={6} md={4}}',
      ordinal: 3,
      widgetComponentName: 'appointments',
    },
    {
      widgetName: 'Something Here',
      sectionWidgetName: 'AssociateEmployeesReports',
      sectionCode: 'HMSW-ASS-SC3',
      widgetDimension: '{xs={6} sm={6} md={6}}',
      ordinal: 1,
      widgetComponentName: 'somethingHere',
    },
    {
      widgetName: 'Recent Communication',
      sectionWidgetName: 'AssociateSomethingHere',
      sectionCode: 'HMSW-ASS-SC3',
      widgetDimension: '{xs={6} sm={6} md={6}}',
      ordinal: 2,
      widgetComponentName: 'recentCommunication',
    },
    {
      widgetName: 'Client Reports',
      sectionWidgetName: 'AssociateClientReports',
      sectionCode: 'HMSW-ASS-SC4',
      widgetDimension: '{xs={6} sm={6} md={6}}',
      ordinal: 1,
      widgetComponentName: 'clientReports',
    },
    {
      widgetName: 'Pending Client Payment',
      sectionWidgetName: 'AssociatePendingClientPayment',
      sectionCode: 'HMSW-ASS-SC4',
      widgetDimension: '{xs={6} sm={6} md={6}}',
      ordinal: 2,
      widgetComponentName: 'pendingClientPayment',
    },
  ],
  portal: [
    {
      portalName: 'Dashboard',
      route: 'dashboard',
      ordinal: 1,
      portalCode: 'hmsw-portal-010',
    },
    {
      portalName: 'Case Management',
      route: 'case-management',
      ordinal: 2,
      portalCode: 'hmsw-portal-001',
    },
    {
      portalName: 'Case Status',
      route: 'case-status',
      ordinal: 2,
      portalCode: 'hmsw-portal-012',
    },
    {
      portalName: 'Client Management',
      route: 'client-management',
      ordinal: 3,
      portalCode: 'hmsw-portal-002',
    },
    {
      portalName: 'Documents',
      route: 'documents',
      ordinal: 3,
      portalCode: 'hmsw-portal-013',
    },
    {
      portalName: 'Document Management',
      route: 'document-management',
      ordinal: 4,
      portalCode: 'hmsw-portal-003',
    },
    {
      portalName: 'Billing and Finance',
      route: 'billing-and-finances',
      ordinal: 5,
      portalCode: 'hmsw-portal-004',
    },
    {
      portalName: 'Communication',
      route: 'Communication',
      ordinal: 6,
      portalCode: 'hmsw-portal-005',
    },
    {
      portalName: 'Tasks and Reminders',
      route: 'tasks-and-reminders',
      ordinal: 7,
      portalCode: 'hmsw-portal-006',
    },
    {
      portalName: 'Reports and Analytics',
      route: 'reports-and-analytics',
      ordinal: 8,
      portalCode: 'hmsw-portal-007',
    },
    {
      portalName: 'Communication',
      route: 'communication',
      ordinal: 8,
      portalCode: 'hmsw-portal-011',
    },
    {
      portalName: 'User Management',
      route: 'user-management',
      ordinal: 9,
      portalCode: 'hmsw-portal-008',
    },
    {
      portalName: 'Settings',
      route: 'settings',
      ordinal: 10,
      portalCode: 'hmsw-portal-009',
    },
  ],
};
