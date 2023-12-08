window.addEventListener('DOMContentLoaded', function() {
    updateImg();
});
window.addEventListener('resize', function() {
    updateImg();
});
function updateImg() {
    var windowWidth = window.innerWidth;
    if (windowWidth <= 1024) {
        document.querySelector('.building-img1').src="./../source/main/block3/build1mini.svg";
        document.querySelector('.building-img2').src="./../source/main/block3/build2mini.svg";
    } else {
        document.querySelector('.building-img1').src="./../source/main/block3/build1.png";
        document.querySelector('.building-img2').src="./../source/main/block3/build2.png";
    }
}