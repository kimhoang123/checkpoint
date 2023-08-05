    const users = JSON.parse(localStorage.getItem('users')) || []
    const formElement = document.getElementById('form')
    const nameElement = document.getElementById('name')
    const ageElement = document.getElementById('age')
    const emailElement = document.getElementById('email')

      formElement.addEventListener('submit', function (event) {
        event.preventDefault()
        const nameValue = nameElement.value
        const ageValue = ageElement.value
        const emailValue = emailElement.value
        users.push({
         name: nameValue,
          age: ageValue,
          email: emailValue,
        })
        localStorage.setItem('users', JSON.stringify(users))
      })
   