onEvent('recipes', event => {

    event.recipes.create.mixing('6x kubejs:seared_blend',[
		'kubejs:pile_sand',
        'kubejs:pile_gravel',
        'minecraft:clay_ball',
 	 	Fluid.of('minecraft:water',125),
	])

    event.recipes.create.mixing('6x architects_palette:algal_blend',[
		'#forge:dusts/ash',
        'thermal:phytogro',
        'minecraft:clay_ball',
 	 	Fluid.of('tinkers_reforged:molten_kelp',125),
	])

    event.recipes.create.mixing([
        Item.of('2x thermal:sulfur_dust').withChance(0.75),
        Item.of('2x minecraft:gunpowder').withChance(0.75),
        Item.of('3x thermal:sulfur_dust').withChance(0.5),
        Item.of('3x minecraft:gunpowder').withChance(0.5),
        'caupona:soot',
    ],[
		'kubejs:glowberry_paste',
	]).heated()

    event.recipes.create.mixing([
        '3x thermal:cured_rubber',
        'caupona:soot',
    ],[
		'2x thermal:rubber',
        'thermal:sulfur'
	]).heated()

    event.recipes.create.mixing(Fluid.of('kubejs:crystal_growing_solution', 250)
    ,[
        Fluid.of('minecraft:water', 250),
        'kubejs:salt',
        'ae2:sky_dust'
    ])

    event.recipes.create.mixing([
        Item.of('minecraft:bone').withChance(0.5),
        Item.of('alexsmobs:bone_serpent_tooth').withChance(0.05),
        Item.of('alexsmobs:fish_bones').withChance(0.75),
        Item.of('minecraft:nautilus_shell').withChance(0.25),
        Item.of('ecologics:seashell').withChance(0.25),
        Fluid.of('minecraft:water', 500)
    ],[
        Fluid.of('kubejs:crystal_growing_solution', 1000),
        'minecraft:calcite'
    ])
})