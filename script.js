document.querySelector("body").addEventListener('click', function(e) {
    console.log(e.target.dataset.location)
    
    const infoBox = document.querySelector("#info-box")
    const infoText = infoBox.querySelector("div")
    const infoImage = infoBox.querySelector("img")

    infoText.innerHTML = e.target.dataset.info
    infoImage.src = e.target.dataset.src
    
    infoBox.style.left = `${e.target.offsetLeft}px`
    infoBox.style.top = `${e.target.offsetTop}px`
    


    if(e.target.matches(".spot")){
        
    }
});

document.getElementById('closeButton').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.style.display = 'none';
}, false);