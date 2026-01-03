const API_KEY = "AIzaSyBNWtzdBf6oIeGXblpW-Y7DFeqTtuyX_pE";

const videoContainer = document.querySelector(".videos");

async function fetchVideos() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=cricket&type=video&maxResults=10&key=${API_KEY}`
  );

  const data = await response.json();
  console.log(data);

  displayVideos(data.items);
}

function displayVideos(videos) {
  videoContainer.innerHTML = "";

  videos.forEach((element) => {
    const videoId = element.id.videoId;

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${element.snippet.thumbnails.medium.url}" alt="thumbnail">
      <h4>${element.snippet.title}</h4>
      <p>${element.snippet.channelTitle}</p>
    `;

    card.addEventListener("click", () => {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
    });

    videoContainer.appendChild(card);
  });
}
fetchVideos();
