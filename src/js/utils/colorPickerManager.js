import iro from "@jaames/iro";

const colorPickerInstances = {};

export function initializeColorPicker(
	modalId,
	containerId,
	initialColor,
	onChangeCallback
) {
	if (colorPickerInstances[modalId]) {
		// If an instance already exists for this modal, just update its color
		colorPickerInstances[modalId].color.set(initialColor);
		return colorPickerInstances[modalId];
	}

	// Create a new color picker instance
	const colorPicker = new iro.ColorPicker(`#${containerId}`, {
		width: 150,
		color: initialColor || "#849B17",
		layout: [
			{
				component: iro.ui.Box,
			},
			{
				component: iro.ui.Slider,
				options: {
					id: "hue-slider",
					sliderType: "hue",
				},
			},
		],
	});

	colorPicker.on("color:change", onChangeCallback);
	colorPickerInstances[modalId] = colorPicker;

	return colorPicker;
}

export function removeColorPicker(modalId) {
	if (colorPickerInstances[modalId]) {
		colorPickerInstances[modalId].off("color:change");

        const container = document.getElementById(
			colorPickerInstances[modalId].el.id
		);
		if (container) {
			container.innerHTML = "";
		}
        
		delete colorPickerInstances[modalId];
	}
}
