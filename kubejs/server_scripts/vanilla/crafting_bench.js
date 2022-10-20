onEvent('recipes', event => {
	// Recipes Add Shaped
	event.shaped('1x bloodmagic:altar',[
		'   ',
		'BCB',
		'BDB',
	],{
		B: 'architects_palette:abyssaline_bricks',
		C: 'minecraft:conduit',
		D: '#botania:runes'
	})
	event.shaped('1x malum:spirit_altar',[
		'   ',
		'BCB',
		'DED'
	],{
 		B: '#forge:gears/gold',
		C: 'minecraft:conduit',
		D: 'malum:runewood_log',
		E: 'malum:runewood_planks'
	})
	event.shaped('8x create:andesite_casing',[
		' B ',
		'ADA',
		' B '
	],{
		A: 'kubejs:screw_basic',
		B: '#elysia:plank/all',
		D: 'kubejs:andesite_lined_daub'
	})
	event.shaped('8x create:brass_casing',[
		'CBC',
		'ADA',
		'CBC'
	],{
		A: 'kubejs:screw_basic',
		B: 'kubejs:plank_livingwood',
		C: 'minecraft:air',
		D: 'kubejs:brass_lined_sunmetal'
	})
	event.shaped('4x kubejs:sunmetal',[
		'AAB',
		'AAB',
		'BBB'
	],{
		A: 'architects_palette:sunmetal_blend',
		B: 'minecraft:air',
	})
	event.shaped('2x kubejs:andesite_diy',[
		'ABA',
		'CDC',
		'AEA'
	],{
		A: '#elysia:plank/all',
		B: 'create:cogwheel',
		C: 'kubejs:screw_basic',
		D: 'kubejs:andesite_lined_daub',
		E: '#forge:honeycombs',
	})
	event.shaped('2x kubejs:invar_diy',[
		'ABA',
		'CDC',
		'EFE'
	],{
		A: '#forge:plates/signalum',
		B: 'thermal:rf_coil',
		C: 'kubejs:screw_basic',
		D: 'thermal:redstone_servo',
		E: '#forge:plates/invar',
		F: 'kubejs:copper_diy'
	})
	event.shaped('2x kubejs:brass_diy',[
		'ABA',
		'CDC',
		'AEA'
	],{
		A: 'kubejs:plank_livingwood',
		B: 'kubejs:weird_mechanism',
		C: 'kubejs:screw_basic',
		D: 'kubejs:brass_lined_sunmetal',
		E: 'kubejs:andesite_diy'
	})
	event.shaped('2x kubejs:copper_piping',[
		' B ',
		'CDC',
		'   '
	],{
		B: '#forge:gears/bronze',
		C: '#forge:plates/copper',
		D: '#forge:ingots/copper',
	})
	event.shaped('2x kubejs:copper_diy',[
		'ABA',
		'CDC',
		'AEA'
	],{
		A: '#forge:plates/cast_iron',
		B: 'kubejs:copper_piping',
		C: 'kubejs:screw_basic',
		D: 'kubejs:copper_lined_daub',
		E: 'thermal:cured_rubber'
	})
	event.shaped('4x kubejs:screw_basic',[
		'A  ',
		'B  ',
		'   '
	],{
		A: '#forge:plates/iron',
		B: '#forge:rods/iron'
	})
	event.shaped('8x kubejs:screw_basic',[
		'A  ',
		'B  ',
		'   '
	],{
		A: '#forge:plates/steel',
		B: '#forge:rods/steel'
	})
	event.shaped('8x create:copper_casing',[
		' B ',
		'ADA',
		' B '
	],{
		A: 'kubejs:screw_basic',
		B: '#forge:plates/cast_iron',
		D: 'kubejs:copper_lined_daub'
	})
	event.shaped('2x kubejs:abyssaline_diy',[
		'ABA',
		'CDC',
		'AEA'
	],{
		A: 'kubejs:plank_runewood',
		B: 'create_things_and_misc:vibration_mechanism',
		C: 'kubejs:screw_brass',
		D: 'architects_palette:abyssaline_bricks',
		E: 'minecraft:conduit'
	})
	event.shaped('2x kubejs:weird_mechanism',[
		' A ',
		' B ',
		' C '
	],{
		A: 'create:electron_tube',
		B: '#forge:dusts/mana',
		C: 'create:precision_mechanism',
	})
	// Recipes Add Shapeless
})

