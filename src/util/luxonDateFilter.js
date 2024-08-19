import { DateTime } from 'luxon';

export const filterData = (range) => {
  const now = DateTime.now().startOf('day'); // Ensure 'now' is at the start of the day
  let startDate;
  let endDate = now; // Defaults to now for open-ended ranges

  switch (range) {
    case 'last60Days':
      startDate = now.minus({ days: 60 }).startOf('day');
      break;
    case 'last90Days':
      startDate = now.minus({ days: 90 }).startOf('day');
      break;
    case 'yearToDate':
      startDate = now.startOf('year'); // January 1st of this year, at midnight
      break;
    case 'monthToDate':
      startDate = now.startOf('month'); // First day of the current month, at midnight
      break;
    case 'last30Days':
      startDate = now.minus({ days: 30 }).startOf('day');
      break;
    case 'lastQ1':
      // Define the start and end dates for Q1
      startDate = DateTime.fromObject({ year: now.year, month: 1, day: 1 }).startOf('day');
      endDate = DateTime.fromObject({ year: now.year, month: 3, day: 31 }).endOf('day');
      // Check if Q1 is in the past
      if (endDate > now) return null; // If Q1 is not in the past, do not return
      break;
    case 'lastQ2':
      // Define the start and end dates for Q2
      startDate = DateTime.fromObject({ year: now.year, month: 4, day: 1 }).startOf('day');
      endDate = DateTime.fromObject({ year: now.year, month: 6, day: 30 }).endOf('day');
      // Check if Q2 is in the past
      if (endDate > now) return null; // If Q2 is not in the past, do not return
      break;
    case 'lastQ3':
      // Define the start and end dates for Q3
      startDate = DateTime.fromObject({ year: now.year, month: 7, day: 1 }).startOf('day');
      endDate = DateTime.fromObject({ year: now.year, month: 9, day: 30 }).endOf('day');
      // Check if Q3 is in the past
      if (endDate > now) return null; // If Q3 is not in the past, do not return
      break;
    case 'lastQ4':
      // Define the start and end dates for Q4
      startDate = DateTime.fromObject({ year: now.year, month: 10, day: 1 }).startOf('day');
      endDate = DateTime.fromObject({ year: now.year, month: 12, day: 31 }).endOf('day');
      // Check if Q4 is in the past
      if (endDate > now) return null; // If Q4 is not in the past, do not return
      break;
    case 'thisYear':
      startDate = DateTime.fromObject({ month: 1, day: 1 }).startOf('day');
      break;
    case 'lastYear':
      startDate = DateTime.now().minus({ year: 1 }).startOf('year').startOf('day');
      endDate = DateTime.now().minus({ year: 1 }).endOf('year').endOf('day');
      break;
    default:
      startDate = now.minus({ days: 30 }).startOf('day');
  }

  // Convert to JavaScript Date objects
  return {
    startDate: startDate.toJSDate(),
    endDate: endDate.toJSDate()
  };
};



export const getPreviousQuarters = () => {
    const now = DateTime.now();
    const currentQuarter = Math.ceil(now.month / 3);
    const quarters = [
      { label: 'Q1', start: DateTime.fromObject({ month: 1, day: 1 }),
        end: DateTime.fromObject({ month: 3, day: 31 }) },
      { label: 'Q2', start: DateTime.fromObject({ month: 4, day: 1 }),
        end: DateTime.fromObject({ month: 6, day: 30 }) },
      { label: 'Q3', start: DateTime.fromObject({ month: 7, day: 1 }),
        end: DateTime.fromObject({ month: 9, day: 30 }) },
      { label: 'Q4', start: DateTime.fromObject({ month: 10, day: 1 }),
        end: DateTime.fromObject({ month: 12, day: 31 }) }
    ];
    
    // Filter out future quarters based on the current quarter
    const pastQuarters = quarters.filter((_, index) => index < currentQuarter - 1);
    
    return pastQuarters.map(q => ({
      label: `Last ${q.label}`,
      value: `last${q.label}`
    }));
  };