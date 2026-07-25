class MinStack {
  constructor() {
    this.arr = [];
    this.minArr = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.arr.push(val);
    if (this.minArr.length === 0 || val <= this.minArr[this.minArr.length - 1]) {
      this.minArr.push(val);
    }
  }

  /**
   * @return {void}
   */
  pop() {
    let val = this.arr.pop();
    if (val === this.minArr[this.minArr.length - 1]) {
      this.minArr.pop();
    }
  }

  /**
   * @return {number}
   */
  top() {
    return this.arr[this.arr.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minArr[this.minArr.length - 1];
  }
}
