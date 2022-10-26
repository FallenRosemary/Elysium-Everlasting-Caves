onEvent('recipes', event => {

    global.rocks.forEach((rock) => {
        event.shapeless(`6x kubejs:brick_${rock.tagName}`, [
			'#forge:pickaxes',
			`${rock.sourcePrefix}:${rock.tagName}`
		]).damageIngredient(0).keepIngredient('#forge:pickaxes').id(`kubejs:vanilla/shapeless/${rock.tagName}_brick_from_${rock.tagName}_manual_only`)
    })

    event.shapeless('2x kubejs:wrapped_stick', [
        '#forge:rods/wooden',
        'farmersdelight:straw'
    ])
    event.shapeless('2x thermal:sulfur_dust', [
        'kubejs:limestone_flux',
        '#forge:gunpowder'
    ])
})