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

        let val = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()

        return val
    }

    bubbleUp() {
        let index = this.size() - 1

        while(index > 0) {
            let parent = Math.floor((index - 1) / 2)
            if(this.heap[index] < this.heap[parent]) {
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
            let left = 2 * index + 1
            let right = 2 * index + 2
            let largest = index

            if(left < length && this.heap[largest] < this.heap[left]) {
                largest = left
            }
            if(right < length && this.heap[largest] < this.heap[right]) {
                largest = right
            }
            if(largest === index) {
                break;
            }

            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]] 
            index = largest
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */

    findKthLargest(nums, k) {
        const heap = new MaxHeap()
        for(let num of nums) {
            heap.push(num)
        }
        
        let val = heap[0]
        while(k > 0) {
            val = heap.pop()
            k--
        }

        return val
    }
}
