class MinStack {
    constructor() {
        this.arr = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return [...this.arr].sort((a,b) => a - b)[0]
    }
}
