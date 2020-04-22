document.addEventListener('DOMContentLoaded', () => {

    const beerImage = document.querySelector('.beer-image')
    const beerTitle = document.querySelector('.beer-title');
    const beerTagline = document.querySelector('.beer-tagline');
    const beerDescription = document.querySelector('.beer-description');
    const beerDate = document.querySelector('.beer-date');
    const reloadBtn = document.getElementById('btn');

    let url = "https://api.punkapi.com/v2/beers/random";
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const name = data[0].name;
            const tagline = data[0].tagline;
            const first_brewed = data[0].first_brewed;
            const description = data[0].description;
            const image = data[0].image_url;

            beerTitle.innerHTML = name;
            beerTagline.innerHTML = tagline;
            beerDescription.innerHTML = description;
            beerDate.innerHTML = first_brewed;
            beerImage.src = image;
        })

    reloadBtn.addEventListener('click', () => {
        window.location.reload();
    })


})