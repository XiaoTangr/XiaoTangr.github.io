console.log("aaaa")

var bgDom = document.getElementById("banner");
function ajax_get() {
    const xhr = new XMLHttpRequest()
    xhr.open('get', 'https://api.yunmge.com/api/randomimg')
    xhr.setRequestHeader('myHeader', 'goodHeader')
    // 一次ajax请求
    xhr.addEventListener('load', function () {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                console.log(xhr.response)
                console.log(xhr.responseText)
            } else {
                console.log('请求不成功')
            }
    })
    xhr.send()
}