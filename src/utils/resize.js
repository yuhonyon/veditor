import $ from "jquery"
import EventTarget from "./event"
class Resize extends EventTarget {
  constructor () {
    super()
    this.options = {
      width: 100,
      height: 100,
      left: 300,
      top: 300,
      angle: 0
    }
    this.el = {}
    this.handler = {}
    this.boxShow = false
  }

  initResizeBox () {
    this.handler.box = $('<div id="R-b"></div>')
    this.handler.n = $('<div id="R-n"></div>')
    this.handler.s = $('<div id="R-s"></div>')
    this.handler.w = $('<div id="R-w"></div>')
    this.handler.e = $('<div id="R-e"></div>')
    this.handler.ne = $('<div id="R-ne"></div>')
    this.handler.nw = $('<div id="R-nw"></div>')
    this.handler.se = $('<div id="R-se"></div>')
    this.handler.sw = $('<div id="R-sw"></div>')
    this.handler.c = $('<div id="R-c"></div>')
    for (let i of ['n',
      's',
      'w',
      'e',
      'nw',
      'ne',
      'se',
      'sw',
      'c']) {
      this.handler.box.append(this.handler[i])
    }
    this.handler.box.css({
      width: this.options.width,
      height: this.options.height,
      left: this.options.left,
      top: this.options.top,
      transform: 'rotate(' + this.options.angle + 'deg)'
    })

    $('#wrapper').append(this.handler.box)
    this.emit('init', {Rb: this.handler.box[0], base: this.options})
  }

  bindResizeEvent () {
    let ox = 0,
      oy = this.options.y,
      ow = this.options.width,
      oh = this.options.height,
      ol = this.options.left,
      ot = this.options.top,
      oa = this.options.angle,
      nmove = false,
      smove = false,
      wmove = false,
      emove = false,
      swmove = false,
      semove = false,
      nwmove = false,
      nemove = false,
      cmove = false
    let box = this.handler.box
    let PI = 0.017453293
    this.handler.n.on('mousedown', function (e) {
      oy = e.pageY
      oh = box.height()
      ot = parseInt(box.css('top'))
      nmove = true
    })
    this.handler.s.on('mousedown', function (e) {
      oy = e.pageY
      oh = box.height()
      smove = true
    })
    this.handler.w.on('mousedown', function (e) {
      ox = e.pageX
      ow = box.width()
      ol = parseInt(box.css('left'))
      wmove = true
    })
    this.handler.e.on('mousedown', function (e) {
      ox = e.pageX
      ow = box.width()
      emove = true
    })
    this.handler.nw.on('mousedown', function (e) {
      ox = e.pageX
      ow = box.width()
      ol = parseInt(box.css('left'))
      oy = e.pageY
      oh = box.height()
      ot = parseInt(box.css('top'))
      nwmove = true
    })
    this.handler.ne.on('mousedown', function (e) {
      ox = e.pageX
      ow = box.width()
      oy = e.pageY
      oh = box.height()
      ot = parseInt(box.css('top'))
      nemove = true
    })
    this.handler.sw.on('mousedown', function (e) {
      ox = e.pageX
      ow = box.width()
      ol = parseInt(box.css('left'))
      oy = e.pageY
      oh = box.height()
      swmove = true
    })
    this.handler.se.on('mousedown', function (e) {
      ox = e.pageX
      ow = box.width()
      oy = e.pageY
      oh = box.height()
      semove = true
    })
    this.handler.c.on('mousedown', function (e) {
      ox = e.pageX
      oy = e.pageY
      ol = parseInt(box.css('left'))
      ot = parseInt(box.css('top'))
      cmove = true
    })

    $(document).on('mousedown', '.part', (e) => {
      if (this.el[0] === e.target && this.boxShow) {
        return false
      }
      this.boxShow = true
      this.el = $(e.target)
      this.emit('changePart', {target: this.el[0], base: this.options})
      this.options = {
        width: this.el.outerWidth(),
        height: this.el.outerHeight(),
        left: parseInt(this.el.css('left')),
        top: parseInt(this.el.css('top')),
        angle: 0
      }
      box.css({
        width: this.options.width,
        height: this.options.height,
        left: this.options.left,
        top: this.options.top,
        transform: 'rotate(' + this.options.angle + 'deg)'
      })
      box.show()
      ox = e.pageX
      oy = e.pageY
      ol = this.options.left
      ot = this.options.top
      cmove = true
      return false
    })
    $(document).on('click', '.page', (e) => {
      this.emit('hide', {target: this.el[0], base: this.options})
      box.hide()
      this.boxShow = false
    })

    $(document).on('mousemove', (e) => {
      if (nmove) {
        let y = e.pageY - oy
        y = y < oh
          ? y
          : oh
        box.css({
          height: oh - y,
          top: ot + y
        })
      }
      if (smove) {
        let y = e.pageY - oy
        y = y > -oh
          ? y
          : -oh
        box.css({
          height: oh + y
        })
      }
      if (emove) {
        let x = e.pageX - ox
        x = x > -ow
          ? x
          : -ow
        box.css({
          width: ow + x
        })
      }
      if (wmove) {
        let x = e.pageX - ox
        x = x < ow
          ? x
          : ow
        box.css({
          width: ow - x,
          left: ol + x
        })
      }
      if (nwmove) {
        let x = e.pageX - ox
        let y = e.pageY - oy
        x = x < ow
          ? x
          : ow
        y = y < oh
          ? y
          : oh
        box.css({
          width: ow - x,
          left: ol + x,
          height: oh - y,
          top: ot + y
        })
      }
      if (nemove) {
        let x = e.pageX - ox
        let y = e.pageY - oy
        y = y < oh
          ? y
          : oh
        x = x > -ow
          ? x
          : -ow
        box.css({
          width: ow + x,
          height: oh - y,
          top: ot + y
        })
      }
      if (swmove) {
        let x = e.pageX - ox
        let y = e.pageY - oy
        x = x < ow
          ? x
          : ow
        y = y > -oh
          ? y
          : -oh
        box.css({
          width: ow - x,
          left: ol + x,
          height: oh + y
        })
      }
      if (semove) {
        let x = e.pageX - ox
        let y = e.pageY - oy
        y = y > -oh
          ? y
          : -oh
        x = x > -ow
          ? x
          : -ow
        box.css({
          width: ow + x,
          height: oh + y
        })
      }
      if (cmove) {
        let x = e.pageX - ox
        let y = e.pageY - oy
        box.css({
          left: ol + x,
          top: ot + y
        })
      }
      if (cmove || nmove || smove || wmove || emove || nemove || semove || swmove) {
        this.emit('changing', {target: this.el[0]})
        this.el.css({
          left: parseInt(box.css('left')),
          top: parseInt(box.css('top')),
          width: box.width(),
          height: box.height()
        })
      }
    }).on('mouseup', () => {
      if (cmove || nmove || smove || wmove || emove || nemove || semove || swmove) {
        this.options = {
          width: box.width(),
          height: box.height(),
          left: parseInt(box.css('left')),
          top: parseInt(box.css('top')),
          angle: 0
        }
        this.emit('change', {target: this.el[0], base: this.options})
        nmove = false
        smove = false
        swmove = false
        semove = false
        nwmove = false
        nemove = false
        wmove = false
        emove = false
        cmove = false
      }
    })
  }
}
