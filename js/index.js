
var tagData = [
    {
        name: '集邮爱好者',
        status: 1
    },
    {
        name: '理财爱好者',
        status: 2
    },
    {
        name: '理财爱好者',
        status: 4
    },
    {
        name: '理财爱好者',
        status: 2
    }
]

function addtagData(data) {
    
    var taghtml = ''
    var bgColorData = ['red','blue', 'yellow', 'green']
    for (let i = 0; i < data.length; i++) {
        var bgColor = ''
        switch (data[i].status) {
            case 1: bgColor = bgColorData[0];break;
            case 2: bgColor = bgColorData[1];break;
            case 3: bgColor = bgColorData[2];break;
            case 4: bgColor = bgColorData[3];break;

        }
        taghtml += '<li class=" tagLi mt-10 mr-10 " style=" background: ' + bgColor + ' ">' + data[i].name + '</li>'
        
    }
    return taghtml
}
var tagUl = document.getElementsByClassName('tagUl')[0]
console.log(tagUl.innerHTML)
tagUl.innerHTML = addtagData(tagData)

$('.addition').click(function () {
    console.log(tagUl.innerHTML)
    var tagUlhtml = tagUl.innerHTML
    tagUl.innerHTML = tagUlhtml + addtagData([{
        name: '测试',
        status: 2
    }])
})