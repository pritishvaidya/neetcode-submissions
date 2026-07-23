class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      if(strs.length === 0) {
        return []
    }

    const map = new Map()
    for(let str of strs) {
        const sortedStr = str.split('').sort().join('')
        if(map.has(sortedStr)) {
            const val = map.get(sortedStr)
            val.push(str)
        } else {
            map.set(sortedStr, [str])
        }
    }

    return Array.from(map.values()) 
    }
}
