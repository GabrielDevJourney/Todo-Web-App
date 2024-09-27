import {
	getTaskNameElement,
	getTaskDescriptionElement,
	getTaskPriorityElement,
	getTaskDueDateElement,
	getTaskListElement,
    getNewTaskModaContainer,
} from "../components/ModalNewTask";

let userTasks = [];

function getTaskProperties() {
	const taskProperties = {
		name: getTaskNameElement().value.trim(),
		description: getTaskDescriptionElement().value.trim(),
		priority: getTaskPriorityElement().value,
		dueDate: new Date(getTaskDueDateElement().value),
		list: getTaskListElement().value,
	};

	console.log("task properties", taskProperties);

	return createTask(
		taskProperties.name,
		taskProperties.description,
		taskProperties.priority,
		taskProperties.dueDate,
		taskProperties.list
	);
}

function createTask(name, description, priority, dueDate, list) {
	return {
		id: Date.now(), // Unique identifier
		name,
		description,
		priority,
		dueDate: new Date(dueDate), // Convert to Date object
		list,
		completed: false, // Default to not completed
	};
}

function addTask(task) {
	userTasks.push(task);
	saveTasksToStorage();
}

function handleTaskSubmit() {

	const newTask = getTaskProperties();
	if (newTask) {
		addTask(newTask);
		clearCloseTaskForm();
	} else {
		alert("Fill all properties");
	}

    console.log('userTasks', userTasks)
}

function clearCloseTaskForm() {
	getTaskNameElement().value = "";
	getTaskDescriptionElement().value = "";
	getTaskPriorityElement().value = ""; // Or set to default
	getTaskDueDateElement().value = ""; // Or set to today
	getTaskListElement().value = "";
    const newTaskModal = getNewTaskModaContainer()
    newTaskModal.style.display = 'none'
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
    const storedTasks = localStorage.getItem('userTasks');
    if (storedTasks) {
        try {
            userTasks = JSON.parse(storedTasks);
            
            // Convert date strings back to Date objects
            userTasks = userTasks.map(task => ({
                ...task,
                dueDate: new Date(task.dueDate)
            }));

            console.log('Tasks loaded from storage:', userTasks);
        } catch (error) {
            console.error('Error parsing tasks from storage:', error);
            userTasks = [];
        }
    } else {
        console.log('No tasks found in storage');
        userTasks = [];
    }
}

export { getTaskProperties, loadTasksFromStorage, handleTaskSubmit };
