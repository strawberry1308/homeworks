class Cars {
  constructor(options) {
    this.stamp = options.stamp
    this.price = options.price
    this.wheels = options.wheels
    this.color = options.color
  }
  start() {
    console.log(`${this.stamp} заведен`)
  }
}
class Ferrari extends Cars {
  constructor(options) {
    super(options);
  }
}
const ferrari = new Ferrari({
  stamp: 'Ferrari superFast v12',
  price: '$80.000',
  wheels: 4,
  color: 'yellow'
})

class Mercedes extends Cars {
  constructor(options) {
    super(options);
  }
}
const mercedes = new Mercedes({
  stamp: 'Mercedes AMG 63',
  price: '$20.000',
  wheels: 4,
  color: 'white'
})

class Bmw extends Cars {
  constructor(options) {
    super(options);
  }
}
const bmw = new Bmw({
  stamp: 'BMW e34',
  price: '$10.000',
  wheels: 4,
  color: 'dark blue'
})
ferrari.start()
mercedes.start()
bmw.start()