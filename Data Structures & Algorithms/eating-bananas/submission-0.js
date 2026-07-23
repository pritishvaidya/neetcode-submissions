class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1
        let right = Math.max(...piles)
        let result = right

        while(left <= right) {
            let mid = Math.floor((left + right) / 2)
            let totalTime = 0
            for(const p of piles) {
                totalTime = totalTime + Math.ceil(p / mid)
            }

            if(totalTime <= h) {
                result = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
            return result

    }
}
