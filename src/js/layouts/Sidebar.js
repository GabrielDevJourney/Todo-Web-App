//I WILL HA TO ASSOCIATE THE FUNCTIONS THAT CREATE COMPONENTS TO VARIABLES AND THEN APPEND THEM TO THEM SIDEBAR MAIN WRAPPER
import { sidebarHeaderContainer } from "../components/SidebarHeader.js";
import { sidebarCalendarsViewContainer } from "../components/SidebarCalendarsItem";
import { sidebarLineSeperator } from "../components/SideBarLineSeperator.js";
import { sidebarListsSection } from "../components/SideBarListsSection.js";

const sidebarMainContainer = document.createElement('div')
sidebarMainContainer.className = 'sidebarMainContainer'

const sidebarHeaderElement = sidebarHeaderContainer
sidebarMainContainer.appendChild(sidebarHeaderElement)

const sidebarCalendarsViewElement = sidebarCalendarsViewContainer
sidebarMainContainer.appendChild(sidebarCalendarsViewElement)

const sidebarLineSeperatorElement = sidebarLineSeperator
sidebarMainContainer.appendChild(sidebarLineSeperatorElement);

const sidebarListsSectionElement = sidebarListsSection
sidebarMainContainer.appendChild(sidebarListsSectionElement)

export {sidebarMainContainer}