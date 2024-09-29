import {
	getLists,
	deleteList,
	updateListProperties,
} from "../data/listsManager";
import iro from "@jaames/iro";
import closeIcon from "../../../src/assets/exitIcon.png";
import {
	updateListItemInDOM,
	removeListItemFromDOM,
} from "../ui/modalsHandler";

let editListModal = null;
let colorPicker = null;

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

	const editListModalHeader = document.createElement("h2");
	editListModalHeader.textContent = "Edit List";
	editListModal.appendChild(editListModalHeader);

	const editListModalCloseBtn = document.createElement("button");
	editListModalCloseBtn.className = "editListModalCloseBtn";
	editListModalCloseBtn.onclick = () =>
		(editListModal.style.display = "none");
	editListModal.appendChild(editListModalCloseBtn);

	const editListModalCloseBtnIcon = document.createElement("img");
	editListModalCloseBtnIcon.className = "editListModalCloseBtnIcon";
	editListModalCloseBtnIcon.src = closeIcon;
	editListModalCloseBtn.appendChild(editListModalCloseBtnIcon);

	const editListModalNameInput = document.createElement("input");
	editListModalNameInput.className = "editListModalNameInput";
	editListModalNameInput.type = "text";
	editListModal.appendChild(editListModalNameInput);

	const editListModalThemeContainer = document.createElement("div");
	editListModalThemeContainer.className = "editListModalThemeContainer";
	editListModal.appendChild(editListModalThemeContainer);

	const editListModalThemeText = document.createElement("p");
	editListModalThemeText.textContent = "Theme";
	editListModalThemeContainer.appendChild(editListModalThemeText);

	const colorPickerBtn = document.createElement("button");
	colorPickerBtn.className = "colorPickerBtn";
	editListModalThemeContainer.appendChild(colorPickerBtn);

	const colorPickerContainer = document.createElement("div");
	colorPickerContainer.className = "colorPickerContainer";
	colorPickerContainer.style.display = "none";
	editListModalThemeContainer.appendChild(colorPickerContainer);

	const editListModalPickerElement = document.createElement("div");
	editListModalPickerElement.className = "editListModalPickerElement";
	editListModalPickerElement.id = "boxPicker";
	colorPickerContainer.appendChild(editListModalPickerElement);

	const buttonContainer = document.createElement("div");
	buttonContainer.className = "buttonContainer";
	editListModal.appendChild(buttonContainer);

	const editListModalUpdateBtn = document.createElement("button");
	editListModalUpdateBtn.className = "editListModalUpdateBtn";
	editListModalUpdateBtn.textContent = "Update";
	editListModalUpdateBtn.onclick = saveListChanges;
	buttonContainer.appendChild(editListModalUpdateBtn);

	const editListModalDeleteBtn = document.createElement("button");
	editListModalDeleteBtn.className = "editListModalDeleteBtn";
	editListModalDeleteBtn.textContent = "Delete";
	editListModalDeleteBtn.onclick = deleteListItem;
	buttonContainer.appendChild(editListModalDeleteBtn);

	// Toggle color picker visibility
	colorPickerBtn.onclick = () => {
		colorPickerContainer.style.display =
			colorPickerContainer.style.display === "none" ? "block" : "none";
	};

	return editListModal;
}

function populateEditModal(list) {
	const nameInput = document.querySelector(".editListModalNameInput");
	nameInput.value = list.name;

	const colorPickerBtn = editListModal.querySelector(".colorPickerBtn");
	colorPickerBtn.style.backgroundColor = list.color;

	if (!colorPicker) {
		colorPicker = new iro.ColorPicker("#boxPicker", {
			width: 150,
			color: list.color,
			borderWidth: 1,
			borderColor: "#fff",
			layout: [{ 
                component: iro.ui.Box
            },
            {
                component: iro.ui.Slider,
                options:{
                    id:'hue-slider',
                    sliderType: 'hue'
                }
            }],
		});
		colorPicker.on("color:change", (color) => {
			colorPickerBtn.style.backgroundColor = color.hexString;
		});
	} else {
		colorPicker.color.set(list.color);
	}

	const colorPickerContainer = document.querySelector(
		".colorPickerContainer"
	);
	colorPickerBtn.onclick = () => {
		colorPickerContainer.style.display =
			colorPickerContainer.style.display === "none" ? "block" : "none";
	};
}

function saveListChanges() {
	const newName = document.querySelector(".editListModalNameInput").value;
	const newColor = colorPicker.color.hexString;
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
