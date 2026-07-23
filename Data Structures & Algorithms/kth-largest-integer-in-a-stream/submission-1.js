class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.heap = nums
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.push(val)
        this.heap.sort((a,b) => a - b)
        return this.heap[this.heap.length - this.k]

    }
}
