const setupScrolling = () => {

    const container = [...document.querySelectorAll('.movie-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    container.forEach((item, i) => {
    
        let containerWidth = item.getBoundingClientRect().width; // Get the width of the movie-container
        
        nxtBtn[i].addEventListener('click', () => { // Adding action to Next arrow
            item.scrollLeft += containerWidth;
        
        })
        
        preBtn[i].addEventListener('click', () => {  // Adding action to Previous arrow
            item.scrollLeft -= containerWidth;
            
        })
    })
}


