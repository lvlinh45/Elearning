
const progress = document.querySelector(".progress");
window.addEventListener("scroll", function () {
    // console.log(scrollTop);
    // const scrollTop = document.documentElement.scrollTop;
    const scrollTop = window.pageYOffset;
    // chiều cao của document bao gồm  scrollbar document.documentElement.scrollHeight
    // chiều cao của document bao gồm  scrollbar document.documentElement.clientHeight
    // 
    // Tính ra chiều cao của scrollbar
    const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const width = (scrollTop / height) * 100;
    progress.style.width = `${width}%`
})