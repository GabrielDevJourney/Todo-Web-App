import { createFilterTaskContainer } from "../components/MainContentFilterTasks";
import { createMainContentHeader } from "../components/MainContentHeader";
import { createTasksViewerContainer } from "../components/MainContentTasksViewer";

const mainContentContainer = document.createElement('div')
mainContentContainer.className = 'mainContentContainer'

const mainContentHeader = createMainContentHeader()
mainContentContainer.appendChild(mainContentHeader)

const mainContentFilter = createFilterTaskContainer();
mainContentContainer.appendChild(mainContentFilter)

const mainContentTasksViewerContainer = createTasksViewerContainer()
mainContentContainer.appendChild(mainContentTasksViewerContainer)

export{mainContentContainer}