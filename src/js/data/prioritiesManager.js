import noPriorityIcon from '../../../src/assets/noPriorityTaskIcon.svg'
import lowPriorityIcon from "../../../src/assets/lowPriorityTaskIcon.svg";
import mediumPriorityIcon from "../../../src/assets/mediumPriorityTaskIcon.svg";
import highPriorityIcon from "../../../src/assets/highPriorityTaskIcon.svg";
import urgentPriorityIcon from "../../../src/assets/urgentPriorityTaskIcon.svg";

const prioritiesArray = [
	{
        priorityLevel: "No",
        icon: noPriorityIcon
	},
	{
        priorityLevel: "Low",
        icon: lowPriorityIcon
	},
	{
        priorityLevel: "Medium",
        icon: mediumPriorityIcon
	},
	{
        priorityLevel: "High",
        icon: highPriorityIcon
	},
	{
        priorityLevel: "Urgent",
        icon: urgentPriorityIcon
	},
];

export {prioritiesArray}