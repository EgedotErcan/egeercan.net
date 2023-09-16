import React from 'react';

import ActivityCalendar from 'react-activity-calendar';

const CalendarGraph = ({ data }) => (
    <ActivityCalendar
        data={data}
        fontSize={28}
        style={{
            color: '#cdcdff',
        }}
        renderBlock={(block, activity) => 
            React.cloneElement(block, {
                'data-tooltip-id': 'react-tooltip',
                'data-tooltip-html': `${activity.count} learnings on ${activity.date}`,
            })
        }
        showWeekdayLabels={false}
        colorScheme={'light'}
        blockSize={20}
        labels={{
            legend: {
                less: 'Less',
                more: 'More'
            },
            months: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            totalCount: '{{count}} learnings in {{year}}',
            weekdays: [
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
                'Sun'
            ]
        }}
        theme={{
            light: [
                '#f0f0f0',
                '#6272a4'
            ]
        }}
    />
    
);


export default CalendarGraph;