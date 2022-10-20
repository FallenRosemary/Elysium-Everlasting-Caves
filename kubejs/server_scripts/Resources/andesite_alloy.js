onEvent('recipes', event => {
	// Recipes Remove
	event.remove({id:'tconstruct:compat/create/andesite_alloy_iron'}),
	event.remove({id:'tconstruct:compat/create/andesite_alloy_zinc'}),
  event.remove({id:'architects_palette:algal_blend'}),
  event.remove({id:'create:mixing/andesite_alloy'}),
	event.remove({id:'create:mixing/andesite_alloy_from_zinc'})
  event.remove({id:'create:crafting/materials/andesite_alloy'})
  event.remove({id:'create:crafting/materials/andesite_alloy_from_zinc'})
  event.remove({id:'thermal:compat/create/smelter_create_alloy_andesite_alloy'})
	// Recipes Add
	event.custom({
    "type": "lychee:item_inside",
		"item_in":[
			{"item":"minecraft:clay_ball"},
			{"tag":"forge:dusts/ash"},
			{"item":"thermal:phytogro"},
		],
		"block_in":{
			"blocks":["tinkers_reforged:molten_kelp"],
		},
		"post":[{
			"type":"drop_item",
			"item":"architects_palette:algal_blend",
			"count": 2
		}]})
  event.custom({
		"type":"lychee:item_exploding",
		"item_in":[
			{"item":"architects_palette:algal_brick"},
			{"item":"kubejs:brick_andesite"}
		],
		"post":[
			{
				"type":"drop_item",
				"item":"create:andesite_alloy",
				"count":4
			}]})
  event.custom({
		"type": "create:mixing",
  "ingredients": [
    {"item":"minecraft:clay_ball"},
		{"tag":"forge:dusts/ash"},
		{"item":"thermal:phytogro"},
    {
      "fluid":"tinkers_reforged:molten_kelp",
      "nbt": {},
      "amount":125
    }],
  "results": [
    {
      "item": "architects_palette:algal_blend",
      "count": 6
    }],
    "heatRequirement": ""
  })})