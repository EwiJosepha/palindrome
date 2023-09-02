const check = document.getElementById('check')
const displayy = document.getElementById('display')

function palindrom() {
  const enterr = document.getElementById('start').value
  let result = ''
  if (enterr === '') {
    displayy.innerHTML = ' type a text or number'
  } else {
    const restrictSymbols = enterr.replace(/[^a-z0-9]/g, '').toLowerCase()
    result = restrictSymbols.split('').reverse().join('')

    // console.log('this is result', result)
    // console.log('this is input', enterr)

    if (restrictSymbols === result) {
      displayy.innerHTML = 'it is a palindrome'
      console.log('it is a palindrome')

      // return "it is a palindrome"
    } else {
      displayy.innerHTML = 'it is not a palindrome'
      console.log('it is not a palindrome')

      // return 'it is not a palindrome'
    }
  }

  console.log(restrictSymbols)
}

check.addEventListener('click', palindrom)
