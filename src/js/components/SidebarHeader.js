import iconLogo from '../../assets/logoToDoHeaderSideBar.svg'
export function createSidebarHeader(){
    const logoTextColapseContainer = document.createElement('div')
    logoTextColapseContainer.className = 'logoTextColapseContainer'

    const logoTextContainer = document.createElement('div')
    logoTextContainer.className = 'logoTextContainer'

    const iconLogoSidebarHeader = document.createElement('img')
    iconLogoSidebarHeader.className = 'iconLogoSidebarHeader'
    iconLogoSidebarHeader.src = iconLogo

}