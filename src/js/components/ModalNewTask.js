import { prioritiesArray } from "../data/prioritiesManager";
import { getLists } from "../data/listsManager";
import { dropdownItems } from "../data/newTaskModalDropItemsManager";
import { handleTaskSubmit } from "../data/tasksManager";
import addTaskModalExitIcon from "../../../src/assets/exitIcon.png";
import {
	formatDateToDisplay,
	setMaxDateForInput,
	setMinDateForInput,
	getToday,
	defaultDateFormat,
	parseDate,
} from "../data/dateHandler";

let currentModalInstance = null;
//export
function createNewTaskModal() {
	const addNewTaskModalContainer = document.createElement("div");
	addNewTaskModalContainer.style.display = "block";
	addNewTaskModalContainer.className = "addNewTaskModalContainer";

	const headerAndExitContainer = document.createElement("div");
	headerAndExitContainer.className = "headerAndExitContainer";
	addNewTaskModalContainer.appendChild(headerAndExitContainer);

	const addNewTaskModalHeaderText = document.createElement("p");
	addNewTaskModalHeaderText.className = "addNewTaskModalHeaderText";
	addNewTaskModalHeaderText.textContent = "New Task";
	headerAndExitContainer.appendChild(addNewTaskModalHeaderText);

	const addNewTaskModalExitBtn = document.createElement("button");
	addNewTaskModalExitBtn.className = "addNewTaskModalExitBtn";
	addNewTaskModalExitBtn.addEventListener("click", () => {
		closeNewTaskModal();
	});
	headerAndExitContainer.appendChild(addNewTaskModalExitBtn);

	const addNewTaskModalExitIcon = document.createElement("img");
	addNewTaskModalExitIcon.className = "addNewTaskModalExitIcon";
	addNewTaskModalExitIcon.src = addTaskModalExitIcon;
	addNewTaskModalExitBtn.appendChild(addNewTaskModalExitIcon);

	const addNewTaskModalNameAndDescription = document.createElement("div");
	addNewTaskModalNameAndDescription.className =
		"addNewTaskModalNameAndDescription";
	addNewTaskModalContainer.appendChild(addNewTaskModalNameAndDescription);

	const addNewTaskModalInputTaskName = document.createElement("input");
	addNewTaskModalInputTaskName.className = "addNewTaskModalInputTaskName";
	addNewTaskModalInputTaskName.placeholder = "Task Name";
	addNewTaskModalNameAndDescription.appendChild(addNewTaskModalInputTaskName);

	const addNewTaskModalInputTaskDescription = document.createElement("input");
	addNewTaskModalInputTaskDescription.className =
		"addNewTaskModalInputTaskDescription";
	addNewTaskModalInputTaskDescription.placeholder = "Task Description";
	addNewTaskModalNameAndDescription.appendChild(
		addNewTaskModalInputTaskDescription
	);

	const taskPropertiesContainer = document.createElement("div");
	taskPropertiesContainer.className = "taskPropertiesContainer";
	addNewTaskModalContainer.appendChild(taskPropertiesContainer);

	dropdownItems.forEach((item) => {
		const itemCotainer = createItemsContainer(
			item.icon,
			item.label,
			item.type
		);
		taskPropertiesContainer.appendChild(itemCotainer);
		itemCotainer.className = `itemCotainer${item.label}`;
	});

	const newTaskSubmitBtn = document.createElement("button");
	newTaskSubmitBtn.className = "newTaskSubmitBtn";
	newTaskSubmitBtn.type = "submit";
	newTaskSubmitBtn.value = "Add Task";
	newTaskSubmitBtn.textContent = "Add Task";
	newTaskSubmitBtn.addEventListener("click", (event) => {
		console.log("handletasksubmit", new Date().toISOString());

		event.preventDefault();
		handleTaskSubmit(event);
	});
	addNewTaskModalContainer.appendChild(newTaskSubmitBtn);

	return addNewTaskModalContainer;
}

function createItemsContainer(icon, label, inputType) {
	const newTaskModalItemContainer = document.createElement("div");
	newTaskModalItemContainer.className = "newTaskModalItemContainer";

	const iconAndTextContainer = createIconLabel(icon, label);
	newTaskModalItemContainer.appendChild(iconAndTextContainer);

	const inputContainer = createInput(inputType);
	newTaskModalItemContainer.appendChild(inputContainer);

	return newTaskModalItemContainer;
}

function createIconLabel(icon, label) {
	const iconAndLabelContainer = document.createElement("div");
	iconAndLabelContainer.className = "iconLabelContainer";

	const iconElement = document.createElement("img");
	iconElement.src = icon;
	iconElement.alt = label;
	iconAndLabelContainer.appendChild(iconElement);

	const labelElement = document.createElement("span");
	labelElement.className = "newTaskLabelText";
	labelElement.textContent = label;
	iconAndLabelContainer.appendChild(labelElement);

	return iconAndLabelContainer;
}

function createInput(type) {
	switch (type) {
		case "priority":
			return createPriorityDropdown();
		case "dueDate":
			return createDatePicker();
		case "list":
			return createListDropdown();
		default:
			console.log("no lists available");
			return document.createElement("div");
	}
}

function createPriorityDropdown() {
	const selectDropdown = document.createElement("select");
	selectDropdown.className = "priorityeDropdown";
	prioritiesArray.forEach((priority) => {
		const option = document.createElement("option");
		option.className = "optionSelected";
		option.value = priority.priorityLevel.toLowerCase();
		option.textContent = priority.priorityLevel;
		selectDropdown.appendChild(option);
	});
	return selectDropdown;
}

function createDatePicker() {
	const dateInputContainer = document.createElement("div");
	dateInputContainer.className = "dateInputContainer";

	const dateDisplay = document.createElement("div");
	dateDisplay.className = "dateDisplay";
	dateInputContainer.appendChild(dateDisplay);

	const dateInput = document.createElement("input");
	dateInput.className = "dateInput";
	dateInput.type = "date";
	dateInputContainer.appendChild(dateInput);

	const today = getToday();
	dateInput.value = defaultDateFormat(today);

	dateInput.min = setMinDateForInput(today);

	const maxDate = setMaxDateForInput(today);
	dateInput.max = defaultDateFormat(maxDate);

	updateDateDisplayContainer(today);

	dateInput.addEventListener("change", (e) => {
		const selectedDate = parseDate(e.target.value);
		console.log("selected date", formatDateToDisplay(selectedDate));
		updateDateDisplayContainer(selectedDate);
	});
	dateDisplay.addEventListener("click", () => {
		dateInput.showPicker();
	});

	function updateDateDisplayContainer(date) {
		dateDisplay.textContent = formatDateToDisplay(date);
	}
	return dateInputContainer;
}

function createListDropdown() {
	const listsDropdown = document.createElement("select");
	listsDropdown.className = "listsDropdown";

	const defaultOption = document.createElement("option");
	defaultOption.value = "";
	defaultOption.textContent = "List";
	defaultOption.disabled = true;
	defaultOption.selected = true;
	listsDropdown.appendChild(defaultOption);

	const lists = getLists();
	lists.forEach((list) => {
		const option = document.createElement("option");
		option.value = list.name;
		option.textContent = list.name;
		listsDropdown.appendChild(option);
	});

	return listsDropdown;
}
function blurSidebarMainContent() {
	const sidebarToBlur = document.querySelector(".sidebarMainContainer");
	const mainContentToBlur = document.querySelector(".mainContentContainer");

	sidebarToBlur.classList.add("blurred");
	mainContentToBlur.classList.add("blurred");
}
function unblurSidebarMainContent() {
	const sidebarToBlur = document.querySelector(".sidebarMainContainer");
	const mainContentToBlur = document.querySelector(".mainContentContainer");

	sidebarToBlur.classList.remove("blurred");
	mainContentToBlur.classList.remove("blurred");
}

function showNewTaskModal() {
    blurSidebarMainContent()

	if (currentModalInstance) {
		document.body.removeChild(currentModalInstance);
	}

	currentModalInstance = createNewTaskModal();
	document.body.appendChild(currentModalInstance);

	// Set default values
	const dateInput = currentModalInstance.querySelector(".dateInput");
	if (dateInput) {
		const today = getToday();
		dateInput.value = defaultDateFormat(today);
		formatDateToDisplay(today);
	}

	const priorityDropdown =
		currentModalInstance.querySelector(".priorityeDropdown");
	if (priorityDropdown) {
		priorityDropdown.selectedIndex = 0;
	}

	const listDropdown = currentModalInstance.querySelector(".listsDropdown");
	if (listDropdown) {
		listDropdown.selectedIndex = 0;
	}
}

function closeNewTaskModal() {
	if (currentModalInstance) {
		document.body.removeChild(currentModalInstance);
		currentModalInstance = null;
        unblurSidebarMainContent()
	}
}

//todo add this fucntionality to the exit modal btn
// function exitAndClearInputsNewTaskModal() {}

export { createNewTaskModal, closeNewTaskModal, showNewTaskModal, blurSidebarMainContent, unblurSidebarMainContent };
export const getTaskNameElement = () => {
	const element = document.querySelector(".addNewTaskModalInputTaskName");
	if (!element) console.error("Task name element not found");
	return element;
};
export const getTaskDescriptionElement = () => {
	const element = document.querySelector(
		".addNewTaskModalInputTaskDescription"
	);
	if (!element) console.error("Task name element not found");
	return element;
};
export const getTaskPriorityElement = () => {
	const element = document.querySelector(".priorityeDropdown");
	if (!element) console.error("Task name element not found");
	return element;
};
export const getTaskDueDateElement = () => {
	const element = document.querySelector(".dateInput");
	if (!element) console.error("Task name element not found");
	return element;
};
export const getTaskListElement = () => {
	const element = document.querySelector(".listsDropdown");
	if (!element) console.error("Task name element not found");
	return element;
};
export const getNewTaskModaContainer = () => {
	const element = document.querySelector(".addNewTaskModalContainer");
	if (!element) console.error("Task name element not found");
	return element;
};
