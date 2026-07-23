class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumeric(char) {
        return (char >= 'a' && char <= 'z') || 
               (char >= 'A' && char <= 'Z') || 
               (char >= '0' && char <= '9');
    }

    isPalindrome(s) {        
        
        let str = ""

        for(let char of s) {
            if(this.isAlphanumeric(char)) {
            str = str + char.toLowerCase()
            }
        }

        let first = 0
        let last = str.length - 1

        while(first < last) {
            if(str[first] !== str[last]) {
                return false
            } else {
                first++
                last--
            }
        }
        return true
    }
}
