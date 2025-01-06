
        const submitBtn = document.getElementById('btn')
        const form = document.querySelector('#userForm')
        const Toast = document.querySelector('.toast')
        const toastMessage = document.querySelector('.toast-message');
       Toast.style.display = 'none'
        function showToast(message, isSuccess) {
            Toast.style.display = 'block';
            toastMessage.textContent = message;
            Toast.classList.add(isSuccess ? 'toast-success' : 'toast-error');
            Toast.classList.add('show');
            
            setTimeout(() => {
                Toast.classList.remove('show');
                setTimeout(() => {
                    Toast.style.display = 'none';
                }, 1000); 
            }, 3000); 
        }


        form.addEventListener('submit', async (event) => {
            event.preventDefault()

            const username = document.getElementById('username').value

            try {
                const response = await fetch('https://xyq.onrender.com/savednames', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username })
                })

                if (response.ok) {
                    const data = await response.json()
                    console.log(data)
                    showToast(`${username} Added Sucessfully` , true)
                } else {
                    throw new Error('something went wrong')
                }
            } catch (error) {
                console.log(error)
                showToast(error.message, false)
            }
            document.getElementById('username').value = ''
        })
        // toast handeling
        Toast.addEventListener('click' , ()=>{
             Toast.style.display = 'none'
        })      
