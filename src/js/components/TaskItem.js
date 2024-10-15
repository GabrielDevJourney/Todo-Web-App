import { createItemCheckContainer } from "./TaskItemComponents/CheckContainer";
import { createEditTaskContainer } from "./TaskItemComponents/EditTaskContainer";
import { createTaskItemDetailsContainer } from "./TaskItemComponents/TaskInfoContainer";

export function createTaskItem(task){
    const taskItemViewContainer = document.createElement('div')
    taskItemViewContainer.className = "taskItemViewContainer";

    const checkContainer = createItemCheckContainer()
    checkContainer.className = 'checkContainer'
    taskItemViewContainer.appendChild(checkContainer)

    const taskDetailsContainer = createTaskItemDetailsContainer()
    taskDetailsContainer.className = 'taskDetailsContainer'
    taskItemViewContainer.appendChild(taskDetailsContainer)

    const editTaskContainer = createEditTaskContainer()    
    editTaskContainer.className = "editTaskContainer";
    taskItemViewContainer.appendChild(editTaskContainer)

    return taskItemViewContainer
}