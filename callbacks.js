document.getElementById('callbackBtn').addEventListener('click', function () {

    setTimeout(function () {
        //this is use to update output Div
        document.getElementById('output').innerText = "Callback executed after 5 seconds";
        // this is use to fetch Data
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                document.getElementById('output').innerHTML = data.posts.map(post => `<p>${post.title}</p>`).join('');
            });
    }, 5000);
});
