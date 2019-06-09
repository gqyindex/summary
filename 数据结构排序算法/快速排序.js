function sort6(array) {
    var tmp_array = array.slice(0), result,
        quickSort = function(arr) {
            if (arr.length <= 1) { return arr; }
            var pivotIndex = Math.floor(arr.length / 2);
            var pivot = arr.splice(pivotIndex, 1)[0];
            var left = [];
            var right = [];
            for (var i = 0; i < arr.length; i++){
                if (arr[i] < pivot) {
                    left.push(arr[i]);
                } else {
                    right.push(arr[i]);
                }
            }
            return quickSort(left).concat([pivot], quickSort(right));
        };
    result = quickSort(tmp_array);
    return result;
}

console.log(sort6([23,1,766,23,0,45]));

