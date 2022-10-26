onEvent('recipes', event => {

    event.custom({
		"type":"lychee:item_exploding",
		"item_in":[
			{"item":"architects_palette:algal_brick"},
			{"item":"kubejs:brick_andesite"}
		],"post":[{
				"type":"drop_item",
				"item":"create:andesite_alloy",
				"count":4
			}]
    })

})