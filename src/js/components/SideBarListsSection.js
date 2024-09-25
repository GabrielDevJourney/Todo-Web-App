import addIcon from "../../../src/assets/addCircleIcon.svg";
import { getLists, loadListsFromStorage } from "../data/listsManager.js";
import { createListItem } from "./SideBarListItem.js";

function createSidebarListSection() {
	const listSectionContainer = document.createElement("div");
	listSectionContainer.className = "listSectionContainer";

	const listSectionHeaderContainer = document.createElement("div");
	listSectionHeaderContainer.className = "listSectionHeaderContainer";
	listSectionContainer.appendChild(listSectionHeaderContainer)

	const listHeaderText = document.createElement("p");
	listHeaderText.className = "listHeaderText";
	listHeaderText.textContent = "Lists";
	listSectionHeaderContainer.appendChild(listHeaderText);

	const addNewListBtn = document.createElement("button");
	addNewListBtn.className = "addNewListBtn";
	listSectionHeaderContainer.appendChild(addNewListBtn);

	const addNewListBtnIcon = document.createElement("img");
	addNewListBtnIcon.className = "addNewListBtnIcon";
	addNewListBtnIcon.src = addIcon;
	addNewListBtnIcon.alt = "Icon of a plus sign with dotted top left decor";
	addNewListBtn.appendChild(addNewListBtnIcon);

	const listsView = createListsViewSection();
	listsView.className = "listsView";
	listSectionContainer.appendChild(listsView);

	return listSectionContainer;
}

function createListsViewSection() {
	const listsContainer = document.createElement("div");
	listsContainer.className = "listsContainer";

	function renderLists() {
		listsContainer.innerHTML = "";
		const lists = getLists();
		lists.forEach((list) => {
			const listItem = createListItem(list);
			listsContainer.appendChild(listItem);
		});
	}

	loadListsFromStorage();
	renderLists();

	return listsContainer;
}

const sidebarListsSection = createSidebarListSection();
export { sidebarListsSection };
