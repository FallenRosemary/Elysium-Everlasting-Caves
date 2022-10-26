const soils = [
	{
		input:'minecraft:sand',
		output:'sand'
	},
	{
		input:'minecraft:red_sand',
		output:'red_sand'
	},
	{
		input:'minecraft:gravel',
		output:'gravel'
	},
	{
		input:'minecraft:dirt',
		output:'dirt'
	},
	{
		input:'minecraft:soul_soil',
		output:'soul_soil'
	},
	{
		input:'minecraft:soul_sand',
		output:'soulsand'
	},
]

onEvent('block.loot_tables', event => {
	    
	soils.forEach((soil) => {

		event.addBlock(`${soil.input}`, table => {
			table.addPool(pool => {
			  pool.rolls = 1
			  pool.survivesExplosion()
			  pool.addItem(`kubejs:pile_${soil.output}`, 100, [4, 4])
			})
		  })

	})

})

onEvent('recipes', event => {

	soils.forEach((soil) => {

        event.shapeless(`${soil.input}`, [
			`kubejs:pile_${soil.output}`,
			`kubejs:pile_${soil.output}`,
			`kubejs:pile_${soil.output}`,
			`kubejs:pile_${soil.output}`,
		])
    })

})