let userLists = {}

export function addNewList(name,color){
    if(userLists[name]) return false
    userLists[name] = {
        name,
        color,
        tasks: []
    }
    saveListToStorage()
    return true
}

export function getLists(){
    return Object.values(userLists)
}

export function deleteList(name){
    if(!userLists[name]) return false
    delete userLists[name]
    saveListToStorage()
    return true
}

function saveListToStorage(){
    localStorage.setItem('userLists', JSON.stringify(userLists))
}

export function loadListsFromStorage() {
	const stored = localStorage.getItem("userLists");
	if (stored) {
		userLists = JSON.parse(stored);
	}
}