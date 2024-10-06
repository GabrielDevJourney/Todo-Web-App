import listItemEditIconCollapse from "../../../src/assets/listEditIcon_Collapse.svg";

export function colapseSidebar() {
	const sidebarContainer = document.querySelector(".sidebarMainContainer");
	sidebarContainer.classList.add("collapsed-sidebar");

	const listColorDisplays = document.querySelectorAll(
		".listItemColorDisplay"
	);
	const listEditBtns = document.querySelectorAll(".listItemEditBtn");

	const listItemEditBtnIcon = document.querySelectorAll(
		".listItemEditBtnIcon"
	);

	listColorDisplays.forEach((displayEl, index) => {
		if (displayEl && listEditBtns[index] && listItemEditBtnIcon[index]) {
			// Update the icon
			listItemEditBtnIcon[index].src = listItemEditIconCollapse;

			// Move the edit button
			displayEl.appendChild(listEditBtns[index]);
		}
	});
}

export function expandSidebar() {
	const sidebarContainer = document.querySelector(".sidebarMainContainer");
	sidebarContainer.classList.remove("collapsed-sidebar");
}
