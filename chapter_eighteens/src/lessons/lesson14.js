let title = document.getElementById('title')

// title.style.color = '#f00'
// title.style.fontSize="4rem"
// title.style.backgroundColor = 'rgb(0, 0,0)'

let styleObj = {
    backgroundColor: 'gray',
    fontSize:'30px',
    color: '#efefef'
}

let list  = document.getElementById('list');

[...list.children].forEach(li=>Object.assign(li.style, styleObj))

Object.assign(list.style, styleObj)