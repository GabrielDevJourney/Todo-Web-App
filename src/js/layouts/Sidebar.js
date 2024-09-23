//I WILL HA TO ASSOCIATE THE FUNCTIONS THAT CREATE COMPONENTS TO VARIABLES AND THEN APPEND THEM TO THEM SIDEBAR MAIN WRAPPER
import { sidebarHeaderContainer } from "../components/SidebarHeader.js";
import { sidebarCalendarsViewContainer } from "../components/SidebarCalendarsItem";

const sidebarMainContainer = document.createElement('div')
sidebarMainContainer.className = 'sidebarMainContainer'

const sidebarHeaderElement = sidebarHeaderContainer
sidebarMainContainer.appendChild(sidebarHeaderElement)

const sidebarCalendarsViewElement = sidebarCalendarsViewContainer
sidebarMainContainer.appendChild(sidebarCalendarsViewElement)

export {sidebarMainContainer}