import { prioritiesArray } from "../data/prioritiesManager";
import { format, addDays, parse} from "date-fns";
import { updateListDropdowns } from "../ui/modalsHandler";
import { dropdownItems } from "../data/newTaskModalDropItemsManager";
import {  handleTaskSubmit } from "../data/tasksManager";
import addTaskModalExitIcon from '../../../src/assets/exitIcon.png'
import {formatDateToDisplay,setMaxDateForInput, setMinDateForInput,getToday, defaultDateFormat,parseDate} from '../data/dateHandler'

//export
function createNewTaskModal() {
	const addNewTaskModalContainer = document.createElement("div");
    addNewTaskModalContainer.style.display = 'block'
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
    addNewTaskModalExitBtn.addEventListener('click', () => {
        addNewTaskModalContainer.style.display = 'none'
    })
	headerAndExitContainer.appendChild(addNewTaskModalExitBtn);

    const addNewTaskModalExitIcon = document.createElement('img')
    addNewTaskModalExitIcon.className = 'addNewTaskModalExitIcon'
    addNewTaskModalExitIcon.src = addTaskModalExitIcon
    addNewTaskModalExitBtn.appendChild(addNewTaskModalExitIcon)

	const addNewTaskModalNameAndDescription = document.createElement("div");
	addNewTaskModalNameAndDescription.className = "addNewTaskModalNameAndDescription";   
    addNewTaskModalContainer.appendChild(addNewTaskModalNameAndDescription)

	const addNewTaskModalInputTaskName = document.createElement("input");
	addNewTaskModalInputTaskName.className = "addNewTaskModalInputTaskName";
    addNewTaskModalInputTaskName.placeholder = 'Task Name'
	addNewTaskModalNameAndDescription.appendChild(addNewTaskModalInputTaskName);

	const addNewTaskModalInputTaskDescription = document.createElement("input");
	addNewTaskModalInputTaskDescription.className =
		"addNewTaskModalInputTaskDescription";
    addNewTaskModalInputTaskDescription.placeholder = 'Task Description'
	addNewTaskModalNameAndDescription.appendChild(
		addNewTaskModalInputTaskDescription
	);

	const taskPropertiesContainer = document.createElement("div");
	taskPropertiesContainer.className = "taskPropertiesContainer";
    addNewTaskModalContainer.appendChild(taskPropertiesContainer);

	dropdownItems.forEach(item => {
        const itemCotainer = createItemsContainer(item.icon, item.label, item.type)
        taskPropertiesContainer.appendChild(itemCotainer)
        itemCotainer.className = `itemCotainer${item.label}`
    })

    const newTaskSubmitBtn = document.createElement('button')
    newTaskSubmitBtn.className = 'newTaskSubmitBtn'
    newTaskSubmitBtn.type = 'submit'
    newTaskSubmitBtn.value = 'Add Task'
    newTaskSubmitBtn.textContent = 'Add Task'
    newTaskSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault()
        handleTaskSubmit()
    })
    addNewTaskModalContainer.appendChild(newTaskSubmitBtn)


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
    labelElement.className = 'newTaskLabelText'
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
            return document.createElement('div')
	}
}

function createPriorityDropdown() {
	const selectDropdown = document.createElement("select");
	selectDropdown.className = "priorityeDropdown";
	prioritiesArray.forEach((priority) => {
		const option = document.createElement("option");
        option.className = 'optionSelected'
		option.value = priority.priorityLevel.toLowerCase();
		option.textContent = priority.priorityLevel;
		selectDropdown.appendChild(option);
	});
	return selectDropdown;
}

function createDatePicker() {
    const dateInputContainer = document.createElement('div')
    dateInputContainer.className = 'dateInputContainer'

    const dateDisplay = document.createElement("div");
	dateDisplay.className = "dateDisplay";
	dateInputContainer.appendChild(dateDisplay);

	const dateInput = document.createElement("input");
	dateInput.className = "dateInput";
	dateInput.type = "date";
    dateInputContainer.appendChild(dateInput)
    
	const today = getToday();
	dateInput.value = defaultDateFormat(today);

	dateInput.min = setMinDateForInput(today);

	const maxDate = setMaxDateForInput(today)
	dateInput.max = defaultDateFormat(maxDate);

    updateDateDisplayContainer(today)

	dateInput.addEventListener("change", (e) => {
		const selectedDate = parseDate(e.target.value)
		console.log("selected date", formatDateToDisplay(selectedDate));
        updateDateDisplayContainer(selectedDate)
	});
    dateDisplay.addEventListener("click", () => {
		dateInput.showPicker();
	});

    function updateDateDisplayContainer(date){
        dateDisplay.textContent = formatDateToDisplay(date)
    }
	return dateInputContainer;
}

function createListDropdown() {
	const listsDropdown = document.createElement("select");
	listsDropdown.className = "listsDropdown";

	const defaultOption = document.createElement("option");
	defaultOption.value = "";
	defaultOption.textContent = "Select a list";
	defaultOption.disabled = true;
	defaultOption.selected = true;
	listsDropdown.appendChild(defaultOption);

	updateListDropdowns(listsDropdown);

	return listsDropdown;
}


//todo add this fucntionality to the exit modal btn
// function exitAndClearInputsNewTaskModal() {}

export { createNewTaskModal };
export const getTaskNameElement = () =>
	document.querySelector(".addNewTaskModalInputTaskName");
export const getTaskDescriptionElement = () =>
	document.querySelector(".addNewTaskModalInputTaskDescription");
export const getTaskPriorityElement = () =>
	document.querySelector(".priorityeDropdown");
export const getTaskDueDateElement = () => document.querySelector(".dateInput");
export const getTaskListElement = () =>
	document.querySelector(".listsDropdown");
export const getNewTaskModaContainer = () => document.querySelector(
	".addNewTaskModalContainer"
);