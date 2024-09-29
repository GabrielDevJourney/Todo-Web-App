import editListItemIcon from "../../../src/assets/editListItemIcon.svg";
import { openEditListModal } from "./ModalEditList";

export function createListItem(list) {
	const listItemContainer = document.createElement("div");
	listItemContainer.className = "listItemContainer";
    listItemContainer.dataset.listName = list.name

	const listItemColorDisplay = document.createElement("div");
	listItemColorDisplay.className = "listItemColorDisplay";
	listItemColorDisplay.style.backgroundColor = list.color;
	listItemContainer.appendChild(listItemColorDisplay);

	const listItemTextName = document.createElement("span");
	listItemTextName.className = "listItemTextName";
	listItemTextName.textContent = list.name;
	listItemContainer.appendChild(listItemTextName);

	const listItemEditBtn = document.createElement("button");
	listItemEditBtn.className = "listItemEditBtn";
    listItemEditBtn.addEventListener('click', () => {
        console.log('edit btn for list', list.name)
        openEditListModal(list.name)
    })
	listItemContainer.appendChild(listItemEditBtn);

	const listItemEditBtnIcon = document.createElement("img");
	listItemEditBtnIcon.className = "listItemEditBtnIcon";
	listItemEditBtnIcon.src = editListItemIcon;
	listItemEditBtnIcon.alt = "Pencil icon inside a square";
    listItemEditBtn.addEventListener('click', () => {
        openEditListModal(list.name)
    })
	listItemEditBtn.appendChild(listItemEditBtnIcon);

	return listItemContainer;
}
