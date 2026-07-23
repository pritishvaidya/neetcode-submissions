class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()

        for(let str of strs) {
            let sortedStr = str.split("").sort((a, b) => a.localeCompare(b)).join("")
            if(map.has(sortedStr)) {
                let val = map.get(sortedStr)
                val.push(str)
            } else {
                map.set(sortedStr, [str])
            }
        }

        let result = []
        for(let [key, val] of map) {
            result.push(val)
        }

        return result
    }
}
