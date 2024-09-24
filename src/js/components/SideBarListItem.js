import editListItemIcon from '../../../src/assets/editListItemIcon.svg'

export function createListItem(list){
    const listItemContainer = document.createElement('div')
    listItemContainer.className = 'listItemContainer'

    const listItemColorDisplay = document.createElement('div')
    listItemColorDisplay.className = 'listItemColorDisplay'
    listItemColorDisplay.style.backgroundColor = list.color
    listItemContainer.appendChild(listItemColorDisplay)

    const listItemTextName = document.createElement('span')
    listItemTextName.className = 'listItemTextName'
    listItemTextName.textContent = list.name
    listItemContainer.appendChild(listItemTextName)

    const listItemEditBtn = document.createElement('button')
    listItemEditBtn.className = 'listItemEditBtn'
    listItemContainer.appendChild(listItemEditBtn)

    const listItemEditBtnIcon = document.createElement('img')
    listItemEditBtnIcon.className = 'listItemEditBtnIcon'
    listItemEditBtnIcon.src = editListItemIcon
    listItemEditBtnIcon.alt = 'Pencil icon inside a square'
    listItemEditBtn.appendChild(listItemEditBtnIcon)

    return listItemContainer

}

function createModalEditListItem(){
    //TODO
}