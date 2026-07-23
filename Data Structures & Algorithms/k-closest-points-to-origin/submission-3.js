class MinHeap {
    constructor() {
        this.heap = []
    }

    value(point) {
        return point[0] * point[0] + point[1] * point[1]
    }

    size() {
        return this.heap.length
    }

    peek() {
        return this.value(this.heap[0])
    }

    push(point) {
        this.heap.push(point)
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
            if(Math.sqrt(this.value(this.heap[index])) > Math.sqrt(this.value(this.heap[parent]))) {
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
            let smallest = index

            if(left < length && Math.sqrt(this.value(this.heap[smallest])) > Math.sqrt(this.value(this.heap[left]))) {
                smallest = left
            }
            if(right < length && Math.sqrt(this.value(this.heap[smallest])) > Math.sqrt(this.value(this.heap[right]))) {
                smallest = right
            }

            if(smallest === index) {
                break;
            }

            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]]
            index = smallest
        }
    }
}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let minHeap = new MinHeap()
        let result = []

        for(let point of points) {
            minHeap.push(point)
        }

        
        while(k > 0) {
            result.push(minHeap.pop())
            k--
        }
        console.log(result)
        return result
    }
}
