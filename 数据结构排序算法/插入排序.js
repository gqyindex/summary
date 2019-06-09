/*插入排序：第一个元素作为基准值，跟第二个元素比较，第二个比基准值小，则插入，反之不变。然后拿前两个已排序的作为基准值，跟第三个比较*/
var arr = [45,23,78,213,980];
console.log(insertSort(arr));

function insertSort(array) {
    var len = array.length,
        i, j, tmp, result;

    result = array.slice(0);
    for(i=1; i < len; i++){
        tmp = result[i];
        j = i - 1;
        while(j>=0 && tmp < result[j]){
            result[j+1] = result[j];
            j--;
        }
        console.log(j);
        result[j+1] = tmp;
    }
    return result;
}
