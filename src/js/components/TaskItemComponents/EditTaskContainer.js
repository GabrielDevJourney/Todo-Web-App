import editTaskIcon from "../../../assets/editTaskItemIcon.png";

export function createEditTaskContainer() {
	const editTaskContainer = document.createElement("div");
	editTaskContainer.className = "editTaskContainer";

	const editTaskBtn = document.createElement("button");
	editTaskBtn.className = "editTaskBtn";
	//TODO implement the fucntionality of opening modal of edit task
	editTaskContainer.appendChild(editTaskBtn);

	const editTaskBtnIcon = document.createElement("img");
	editTaskBtnIcon.className = "editTaskBtnIcon";
	editTaskBtnIcon.src = editTaskIcon;
	editTaskBtn.appendChild(editTaskBtnIcon);

	return editTaskContainer;
}