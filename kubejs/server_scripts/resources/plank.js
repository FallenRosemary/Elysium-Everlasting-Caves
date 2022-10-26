onEvent('recipes', event => {

	const woodsWithLog = [
		{
			input:'minecraft:acacia_log',
			output:'acacia'
		},
		{
			input:'nethers_exoticism:stripped_rambutan_log',
			output:'ramboutan'
		},
		{
			input:'forbidden_arcanus:edelwood_log',
			output:'edelwood'
		},
		{
			input:'forbidden_arcanus:cherrywood_log',
			output:'cherrywood'
		},
		{
			input:'minecraft:jungle_log',
			output:'jungle'
		},
		{
			input:'malum:runewood_log',
			output:'runewood'
		},
		{
			input:'nethers_exoticism:jabuticaba_log',
			output:'jabuticaba'
		},
		{
			input:'minecraft:birch_log',
			output:'birch'
		},
		{
			input:'tconstruct:greenheart_log',
			output:'greenheart'
		},
		{
			input:'tconstruct:skyroot_log',
			output:'skyroot'
		},
		{
			input:'botania:livingwood_log',
			output:'livingwood'
		},
		{
			input:'architects_palette:twisted_log',
			output:'twisted'
		},
		{
			input:'tconstruct:bloodshroom_log',
			output:'bloodshroom'
		},
		{
			input:'ecologics:flowering_azalea_log',
			output:'flowering_azalea'
		},
		{
			input:'malum:soulwood_log',
			output:'soulwood'
		},
		{
			input:'quark:blossom_log',
			output:'blossom'
		},
		{
			input:'ecologics:coconut_log',
			output:'coconut'
		},
		{
			input:'minecraft:oak_log',
			output:'oak'
		},
		{
			input:'minecraft:dark_oak_log',
			output:'dark_oak'
		},
		{
			input:'ecologics:walnut_log',
			output:'walnut'
		},
		{
			input:'darkerdepths:petrified_log',
			output:'petrified'
		},
		{
			input:'botania:dreamwood_log',
			output:'dreamwood'
		},
		{
			input:'minecraft:spruce_log',
			output:'spruce'
		},
		{
			input:'ecologics:azalea_log',
			output:'azalea'
		},
	]

	woodsWithLog.forEach((wood) => {

		event.shapeless(`6x kubejs:plank_${wood.output}`, [
			'#forge:axes',
			`${wood.input}`
		]).damageIngredient(0).keepIngredient('#forge:axes').id(`kubejs:resources/plank/shapeless_${wood.output}_plank_from_${wood.output}_manual_only`)

        event.stonecutting(
            `4x kubejs:plank_${wood.output}`, 
            `${wood.input}`
        ).id(`kubejs:resources/plank/stonecutting_${wood.output}_plank_from_${wood.output}_manual_only`)

        event.recipes.create.cutting(
            [
                (`8x kubejs:plank_${wood.output}`),
                ('thermal:sawdust')
            ], 
            `${wood.input}`
        ).id(`kubejs:resources/plank/cutting_${wood.output}_plank_from_${wood.output}`)

        event.recipes.thermal.sawmill(
            [
                (`12x kubejs:plank_${wood.output}`), 
                ('thermal:sawdust')
            ], 
            `${wood.input}`
            ).id(`kubejs:resources/plank/sawmill_${wood.output}_plank_from_${wood.output}`)
    });
})