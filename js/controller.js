'use strict'

function onInit() {
    getVideos()
        .then(renderVideos)
}


function renderVideos(videos) {

    document.querySelector('.videos-container')
        .innerHTML = videos.map(video => {
            return `
            <div class="video-card" onclick="renderPlayer('${video.id.videoId}')">
            <img src="${video.snippet.thumbnails.default.url}"/>
            <span onclick="renderPlayer('${video.id.videoId}')">${video.snippet.title}  <i class="fas fa-play-circle"></i></span>
            
            </div>
            `
        }).join('')

}
function renderPlayer(src) {
    document.querySelector('iframe').src = `https://www.youtube.com/embed/${src}?autoplay=1`
}

function onSearchSong(value) {
    getVideos(value)
        .then(renderVideos)
    getDetails(value)
        .then(renderDetails)
}


function renderDetails(wikiData) {
    document.querySelector('.wiki-container').innerHTML = wikiData.query.search[0].snippet

}
