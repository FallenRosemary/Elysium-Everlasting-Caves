const metals = [
    // Vanila
    {
        id:'iron',
        nameProcessed:'Iron',
        nameRaw:'Iron',
        outputSecond:'nickel',
        pool:[1, 2]
    },
    {
        id:'copper',
        nameProcessed:'Copper',
        nameRaw:'Copper',
        outputSecond:'gold',
        pool:[4, 6]
    },
    {
        id:'gold',
        nameProcessed:'Gold',
        nameRaw:'Gold',
        outputSecond:'copper',
        pool:[2, 3]
    },
    // Blood Magic
    {
        id:'hellforged',
        nameProcessed:'Hellforged',
        nameRaw:'Demonite',
        outputSecond:'iesnium',
        pool:[6, 8]
    },
    // Create
    {
        id:'zinc',
        nameProcessed:'Zinc',
        nameRaw:'Zinc',
        outputSecond:'aluminum',
        pool:[4, 6]
    },
    // Immersive Engineering
    {
        id:'aluminum',
        nameProcessed:'Aluminium',
        nameRaw:'Bauxite',
        outputSecond:'iron',
        pool:[4, 6]
    },
    {
        id:'lead',
        nameProcessed:'Lead',
        nameRaw:'Lead',
        outputSecond:'uranium',
        pool:[2, 3]
    },
    {
        id:'nickel',
        nameProcessed:'Nickel',
        nameRaw:'Nickel',
        outputSecond:'copper',
        pool:[1, 2]
    },
    {
        id:'uranium',
        nameProcessed:'Uranium',
        nameRaw:'Uranium',
        outputSecond:'lead',
        pool:[1, 2]
    },
    // Occultism
    {
        id:'iesnium',
        nameProcessed:'Iesnium',
        nameRaw:'Iesnium',
        outputSecond:'hellforged',
        pool:[4, 6]
    },
    // Thermal
    {
        id:'tin',
        nameProcessed:'Tin',
        nameRaw:'Tin',
        outputSecond:'iron',
        pool:[3, 5]
    },
    // Tinkers
    {
        id:'cobalt',
        nameProcessed:'Cobalt',
        nameRaw:'Cobalt',
        outputSecond:'lead',
        pool:[1, 2]
    },
]

onEvent('block.loot_tables', event => {
	
    metals.forEach((metal) => {
    
	event.addBlock([`kubejs:${metal.id}_ore_stone`,`kubejs:${metal.id}_ore_deepslate`], table => {
		table.addPool(pool => {
		  pool.rolls = 1
		  pool.survivesExplosion()
		  pool.addItem(`kubejs:${metal.id}_crushed`, 100, [1, 1])
		})
		table.addPool(pool => {
			pool.rolls = 1
			pool.survivesExplosion()
			pool.addItem(`kubejs:${metal.id}_raw`, 100, metal.pool)
		})
	  })

    })
})

onEvent('recipes', event => {

    metals.forEach((metal) => {

        event.custom({
            "type": "lychee:item_inside",
            "item_in":[
                {"item":`kubejs:${metal.id}_nugget`},
                {"item":`kubejs:${metal.id}_nugget`},
                {"item":`kubejs:${metal.id}_nugget`},
                {"item":`kubejs:${metal.id}_nugget`},
                {"item":`kubejs:${metal.id}_nugget`},
                {"item":`kubejs:${metal.id}_nugget`},
                {"item":`kubejs:${metal.id}_nugget`},
                {"item":`kubejs:${metal.id}_nugget`},
                {"item":`kubejs:${metal.id}_nugget`},
                {"item":'kubejs:limestone_flux'},
            ],
            "block_in":{
                "blocks":["occultism:spirit_fire"]
            },
            "post":[{
                "type":"drop_item",
                "item":`kubejs:${metal.id}_ingot`,
                "count": 1
            },
            {
                "type":"place",
                "block":"supplementaries:ash",
                "hide": true
            }]
        })

        event.custom({
            "type": "lychee:item_inside",
            "item_in":[
                {"item":`kubejs:${metal.id}_crushed`},
            ],
            "block_in":{
                "blocks":["minecraft:water"]
            },
            "post":[{
                "type":"drop_item",
                "item":`kubejs:${metal.id}_nugget`,
                "count": 2
            },{
                "type":"drop_item",
                "item":`kubejs:${metal.id}_nugget`,
                "count": 1,
                "contextual": {
                    "type": "chance",
                    "chance": 0.5
                }
            },
            {
                "type":"place",
                "block":"minecraft:air",
                "hide": true
            }]
        })

        event.shapeless(`kubejs:${metal.id}_plate`, [
			'immersiveengineering:hammer',
			`kubejs:${metal.id}_ingot`,
            `kubejs:${metal.id}_ingot`
		]).damageIngredient(0).keepIngredient('immersiveengineering:hammer').id(`kubejs:vanilla/metallic_ore/${metal.id}_plate_from_${metal.id}_manual_only`)

        event.shaped(`kubejs:${metal.id}_gear`,[
            ' A ',
            'ABA',
            ' A '
        ],{
            A: `kubejs:${metal.id}_plate`,
            B: 'kubejs:aluminum_nugget',
        })

        event.recipes.createSplashing([
            `10x kubejs:${metal.id}_nugget`,
            Item.of(`5x kubejs:${metal.id}_nugget`).withChance(0.5)
        ],`kubejs:${metal.id}_crushed`)

        event.smelting(
            `3x kubejs:${metal.id}_nugget`,
            `kubejs:${metal.id}_raw`
        )
    })
})