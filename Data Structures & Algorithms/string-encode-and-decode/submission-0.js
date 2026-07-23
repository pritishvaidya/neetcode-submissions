class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(str => {
            const length = str.length
            return `${length}#${str}`
        }).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        for(let index = 0; index < str.length;) {
            let sharpIndex = str.indexOf("#", index);
            let length = parseInt(str.slice(index, sharpIndex), 10);
            let decodedStr = str.slice(sharpIndex + 1, sharpIndex + 1 + length);
            result.push(decodedStr)
            index = sharpIndex + 1 + length
        }

        return result
    }
}
