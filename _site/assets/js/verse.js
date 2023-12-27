var arr = ['d', 'i', 'k'];
var Random = Math.ceil(Math.random() * 3) - 1;
fetch('https://v1.hitokoto.cn?c=' + arr[Random])
    .then(response => response.json())
    .then(data => {
        document.getElementById("verse").innerHTML = data.hitokoto + " — 《" + data.from + "》";
    })
    .catch(console.error)