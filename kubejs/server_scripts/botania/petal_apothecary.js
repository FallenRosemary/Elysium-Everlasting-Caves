onEvent('recipes', event => {
	// Recipes Remove
	event.remove({type:'botania:petal_apothecary'})
	// Recipes Add
	event.custom({
		"type": "botania:petal_apothecary",
  "output": {
    "item": "botania:pure_daisy"
  },
  "ingredients": [
    {"tag": "botania:petals/white"},
    {"tag": "botania:petals/white"},
    {"tag": "botania:petals/white"},
    {"tag": "botania:petals/white"},
    {"item": "minecraft:conduit"},
	  {"item": "thermal:phytogro"}
  ]
	}) 
  event.custom({
		"type": "botania:petal_apothecary",
  "output": {
    "item": "botania:kekimurus"
  },
  "ingredients": [
    {"tag": "botania:petals/white"},
    {"tag": "botania:petals/white"},
    {"tag": "botania:petals/white"},
    {"tag": "botania:petals/white"},
    {"tag": "botania:petals/brown"},
    {"tag": "botania:petals/brown"},
    {"tag": "botania:petals/brown"},
    {"tag": "botania:petals/brown"},
	  {"item": "thermal:phytogro"},
    {"item": "create:blaze_cake"}
  ]
	})
})

