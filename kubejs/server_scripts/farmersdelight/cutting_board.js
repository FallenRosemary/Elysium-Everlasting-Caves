onEvent('recipes', event => {
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [ {"item": "minecraft:glow_berries"}],
        "tool": {
            "tag": "forge:tools/knives"
          },"result": [{
                "item": "kubejs:glowberry_paste",
                "count": 2
            }]
    })
})