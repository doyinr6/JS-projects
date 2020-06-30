const pictures = [
    'book',
    'boxes',
    'bran',
    'build',
]


const buttons = document.querySelectorAll('.btn')
let imgDiv = document.querySelector('.img-container')

imgDiv.style.backgroundImage = `url('boxes.jpg')`

let count = 0


buttons.forEach((button) => {

    button.addEventListener('click', () => {

        if (button.classList.contains('btn-left')) {
            count--
            if (count < 0) {
                count = pictures.length - 1
            }
            console.log(`${pictures[count]}`)
            imgDiv.style.backgroundImage = `url('${pictures[count]}.jpg')`
        } else if (button.classList.contains('btn-right')) {
            count++
            if (count > pictures.length - 1) {
                count = 0
            }
            imgDiv.style.backgroundImage = `url('${pictures[count]}.jpg')`
        }
    })
})