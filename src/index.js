import './styles/main.css'

import { sidebarMainContainer } from './js/layouts/Sidebar'
import { loadTasksFromStorage } from './js/data/tasksManager'

loadTasksFromStorage()
document.body.appendChild(sidebarMainContainer)