export function createTaskItemDetailsContainer() {
	const taskDetailsContainer = document.createElement("div");
	taskDetailsContainer.className = taskDetailsContainer;

	const taskNameDescriptionContainer = document.createElement("div");
	taskNameDescriptionContainer.className = "taskNameDescriptionContainer";
	taskDetailsContainer.appendChild(taskNameDescriptionContainer);

	const taskNameText = document.createElement("p");
	taskNameText.className = "taskNameText";
	//TODO implement render text from task array
	taskNameDescriptionContainer.appendChild(taskNameText);

	const taskDescriptionText = document.createElement("div");
	taskDescriptionText.className = "taskDescritpionText";
	//TODO implement render text of desc from task array
	taskNameDescriptionContainer.appendChild(taskDescriptionText);

	const taskDueDatePriotiryContainer = document.createElement("div");
	taskDueDatePriotiryContainer.className = "taskDueDatePriotiryContainer";
	taskDetailsContainer.appendChild(taskDueDatePriotiryContainer);

	const taskDueDateContainer = document.createElement("div");
	taskDueDateContainer.className = "taskDueDateContainer";
	taskDueDatePriotiryContainer.appendChild(taskDueDateContainer);

	const taskDueDateText = document.createElement("p");
	taskDueDateText.className = "taskDueDateText";
	taskDueDateText.textContent = "Due Date";
	taskDueDateContainer.appendChild(taskDueDateText);

	const taskDueDateDisplay = document.createElement("p");
	taskDueDateDisplay.className = "taskDueDateDisplay";
	//TODO implement render the date from task array
	taskDueDateContainer.appendChild(taskDueDateDisplay);

	const taskItemSeparatorLine = document.createElement("div");
	taskItemSeparatorLine.className = "taskItemSeparatorLine";
	taskDueDatePriotiryContainer.appendChild(taskItemSeparatorLine);

	const taskPriorityContainer = document.createElement("div");
	taskPriorityContainer.className = "taskPriorityContainer";
	taskDueDatePriotiryContainer.appendChild(taskPriorityContainer);

	const taskPriorityText = document.createElement("p");
	taskPriorityText.className = "taskPriorityText";
	taskPriorityText.textContent = "Priority";
	taskDueDateContainer.appendChild(taskPriorityText);

	const taskPriorityDisplay = document.createElement("img");
	taskPriorityDisplay.className = "taskPriorityDisplay";
	//TODO implement render the priority icon from task array
	taskDueDateContainer.appendChild(taskPriorityDisplay);

    return taskDetailsContainer
}
