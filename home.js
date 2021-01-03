
const inputDom = document.querySelector('#username');
const messageDom = document.querySelector('#message');



let someTimeout;
inputDom.addEventListener('input', (e) => {
    if (e.target.value === "") {
        messageDom.innerHTML = ':)'
    } else {
        messageDom.innerHTML = 'loading'

        const playTheGame = () => {
            someTimeout =
                setTimeout(() => {
                    axios
                        .post('http://localhost:3000',
                            { text: e.target.value }
                        )
                        .then(res => {
                            //    If the user changed the input before getting a response
                            if (res.data === e.target.value) {
                                messageDom.innerHTML = res.data + ' is available';
                            }
                        })
                }, 1000);
        }
        
        clearTimeout(someTimeout);
        playTheGame();
    }
})