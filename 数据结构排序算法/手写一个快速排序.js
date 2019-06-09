/*选取第一个作为基准，然后第一个元素作为left，最后一个作为right,right与base比较
* 如果right小于base，则交换位置，然后从left找大的*/
function quickSort(arr) {
if(arr.length<=1) {
        return arr;
    }

    var left = [];
    var right = [];
    var temp = arr[0];
    for (var i = 1;i<arr.length;i++){
        if (arr[i] > temp){
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat([temp],quickSort(right))

}
var arr = [3,5,1,7,8,20,0];
console.log(quickSort(arr));
