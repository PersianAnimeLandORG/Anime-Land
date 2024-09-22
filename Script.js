// پیکربندی Firebase (کد را با کد پروژه خود جایگزین کنید)
const firebaseConfig = {
    apiKey: "AIzaSyDrR9tDlbXx7CJhHZxGc34i5xLfQcBIZ9Y",
    authDomain: "anime-land-28ab2.firebaseapp.com",
    projectId: "anime-land-28ab2",
    storageBucket: "anime-land-28ab2.appspot.com",
    messagingSenderId: "11931325913",
    appId: "1:11931325913:web:aae3b64377c80e1cc2b5c8"
};

// مقداردهی اولیه Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// تابع برای نمایش انیمه‌ها
function displayAnimes(animes) {
    const listContainer = document.getElementById('anime-list');
    listContainer.innerHTML = '';
    
    animes.forEach(anime => {
        const animeItem = document.createElement('div');
        animeItem.className = 'anime-item';
        animeItem.innerHTML = `
            <h3>${anime.name}</h3>
            <a href="${anime.link}" target="_blank">دانلود</a>
        `;
        listContainer.appendChild(animeItem);
    });
}

// دریافت داده‌ها از Firestore
db.collection("animes").get().then((querySnapshot) => {
    const animeList = [];
    querySnapshot.forEach((doc) => {
        animeList.push(doc.data());
    });
    displayAnimes(animeList);

    // اضافه کردن قابلیت جستجو
    document.getElementById('search').addEventListener('input', function() {
        const searchValue = this.value.toLowerCase();
        const filteredAnimes = animeList.filter(anime => anime.name.toLowerCase().includes(searchValue));
        displayAnimes(filteredAnimes);
    });
}).catch((error) => {
    console.error("Error getting documents: ", error);
});
