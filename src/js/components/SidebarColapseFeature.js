

export function colapseSidebar() {
	const sidebarContainer = document.querySelector(".sidebarMainContainer");
	sidebarContainer.classList.add("collapsed-sidebar");
}

export function expandSidebar() {
	const sidebarContainer = document.querySelector(".sidebarMainContainer");
	sidebarContainer.classList.remove("collapsed-sidebar");
}
