import exitIcon from "../../../src/assets/exitIcon.png";
import iro from "@jaames/iro";
import { addNewList } from "../data/listsManager";
import { addNewListItem } from "./SideBarListsSection";
import {
	initializeColorPicker,
	removeColorPicker,
} from "../utils/colorPickerManager";

let newListColorPicker = null;
const defaultColorForPickerBtn = '#849B17'

function createNewListModal() {
	const newListModalContainer = document.createElement("div");
	newListModalContainer.classList = "newListModalContainer";

	const newListModalExitBtnContainer = document.createElement("div");
	newListModalExitBtnContainer.className = "newListModalExitBtnContainer";
	newListModalContainer.appendChild(newListModalExitBtnContainer);

	const newListModalExitBtn = document.createElement("button");
	newListModalExitBtn.className = "newListModalExitBtn";
	newListModalExitBtn.addEventListener("click", () => {
		resetModal();
	});
	newListModalExitBtnContainer.appendChild(newListModalExitBtn);

	const newListModalExitBtnIcon = document.createElement("img");
	newListModalExitBtnIcon.className = "newListModalExitBtnIcon";
	newListModalExitBtnIcon.src = exitIcon;
	newListModalExitBtnIcon.alt = "Cross icon";
	newListModalExitBtn.appendChild(newListModalExitBtnIcon);

	const newListModalHeaderContainer = document.createElement("div");
	newListModalHeaderContainer.className = "newListModalHeaderContainer";
	newListModalContainer.appendChild(newListModalHeaderContainer);

	const newListModalHeaderText = document.createElement("p");
	newListModalHeaderText.className = "newListModalHeaderText";
	newListModalHeaderText.textContent = "New List";
	newListModalHeaderContainer.appendChild(newListModalHeaderText);

	const newListModalPropertiesContainer = document.createElement("div");
	newListModalPropertiesContainer.className =
		"newListModalPropertiesContainer";
	newListModalContainer.appendChild(newListModalPropertiesContainer);

	const newListModalListNameInput = document.createElement("input");
	newListModalListNameInput.className = "newListModalListNameInput";
	newListModalListNameInput.placeholder = "List Name";
	newListModalPropertiesContainer.appendChild(newListModalListNameInput);

	const newListModalThemeContainer = document.createElement("div");
	newListModalThemeContainer.className = "newListModalThemeContainer";
	newListModalThemeContainer.placeholder = "List Name";
	newListModalPropertiesContainer.appendChild(newListModalThemeContainer);

	const themeText = document.createElement("p");
	themeText.className = "themeText";
	themeText.textContent = "Theme";
	newListModalThemeContainer.appendChild(themeText);

	const colorPickerBtn = document.createElement("button");
	colorPickerBtn.className = "colorPickerBtn";
    colorPickerBtn.style.backgroundColor = defaultColorForPickerBtn
	newListModalThemeContainer.appendChild(colorPickerBtn);

	const colorPickerContainer = document.createElement("div");
	colorPickerContainer.className = "colorPickerContainer";
	colorPickerContainer.style.display = "none";
	newListModalContainer.appendChild(colorPickerContainer);

	const colorPickerElement = document.createElement("div");
	colorPickerElement.className = "colorPickerElement";
	colorPickerElement.id = "newListBoxPicker";
	colorPickerContainer.appendChild(colorPickerElement);

	colorPickerBtn.addEventListener("click", () => {
		colorPickerContainer.style.display =
			colorPickerContainer.style.display === "none" ? "block" : "none";

		if (!newListColorPicker) {
			newListColorPicker = initializeColorPicker(
				"newListModal",
				"newListBoxPicker",
				"#849B17",
				(color) => {
					colorPickerBtn.style.backgroundColor = color.hexString;
				}
			);
		}
	});

	const newListSubmitBtn = document.createElement("button");
	newListSubmitBtn.className = "newListSubmitBtn";
	newListSubmitBtn.textContent = "Add List";
	newListSubmitBtn.addEventListener("click", () => {
		const nameOfList = newListModalListNameInput.value;
		const listTheme = colorPickerBtn.style.backgroundColor;
		if (addNewList(nameOfList, listTheme)) {
			const newList = { name: nameOfList, color: listTheme };
			addNewListItem(newList);
			resetModal();
		} else {
			// Handle the case where the list wasn't added (e.g., duplicate name)
			alert("List name already exists. Please choose a different name.");
		}
	});
	newListModalContainer.appendChild(newListSubmitBtn);

	return newListModalContainer;
}


function resetModal() {
	const newListModalContainerHide = document.querySelector(
		".newListModalContainer"
	);

	// Reset input values
	const clearListNameInput = document.querySelector(
		".newListModalListNameInput"
	);
	clearListNameInput.value = "";

	// Reset color picker
	resetColorPickerBtnStyle()

	//destroy colorpicker to prevent bugs
	removeColorPicker("newListModal");
    newListColorPicker = null
	// Hide the modal
	newListModalContainerHide.style.display = "none";
}

function resetColorPickerBtnStyle(){
    const colorPickerBtn = document.querySelector(".colorPickerBtn");
	if (colorPickerBtn) {
		colorPickerBtn.style.backgroundColor = defaultColorForPickerBtn;
	}
}

export { createNewListModal };
