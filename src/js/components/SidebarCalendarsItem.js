import { calendarsTypes } from "../data/calendarsManager"

export function generateSidebarItems(itemsArray){
    const calendarsViewContainer =  document.createElement('div')
    calendarsViewContainer.className =  'calendarsViewContainer'

    itemsArray.forEach(item => {
        const sidebarItem = createSidebarCalendarsItem(item)
        calendarsViewContainer.appendChild(sidebarItem)
    })

    return calendarsViewContainer

}

function createSidebarCalendarsItem(item) {
	const { name, icon } = item;

	const sidebarCalendarsItem = document.createElement("div");
	sidebarCalendarsItem.className = `sidebarCalendarsItem sidebarCalendarsItem${name.replace(/\s+/g, '')}`;

	const sidebarItemBtn = document.createElement("button");
	sidebarItemBtn.className = `sidebarItemBtn sidebarItemBtn${name.replace(/\s+/g, '')}`;
    sidebarCalendarsItem.appendChild(sidebarItemBtn)

	const iconElement = document.createElement("img");
	iconElement.src = icon;
	iconElement.alt = `${name} icon`;
	iconElement.className = `sidebarItemIcon${name.replace(/\s+/g, '')}`;
    sidebarItemBtn.appendChild(iconElement);

	const textElement = document.createElement("span");
	textElement.textContent = name;
	textElement.className = `sidebarItemText${name.replace(/\s+/g, "")}`;
    sidebarItemBtn.appendChild(textElement);


	return sidebarCalendarsItem;
}

const sidebarCalendarsViewContainer = generateSidebarItems(calendarsTypes);
sidebarCalendarsViewContainer.className = 'sidebarCalendarsViewContainer'

export {sidebarCalendarsViewContainer}