let userLists = {};

function addNewList(name, color) {
	if (userLists[name]) return false;
	userLists[name] = {
		listId: Date.now().toString(),
		name,
		color,
		tasks: [],
	};
	saveListToStorage();
	console.log("userlist", userLists);
	return true;
}

function getLists() {
	return Object.values(userLists);
}
function getListsRealObject() {
	return {...userLists};
}

function deleteList(name) {
	if (!userLists[name]) return false;
	delete userLists[name];
	saveListToStorage();
	return true;
}

function saveListToStorage(list) {
	localStorage.setItem("userLists", JSON.stringify(userLists));
}

function loadListsFromStorage() {
	const stored = localStorage.getItem("userLists");
	if (stored) {
		userLists = JSON.parse(stored);
	}
	console.log("Lists loaded from storage:", userLists);
}

function updateListProperties(oldName, newName, newColor) {
	if (oldName !== newName && userLists[newName]) {
		return false; // New name already exists
	}

	const list = userLists[oldName];
	if (!list) return false;

	delete userLists[oldName];
	userLists[newName] = {
		...list,
		name: newName,
		color: newColor,
	};

	saveListToStorage();
	console.log("new list properties", userLists);
	return true;
}

function getListIdNewTaskModal() {
	const listDropdown = document.querySelector(".listsDropdown");
	if (!listDropdown) {
		console.error("List dropdown not found");
		return null;
	}

	const selectedList = listDropdown.value;
	if (!selectedList) {
		console.error("No list selected", selectedList);
		return null;
	}

	const list = Object.values(userLists).find(
		(list) => list.name === selectedList
	);
	if (list) {
        return list.listId;
	}

}

function addTaskToList(task) {
    //get current list option id when submiting new task
    const listId = getListIdNewTaskModal();
    const list = Object.values(userLists).find(
		(list) => list.listId === listId
	);
    console.log('list', list );
    
	if (list) {
		list.tasks.push(task);
		saveListToStorage();
        console.log("Task added successfully to list:", listId)
        return true
	} else {
		console.log("list not found");
	}
}
export {
	addNewList,
	getLists,
	deleteList,
	loadListsFromStorage,
	updateListProperties,
	saveListToStorage,
	getListsRealObject,
	getListIdNewTaskModal,
	addTaskToList,
};
