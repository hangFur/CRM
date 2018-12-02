// 定义一个变量用来接收传入的数据(标签内容，标签背景颜色)
var tagData = [{
        name: '集邮爱好者',
        status: 1
    },
    {
        name: '理财爱好者',
        status: 2
    },
    {
        name: '青年',
        status: 3
    },
    {
        name: '白领',
        status: 4
    }
]

// 用函数封装 遍历传入后的数据
function addtagData(data) {
    var taghtml = '';
    var bgColorData = ['#3FAFEB', '#53CE95', ' #FFC61D', '#FD7573'];
    for (var i = 0; i < data.length; i++) {
        var bgColor = '';
        //判断 
        switch (data[i].status) {
            case 1:
                bgColor = bgColorData[0];
                break;
            case 2:
                bgColor = bgColorData[1];
                break;
            case 3:
                bgColor = bgColorData[2];
                break;
            case 4:
                bgColor = bgColorData[3];
                break;
        }
        taghtml += '<li class=" tagLi mt-10 mr-10 " style=" background:' + bgColor + ' "> ' + data[i].name + ' </li>'
    }
    return taghtml;
}
//获取ul标签
var tagUl = document.getElementsByClassName('tagUl')[0];
var add = tagUl.innerHTML
// console.log(tagUl.innerHTML)
// ul标签内容等于 addtagData函数的返回值
tagUl.innerHTML = addtagData(tagData) + add;
var tagHTML2 = addtagData(tagData)
// 给标签注册鼠标点击事件
$('.tagUl').on('click', '.addition',function () {
    // console.log(tagUl.innerHTML)
    var tagHtml = tagUl.innerHTML
    tagHTML2 += addtagData(
        [{
            name: '集邮爱好者',
            status: 1
        },])
    tagUl.innerHTML = tagHTML2 + add
})