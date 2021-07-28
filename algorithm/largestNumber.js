/**
 * @最大数
*/

var largestNumber = function(nums) {
    nums.sort((x, y) => {
        return `${y}${x}` - `${x}${y}`
    })
    if (nums[0] === 0) {
        return '0'
    }
    return nums.join('')
}

console.log(largestNumber([2, 41]))