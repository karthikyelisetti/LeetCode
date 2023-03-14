/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let sum = 0;
    var indexArr = [];
    for(var i=0; i<nums.length; i++) {
        for(var j=0; j<nums.length; j++) {
            if(i != j) {
                sum = nums[i] + nums[j];
                if (sum === target) {
                    indexArr.push(i);
                    indexArr.push(j);
                    return indexArr;
                }                
            }
        }
    }    
};
