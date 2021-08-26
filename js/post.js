fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postUpLoad(data))

postUpLoad = (posts) => {
    const section = document.getElementById('post');
    for (const post of posts) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>

        `
        div.classList.add('post')
        section.appendChild(div);
    }
}