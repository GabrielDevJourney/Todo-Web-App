let userLists = {}

function addNewList(name,color){
    if(userLists[name]) return false
    userLists[name] = {
        name,
        color,
        tasks: []
    }
    saveListToStorage()
    return true
}

function getLists(){
    return Object.values(userLists)
}

function deleteList(name){
    if(!userLists[name]) return false
    delete userLists[name]
    saveListToStorage()
    return true
}

function saveListToStorage(){
    localStorage.setItem('userLists', JSON.stringify(userLists))
}

function loadListsFromStorage() {
	const stored = localStorage.getItem("userLists");
	if (stored) {
		userLists = JSON.parse(stored);
	}
}

export {
    addNewList,
    getLists,
    deleteList,
    loadListsFromStorage
}