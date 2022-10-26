onEvent('jei.remove.categories', event => {

    console.log(event.getCategoryIds())

    const categoriesToRemove = [
        'minecraft:blasting',
        'minecraft:smelting',
    ]

    categoriesToRemove.forEach((categoryToRemove) => {
        event.hide(`${categoryToRemove}`)
    })
  })