class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(item => `${item.length}#${item}`).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = []
        let i = 0

        while(i < str.length) {
            let j = i

            while(str[j] !== '#') {
                j++
            }

            const l = Number(str.slice(i, j))
            const s = str.slice(j+1, j+1+l) 

            arr.push(s)
            i = j + 1 + l
        }

        return arr
    }
}
