//创建xhr对象
var xhr = null;
if (window.XMLHttpRequest){
    xhr = new XMLHttpRequest()
} else {
    xhr = new ActiveXObject('Microsoft.xmlHTTP')
}

//监听xhr对象的状态改变事件
// noinspection JSAnnotator
xhr.onreadystatechange() = function () {
    if (this.readyState === 4 && this.status === 200){
        //成功状态
        console.log(xhr.responseText)
    }
};

//发送一个请求
xhr.open("get",url,true);
//get

//post请求要添加请求头
/*xhr.open("POST", url, true);
// 添加http头，发送信息至服务器时内容编码类型
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");*/

//请求参数
xhr.send(null);


