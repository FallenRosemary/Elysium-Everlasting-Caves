onEvent('tags.items',(event) => {

    const tagAdd = [
        {
            add:'thermal:explosive_grenade',
            tag:'lychee:explosives',
        },
    ]

    tagAdd.forEach((tag) => {
        event.add(`${tag.tag}`, `${tag.add}`)
    })

    global.woods.forEach((wood) => {
        event.add(`elysia:plank/all`, `kubejs:plank_${wood.tagName}`)
    });

    global.rocks.forEach((rock) => {
        event.add(`elysia:brick/all`, `kubejs:brick_${rock.tagName}`)
    });

    const machineCrushable = [
        'furnace',
        'sawmill',
        'pulverizer',
        'smelter',
        'insolator',
        'centrifuge',
        'press',
        'crucible',
        'chiller',
        'refinery',
        'pyrolyzer',
        'bottler',
        'brewer',
        'crystallizer',
        'crafter',
    ]

    machineCrushable.forEach((machine) => {
        event.add(`elysia:machine/crushable`, `thermal:machine_${machine}`)
    });
})