$(function () {
//   用data.json中的数据渲染表格
   $.ajax ({
       url: "data.json",
       type :"get",
       dataType:"json",
       success : function (res) {
           $.each(res,function (i,item) {
               var $tr = '<tr trId= ' + (item.id) + '> <td> '+ (item.id) +'</td> <td> '+(item.name)+' </td> <td> '+(item.author)+' </td> <td> '+(item.price)+' </td> <td> '+(item.publisher)+' </td> <td> '+(item.ISBN)+' </td> </tr>';
               $('#tbody_info').append($tr)
           })

       }
   });

    /*新增图书功能*/
    // 点击按钮显示对应的展示层信息
    $('#btn_add').click(function () {
        $('#myModalLabel').text("图书");
        $('#myModal').modal();
    });

    // 验证新增图书的书名、作者、价格、出版社和isbn必填，价格需要数字
    //(因为我设置了图书价格的输入框type="number"，所以输入的价格是数字）
    $('#btn_submit').click(function () {
        // 某一项关键词没有填写，就提示信息未填写完整
        if ($('#bookName').val() === undefined || $('#bookAuthor').val() === undefined || $('#bookPrice').val() === undefined || $('#bookPublish').val() === undefined || $('#bookISBN').val() === undefined){
            alert('请将信息填写完整')
        }else {
                alert("图书信息提交成功")
        }
    })

    /*修改图书功能、删除图书功能*/
    $('#tbody_info').on("click","tr",function(){
        //获取到了当前点击的Id
        var updateId = this.getAttribute('trId');

        //修改图书
        $('#btn_update').click(function () {
            console.log(updateId);
            $.ajax({
                url: "data.json",
                type: "get",
                dataType: "json",
                success : function (res) {
                    //获取数据成功后，找到当前点击的Id所匹配的图书信息
                    res.filter(function (value) {
                        if (value.id == updateId) {
                            $('#bookName')[0].value = value.name;
                            $('#bookAuthor')[0].value = value.author;
                            $('#bookPrice')[0].value = value.price;
                            $('#bookPublish')[0].value = value.publisher;
                            $('#bookISBN')[0].value = value.ISBN;
                        }
                    });
                    $('#myModalLabel').text("图书");
                    $('#myModal').modal();
                }
            });
        });

        //删除图书
        $('#btn_delete').click(function () {
            bootbox.alert("确认删除", function () {

            })
        })
    });

/*删除图书*/

});