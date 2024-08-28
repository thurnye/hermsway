export const status = [
    { label: 'To Do', value: 'toDo', color: '#FF5F1F' },
    { label: 'In Progress', value: 'inProgress', color: '#7F00FF' },
    { label: 'Pending', value: 'pending', color: '#81B7EE' },
    { label: 'Completed', value: 'completed', color: '#52BE80' },
    { label: 'On Hold', value: 'onHold', color: '#808000' },
    { label: 'Cancelled', value: 'cancelled', color: '#BF40BF' },
    { label: 'Under Review', value: 'underReview', color: '#00006B' },
    { label: 'Blocked', value: 'blocked', color: '#343434' },
    { label: 'Deferred', value: 'deferred', color: '#CA6F1E' },
    { label: 'Not Started', value: 'notStarted', color: '#FF0000' },
  ];

export const taskStatus = (stat) => status.find(s => s.value === stat);
