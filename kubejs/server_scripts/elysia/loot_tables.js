onEvent('block.loot_tables', event => {
    global.metals.forEach((metal) => {
    
	event.addBlock([`kubejs:${metal.id}_ore_stone`,`kubejs:${metal.id}_ore_deepslate`], table => { // Build loot table manually
		table.addPool(pool => {
		  pool.rolls = 1
		  pool.survivesExplosion()
		  pool.addItem(`kubejs:${metal.id}_crushed`, 100, [1, 1])
		})
		table.addPool(pool => {
			pool.rolls = 1
			pool.survivesExplosion()
			pool.addItem(`kubejs:${metal.id}_raw`, 40, [1, 2])
		})
	  })

    })
})