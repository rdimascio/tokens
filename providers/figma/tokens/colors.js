const getColors = (artboard) => {
	const palette = {};
	const frame = artboard.find((item) => item.name === 'Colors');

	if (!frame || !frame.children || !frame.children.length) {
		return palette;
	}

	const rbaObj = (obj) => item.fills[0].color[obj] * 255;

	frame.children.forEach((item) => {
		const colorObj = {
			[item.name]: {
				value: `rgba(${rbaObj('r')}, ${rbaObj('g')}, ${rbaObj('b')}, ${item.fills[0].color.a})`,
				type: "color"
			},
		};

		Object.assign(palette, colorObj);
	});

	return palette;
};

module.exports = {
	getColors,
};