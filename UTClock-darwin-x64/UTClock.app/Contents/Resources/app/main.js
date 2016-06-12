var menubar = require('menubar')

var mb = menubar({
  width: 450,
  height: 50,
  "always-on-top": true
})

mb.on('ready', function ready () {
  console.log('app is ready')
})
