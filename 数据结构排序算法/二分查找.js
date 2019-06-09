function halfSort(array) {
    var len = array.length,
        i, j, tmp, low, high, mid, result;

    result = array.slice(0);
    for(i = 1; i < len; i++){
        tmp = result[i];
        low = 0;
        high = i - 1;
        while(low <= high){
            mid = parseInt((low + high)/2, 10);
            if(tmp < result[mid]) high = mid - 1;
            else low = mid + 1;
        }
        for(j = i - 1; j >= high+1; j--){
            result[j+1] = result[j];
        }
        result[j+1] = tmp;
    }
    return result;
}

var arr = [3,12,78,90,1,4,100];
console.log(halfSort(arr));
