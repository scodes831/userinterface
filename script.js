
// DROP DOWN MENU
// const heading = document.getElementById('heading');
// const menuList = document.getElementById('options-list');
// const options = document.querySelectorAll('.option');
// let toggle;

// window.onload = function() {
//     hideMenu(options);
// }

// toggleMenu(heading, options);

// function hideMenu(input) {
//     for (let i = 0; i < input.length; i++) {
//         input[i].style.display = "none";
//     }
//     toggle = "hidden";
// }

// function showMenu(input) {
//     for (let i = 0; i< input.length; i++) {
//         input[i].style.display = "block";
//     }
//     toggle = "visible";
// }

// function toggleMenu(btn, input) {
//     btn.addEventListener('click', () => {
//         if (toggle === "hidden") {
//             console.log("it's currently hidden");
//             showMenu(input);
//         } else if (toggle === "visible") {
//             console.log("it's currently visible");
//             hideMenu(input);
//         }
//     })
// }

// IMAGE SLIDER
const nextBtn = document.getElementById('btn-next');
const previousBtn = document.getElementById('btn-previous');
const images = document.querySelectorAll('.image');
const selectBtns = document.querySelectorAll('.selections');
let selectedImage = ['image-1'];

const deerImage = document.getElementById('image-1');
const geeseImage = document.getElementById('image-2');
const mountainImage = document.getElementById('image-3');
const lighthouseImage = document.getElementById('image-4');
const canyonImage = document.getElementById('image-5');

loadHomepage();
clickNext();
previousImage();
chooseImage();

function loadHomepage() {
    for (let i = 0; i < images.length; i++) {
        if (i === 0) {
            console.log("this is the first picutre");
            selectBtns[0].style.backgroundColor = "yellow";
        } else {
            images[i].style.display = "none";
        }
    }
}

function clickNext() {
    nextBtn.addEventListener('click', nextImage);
}

function nextImage() {
        console.log("next image");
        
        hideCurrentImage();
        let currentImage = selectedImage[selectedImage.length-1];
        if (currentImage === "image-1") {
            geeseImage.style.display = "inline";
            selectedImage.push(images[1].id);
            selectBtns[1].style.backgroundColor = "yellow";
        } else if (currentImage === "image-2") {
            mountainImage.style.display = "inline";
            selectedImage.push(images[2].id);
            selectBtns[2].style.backgroundColor = "yellow";
        } else if (currentImage === "image-3") {
            lighthouseImage.style.display = "inline";
            selectedImage.push(images[3].id);
            selectBtns[3].style.backgroundColor = "yellow";
        } else if (currentImage === "image-4") {
            canyonImage.style.display = "inline";
            selectedImage.push(images[4].id);
            selectBtns[4].style.backgroundColor = "yellow";
        } else if (currentImage === "image-5") {
            deerImage.style.display = "inline";
            selectedImage.push(images[0].id);
            selectBtns[0].style.backgroundColor = "yellow";
        }
        console.log(selectedImage);
}      

function previousImage() {
    previousBtn.addEventListener('click', () => {
        console.log("previous image");
        hideCurrentImage();

        let currentImage = selectedImage[selectedImage.length-1];

        if (currentImage === "image-1") {
            canyonImage.style.display = "inline";
            selectedImage.push(images[4].id);
            selectBtns[4].style.backgroundColor = "yellow";
        } else if (currentImage === "image-2") {
            deerImage.style.display = "inline";
            selectedImage.push(images[0].id);
            selectBtns[0].style.backgroundColor = "yellow";
        } else if (currentImage === "image-3") {
            geeseImage.style.display = "inline";
            selectedImage.push(images[1].id);
            selectBtns[1].style.backgroundColor = "yellow";
        } else if (currentImage === "image-4") {
            mountainImage.style.display = "inline";
            selectedImage.push(images[2].id);
            selectBtns[2].style.backgroundColor = "yellow";
        } else if (currentImage === "image-5") {
            lighthouseImage.style.display = "inline";
            selectedImage.push(images[3].id);
            selectBtns[3].style.backgroundColor = "yellow";
        }
        console.log(selectedImage);

    })
}

function chooseImage() {
    selectBtns.forEach(button => {
        button.addEventListener('click', e => {
            console.log(e.target.id);
            hideCurrentImage();
            button.style.backgroundColor = "yellow";
            if (e.target.id === "one") {
                console.log(images[0].id);
                images[0].style.display = "inline";
                selectedImage.push(images[0].id)
            } else if (e.target.id === "two") {
                images[1].style.display = "inline";
                console.log(images[1].id);
                selectedImage.push(images[1].id)
            }else if (e.target.id === "three") {
                images[2].style.display = "inline";
                selectedImage.push(images[2].id)
            } else if (e.target.id === "four") {
                images[3].style.display = "inline";
                selectedImage.push(images[3].id)
            } else if (e.target.id === "five") {
                images[4].style.display = "inline";
                selectedImage.push(images[4].id)
            } 
            console.log(selectedImage);

        })
    })
}

function slideshow() {
    nextImage();
    setTimeout(slideshow, 3000);
}

slideshow();

function hideCurrentImage() {
    let currentImage = selectedImage[selectedImage.length-1];
    console.log(`The current image is ${currentImage}`);
    
    if (currentImage === "image-1") {
        deerImage.style.display = "none";
        selectBtns[0].style.backgroundColor = "white";
    } else if (currentImage === "image-2") {
        geeseImage.style.display = "none";
        selectBtns[1].style.backgroundColor = "white";
    } else if (currentImage === "image-3") {
        mountainImage.style.display = "none";
        selectBtns[2].style.backgroundColor = "white";
    } else if (currentImage === "image-4") {
        lighthouseImage.style.display = "none";
        selectBtns[3].style.backgroundColor = "white";
    } else if (currentImage === "image-5") {
        canyonImage.style.display = "none";
        selectBtns[4].style.backgroundColor = "white";
    }
}




