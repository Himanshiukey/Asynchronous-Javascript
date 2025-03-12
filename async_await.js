document.getElementById('asyncawaitBtn').addEventListener('click', async function () {

    //this is use to updating Output Div
    let output = document.getElementById('output');
    output.innerText = 'Loading...';

    // this is use to For abort after 5 sec
    let abortcontroller = new AbortController();
    let signals = abortcontroller.signal;
    console.log(signals);

    setTimeout(() => controller.abort(), 5000);

    try {
        // this is use to fetch Data
        let response = await fetch('https://dummyjson.com/posts', { signals });
        let data = await response.json();

        output.innerHTML = data.posts.map(post => `<p>${post.title}</p>`).join('');
    } catch (error) {
        if (error.name === 'AbortError') {
            output.innerText = 'Operation timed out';
        } else {
            output.innerText = 'Error fetching data';
        }
    }
});
