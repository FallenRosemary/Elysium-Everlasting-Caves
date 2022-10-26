onEvent('recipes', event => {
	event.custom({
		"type": "lychee:item_inside",
		"item_in":[
			{"tag":"forge:gunpowder"},
			{"item":"minecraft:clay_ball"},
			{"tag":"forge:dusts/arcane_crystal"},
			{"item":"minecraft:blaze_powder"},
			{"tag":"forge:dusts/redstone"},
			{"item":"thermal:phytogro"}
		],
		"block_in":{
			"blocks":["minecraft:water"]
		},
		"post":[{
			"type":"drop_item",
			"item":"forbidden_arcanus:mundabitur_dust",
			"count": 4
		},
		{
			"type":"place",
			"block":"minecraft:air",
			"hide": true
		}]
	})
	event.custom({
		"type": "lychee:item_inside",
		"item_in":[
			{"tag":"forge:dusts/mundabitur"},
			{"tag":"forge:dusts/ash"}
		],
		"block_in":{
			"blocks":["occultism:spirit_fire"]
		},
		"post":[{
			"type":"drop_item",
			"item":"bloodmagic:arcaneashes",
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
			{"item":"architects_palette:abyssaline_bricks"},
		],
		"block_in":{
			"blocks":["occultism:spirit_fire"]
		},
		"post":[{
			"type":"drop_item",
			"item":"occultism:otherstone",
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
			{"tag":"forge:gems/diamond"},
		],
		"block_in":{
			"blocks":["occultism:spirit_fire"]
		},
		"post":[{
			"type":"drop_item",
			"item":"occultism:spirit_attuned_gem",
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
			{"tag":"forge:dyes/black"},
		],
		"block_in":{
			"blocks":["occultism:spirit_fire"]
		},
		"post":[{
			"type":"drop_item",
			"item":"occultism:purified_ink",
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
			{"item":"occultism:otherworld_log"},
		],
		"block_in":{
			"blocks":["occultism:spirit_fire"]
		},
		"post":[{
			"type":"drop_item",
			"item":"occultism:otherworld_ashes",
			"count": 4
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
			{"item":"kubejs:pile_sand"},
			{"item":"kubejs:limestone_flux"},
		],
		"block_in":{
			"blocks":["minecraft:water"]
		},
		"post":[{
			"type":"drop_item",
			"item":"kubejs:mortar",
			"count": 3
		},
		{
			"type":"place",
			"block":"minecraft:air",
			"hide": true
		}]
	})
	event.custom({
		"type": "lychee:item_inside",
		"item_in":[
			{"item":"kubejs:pile_sand"},
			{"item":"kubejs:pile_gravel"},
			{"item":"minecraft:clay_ball"},
		],
		"block_in":{
			"blocks":["minecraft:water"]
		},
		"post":[{
			"type":"drop_item",
			"item":"kubejs:seared_blend",
			"count": 4
		},
		{
			"type":"place",
			"block":"minecraft:air",
			"hide": true
		}]
	})
	event.custom({
        "type": "lychee:item_inside",
    "item_in": {
        "item": "occultism:datura"
    },
	"block_in":{
		"blocks":["minecraft:fire"]
	},
    "post": {
        "type": "place",
        "block": "occultism:spirit_fire"
    }
    })
	event.custom({
        "type": "lychee:item_inside",
        "item_in":{
            "item":"create:limestone"
        },
		"block_in":{
			"blocks":["minecraft:lightning_rod"]
		},
        "post":[{
            "type":"drop_item",
            "item":"kubejs:limestone_flux",
            "count": 10
        },{
            "type":"drop_item",
            "item":"kubejs:limestone_flux",
            "count": 4,
            "contextual": {
                "type": "chance",
                "chance": 0.5
            }
        },{
			"type":"execute",
			"command":"/summon minecraft:lightning_bolt ~ ~ ~",
			"hide":true
		}]
    })
	event.custom({
		"type": "lychee:item_inside",
			"item_in":[
				{"item":"minecraft:clay_ball"},
				{"tag":"forge:dusts/ash"},
				{"item":"thermal:phytogro"},
			],
			"block_in":{
				"blocks":["tinkers_reforged:molten_kelp_fluid"],
			},"post":[{
				"type":"drop_item",
				"item":"architects_palette:algal_blend",
				"count": 4
			},{
				"type":"place",
				"block":"minecraft:air",
				"hide": true
			}]
	})

})