import noPriorityIcon from '../../../src/assets/noPriorityTaskIcon.png'
import lowPriorityIcon from "../../../src/assets/lowPriorityTaskIcon.png";
import mediumPriorityIcon from "../../../src/assets/mediumPriorityTaskIcon.png";
import highPriorityIcon from "../../../src/assets/highPriorityTaskIcon.png";
import urgentPriorityIcon from "../../../src/assets/urgentPriorityTaskIcon.png";

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