class MinStack {
    constructor() {
        this.stack = []
        this.min = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        const minValue = this.getMin()
        if(this.min.length === 0 || val <= minValue) {
            this.min.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
     const element = this.stack.pop()
     if(element === this.min[this.min.length - 1]) {
        this.min.pop()
     }
    }

    /**
     * @return {number}
     */
    top() {
       return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
       return this.min[this.min.length - 1]
    }
}
