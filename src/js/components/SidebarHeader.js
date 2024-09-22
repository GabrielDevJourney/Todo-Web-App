import iconLogo from "../../../src/assets/logoToDoHeaderSiderBar.svg";

export function createSidebarHeader(){
    console.log("icon path", iconLogo);

    const logoTextColapseContainer = document.createElement('div')
    logoTextColapseContainer.className = 'logoTextColapseContainer'

    const logoTextContainer = document.createElement('div')
    logoTextContainer.className = 'logoTextContainer'
    logoTextColapseContainer.appendChild(logoTextContainer)

    const iconLogoSidebarHeader = document.createElement('img')
    iconLogoSidebarHeader.className = 'iconLogoSidebarHeader'
    iconLogoSidebarHeader.src = iconLogo
    logoTextContainer.appendChild(iconLogoSidebarHeader)

    return logoTextColapseContainer
}