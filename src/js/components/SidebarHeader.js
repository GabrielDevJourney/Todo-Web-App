import iconLogoSideBar from "../../../src/assets/logoToDoHeaderSiderBar.svg";
import colapseIcon from "../../../src/assets/sidebarColapseIcon.svg";
import openSidebarIcon from "../../../src/assets/sidebarOpenIcon.svg";
import { colapseSidebar, expandSidebar } from "./SidebarColapseFeature";

export function createSidebarHeader() {
	const logoTextColapseContainer = document.createElement("div");
	logoTextColapseContainer.className = "logoTextColapseContainer";

	const logoTextContainer = document.createElement("div");
	logoTextContainer.className = "logoTextContainer";
	logoTextColapseContainer.appendChild(logoTextContainer);

	const iconLogoSidebarHeader = document.createElement("img");
	iconLogoSidebarHeader.className = "iconLogoSidebarHeader";
	iconLogoSidebarHeader.src = iconLogoSideBar;
	iconLogoSidebarHeader.alt =
		"A list icon, color white, with two items of the list checked";
	logoTextContainer.appendChild(iconLogoSidebarHeader);

	const textSideBarHeader = document.createElement("p");
	textSideBarHeader.className = "textSideBarHeader";
	textSideBarHeader.textContent = "Action";
	logoTextContainer.appendChild(textSideBarHeader);

	const colapseAndOpenIconsContainer = document.createElement("div");
	colapseAndOpenIconsContainer.className = "colapseAndOpenIconsContainer";
	logoTextColapseContainer.appendChild(colapseAndOpenIconsContainer);

	const colapseBtn = document.createElement("button");
	colapseBtn.className = "colapseBtn";
	colapseBtn.innerHTML = `<img src="${colapseIcon}" alt="Collapse Sidebar">`;
	colapseBtn.addEventListener("click", () => {
		if (document.readyState === "complete") {
			colapseSidebar();
		} else {
			window.addEventListener("load", colapseSidebar);
		}
	});
	colapseAndOpenIconsContainer.appendChild(colapseBtn);

	const openSidebarBtn = document.createElement("button");
	openSidebarBtn.className = "openSidebarBtn";
	openSidebarBtn.innerHTML = `<img src="${openSidebarIcon}" alt="Open Sidebar">`;
	openSidebarBtn.style.display = "none";
    openSidebarBtn.addEventListener('click', expandSidebar)
	colapseAndOpenIconsContainer.appendChild(openSidebarBtn);

	return logoTextColapseContainer;
}
const sidebarHeaderContainer = createSidebarHeader();
sidebarHeaderContainer.className = "sidebarHeaderContainer";
export { sidebarHeaderContainer };
