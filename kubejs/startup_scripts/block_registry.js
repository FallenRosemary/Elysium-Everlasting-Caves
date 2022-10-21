onEvent('block.registry', event => {
    global.processedMats.forEach((mat) => {
		
		event.create(`${metal.id}_block_raw`).displayName(`Block Of${metal.nameProcessed}`).texture(`kubejs:unification/${metal.id}/block_raw`);
		event.create(`${metal.id}_block`).displayName(`Block Of Raw${metal.nameRaw}`).texture(`kubejs:unification/${metal.id}/block`);

    })
    event.create('andesite_lined_daub').displayName("Andesite Lined Daub")
    event.create('copper_lined_daub').displayName("Copper Lined Daub")
    event.create('brass_lined_sunmetal').displayName("Brass Lined Sunmetal")
    event.create('sunmetal').displayName("Sunmetal")


    event.create('heat_proof_casing').displayName("Heat-Proof Casing").texture('up', `kubejs:block/casing`).texture('down', `kubejs:block/casing`).texture('north', `kubejs:block/heat_proof_casing`).texture('south', `kubejs:block/heat_proof_casing`).texture('east', `kubejs:block/heat_proof_casing`).texture('west', `kubejs:block/heat_proof_casing`);
    event.create('frost_proof_casing').displayName("Frost-Proof Casing").texture('up', `kubejs:block/casing`).texture('down', `kubejs:block/casing`).texture('north', `kubejs:block/frost_proof_casing`).texture('south', `kubejs:block/frost_proof_casing`).texture('east', `kubejs:block/frost_proof_casing`).texture('west', `kubejs:block/frost_proof_casing`);
    event.create('empty_casing').displayName("Empty Casing").texture('up', `kubejs:block/casing`).texture('down', `kubejs:block/casing`).texture('north', `kubejs:block/empty_casing`).texture('south', `kubejs:block/empty_casing`).texture('east', `kubejs:block/empty_casing`).texture('west', `kubejs:block/empty_casing`);

    event.create('multiblock_controller').displayName("Multiblock Controller")
})