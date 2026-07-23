class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        if(!Array.isArray(digits)) {
            return []
        }

        let newDigits = digits.filter(digit => digit !== undefined).join("")
        return String(Number(newDigits) + 1).split("")

    }
}
