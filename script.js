
const output = document.getElementById('output')
const stringArr = ['Benjamin Abolade', '', 'Search Google to find what you are looking for']

let index = 0;
let currentIndex = -1;
let interval;

function autotype() {
  interval = setInterval(() => {
    currentIndex++

    if(currentIndex <= stringArr[index].length - 1){
      output.innerHTML += stringArr[index][currentIndex]
    } else {
      clearInterval(interval)
      setTimeout(() => {
        reverseString()
      }, 1000)
    }

  }, 100)
}

function reverseString(){
  interval = setInterval(() => {
    if(currentIndex >= 0){
      output.innerHTML = output.innerHTML.slice(0, -1)
      currentIndex--
    } else {
      clearInterval(interval)
      index++
      // index = (index + 1) % stringArr.length - Restart from the beginning
      autotype()
    }
  }, 100)
}

autotype()
