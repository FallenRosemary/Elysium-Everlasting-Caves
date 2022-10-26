onEvent('recipes', event => {

    global.rocks.forEach((rock) => {
        event.stonecutting(`4x kubejs:brick_${rock.tagName}`, `${rock.sourcePrefix}:${rock.tagName}`)
    });
    
})