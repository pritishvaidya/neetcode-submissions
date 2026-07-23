class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map()
        for(let index = 0; index < numbers.length; index++) {
            const difference = target - numbers[index]
            if(map.has(difference)) {
                const getIndex = map.get(difference)
                return index < getIndex ? [index + 1, getIndex + 1] : [getIndex + 1, index + 1]
            } else {
                map.set(numbers[index], index)
            }
        }
    }
}
