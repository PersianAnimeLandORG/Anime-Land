const animeList = [
    { 
        name: 'Steins;Gate', 
        img: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9253-7pdcVzQSkKxT.jpg', 
        url: 'steins-gate.html' // لینک به صفحه‌ی جزئیات انیمه
    },
    { name: 'Naruto', img: 'https://example.com/naruto.jpg', url: 'naruto.html' },
    { name: 'One Piece', img: 'https://example.com/one-piece.jpg', url: 'one-piece.html' },
];

function displayAnime(list) {
    const container = document.getElementById('anime-list');
    container.innerHTML = '';
    
    list.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.classList.add('anime-card');
        
        animeCard.innerHTML = `
            <a href="${anime.url}">
                <img src="${anime.img}" alt="${anime.name}">
                <h3>${anime.name}</h3>
            </a>
        `;
        
        container.appendChild(animeCard);
    });
}

document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredAnime = animeList.filter(anime => anime.name.toLowerCase().includes(searchTerm));
    displayAnime(filteredAnime);
});

displayAnime(animeList);
