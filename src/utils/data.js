var pages = [
  {
    width: 640,
    background: "#fff",
    parts: [
      {
        id: 'part1',
        type: "img",

        base: {
          width: 100,
          height: 100,
          left: 300,
          top: 300,
          angle: 0
        },
        style: {
          color: "",
          'border-width': 3,
          'border-color': "",
          'border-style': "",
          'border-radius': "",
          background: "#000",
          'font-size': "",
          'z-index': ""

        },
        animates: [
          {
            name: "bounceIn",
            time: 1000,
            del: 1000,
            loop: false
          }
        ],
        event: [
          {
            type: 'click'
          }
        ]
      },
      {
        id: 'part2',
        base: {
          width: 100,
          height: 100,
          left: 500,
          top: 300,
          angle: 0
        },
        style: {
          color: "",
          'border-width': 3,
          'border-color': "",
          'border-style': "",
          'border-radius': "",
          background: "#000",
          'font-size': ""
        },
        animates: [
          {
            name: "bounceIn",
            time: 1000,
            del: 1000,
            loop: false
          }
        ]
      }
    ]

  }
]

for (let i in pages) {
  let page = pages[i]
  var $page = $(`<div class="page page${i}"></div>`)

  for (let j in page.parts) {
    let part = page.parts[j]
    let $part = $(`<div id="${part.id}" class="part part${j}"></div>`)
    $part.data("data", part)
    $part.css({
      ...part.base,
      ...part.style
    })
    let animation = []
    for (let animate of part.animates) {
      if (!animate.name) {
        continue
      }

      let animateArr = [
        animate.name, animate.time / 1000 + "s",
        animate.del / 1000 + "s",
        (animate.loop
          ? "infinite"
          : "")
      ]
      animation.push(animateArr.join(" "))
    }
    $part.css("animation", animation.join(","))
    $page.append($part)
  }
  $("#wrapper").append($page)
}
