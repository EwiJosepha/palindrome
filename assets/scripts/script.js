const check = document.getElementById('check')
const displayy = document.getElementById('display')

function palindrom(){
  const enterr = document.getElementById('start').value
  let result = ''
  result = enterr.split('').reverse().join('')

  // console.log('this is result', result)
  // console.log('this is input', enterr)

  if (enterr === result) {
    displayy.innerHTML = 'it is a palindrome'
    console.log('it is a palindrome')

    // return "it is a palindrome"
  } else {
    displayy.innerHTML = 'it is not a palindrome'
    console.log('it is not a palindrome')

    // return 'it is not a palindrome'
  }
  console.log(enterr)
}

check.addEventListener('click', palindrom)
