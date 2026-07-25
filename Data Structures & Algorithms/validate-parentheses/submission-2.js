class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []

        for(let el of s.split("")) {
            if(el === '[' || el === '{' || el === '(') {
                stack.push(el)
            } else {
                let pop = stack.pop()
                if(el === ')' && pop !== '(' ||  el === '}' && pop !== '{' || el === ']' && pop !== '[') {
                    return false
                }
            }
        }

        return stack.length === 0
    }
}
