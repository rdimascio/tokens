const getSpacing = (artboard) => {
	const spacing = {};
	const frame = artboard.find(item => item.name === 'Grid');

	if (!frame || !frame.children || !frame.children.length) {
		return spacing;
	}

	frame.children.forEach((item) => {
		Object.assign(spacing, {
			[item.name]: {
				value: `${item.absoluteBoundingBox.height}px`,
				type: 'spacing',
			},
		});
	});

	return spacing;
}

module.exports = {
	getSpacing,
};