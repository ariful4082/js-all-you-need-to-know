let load = document.getElementById('load')
let postList = document.getElementById('posts')

const URL = 'https://dummyjson.com/posts';


load.addEventListener('click', function(){
    fetch(URL)
    .then(res=>res.json())
    .then((data)=>{
        let posts = data.posts;
        // posts.forEach((post, idn)=>{
        //     let listItem = listItemGenerator(post, idn+1)
        //     postList.appendChild(listItem)
        // })
    posts.map((post, idn)=>{
        let listItem= listItemGenerator(post, idn+1)
        postList.appendChild(listItem)
    })
    })
    .catch((e)=>{
        console.log(e.message)
    })
})

function listItemGenerator(item, no){
    let li = document.createElement('li')
    li.className="list-group-item"
    li.innerHTML = ` ${no}. ${item.title}`
    return li
}