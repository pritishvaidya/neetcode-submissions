class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = position.map((val, index) => ({
            position: val,
            speed: speed[index]
        }))

        cars.sort((a, b) => b.position - a.position)

        let fleets = 0;
        let lastTime = 0;

        for(let index = 0; index < cars.length; index++) {
            let time = (target - cars[index].position) / cars[index].speed
            if(time > lastTime) {
                fleets++
                lastTime = time
            }
        }

        return fleets
    }
}
