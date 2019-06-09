// 合并排序：将无序的数组 拆成N部分进行有序处理，然后合并；
// 参考代码： https://gist.github.com/paullewis/1982121
function sort9(array) {
    var result = array.slice(0);

    // 递归调用合并函数
    function sort(array) {
        var length = array.length,
            mid = Math.floor(length * 0.5),
            left = array.slice(0, mid),
            right = array.slice(mid, length);

        if (length === 1) {
            return array;
        }
        return merge(sort(left), sort(right));
    }

    // 合并 两有序的数组
    function merge(left, right) {
        var result = [];

        while (left.length || right.length) {

            if (left.length && right.length) {

                if (left[0] < right[0]) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }

            } else if (left.length) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
        return result;
    }

    return sort(result);
}

console.log(sort9([23,1,766,23,0,45]));
