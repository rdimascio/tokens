function getLayout(artboard) {
    const layout = {};
    const frame = artboard.find((item) => item.name === 'Grid');

	if (!frame || !frame.children || !frame.children.length) {
		return layout;
	}

    frame.children.forEach(item => {
        const gridObj = {
            [item.name]: {
                count: {
                    value: item.layoutGrids[0].count,
                    type: 'layout'
                },
                gutter: {
                    value: `${item.layoutGrids[0].gutterSize}px`,
                    type: 'layout'
                },
                offset: {
                    value: `${item.layoutGrids[0].offset}px`,
                    type: 'layout'
                }
            }
        };

        Object.assign(grids, gridObj);
    });

    return grids;
}