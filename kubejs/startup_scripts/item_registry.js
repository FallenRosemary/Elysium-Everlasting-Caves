onEvent('item.registry', event => {

	// Wood Items
	global.woods.forEach((wood) => {
        event.create(`plank_${wood.tagName}`).displayName(`${wood.displayName} Plank`).texture(`kubejs:item/planks/${wood.tagName}`);
    });

	// Soil Items
	global.soils.forEach((soil) => {
        event.create(`pile_${soil.tagName}`).displayName(`Pile Of ${soil.displayName}`).texture(`kubejs:item/soils/${soil.tagName}`);
    });

	// Rock Items
	global.rocks.forEach((rock) => {
		event.create(`brick_${rock.tagName}`).displayName(`${rock.displayName} Brick`).texture(`kubejs:item/bricks/${rock.tagName}`);
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
			texturePath:`kits`
		},
		{
			id:`loot_lootbox`,
			name:`Scavenger's Delight`,
			texturePath:`kits`
		},
		{
			id:`misc_lootbox`,
			name:`A Delight`,
			texturePath:`kits`
		},
		// Crafting Ingredients
		{
			id:`copper_piping`,
			name:`Copper Piping`,
			texturePath:`kits`
		},
		{
			id:`weird_mechanism`,
			name:`Weirdly Useful Mechanism`,
			texturePath:`kits`
		},
		{
			id:`storage_core`,
			name:`Storage Core`,
			texturePath:`kits`
		},
		{
			id:`machine_scraps`,
			name:`Machine Scraps`,
			texturePath:`kits`
		},
		// One-Off Ingots
		{
			id:`superheated_steel`,
			name:`Superheated Steel Compound`,
			texturePath:`ingots`
		},
		{
			id:`hot_compressed_iron`,
			name:`Hot Compressed Iron Compound`,
			texturePath:`ingots`
		},
		{
			id:`matter_plastics`,
			name:`Matter Plastics Sheet`,
			texturePath:`ingots`
		},
		{
			id:`iron_nickel`,
			name:`Iron-Nickel Compound`,
			texturePath:`ingots`
		},
		// Molds
		{
			id:`gear_mold`,
			name:`Gear Mold`,
			texturePath:`molds`
		},
		{
			id:`screw_mold`,
			name:`Screw Mold`,
			texturePath:`molds`
		},
		{
			id:`plate_mold`,
			name:`plate Mold`,
			texturePath:`molds`
		},
	]

	basicItemRegistry.forEach((item) => {
        event.create(`${item.id}`).displayName(`${item.name}`).texture(`kubejs:item/${item.texturePath}/${item.id}`);
    });

	// Blends
	event.create('seared_brick_blend').displayName("Seared Blend")//
	event.create('scorched_brick_blend').displayName("Scorched Blend")//
	event.create('blast_brick_blend').displayName("Blast Blend")// 
	event.create('coke_brick_blend').displayName("Coke Blend")// 

	event.create('fire_brick_blend').displayName("Heat-Proof Paste")//
	event.create('frost_brick_blend').displayName("Frost-Proof Paste")//

	// Bricks
	event.create('blast_brick').displayName("Blast Brick")//
	event.create('coke_brick').displayName("Coke Brick")//

	// In-world Materials

	// Processing Materials
	event.create('mortar').displayName("Mortar")//
	event.create('crushed_storage_essence').displayName("Crushed Storage Essence")
	event.create('andesite_ashes').displayName("Andesite Ashes")//
	event.create('limestone_flux').displayName("Limestone Flux")//
	event.create('dried_straw').displayName("Dried Straw")//

	// Screws
	event.create('screw_basic').displayName("Crude Screw").texture(`kubejs:item/screws/basic`)
	event.create('screw_brass').displayName("Hex Ash-Tipped Brass Screw").texture(`kubejs:item/screws/brass`)
	event.create('screw_brass_incomplete').displayName("Incomplete Brass Screw").texture(`kubejs:item/screws/brass_incomplete`)
	event.create('screw_compressed_iron').displayName("Compressed Iron Screw").texture(`kubejs:item/screws/compressed_iron`)
	event.create('screw_stainless_steel').displayName("Stainless Steel Screw").texture(`kubejs:item/screws/stainless_steel`)
})