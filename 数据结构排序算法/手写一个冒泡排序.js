function bubble(arr) {
    //冒泡排序就是相邻的比较，大的放后面在跟后面的比较，知道最大的到最后
    for (var i = 0;i<arr.length;i++){
           for (var j = i+1;j<arr.length;j++){
               if (arr[i] > arr[j]){
                   var temp = arr[i];
                   arr[i] =arr[j];
                   arr[j] = temp;
               }
           }
    }
    return arr
}

console.log(bubble([4,32,67,1,78,5]));
