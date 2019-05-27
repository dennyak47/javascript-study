function sayName(name) {
  return {
    list: [function () {
      return new Promise((rs, rj) => {
        console.log(`hi ${name}`);
        rs();
      })
    }],
    at: 0,
    sleep(num) {
      this.list.push(function () {
        return new Promise((rs, rj) => {
          console.log(`wait ${num}`)
          setTimeout(() => {
            console.log(`done wait ${num}`)
            rs()
          }, num * 1000);
        })
      })
      this.check();
      return this;
    },
    sleepFirst(num) {
      this.list.unshift(function () {
        return new Promise((rs, rj) => {
          console.log(`wait ${num}`)
          setTimeout(() => {
            console.log(`done wait ${num}`)
            rs()
          }, num * 1000);
        })
      })
      this.check();
      return this;
    },
    eat(thing) {
      this.list.push(function () {
        return new Promise((rs, rj) => {
          console.log(`eat ${thing}`);
          rs();
        })
      });
      this.check();
      return this;
    },
    check() {
      let length = this.list.length;
      setTimeout(() => {
        if (this.list.length === length) {
          // console.log('same')
          this.doNext()
        } else {
          // console.log('not same')
        }
      }, 0)

    },
    doNext() {
      if (this.at < this.list.length) {
        this.list[this.at]().then(
          () => {
            this.at++;
            this.doNext.call(this);
          }
        )
      }
    }
  }
}