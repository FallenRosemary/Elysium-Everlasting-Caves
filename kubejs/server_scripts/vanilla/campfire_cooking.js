onEvent('recipes', event => {
    
    const campfireCooking = [
        {
            input:'kubejs:seared_blend',
            output:'1x tconstruct:seared_brick',
        },
        {
            input:'architects_palette:algal_blend',
            output:'1x architects_palette:algal_brick',
        },
        {
            input:'kubejs:scorched_blend',
            output:'1x tconstruct:scorched_brick',
        },
        {
            input:'kubejs:blast_blend',
            output:'kubejs:blast_brick',
        },
        {
            input:'kubejs:coke_blend',
            output:'1x kubejs:coke_brick',
        },
        {
            input:'hardcore_torches:unlit_torch',
            output:'hardcore_torches:lit_torch',
        },
        {
            input:'minecraft:moss_block',
            output:'4x quark:moss_paste',
        },
    ]

    campfireCooking.forEach((campfire) => {
        event.campfireCooking(`${campfire.output}`, `${campfire.input}`)
    });
})