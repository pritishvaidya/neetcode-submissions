class MaxHeap {
    constructor() {
        this.heap = []
    }

    size() {
        return this.heap.length
    }

    peek() {
        return this.heap[0]
    }

    pop() {
        if(this.size() === 0) {
            return null
        }
        if(this.size() === 1) {
            return this.heap.pop()
        }
        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()

        return max
    }

    push(val) {
        this.heap.push(val)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.size() - 1
        while(index > 0) {
            let parent = Math.floor((index - 1) / 2)
            if(this.heap[parent] >= this.heap[index]) {
                break;
            }
            
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
            index = parent
        }
    }

    bubbleDown() {
        let index = 0
        let length = this.size()
        while(true) {
            let largest = index
            let left = 2 * largest + 1
            let right = 2 * largest + 2
            if(left < length && this.heap[largest] < this.heap[left]) {
                largest = left
            } 
            if(right < length && this.heap[largest] < this.heap[right]) {
                largest = right
            }
            if(largest === index) break
            
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]]
            index = largest
        }
    }
}


class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    constructor() {
        this.heap = new MaxHeap([])
    }

    lastStoneWeight(stones) {
        for(let stone of stones) {
            this.heap.push(stone)
        }

        console.log(this.heap)

        while(this.heap.size() > 1) {
            let stone1 = this.heap.pop()
            let stone2 = this.heap.pop()
            this.heap.push(Math.abs(stone2 - stone1))
        }

        if(this.heap.size() > 0) {
            return this.heap.peek()
        }

        return 0
    }
}
