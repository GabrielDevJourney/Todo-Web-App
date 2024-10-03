import './styles/main.css'

import { sidebarMainContainer } from './js/layouts/Sidebar'
import { loadTasksFromStorage, clearUserTasks } from './js/data/tasksManager'

loadTasksFromStorage()


document.body.appendChild(sidebarMainContainer)
window.clearUserTasks = function () {
	clearUserTasks();
	localStorage.removeItem("userTasks");
	console.log("All user tasks have been cleared");
	return "Tasks cleared successfully";
};