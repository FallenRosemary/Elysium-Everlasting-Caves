onEvent('recipes', event => {
    event.custom({
        "type": "lychee:block_exploding",
    "block_in": {
        "blocks": "create:limestone"
    },
    "post": {
        "type": "drop_item",
        "item": "kubejs:limestone_flux",
        "count": 3
    }})
})