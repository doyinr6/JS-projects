const storeItems = document.querySelectorAll('.box')
const buttons = document.querySelectorAll('.button')


buttons.forEach((button) => {

    button.addEventListener('click', (e) => {

        e.preventDefault()

        const filter = e.target.dataset.filter

        if (filter === 'all') {
            storeItems.forEach((item) => {
                item.style.display = 'block'
            })
        } else if (filter === 'manufacturing') {
            storeItems.forEach((item) => {
                if (item.classList.contains('manufacturing')) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })
        } else if (filter === 'packaging') {
            storeItems.forEach((item) => {
                if (item.classList.contains('packaging')) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })
        } else if (filter === 'light') {
            storeItems.forEach((item) => {
                if (item.classList.contains('light')) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })
        } else if (filter === 'delivery') {
            storeItems.forEach((item) => {
                if (item.classList.contains('delivery')) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })
        }

        //add active class
        $("ul .button").click(function() {

            $(this).addClass('active').siblings().removeClass('active');
        })
    })

})

//Search pane 
const search = document.querySelector('.search')

search.addEventListener('input', (e) => {


    let searchFilter = e.target.value.toLowerCase().trim()

    storeItems.forEach((item) => {
        if (item.className.includes(searchFilter)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
})




const buttoned = document.querySelectorAll('.btned')
    //light box item
let lightBoxItem = document.querySelector('.lightbox-item')

//light box 
let lightBox = document.querySelector('.modalBoxed')
    //wire up the left and right buttons
let images = document.querySelectorAll('.store-img');

// set up an array for the items
let imageList = [];
//set up a counter to run through the list of images
let imageCounter = 0;
//use a forEach loop to get a copy of all the images and push into an array of items
images.forEach(function(image) {
    //push each imageto the array of images
    imageList.push(image.src);
})


//Add an a click event listener to each store item
storeItems.forEach(function(item) {
    //On click, allow the model container to show 
    //Change css class from display none to display block
    item.addEventListener('click', function(e) {
        //grab the image of the item that was clicked
        let image = e.target.src;
        //change the background img property of the lightbox item
        lightBoxItem.style.backgroundImage = `url(${image})`;
        //show the modal with the selected image
        lightBox.classList.add('show');
        //get the array index number for the image that was selected
        imageCounter = imageList.indexOf(image);
    });

});


buttoned.forEach((button) => {

    button.addEventListener('click', () => {

        if (button.classList.contains('btn-left')) {
            imageCounter--
            if (imageCounter < 0) {
                imageCounter = imageList.length - 1
            }

            lightBoxItem.style.backgroundImage = `url('${imageList[imageCounter]}')`
        } else if (button.classList.contains('btn-right')) {
            imageCounter++
            if (imageCounter >= imageList.length) {
                imageCounter = 0
            }
            lightBoxItem.style.backgroundImage = `url('${imageList[imageCounter]}')`
        }
    })

    //wire up the modal's close button
    let lightBoxClose = document.querySelector('.modalBox-close');
    lightBoxClose.addEventListener('click', () => {
        lightBox.classList.remove('show');
    });

})