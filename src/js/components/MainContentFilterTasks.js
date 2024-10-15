
function createFilterTaskContainer(){
    const filterTasksContainer = document.createElement('div')
    filterTasksContainer.className = 'filterTasksContainer'

    const filterTasksSelect = document.createElement('select')
    filterTasksSelect.className = 'filterTasksSelect'
    filterTasksContainer.appendChild(filterTasksSelect)

    const defaultOption = document.createElement("option");
	defaultOption.value = "Filter";
	defaultOption.selected = true;
	defaultOption.disabled = true;
	filterTasksSelect.appendChild(defaultOption);

    const sortOptions = [
		{ value: "dateDesc", text: "Date (Newest First)" },
		{ value: "dateAsc", text: "Date (Oldest First)"},
		{ value: "priorityHigh", text: "Priority (High to Low)"},
		{ value: "priorityLow", text: "Priority (Low to High)"},
	];

    sortOptions.forEach(option => {
        const optionElement = document.createElement('option')
        optionElement.className = 'otpionElementFilterTasks'
        optionElement.value = option.value
        optionElement.textContent = option.text

        filterTasksSelect.appendChild(optionElement)
    })
    return filterTasksContainer
}

export {createFilterTaskContainer}