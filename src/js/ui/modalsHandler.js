import { getLists } from "../data/listsManager.js";

function updateListDropdowns() {
	const listDropdowns = document.querySelectorAll(".list-dropdown");

	listDropdowns.forEach((dropdown) => {
		// Clear existing options
		dropdown.innerHTML = "";

		// Add default option
		const defaultOption = document.createElement("option");
		defaultOption.value = "";
		defaultOption.textContent = "Select a list";
		defaultOption.disabled = true;
		defaultOption.selected = true;
		dropdown.appendChild(defaultOption);

		// Add options for each list
		const lists = getLists();
		lists.forEach((list) => {
			const option = document.createElement("option");
			option.value = list.name;
			option.textContent = list.name;
			option.style.color = list.color;
			dropdown.appendChild(option);
		});
	});
}

function updateListItemInDOM(oldName, newName, newColor) {
	const listItem = document.querySelector(
		`.listItem[data-list-name="${oldName}"]`
	);
	if (listItem) {
		listItem.dataset.listName = newName;

        const colorPickerContainer = document.querySelector('.colorPickerContainer')
		const listItemNewName = listItem.querySelector(".listItemTextName");
		const listItemNewColor = listItem.querySelector(
			".listItemColorDisplay"
		);
        colorPickerContainer.style.display = 'none'
		listItemNewName.textContent = newName;
		listItemNewColor.style.backgroundColor = newColor;

		console.log("new name", listItemNewName, listItemNewColor);
	}
}

function removeListItemFromDOM(listName) {
	const listItem = document.querySelector(
		`.listItem[data-list-name="${listName}"]`
	);
	if (listItem) {
		listItem.remove();
	}
}

export { updateListDropdowns, updateListItemInDOM, removeListItemFromDOM };
