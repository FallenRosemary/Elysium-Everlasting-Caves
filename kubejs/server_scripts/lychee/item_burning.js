onEvent('recipes', event => {
    event.custom({
        "type": "lychee:item_burning",
    "item_in": {
        "item": "occultism:datura"
    },
    "post": {
        "type": "place",
        "block": "occultism:spirit_fire"
    }
    })
})