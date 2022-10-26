onEvent('recipes', event => {
	// Recipes Add
	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
		  "item": "malum:spectral_lens"
		},
		"transitionalItem": {
		  "item": "malum:spectral_lens"
		},
		"sequence": [
		  {
			"type": "create:deploying",
			"ingredients": [
			  {
				"item": "malum:spectral_lens"
			  },
			  {
				"item": "malum:hallowed_gold_ingot"
			  }
			],
			"results": [
			  {
				"item": "malum:spectral_lens"
			  }
			]
		  },
		  {
			"type": "create:deploying",
			"ingredients": [
			  {
				"item": "malum:spectral_lens"
			  },
			  {
				"item": "malum:runewood_planks"
			  }
			],
			"results": [
			  {
				"item": "malum:spectral_lens"
			  }
			]
		  },
		],
		"results": [
		  {
			"item": "malum:hallowed_spirit_resonator",
			"count": 4
		  }
		],
		"loops": 4
	}) 
})

