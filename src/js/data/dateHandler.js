import {
	format,
	addDays,
	isBefore,
	isEqual,
	parseISO,
    isThisWeek
} from "date-fns";

// Format date to string (YYYY-MM-DD)
export function formatDateToDisplay(date) {
	return format(date, "EEE, dd MMM");
}
export function defaultDateFormat(date){
    return format(date, 'yyyy-MM-dd')
}
export function formatToDisplayOnlyDayToday(date){
    return format(date,"d" )
}

// Parse string to Date object
export function parseDate(dateString) {
	return parseISO(dateString);
}
export function setMinDateForInput(date){
    return format(date, 'yyyy-MM-dd')
}
export function setMaxDateForInput(date){
    const maxDate = addDays(date, 365)
    return format(maxDate, 'yyyy-MM-dd')
}

// Get today's date (without time)
export function getToday() {
	return parseDate(defaultDateFormat(new Date()));
}

// Check if a date is today
export function isDateToday(date) {
	return isEqual(parseDate(defaultDateFormat(date)), getToday());
}

// Check if a date is tomorrow
export function isDateTomorrow(date) {
	const tomorrow = addDays(getToday(), 1);
	return isEqual(parseDate(defaultDateFormat(date)), tomorrow);
}

// Check if a date is within this week
export function isDateThisWeek(dueDate, options = { weekStartsOn: 1 }) {
	const taskDueDate = parseISO(dueDate);
	return isThisWeek(taskDueDate, options)
}

// Check if a date is overdue
export function isDateOverdue(date) {
	return isBefore(parseDate(defaultDateFormat(date)), getToday());
}

// Filter tasks based on date criteria
export function filterTasksByDate(tasks, dateFilterFunction) {
	return tasks.filter((task) => dateFilterFunction(parseDate(task.dueDate)));
}

// Get tasks for today
export function getTodayTasks(tasks) {
	return filterTasksByDate(tasks, isDateToday);
}

// Get tasks for tomorrow
export function getTomorrowTasks(tasks) {
	return filterTasksByDate(tasks, isDateTomorrow);
}

// Get tasks for this week
export function getThisWeekTasks(tasks) {
	return filterTasksByDate(tasks, isDateThisWeek);
}

// Get overdue tasks
export function getOverdueTasks(tasks) {
	return filterTasksByDate(tasks, isDateOverdue);
}
