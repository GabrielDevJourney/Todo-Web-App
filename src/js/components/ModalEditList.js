import {
	getLists,
	deleteList,
	updateListProperties,
} from "../data/listsManager";
import closeIcon from "../../../src/assets/exitIcon.png";
import {
	updateListItemInDOM,
	removeListItemFromDOM,
} from "../ui/modalsHandler";
import {
	initializeColorPicker,
	removeColorPicker,
} from "../utils/colorPickerManager";
import { unblurSidebarMainContent } from "./ModalNewTask";

let editListModal = null;
let editListColorPicker = null;

function openEditListModal(listName) {
	const lists = getLists();
	const list = lists.find((l) => l.name === listName);
	if (!list) {
		console.error("list not found");
		return;
	}

	if (!editListModal) {
		editListModal = createEditListModal();
		document.body.appendChild(editListModal);
	}
	editListModal.dataset.listName = listName;
	populateEditModal(list);
	editListModal.style.display = "block";
}

function createEditListModal() {
	const editListModal = document.createElement("div");
	editListModal.className = "editListModal";

	const editListModalCloseBtnContainer = document.createElement("div");
	editListModalCloseBtnContainer.className = "editListModalCloseBtnContainer";
	editListModal.appendChild(editListModalCloseBtnContainer);

	const editListModalCloseBtn = document.createElement("button");
	editListModalCloseBtn.className = "editListModalCloseBtn";
	editListModalCloseBtn.onclick = () =>{
        editListModal.style.display = "none";
        removeColorPicker('editListModal')
        editListColorPicker = null
        unblurSidebarMainContent()
    };
	editListModalCloseBtnContainer.appendChild(editListModalCloseBtn);

	const editListModalCloseBtnIcon = document.createElement("img");
	editListModalCloseBtnIcon.className = "editListModalCloseBtnIcon";
	editListModalCloseBtnIcon.src = closeIcon;
	editListModalCloseBtn.appendChild(editListModalCloseBtnIcon);

	const editListModalHeader = document.createElement("p");
	editListModalHeader.className = "editListModalHeader";
	editListModalHeader.textContent = "Edit List";
	editListModal.appendChild(editListModalHeader);

	const editListModalNameInput = document.createElement("input");
	editListModalNameInput.className = "editListModalNameInput";
	editListModalNameInput.type = "text";
	editListModal.appendChild(editListModalNameInput);

	const editListModalThemeContainer = document.createElement("div");
	editListModalThemeContainer.className = "editListModalThemeContainer";
	editListModal.appendChild(editListModalThemeContainer);

	const editListModalThemeText = document.createElement("p");
	editListModalThemeText.className = "editListModalThemeText";
	editListModalThemeText.textContent = "Theme";
	editListModalThemeContainer.appendChild(editListModalThemeText);

	const colorPickerBtnEditList = document.createElement("button");
	colorPickerBtnEditList.className = "colorPickerBtnEditList";
	editListModalThemeContainer.appendChild(colorPickerBtnEditList);

	const colorPickerContainerEditList = document.createElement("div");
	colorPickerContainerEditList.className = "colorPickerContainerEditList";
	colorPickerContainerEditList.style.display = "none";
	editListModalThemeContainer.appendChild(colorPickerContainerEditList);

	const editListModalPickerElement = document.createElement("div");
	editListModalPickerElement.className = "editListModalPickerElement";
	editListModalPickerElement.id = "boxPicker";
	colorPickerContainerEditList.appendChild(editListModalPickerElement);

	const buttonContainer = document.createElement("div");
	buttonContainer.className = "buttonContainer";
	editListModal.appendChild(buttonContainer);

	const editListModalUpdateBtn = document.createElement("button");
	editListModalUpdateBtn.className = "editListModalUpdateBtn";
	editListModalUpdateBtn.textContent = "Update";
	editListModalUpdateBtn.addEventListener('click', () =>{
        saveListChanges()
        unblurSidebarMainContent()
    } ) 
	buttonContainer.appendChild(editListModalUpdateBtn);

	const editListModalDeleteBtn = document.createElement("button");
	editListModalDeleteBtn.className = "editListModalDeleteBtn";
	editListModalDeleteBtn.textContent = "Delete";
	editListModalDeleteBtn.addEventListener("click", () => {
		deleteList();
		unblurSidebarMainContent();
	}); 
	buttonContainer.appendChild(editListModalDeleteBtn);

	// Toggle color picker visibility
	colorPickerBtnEditList.onclick = () => {
		colorPickerContainerEditList.style.display =
			colorPickerContainerEditList.style.display === "none"
				? "block"
				: "none";
	};

	return editListModal;
}

function populateEditModal(list) {
	const nameInput = document.querySelector(".editListModalNameInput");
	nameInput.value = list.name;

	const colorPickerBtnEditList = editListModal.querySelector(
		".colorPickerBtnEditList"
	);
	colorPickerBtnEditList.style.backgroundColor = list.color;

    const colorPickerContainerEditList = document.querySelector(
        ".colorPickerContainerEditList"
    );

	colorPickerBtnEditList.onclick = () => {
		colorPickerContainerEditList.style.display =
			colorPickerContainerEditList.style.display === "none"
				? "block"
				: "none";

		if (!editListColorPicker) {
			editListColorPicker = initializeColorPicker(
				"editListModal",
				"boxPicker",
				list.color,
				(color) => {
					colorPickerBtnEditList.style.backgroundColor =
						color.hexString;
				}
			);
		} else {
			editListColorPicker.color.set(list.color);
		}
	};
}

function saveListChanges() {

        if (!editListColorPicker) {
			console.error("Color picker not initialized");
			alert(
				"There was an issue with the color picker. Please try again."
			);
			return;
		}
        
	const newName = document.querySelector(".editListModalNameInput").value;
	const newColor = editListColorPicker.color.hexString;
	const oldName = editListModal.dataset.listName;

	if (updateListProperties(oldName, newName, newColor)) {
		// Update the list item in the sidebar
		updateListItemInDOM(oldName, newName, newColor);
		editListModal.style.display = "none";
	} else {
		alert("Failed to update list. Name might already exist.");
	}
}

function deleteListItem() {
	const listName = editListModal.dataset.listName;
	if (confirm(`Are you sure you want to delete the list "${listName}"?`)) {
		if (deleteList(listName)) {
			removeListItemFromDOM(listName);
			editListModal.style.display = "none";
		} else {
			alert("Failed to delete list.");
		}
	}
}
export { openEditListModal };
