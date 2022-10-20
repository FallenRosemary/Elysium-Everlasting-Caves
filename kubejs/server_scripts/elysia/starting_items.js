onEvent('player.logged_in', event => {
    // Check if player doesn't have "starting_items" stage yet
    if (!event.player.stages.has('starting_items')) {
      // Add the stage
      event.player.stages.add('starting_items')
      // Give some items to player
      event.player.give('16x hardcore_torches:lit_torch')
      event.player.give('8x farmersdelight:honey_cookie')
      event.player.give('2x waystones:mossy_waystone')
      event.player.give('ftbquests:book')
    }
  })