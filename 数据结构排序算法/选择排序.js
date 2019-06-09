// 在无序区中选出最小的元素，然后将它和无序区的第一个元素交换位置。
// 原理跟冒泡排序一样，算是冒泡的衍生版本
function sort7(array) {
    var len = array.length,
        i, j, k, tmp, result;

    result = array.slice(0);
    for (i = 0; i < len; i++) {
        k = i;
        for (j = i + 1; j < len; j++) {
            if (result[j] < result[k]) k = j;
        }
        if (k != i) {
            tmp = result[k];
            result[k] = result[i];
            result[i] = tmp;
        }
    }
    return result;
}

console.log(sort7([23,1,766,23,0,45]));
