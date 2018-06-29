var animate = {
  'part1': [{
    name: 'bounceIn',
    time: 1000,
    del: 3000,
    loop: false
  }, {
    name: 'bounceIn2',
    time: 1000,
    del: 2000,
    loop: false
  }, {
    name: 'tada',
    time: 1000,
    del: 1000,
    loop: true

  }
  ]
}

for (let i in animate) {
  let a = []
  for (let anim of animate[i]) {
    let animt = [
      anim.name,
      anim.time / 1000 + 's',
      anim.del / 1000 + 's',
      (anim.loop
        ? 'infinite'
        : '')
    ]
    a.push(animt.join(' '))
  }

  $('.' + i).css('animation', a.join(','))
}
