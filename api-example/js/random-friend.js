const randomeFriendLoad = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayRandomeFriend(data));
}

randomeFriendLoad()
const displayRandomeFriend = (data) => {
    const randomFriend = document.getElementById('random');
    const friends = data.results;
    //console.log(friends);
    for (const friend of friends) {

        console.log(friend);
        const p = document.createElement('p');
        p.innerText = `
        Name : ${friend.name.first} ${friend.name.last}
        Gender: ${friend.gender}
        Email : ${friend.email}
        Phone : ${friend.phone}`;
        randomFriend.appendChild(p);

    }

}
