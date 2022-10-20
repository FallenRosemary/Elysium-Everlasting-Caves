onEvent('recipes', event => {
	event.custom({
		// Recipes Add
		"type": "lychee:lightning_channeling",
		"item_in": [
			{"item": "minecraft:nautilus_shell"},
			{"tag":"forge:dusts/apatite"},
			{"tag":"forge:dusts/apatite"},
			{"tag":"forge:dusts/lapis"},
			{"tag":"forge:dusts/lapis"},
			{"tag":"forge:dusts/niter"},
			{"tag":"forge:dusts/niter"},
			{"item":"minecraft:heart_of_the_sea"},
		],
		"post": [{
				"type": "drop_item",
				"item": "minecraft:conduit",
				"count": 1
			}]})
		event.custom({
		"type": "lychee:lightning_channeling",
		"item_in": [
			{"item":"kubejs:brick_prismarine"},
			{"item":"kubejs:brick_prismarine"},
			{"item":"kubejs:brick_prismarine"},
			{"item":"kubejs:brick_darkstone"},
			{"item":"kubejs:brick_darkstone"},
			{"item":"kubejs:brick_darkstone"},
			{"item":"minecraft:obsidian"},
			{"item":"minecraft:obsidian"},
		],
		"post": [{
				"type": "drop_item",
				"item": "architects_palette:abyssaline_bricks",
				"count": 7
			}]})
})