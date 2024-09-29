import exitIcon from "../../../src/assets/exitIcon.png";
import iro from "@jaames/iro";
import { addNewList } from "../data/listsManager";
import { addNewListItem } from "./SideBarListsSection";

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
	colorPickerBtn.textContent = "List Color";
	newListModalThemeContainer.appendChild(colorPickerBtn);

	const colorPickerContainer = document.createElement("div");
    colorPickerContainer.className = 'colorPickerContainer'
	colorPickerContainer.style.display = "none";
	newListModalContainer.appendChild(colorPickerContainer);

	const colorPickerElement = document.createElement("div");
	colorPickerElement.className = "colorPickerElement";
	colorPickerElement.id = "boxPicker";
	colorPickerContainer.appendChild(colorPickerElement);

	let colorPicker = null;

	colorPickerBtn.addEventListener("click", () => {
		colorPickerContainer.style.display =
			colorPickerContainer.style.display === "none" ? "block" : "none";

		if (!colorPicker) {
			colorPicker = createColorPicker();
		}
	});

	const newListSubmitBtn = document.createElement("button");
	newListSubmitBtn.className = "newListSubmitBtn";
	newListSubmitBtn.textContent = "Add New List";
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

function createColorPicker() {
	const colorPicker = new iro.ColorPicker("#boxPicker", {
		width: 150,
		color: "#f00",
		borderWidth: 1,
		borderColor: "#fff",
		layout: [
			{
				component: iro.ui.Box,
			},
			{
				component: iro.ui.Slider,
				options: {
					id: "hue-slider",
					sliderType: "hue",
				},
			},
		],
	});

	colorPicker.on("color:change", function (color) {
		const colorPickerBtn = document.querySelector(".colorPickerBtn");
		colorPickerBtn.style.backgroundColor = color.hexString;
	});

	return colorPicker;
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
	const colorPickerBtn = document.querySelector(".colorPickerBtn");
	colorPickerBtn.style.backgroundColor = "transparent";

	// Hide the modal
	newListModalContainerHide.style.display = "none";
}

export { createNewListModal };
