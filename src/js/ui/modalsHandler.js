function updateListItemInDOM(oldName, newName, newColor) {
	const listItem = document.querySelector(
		`.listItem[data-list-name="${oldName}"]`
	);
	if (listItem) {
		listItem.dataset.listName = newName;

        const colorPickerContainer = document.querySelector(
			".colorPickerContainerEditList"
		);
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

export { updateListItemInDOM, removeListItemFromDOM };
