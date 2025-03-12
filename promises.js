document.getElementById('promiseBtn').addEventListener('click', function () {

    //this is use to updating Output Div
    let output = document.getElementById('output');
    output.innerText = 'Loading...';

    fetchDataWithPromise()
        .then(data => {
            output.innerHTML = data.posts.map(post => `<p>${post.title}</p>`).join('');
        })
        .catch(error => {
            output.innerText = error;
        });
});

function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        //this is use to timeout for abort
        let timeout = setTimeout(() => {
            reject('Operation timed out');
        }, 5000);
        // this is use to fetch data
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                clearTimeout(timeout);
                resolve(data);
            })
            .catch(error => reject(error));
    });
}
