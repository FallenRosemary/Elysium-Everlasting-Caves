onEvent('recipes', event => {

    global.rocks.forEach((rock) => {
        event.stonecutting(`4x kubejs:brick_${rock.tagName}`, `${rock.sourcePrefix}:${rock.tagName}`)
    });`
    `
    global.woods.forEach((wood) => {
        event.stonecutting(`12x kubejs:plank_${wood.tagName}`, `${wood.sourcePrefix}:stripped_${wood.tagName}_log`)
    });
})