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
