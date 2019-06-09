// 1) 初始堆：将原始数组调整成大根堆的方法——筛选算法:子节点都比父节点小
// 2) 堆排序： 每次将堆顶元素与数组最后面的且没有被置换的元素互换。
function sort8(array) {
    var result = array.slice(0);

    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    function maxHeapify(array, index, heapSize) {
        var iMax, iLeft, iRight;
        while (true) {
            iMax = index;
            iLeft = 2 * index + 1;
            iRight = 2 * (index + 1);

            if (iLeft < heapSize && array[index] < array[iLeft]) {
                iMax = iLeft;
            }

            if (iRight < heapSize && array[iMax] < array[iRight]) {
                iMax = iRight;
            }

            if (iMax != index) {
                swap(array, iMax, index);
                index = iMax;
            } else {
                break;
            }
        }
    }

    function buildMaxHeap(array) {
        var i, iParent = Math.floor(array.length / 2) - 1;

        for (i = iParent; i >= 0; i--) {
            maxHeapify(array, i, array.length);
        }
    }

    function sort(array) {
        buildMaxHeap(array);

        for (var i = array.length - 1; i > 0; i--) {
            swap(array, 0, i);
            maxHeapify(array, 0, i);
        }
        return array;
    }

    return sort(result);
}

console.log(sort8([23,1,766,23,0,45]));
