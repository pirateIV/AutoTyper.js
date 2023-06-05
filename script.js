
const output = document.getElementById('output')
const stringArr = ['Benjamin Abolade', 'ChatOpenAI or ChatGPT', 'Search Google to find the words that you are looking for']

let index = 0;
let currentIndex = -1;

function autotype() {
  setInterval(() => {
    currentIndex++

    output.innerHTML += stringArr[index][currentIndex]

    if(currentIndex > stringArr[index].length - 1) {
      console.log('Reached the initial stage')
      output.innerHTML = ''
      currentIndex = -1
      index++
      
    }
    // if(index > stringArr.length) {
    //     index--
    //     autotype()
    // }
  }, 100)
}

function reverseString(){

}

autotype()
