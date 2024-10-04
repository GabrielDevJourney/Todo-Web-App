export function colapseSidebar() {
    const sidebarHeaderTextToHide =
        document.querySelector(".textSideBarHeader");
    
    const sidebarCalendarsText = document.querySelectorAll(".sidebarItemText ");
    
    const sidebarListViewSectionHeaderTextToHide =
        document.querySelector(".listHeaderText");
    
    const sidebarListViewListsNameToHide =
        document.querySelectorAll(".listItemTextName");
    
    const colapseBtn = document.querySelector(".colapseBtn");
    const openSidebarBtn = document.querySelector(".openSidebarBtn");

    
    if(sidebarHeaderTextToHide){
        sidebarHeaderTextToHide.style.display = 'none'
    }

	sidebarCalendarsText.forEach((el) => {
		if (el) el.style.display = "none";
	});

	if (sidebarListViewSectionHeaderTextToHide)
		sidebarListViewSectionHeaderTextToHide.style.display = "none";

	sidebarListViewListsNameToHide.forEach((el) => {
		if (el) el.style.display = "none";
	});

	if (colapseBtn) colapseBtn.style.display = "none";
	if (openSidebarBtn) openSidebarBtn.style.display = "block";
}
