onEvent('recipes', event => {

  const application = [
    {
      input:'supplementaries:daub',
      applicator:'create:andesite_alloy',
      result:'kubejs:andesite_lined_daub',
    },
    {
      input:'kubejs:sunmetal',
      applicator:'create:brass_ingot',
      result:'kubejs:brass_lined_sunmetal',
    },
    {
      input:'tconstruct:grout',
      applicator:'minecraft:copper_ingot',
      result:'kubejs:copper_lined_grout',
    },
  ]

  application.forEach((apply) => {
    event.custom({
      "type": "create:item_application",
      "ingredients": [
        {"item":`${apply.input}`},
        {"item":`${apply.applicator}`}
      ],
      "results":[{"item":`${apply.result}`}]
  })});

})