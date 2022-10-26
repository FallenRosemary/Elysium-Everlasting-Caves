onEvent('recipes', event => {

    event.recipes.create.mixing('6x kubejs:seared_blend',[
		'kubejs:pile_sand',
        'kubejs:pile_gravel',
        'minecraft:clay_ball',
 	 	Fluid.of('minecraft:water',125),
	])//.heated()

    event.recipes.create.mixing('6x architects_palette:algal_blend',[
		'#forge:dusts/ash',
        'thermal:phytogro',
        'minecraft:clay_ball',
 	 	Fluid.of('tinkers_reforged:molten_kelp',125),
	])//.superheated()

    event.recipes.create.mixing([
        Item.of('2x thermal:sulfur_dust').withChance(0.75),
        Item.of('2x minecraft:gunpowder').withChance(0.75),
        Item.of('3x thermal:sulfur_dust').withChance(0.5),
        Item.of('3x minecraft:gunpowder').withChance(0.5),
        'caupona:soot',
    ],[
		'kubejs:glowberry_paste',
	]).heated()
})