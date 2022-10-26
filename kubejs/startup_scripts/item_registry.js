onEvent('item.registry', event => {

	// Metal Items
	global.metals.forEach((metal) => {
	global.processedMats.forEach((mat) => {
		
		event.create(`${metal.id}_${mat.id}`).displayName(`${metal.nameProcessed}${mat.name}`).texture(`kubejs:unification/${metal.id}/${mat.id}`);

    })
	global.rawMats.forEach((mat) => {
		
		event.create(`${metal.id}_${mat.id}`).displayName(`${mat.insertName}${metal.nameRaw}${mat.nameInsert}`).texture(`kubejs:unification/${metal.id}/${mat.id}`);

    })
    });


	// Soil Items
	global.soils.forEach((soil) => {
        event.create(`pile_${soil.tagName}`).displayName(`Pile Of ${soil.displayName}`).texture(`kubejs:item/soils/${soil.tagName}`);
    });

	// Rock Items
	global.rocks.forEach((rock) => {
		event.create(`brick_${rock.tagName}`).displayName(`${rock.displayName} Brick`).texture(`kubejs:item/bricks/${rock.tagName}`);
    });

	const woods = [
		{
			id:`oak`,
			name:`Oak`,
		},
		{
			id:`spruce`,
			name:`Spruce`,
		},
		{
			id:`birch`,
			name:`Birch`,
		},
		{
			id:`jungle`,
			name:`Jungle`,
		},
		{
			id:`acacia`,
			name:`Acacia`,
		},
		{
			id:`dark_oak`,
			name:`Dark Oak`,
		},
		{
			id:`livingwood`,
			name:`Livingwood`,
		},
		{
			id:`dreamwood`,
			name:`Dreamwood`,
		},
		{
			id:`shimmerwood`,
			name:`Shimmerwood`,
		},
		{
			id:`petrified`,
			name:`Petrified`,
		},
		{
			id:`runewood`,
			name:`Runewood`,
		},
		{
			id:`soulwood`,
			name:`Soulwood`,
		},
		{
			id:`blossom`,
			name:`Blossom`,
		},
		{
			id:`azalea`,
			name:`Azalea`,
		},
		{
			id:`flowering_azalea`,
			name:`Flowering Azalea`,
		},
		{
			id:`lavawood`,
			name:`Lavawood`,
		},
		{
			id:`blazewood`,
			name:`Blazewood`,
		},
		{
			id:`nahuatl`,
			name:`Nahuatl`,
		},
		{
			id:`greenheart`,
			name:`Greenheart`,
		},
		{
			id:`skyroot`,
			name:`Skyroot`,
		},
		{
			id:`bloodshroom`,
			name:`Bloodshroom`,
		},
		{
			id:`twisted`,
			name:`Twisted`,
		},
		{
			id:`stripped_bamboo`,
			name:`Stripped Bamboo`,
		},
		{
			id:`fiberboard`,
			name:`Fiberboard`,
		},
		{
			id:`treated_wood`,
			name:`Treated Wood`,
		},
		{
			id:`walnut`,
			name:`Walnut`,
		},
		{
			id:`fungyss`,
			name:`Fungyss`,
		},
		{
			id:`cherrywood`,
			name:`Cherrywood`,
		},
		{
			id:`mysterywood`,
			name:`Mysterywood`,
		},
		{
			id:`edelwood`,
			name:`Edelwood`,
		},
		{
			id:`arcane_edelwood`,
			name:`Arcane Edelwood`,
		},
		{
			id:`jabuticaba`,
			name:`Jabuticaba`,
		},
		{
			id:`ramboutan`,
			name:`Rambutan`,
		},
		{
			id:`coconut`,
			name:`Coconut`,
		},
	]
	
	woods.forEach((wood) => {
        event.create(`plank_${wood.id}`).displayName(`${wood.name} Plank`).texture(`kubejs:item/planks/${wood.id}`);
    });

	const kits = [
		{
			id:`andesite`,
			name:`kinetic`
		},
		{
			id:`brass`,
			name:`Precise`
		},
		{
			id:`copper`,
			name:`Sealed`
		},
		{
			id:`invar`,
			name:`Device`
		},
		{
			id:`storage`,
			name:`Digital`
		},
		{
			id:`honey`,
			name:`Honey-Glazed`
		},
		{
			id:`compressed_iron`,
			name:`Pneumatic`
		},
		{
			id:`steel`,
			name:`Thermal`
		},
		{
			id:`stainless_steel`,
			name:`Industrial`
		},
		{
			id:`abyssaline`,
			name:`Enigmatic`
		},
	]

	kits.forEach((kit) => {
        event.create(`${kit.id}_diy`).displayName(`${kit.name} DIY Kit`).texture(`kubejs:item/kits/${kit.id}_diy`);
		event.create(`${kit.id}_lootbox`).displayName(`${kit.name} Loot Kit`).texture(`kubejs:item/kits/${kit.id}_lootbox`);
    });

	const basicItemRegistry = [
		// Misc Lootboxes
		{
			id:`food_lootbox`,
			name:`Farmer's Delight`,
			texturePath:`kits/food_lootbox`
		},
		{
			id:`loot_lootbox`,
			name:`Scavenger's Delight`,
			texturePath:`kits/loot_lootbox`
		},
		{
			id:`misc_lootbox`,
			name:`A Delight`,
			texturePath:`kits/misc_lootbox`
		},
		// Crafting Ingredients
		{
			id:`salt`,
			name:`Salt`,
			texturePath:`misc/salt`
		},
		{
			id:`wrapped_stick`,
			name:`Wrapped Stick`,
			texturePath:`misc/wrapped_stick`
		},
		{
			id:`copper_piping`,
			name:`Copper Piping`,
			texturePath:`misc/copper_piping`
		},
		{
			id:`weird_mechanism`,
			name:`Weirdly Useful Mechanism`,
			texturePath:`misc/weird_mechanism`
		},
		{
			id:`storage_core`,
			name:`Storage Core`,
			texturePath:`misc/storage_core`
		},
		{
			id:`machine_scraps`,
			name:`Machine Scraps`,
			texturePath:`misc/machine_scraps`
		},
		{
			id:`mortar`,
			name:`Mortar`,
			texturePath:`misc/mortar`
		},
		{
			id:`storage_essence`,
			name:`Essence Of Storing`,
			texturePath:`misc/storage_essence`
		},
		{
			id:`limestone_flux`,
			name:`Limestone Flux`,
			texturePath:`misc/limestone_flux`
		},
		// One-Off Ingots
		{
			id:`superheated_steel_ingot`,
			name:`Superheated Steel Compound`,
			texturePath:`ingots/superheated_steel`
		},
		{
			id:`hot_compressed_iron_ingot`,
			name:`Hot Compressed Iron Compound`,
			texturePath:`ingots/hot_compressed_iron`
		},
		{
			id:`matter_plastics_ingot`,
			name:`Matter Plastics Sheet`,
			texturePath:`ingots/matter_plastics`
		},
		{
			id:`iron_nickel_ingot`,
			name:`Iron-Nickel Compound`,
			texturePath:`ingots/iron_nickel`
		},
		// Molds
		{
			id:`gear_mold`,
			name:`Gear Mold`,
			texturePath:`molds/gear`
		},
		{
			id:`screw_mold`,
			name:`Screw Mold`,
			texturePath:`molds/screw`
		},
		{
			id:`plate_mold`,
			name:`plate Mold`,
			texturePath:`molds/plate`
		},
		// One-Off Bricks/Blends/Pastes
		{
			id:`glowberry_paste`,
			name:`Highly-Explosive Glowberry Mush`,
			texturePath:`misc/glowberry_paste`
		},
		{
			id:`seared_blend`,
			name:`Seared Blend`,
			texturePath:`misc/seared_blend`
		},
		{
			id:`scorched_blend`,
			name:`Scorched Blend`,
			texturePath:`misc/scorched_blend`
		},
		{
			id:`blast_blend`,
			name:`Blast Blend`,
			texturePath:`misc/blast_blend`
		},
		{
			id:`coke_blend`,
			name:`Coke Blend`,
			texturePath:`misc/coke_blend`
		},
		{
			id:`heat_paste`,
			name:`Heat-Proof Paste`,
			texturePath:`misc/heat_paste`
		},
		{
			id:`frost_paste`,
			name:`Frost-Proof Paste`,
			texturePath:`misc/frost_paste`
		},
		{
			id:`blast_brick`,
			name:`Blast Brick`,
			texturePath:`misc/blast_brick`
		},
		{
			id:`coke_brick`,
			name:`Coke Brick`,
			texturePath:`misc/coke_brick`
		},
		// Screws
		{
			id:`screw_basic`,
			name:`Crude Screw`,
			texturePath:`screws/basic`
		},
		{
			id:`screw_brass_incomplete`,
			name:`Incomplete Brass Screw`,
			texturePath:`screws/brass_incomplete`
		},
		{
			id:`screw_brass`,
			name:`Hex Ash-Tipped Brass Screw`,
			texturePath:`screws/brass`
		},
		{
			id:`screw_compressed_iron`,
			name:`Compressed Iron Screw`,
			texturePath:`screws/compressed_iron`
		},
		{
			id:`screw_stainless_steel`,
			name:`Stainless Steel Screw`,
			texturePath:`screws/stainless_steel`
		},
	]

	basicItemRegistry.forEach((item) => {
        event.create(`${item.id}`).displayName(`${item.name}`).texture(`kubejs:item/${item.texturePath}`);
    });
})