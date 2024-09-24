function createSidebarLineSeparator(){
    const lineSeperatorContainer = document.createElement('div')
    lineSeperatorContainer.className = 'lineSeperatorContainer'

    const lineSeperator = document.createElement('div')
    lineSeperator.className = 'lineSeperator'
    lineSeperatorContainer.appendChild(lineSeperator)

    return lineSeperatorContainer
}
const sidebarLineSeperator = createSidebarLineSeparator
export {sidebarLineSeperator}