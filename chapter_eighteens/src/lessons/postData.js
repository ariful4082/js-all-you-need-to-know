let postForm = document.getElementById('post-form')
let posts = document.getElementById('posts')

const URL = 'https://dummyjson.com/posts';

postForm.addEventListener('submit', function(e){
    e.preventDefault();

    let title = this.title.value || undefined;
    let body = this.body.value || undefined;

    if(title && body){
        let postObj = {
            userId: 100,
            title,
            body
        }
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/JSON'
            },
            body: JSON.stringify(postObj)
        })
        .then(res=>res.json())
        .then(post=>{
            let item = listItemGenerator(post)
            posts.appendChild(item)
            this.requestFullscreen()
        })
        .catch(e=>console.log(e.message))

    }else{
        alert('Please Provide Every Details')
    }
})

function listItemGenerator(item, no){
    let li = document.createElement('li')
    li.className="list-group-item"
    li.innerHTML = ` ${no}. ${item.title} By User Id - ${item.id}`
    return li
}