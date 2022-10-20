onEvent('recipes', event => {

    event.recipes.createCrushing([
        '4x kubejs:machine_scraps',
        Item.of('kubejs:machine_scraps').withChance(0.5)
    ], '#elysia:machine/crushable')

})