const expImgBox = document.getElementById("expImgBox"),
expImg = document.getElementById("expImg");
function openexpImg(reference){
    expImgBox.style.display = "flex"
    expImg.src = reference
}
function closeImg(){
    expImgBox.style.display = "none"
}
