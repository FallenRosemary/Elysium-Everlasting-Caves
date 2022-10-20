onEvent('recipes', event => {
	// Recipes Remove
	event.remove({type:'botania:pure_daisy'}),
	event.remove({id: 'botania:pure_daisy/livingwood'}),
	// Recipes livingwood -> Soulwood
	event.custom({
		"type": "botania:pure_daisy",
		"input": {
		  "type": "block",
		  "block": "botania:livingwood_log"
		},
		"output": {
		  "name": "malum:soulwood_log"
		}	  
	}) 
	event.custom({
		"type": "botania:pure_daisy",
		"input": {
		  "type": "block",
		  "block": "botania:glimmering_livingwood_log"
		},
		"output": {
		  "name": "malum:exposed_soulwood_log"
		}	  
	})
	// Recipes Runewood -> Livingwood
	event.custom({
		"type": "botania:pure_daisy",
		"input": {
		  "type": "block",
		  "block": "malum:runewood_log"
		},
		"output": {
		  "name": "botania:livingwood_log"
		}	  
	})
	event.custom({
		"type": "botania:pure_daisy",
		"input": {
		  "type": "block",
		  "block": "malum:exposed_runewood_log"
		},
		"output": {
		  "name": "botania:glimmering_livingwood_log"
		}	  
	})
	event.custom({
		"type": "botania:pure_daisy",
		"input": {
		  "type": "block",
		  "block": "architects_palette:abyssaline_bricks"
		},
		"output": {
		  "name": "botania:livingrock"
		}	  
	})
})

