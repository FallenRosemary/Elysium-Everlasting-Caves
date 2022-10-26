onEvent('jei.hide.items', event => {
    const itemsToHide = [
        'engineersdecor:small_electrical_furnace',
        'engineersdecor:small_lab_furnace',
        'quark:deepslate_furnace',
        'minecraft:blast_furnace',
        'minecraft:furnace',
        'quark:blackstone_furnace',
    ]

    itemsToHide.forEach((itemToHide) => {
        event.hide(`${itemToHide}`)
    })
  })