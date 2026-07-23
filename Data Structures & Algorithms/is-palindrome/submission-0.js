class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const validString = s.trim().toLowerCase().split("").filter(s => /[a-z0-9]/.test(s)).join("")
        for(let index = 0; index < validString.length; index++) {
            if(validString[index] !== validString[validString.length - 1 - index]) {
                return false
            }
        }
        return true
    }
}
