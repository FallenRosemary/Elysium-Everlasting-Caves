onEvent('recipes', event => {

    event.recipes.create.compacting(Fluid.of('thermal:latex', 100),[
		'minecraft:sea_pickle',
	])

    event.recipes.create.compacting(Fluid.of('thermal:latex', 50),[
		'minecraft:vine',
	])

    event.recipes.create.compacting('thermal:rubber',[
        Fluid.of('thermal:latex', 250),
	])

    event.recipes.create.compacting([
        '2x kubejs:salt',
        Item.of('2x kubejs:salt').withChance(0.5)
    ],[
        Fluid.of('minecraft:water', 1000)
    ]).heated()
})