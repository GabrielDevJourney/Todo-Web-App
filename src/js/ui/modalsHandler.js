import { getLists, addNewList } from "../data/listsManager.js";

export function updateListDropdowns() {
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
