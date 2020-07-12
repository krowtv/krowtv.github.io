var videoPlayer = document.getElementById("video-player");

function setVideo(url){
    videoPlayer.src = url;
}

function toggleDropdown(elem) {
    elem.parentNode.childNodes[3].classList.toggle("show");
}
