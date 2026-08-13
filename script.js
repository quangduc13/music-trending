// Dữ liệu danh sách bài hát Trending
const songsData = [
    {
        id: 1,
        title: "Flowers",
        artist: "Miley Cyrus",
        composer: "Miley Cyrus, Gregory Aldae Hein, Michael Pollack",
        releaseDate: "12/01/2023",
        album: "Endless Summer Vacation",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop",
        youtube: "https://www.youtube.com/watch?v=G7KNmW9a75Y",
        lyrics: `We were good, we were gold
Kinda dream that can't be sold
We were right 'til we weren't
Built a home and watched it burn

I can buy myself flowers
Write my name in the sand
Talk to myself for hours
Say things you don't understand
I can take myself dancing
And I can hold my own hand
Yeah, I can love me better than you can`
    },
    {
        id: 2,
        title: "As It Was",
        artist: "Harry Styles",
        composer: "Harry Styles, Thomas Hull, Tyler Johnson",
        releaseDate: "01/04/2022",
        album: "Harry's House",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop",
        youtube: "https://www.youtube.com/watch?v=H5v3kku4y6Q",
        lyrics: `Holdin' me back
Gravity's holdin' me back
I want you to hold out the palm of your hand
Why don't we leave it at that?
Nothin' to say
When everything gets in the way
You know it's not the same as it was
In this world, it's just us
You know it's not the same as it was`
    },
    {
        id: 3,
        title: "Blinding Lights",
        artist: "The Weeknd",
        composer: "Abel Tesfaye, Ahmad Balshe, Jason Quenneville, Max Martin",
        releaseDate: "29/11/2019",
        album: "After Hours",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop",
        youtube: "https://www.youtube.com/watch?v=4NRXx6U8ABQ",
        lyrics: `I've been on my own for long enough
Maybe you can show me how to love, maybe
I'm going through withdrawals
You don't even have to do too much
You can turn me on with just a touch, baby

I said, ooh, I'm blinded by the lights
No, I can't sleep until I feel your touch`
    },
    {
        id: 4,
        title: "Seven",
        artist: "Jungkook (feat. Latto)",
        composer: "Andrew Watt, Cirkut, Jon Bellion, Latto, Theron Thomas",
        releaseDate: "14/07/2023",
        album: "GOLDEN",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600&auto=format&fit=crop",
        youtube: "https://www.youtube.com/watch?v=QU9c0053UAU",
        lyrics: `Weight of the world on your shoulders
I kiss your waist and ease your mind
I must be favored to know ya
I take the hands of time and turn 'em right around

You intend to love me right
Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
Seven days a week
Every hour, every minute, every second
You know night after night
I'll be lovin' you right seven days a week`
    }
];

// Hiển thị danh sách bài hát lên màn hình
const songListContainer = document.getElementById('song-list');

function renderSongs() {
    songListContainer.innerHTML = songsData.map(song => `
        <div class="song-card" onclick="openModal(${song.id})">
            <div class="img-container">
                <img src="${song.cover}" alt="${song.title}">
            </div>
            <div class="card-info">
                <h3 class="song-title-click">${song.title}</h3>
                <p class="song-artist">${song.artist}</p>
            </div>
        </div>
    `).join('');
}

// Xử lý Cửa sổ Modal Chi tiết
const modal = document.getElementById('song-modal');
const closeBtn = document.querySelector('.close-btn');

function openModal(songId) {
    const song = songsData.find(s => s.id === songId);
    if (!song) return;

    // Điền thông tin vào Modal
    document.getElementById('modal-img').src = song.cover;
    document.getElementById('modal-title').textContent = song.title;
    document.getElementById('modal-artist').textContent = song.artist;
    document.getElementById('modal-composer').textContent = song.composer;
    document.getElementById('modal-release').textContent = song.releaseDate;
    document.getElementById('modal-album').textContent = song.album;
    document.getElementById('modal-youtube').href = song.youtube;
    document.getElementById('modal-lyrics').textContent = song.lyrics;

    // Hiện Modal
    modal.style.display = 'block';
}

// Đóng Modal khi bấm nút X
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Đóng Modal khi bấm ra ngoài vùng nội dung
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Chạy hàm khi trang web tải xong
renderSongs();
