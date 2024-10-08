import { createMainContentHeader } from "../components/MainContentHeader";

const mainContentContainer = document.createElement('div')
mainContentContainer.className = 'mainContentContainer'

const mainContentHeader = createMainContentHeader()
mainContentContainer.appendChild(mainContentHeader)

export{mainContentContainer}