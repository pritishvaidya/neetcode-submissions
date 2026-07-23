class MinHeap {
    constructor() {
        this.heap = []
    }

    size() {
        return this.heap.length
    }

    peek() {
        return this.heap[0]
    }

    push(val) {
        this.heap.push(val)
        this.bubbleUp()
    }

    pop() {
        if(this.size() === 0) {
            return null
        }
        if(this.size() === 1) {
            return this.heap.pop()
        }

        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()

        return min
    }

    bubbleUp() {
        let index = this.size() - 1
        while(index > 0) {
            const parent = Math.floor((index - 1) / 2)

            if(this.heap[parent] <= this.heap[index]) {
                break;
            }

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            index = parent
        }
    }

    bubbleDown() {
        let index = 0
        while(true) {
            const left = 2 * index + 1
            const right = 2 * index + 2
            let smallest = index

            if(left < this.size() && this.heap[left] < this.heap[smallest]) {
                smallest = left
            }

            if(right < this.size() && this.heap[right] < this.heap[smallest]) {
                smallest = right
            }

            if(smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]

            index = smallest
        }
    }
}


class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.heap = new MinHeap()

        for(let num of nums) {
            this.heap.push(num)

            if(this.heap.size() > k) {
                this.heap.pop()
            }
        }

    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.push(val)

        if(this.heap.size() > this.k) {
            this.heap.pop()
        }

        return this.heap.peek()
    }
}
