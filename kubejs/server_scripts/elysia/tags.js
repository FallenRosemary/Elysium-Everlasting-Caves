onEvent('tags.items',(event) => {

    const tagAdd = [
        {
            add:'/thermal:machine_*/',
            tag:'elysia:machine/crushable',
        },
        {
            add:'/kubejs:*_crushed/',
            tag:'elysia:source/create',
        },
        {
            add:'/kubejs:iron_*/',
            tag:'elysia:source/minecraft',
        },
        {
            add:'/kubejs:copper_*/',
            tag:'elysia:source/minecraft',
        },
        {
            add:'/kubejs:gold_*/',
            tag:'elysia:source/minecraft',
        },
        {
            add:'/kubejs:hellforged_*/',
            tag:'elysia:source/blood_magic',
        },
        {
            add:'/kubejs:zinc_*/',
            tag:'elysia:source/create',
        },
        {
            add:'/kubejs:aluminum_*/',
            tag:'elysia:source/immersive_engineering',
        },
        {
            add:'/kubejs:lead_*/',
            tag:'elysia:source/immersive_engineering',
        },
        {
            add:'/kubejs:lead_*/',
            tag:'elysia:source/thermal_series',
        },
        {
            add:'/kubejs:nickel_*/',
            tag:'elysia:source/immersive_engineering',
        },
        {
            add:'/kubejs:nickel_*/',
            tag:'elysia:source/thermal_series',
        },
        {
            add:'/kubejs:uranium_*/',
            tag:'elysia:source/immersive_engineering',
        },
        {
            add:'/kubejs:iesnium_*/',
            tag:'elysia:source/occultism',
        },
        {
            add:'/kubejs:tin_*/',
            tag:'elysia:source/thermal_series',
        },
        {
            add:'/kubejs:cobalt_*/',
            tag:'elysia:source/tinkers_construct',
        },
        {
            add:'/kubejs:plank_*/',
            tag:'elysia:plank/all',
        },
        {
            add:'/kubejs:brick_*/',
            tag:'elysia:brick/all',
        },
        {
            add:'/kubejs:*_ingot/',
            tag:'elysia:ingot/all',
        },
        {
            add:'/kubejs:*_gear/',
            tag:'elysia:gear/all',
        },
        {
            add:'/kubejs:*_plate/',
            tag:'elysia:plate/all',
        },
        {
            add:'/kubejs:*_nugget/',
            tag:'elysia:nugget/all',
        },
        {
            add:'/kubejs:*_ore_*/',
            tag:'elysia:ore/all',
        },
        {
            add:'/kubejs:*_dust/',
            tag:'elysia:dust/all',
        },
        {
            add:'/kubejs:*_crushed/',
            tag:'elysia:crushed/all',
        },
        {
            add:'/kubejs:*_block/',
            tag:'elysia:block/storage',
        },
        {
            add:'/kubejs:*_block_raw/',
            tag:'elysia:block/raw',
        },
        {
            add:'/kubejs:*_raw/',
            tag:'elysia:raw/item',
        },
        {
            add:'/kubejs:*_block_raw/',
            tag:'elysia:raw/block',
        },
        {
            add:'/kubejs:*_raw/',
            tag:'elysia:raw/all',
        },
        {
            add:'/kubejs:*_block_raw/',
            tag:'elysia:raw/all',
        },
        {
            add:'hardcore_torches:animal_fat',
            tag:'elysia:tallow/all',
        },
        {
            add:'occultism:tallow',
            tag:'elysia:tallow/all',
        },
        {
            add:'occultism:datura',
            tag:'lychee:fire_immune',
        },
    ]

    tagAdd.forEach((tag) => {
        event.add(`${tag.tag}`, `${tag.add}`)
    })

})