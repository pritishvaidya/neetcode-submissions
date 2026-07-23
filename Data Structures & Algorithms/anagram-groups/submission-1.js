class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        let output = []

        for(let i = 0; i < strs.length; i++) {
            let val = strs[i]
            let sortedStr = val.split('').sort().join('')
            if(map.has(sortedStr)) {
                const mapVal = map.get(sortedStr)
                mapVal.push(val)
            } else {
                map.set(sortedStr, [val])
            }
        }

        for(let [key, val] of map.entries()) {
            output.push(val)
        }

        return output
    }
}
