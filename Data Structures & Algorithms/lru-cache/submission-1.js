class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)) {
            const value = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, value)
            return value
        } else {
            return -1
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        
        if(this.cache.has(key)) {
            this.cache.delete(key)
        } else if (this.cache.size === this.capacity) {
            const nextKey = this.cache.keys().next().value
            this.cache.delete(nextKey)
        }
        this.cache.set(key, value)
        return { key, value }
    }
}
