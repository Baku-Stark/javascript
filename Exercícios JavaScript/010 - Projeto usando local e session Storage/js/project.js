const userName = document.querySelector('#name-form')
const welcomeContainer = document.querySelector('.welcome-content')
const welcomeSet = document.querySelector('#username')
const logoutBTN = document.querySelector('.logout_button')

function checkUser(){
    const userNameLogin = localStorage.getItem("user_name")

    if(userNameLogin){
        userName.style.display = "none"
        welcomeContainer.style.display = 'block'

        welcomeSet.innerText = localStorage.getItem("user_name")
    }

    else{
        userName.style.display = 'block'
        welcomeContainer.style.display = 'none'
    }
}

userName.addEventListener('submit', (e) => {
    e.preventDefault()

    const nameInput = document.querySelector('#i_name')
    localStorage.setItem("user_name", nameInput.value)
    nameInput.value = ""

    checkUser()
})

logoutBTN.addEventListener('click', () => {
    localStorage.removeItem("user_name")

    checkUser()
})

// Application start
checkUser()