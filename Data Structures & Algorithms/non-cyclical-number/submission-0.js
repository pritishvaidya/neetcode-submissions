class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let num = n
        if( n > 0 ) {
            let cycle = new Set()
            while(true) {
                let sum = 0
                let digits = String(num).split("") 
                for(let digit of digits) {
                    sum += digit ** 2
                }
                if(sum === 1) {
                    return true
                } else if(cycle.has(sum)) {
                    return false
                } else {
                    num = sum
                    cycle.add(sum)
                }
            }
            
        }
    }
}
