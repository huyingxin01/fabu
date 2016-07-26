
new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    onSlideChangeEnd: function (swipe) {
        var n = swipe.activeIndex,
            slideAry = swipe.slides;
        [].forEach.call(slideAry, function (item, index) {
            if (index == n) {
                if(index==1){
                    item.id="page1";
                }else if(index==2){
                    item.id="page2";
                }else if(index==3){
                    item.id="page3";
                }else if(index==4){
                    item.id="page4";
                }else if(index==5){
                    item.id="page1";
                }else if(index==0){
                    item.id="page4";
                }
                return;
            }
            item.id = null;
        });
    }
});

var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener("canplay", function () {
        music.style.display = "block";
    }, false);
}, 1000);
music.addEventListener("click", function () {
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music musicMove";
        return;
    }
    musicAudio.pause();
    music.className = "music";
}, false);