function maxCount(str) {
    //先定义一个对象，循环str，判断对象中是否有这个字母，有就count++，没有就记录到对象中
    //最后要取出最大的count，用MAX就行，然后取出对应的key
    var result = {};
    var count = 1;
    for (var i=0;i<str.length;i++){
        if (!result.hasOwnProperty(str[i])){
            result[str[i]] = count;
        }else {
            count++;
            result[str[i]] = count;
        }
    }

    var max = 0;
    var maxValue = '';
    for (var key in result){
        if(result[key] > max){
            max = result[key]
            maxValue = key
        }
    }
    return maxValue


}



console.log(maxCount('gstydasdsddd'));
