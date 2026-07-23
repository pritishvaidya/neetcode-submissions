class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sSorted = s.split('').sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
        let tSorted = t.split('').sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
        return sSorted === tSorted
    }
}
