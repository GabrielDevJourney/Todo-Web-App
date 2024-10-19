import {
	getTaskNameElement,
	getTaskDescriptionElement,
	getTaskPriorityElement,
	getTaskDueDateElement,

} from "../components/ModalNewTask";
import { getListIdNewTaskModal, addTaskToList } from "./listsManager";
import { closeNewTaskModal } from "../components/ModalNewTask";

let userTasks = [];

function getTaskProperties() {
	const taskProperties = {
		name: getTaskNameElement().value.trim(),
		description: getTaskDescriptionElement().value.trim(),
		priority: getTaskPriorityElement().value,
		dueDate: new Date(getTaskDueDateElement().value),
		listId: getListIdNewTaskModal() || null
	};

	console.log("task properties", taskProperties);

	return createTask(
		taskProperties.name,
		taskProperties.description,
		taskProperties.priority,
		taskProperties.dueDate,
		taskProperties.listId
	);
}

function createTask(name, description, priority, dueDate, listId) {
	return {
		id: Date.now().toString(), // Unique identifier
		name,
		description,
		priority,
		dueDate: new Date(dueDate), // Convert to Date object
		listId: listId || null,
		completed: false, // Default to not completed
	};
}

function addTask(task) {
	userTasks.push(task);
	saveTasksToStorage();
}

function handleTaskSubmit() {
	const newTask = getTaskProperties();
	if (newTask && newTask.name.trim()) {
		addTask(newTask);
		addTaskToList(newTask);
		closeNewTaskModal();
		return newTask;
	} else {
		alert("Fill name of task please!");
		return null;
	}
}

function saveTasksToStorage() {
	try {
		localStorage.setItem("userTasks", JSON.stringify(userTasks));
		console.log("Tasks saved to storage");
	} catch (error) {
		console.error("Error saving tasks to storage:", error);
	}
}


function loadTasksFromStorage() {
	const storedTasks = localStorage.getItem("userTasks");
	if (storedTasks) {
		try {
			userTasks = JSON.parse(storedTasks);

			// Convert date strings back to Date objects
			userTasks = userTasks.map((task) => ({
				...task,
				dueDate: new Date(task.dueDate),
			}));

			console.log("Tasks loaded from storage:", userTasks);
		} catch (error) {
			console.error("Error parsing tasks from storage:", error);
			userTasks = [];
		}
	} else {
		console.log("No tasks found in storage");
		userTasks = [];
	}
}
function clearUserTasks() {
	userTasks = [];
}

export {
	getTaskProperties,
	loadTasksFromStorage,
	handleTaskSubmit,
	clearUserTasks,
};
