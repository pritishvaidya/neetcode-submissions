class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    return strs
      .map((str) => {
        return `${str.length}#${str}`;
      })
      .join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let result = [];
    let i = 0
    while(i < str.length) {
        let j = i;

        while(str[j] !== '#') {
            j++
        }

        let length = Number(str.substring(i, j))
        let string = str.substring(j+1, j+length+1)
        result.push(string)

        i = j + length + 1
    }
    return result
  }
}
