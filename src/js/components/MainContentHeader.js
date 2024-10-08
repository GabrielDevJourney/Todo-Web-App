import addNewTaskIcon from "../../../src/assets/addCircleIcon.svg";
function createMainContentHeader(){
    const mainContentHeaderContainer = document.createElement('div')
    mainContentHeaderContainer.className = 'mainContentHeaderContainer'

    const mainContentHeaderCalendarDisplayContainer = document.createElement('div') 
    mainContentHeaderCalendarDisplayContainer.className =
		"mainContentHeaderCalendarDisplayContainer";
    mainContentHeaderContainer.appendChild(
		mainContentHeaderCalendarDisplayContainer
	);

    const mainContentHeaderCalendaDisplayView = document.createElement('p')
    mainContentHeaderCalendaDisplayView.className =
		"mainContentHeaderCalendaDisplayView";
    mainContentHeaderCalendaDisplayView.textContent = "Inbox";
    mainContentHeaderCalendarDisplayContainer.appendChild(
		mainContentHeaderCalendaDisplayView
	);

    const mainContentHeaderCalendaDisplayDay = document.createElement('p')
    mainContentHeaderCalendaDisplayDay.className =
		"mainContentHeaderCalendaDisplayDay";
    mainContentHeaderCalendaDisplayDay.textContent = 'aaa'
    mainContentHeaderCalendarDisplayContainer.appendChild(
		mainContentHeaderCalendaDisplayDay
	);

    const mainContentHeaderAddTaskContainer = document.createElement('div')
    mainContentHeaderAddTaskContainer.className =
		"mainContentHeaderAddTaskContainer";
    mainContentHeaderContainer.appendChild(mainContentHeaderAddTaskContainer);

    const mainContentHeaderAddTaskBtn = document.createElement('button')
    mainContentHeaderAddTaskBtn.className = "mainContentHeaderAddTaskBtn";
    mainContentHeaderAddTaskContainer.appendChild(mainContentHeaderAddTaskBtn);

    const mainContentHeaderAddTaskBtnIcon = document.createElement('img')
    mainContentHeaderAddTaskBtnIcon.className = "mainContentHeaderAddTaskBtnIcon";
    mainContentHeaderAddTaskBtnIcon.src = addNewTaskIcon
    mainContentHeaderAddTaskBtn.appendChild(mainContentHeaderAddTaskBtnIcon);

    const mainContentHeaderAddTaskBtnText = document.createElement('span')
    mainContentHeaderAddTaskBtnText.className =
		"mainContentHeaderAddTaskBtnText";
    mainContentHeaderAddTaskBtnText.textContent = 'Add New Task'
    mainContentHeaderAddTaskBtn.appendChild(mainContentHeaderAddTaskBtnText);

    return mainContentHeaderContainer
}        

function getNameOfCalendar(name){
    const spanForName = document.querySelector(
		".mainContentHeaderCalendaDisplayView"
	);
    const text = name    

    if(text !== 'Add Task'){
        spanForName.textContent = text
    }
}

export {createMainContentHeader, getNameOfCalendar}