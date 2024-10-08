import './styles/main.css'

import { sidebarMainContainer } from './js/layouts/Sidebar'
import { mainContentContainer } from './js/layouts/MainContent'
import { loadTasksFromStorage, clearUserTasks } from './js/data/tasksManager'


loadTasksFromStorage()

const pageWrapper = document.createElement('div')
pageWrapper.className = 'pageWrapper'

pageWrapper.appendChild(sidebarMainContainer)
pageWrapper.appendChild(mainContentContainer)

document.body.appendChild(pageWrapper)

window.clearUserTasks = function () {
	clearUserTasks();
	localStorage.removeItem("userTasks");
	console.log("All user tasks have been cleared");
	return "Tasks cleared successfully";
};