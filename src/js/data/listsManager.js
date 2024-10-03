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
	return userLists;
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
	const selectedList = document.querySelector(".listsDropdown").value;
	if (userLists[selectedList]) {
		console.log("listId", userLists[selectedList].listId);
		return userLists[selectedList].listId;
	}
	return null;
}

function addTaskToList(task) {
	const list = getLists().find((list) => list.listId === task.listId);

	if (list) {
		list.tasks.push(task);
		saveListToStorage();
	} else {
		console.log("list not found for task", task);
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
