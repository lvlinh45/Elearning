function createNotification(title = "Web Development 101", desc = " Elevate your development workflow with this course on Git and GitHub, essential tools for version control and collaborative coding.") {
    const template = `
    <div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
    <div class="noti-content"
        <div class="noti-wrapper">
            <h3 class="noti-title">${title}</h3>
            <p class="noti-desc">
             ${desc}
         </p>
        </div>
        <div class="noti-icon p-2">
            <i class="fa fa-times" aria-hidden="true"></i>
         </div>
    </div>
  </div>
    `
    document.body.insertAdjacentHTML("afterbegin", template)
}

const randomData = [
    "Web Development 101",
    "Responsive Design Essentials",
    "JavaScript Fundamentals",
    "Full-Stack Web Bootcamp",
    "Git & GitHub Mastery"
]


const randomDesc = [
    "Craft visually stunning websites that adapt to any device with CSS frameworks and media queries, making your web projects both functional and visually appealing.",
    " Unlock the potential of JavaScript with this concise course, covering essential syntax and DOM manipulation for aspiring web developers.",
    "Dive into the world of full-stack development, mastering both front-end and back-end technologies to build robust web applications.",
    " Elevate your development workflow with this course on Git and GitHub, essential tools for version control and collaborative coding."
]

let lastTitle;

const timer = setInterval(function () {


    const item = document.querySelector(".noti");
    if (item) {
        item.parentNode.removeChild(item);
    }
    const valueRandom = Math.floor(Math.random() * randomData.length);
    const title = randomData[valueRandom];
    const desc = randomDesc[valueRandom]
    if (lastTitle !== title) {
        createNotification(title, desc);
    }
    // Lấy ra random giá trị trong mảng randomData
    lastTitle = title;
}, 5000)

