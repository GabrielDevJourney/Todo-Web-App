import addNewTaskIcon from '../../../src/assets/addCircleIcon.svg'
import inboxIcon from '../../../src/assets/inboxIcon.svg'
import todayCalendarIcon from '../../../src/assets/calendarTodayIcon.svg'
import tomorrowCalendarIcon from '../../../src/assets/calendarTomorrowIcon.svg'
import thisWeekIcon from '../../../src/assets/calendarThisWeekIcon.svg'
import completedCalendarIcon from '../../../src/assets/calendarCompletedTasks.svg'
import overDueIcon from '../../../src/assets/calendarOverDueIcon.svg'

export const calendarsTypes = [
    {
        name : 'Add Task',
        icon: addNewTaskIcon
    },
    {
        name : 'Inbox',
        icon: inboxIcon
    },
    {
        name : 'Today',
        icon: todayCalendarIcon
    },
    {
        name : 'Tomorrow',
        icon: tomorrowCalendarIcon
    },
    {
        name : 'This Week',
        icon: thisWeekIcon
    },
    {
        name : 'Completed',
        icon: completedCalendarIcon
    },
    {
        name : 'Overdue',
        icon: overDueIcon
    }
]