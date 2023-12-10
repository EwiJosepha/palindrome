const check = document.getElementById('check')
const displayy = document.getElementById('display')

// getting rid of symbols, numbers and speial characters

function palindrom () {
  const enterr = document.getElementById('start').value
  let result = ''
  if (enterr === '') {
    displayy.innerHTML = ' type a text or number'
  } else {
    const restrictSymbols = enterr.replace(/[\s\w\d_]/gi, '').toLowerCase()
    result = restrictSymbols.split('').reverse().join('')

    // checking whether or not its a palindrome

    if (restrictSymbols === result) {
      displayy.innerHTML = 'it is a palindrome'
      console.log('it is a palindrome')

    } else {
      displayy.innerHTML = 'it is not a palindrome'
      console.log('it is not a palindrome')

      // return 'it is not a palindrome'
    }
  }

  // console.log(restrictSymbols)
}

check.addEventListener('click', palindrom)
