class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, [{ value, timestamp }])
        } else {
            console.log({ value, timestamp })
            const entry = this.keyStore.get(key)
            entry.push({ value, timestamp })  
      }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let result;
        let entries = this.keyStore.get(key)
        if(!entries) {
            return ""
        }
        let first = 0
        let last = entries.length - 1
        console.log(first, last)
        while(first <= last) {
            let mid = Math.floor((first + last) / 2)
            if(timestamp === entries[mid].timestamp) {
                return entries[mid].value
            } else if(entries[mid].timestamp < timestamp) {
                console.log('getting mid')
                result = mid
                first = mid + 1
            } else {
                last = mid - 1
            }
        }

        console.log(result)
        return result !== undefined ? entries[result].value : ""
    }
}
