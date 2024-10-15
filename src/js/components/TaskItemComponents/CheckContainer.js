import notCheckedIcon from "../../../assets/notCheckedItemIcon.svg";
import checkedIcon from "../../../assets/checkedItemIcon.svg";

export function createItemCheckContainer(){
    const checkTaskContainer = document.createElement('div')
    checkTaskContainer.className = 'checkTaskContainer'

    const checkItemBtn = document.createElement('button')
    checkItemBtn.className = 'checkItemBtn'
    //TODO implement the fucntionality of checking
    checkTaskContainer.appendChild(checkItemBtn)

    const checkItemBtnIconsContainer = document.createElement('div')
    checkItemBtnIconsContainer.className = 'checkItemBtnIconsContainer'
    checkTaskContainer.appendChild(checkItemBtnIconsContainer)
    
    const unCheckedItemBtnIcon = document.createElement('img')
    unCheckedItemBtnIcon.className = "unCheckedItemBtnIcon"; 
    unCheckedItemBtnIcon.src = checkedIcon
    checkItemBtnIconsContainer.appendChild(unCheckedItemBtnIcon)
    
    const checkedItemBtnIcon = document.createElement('img')
    checkedItemBtnIcon.className = "checkedItemBtnIcon"; 
    checkedItemBtnIcon.src = notCheckedIcon
    checkedItemBtnIcon.style.display = 'none'
    checkItemBtnIconsContainer.appendChild(checkedItemBtnIcon)

    return checkTaskContainer
}


