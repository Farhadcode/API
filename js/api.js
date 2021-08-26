
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function postLoad() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => postUpLoad(data))
}

postUpLoad = (posts) => {
    const section = document.getElementById('post');
    for (const post of posts) {
        console.log(post);
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        h1.innerText = `Title :${post.title}`;
        p.innerText = `Post : ${post.body}`;

        div.classList.add("card", "bg-secondary", "text-white", "p-5", "border", "my-3");
        section.appendChild(div);

        div.appendChild(h1);
        div.appendChild(p);

    }
}

function displayUsers(data) {

    const ul = document.getElementById('users');
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `name:${user.name} 
        email:${user.email}`;
        ul.appendChild(li);
    }
}

