document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.querySelector(".language-toggle");
    const languageMenu = document.querySelector(".language");

    // 点击切换按钮显示/隐藏菜单
    languageToggle.addEventListener("click", (event) => {
        event.stopPropagation(); // 阻止事件传播
        languageMenu.classList.toggle("active");
    });

    // 点击页面其他地方关闭菜单
    document.addEventListener("click", (event) => {
        if (languageMenu.classList.contains("active") && !languageMenu.contains(event.target) && !languageToggle.contains(event.target)) {
            languageMenu.classList.remove("active");
        }
    });
});

let currentIndex = 0;
const sliderItems = document.querySelectorAll('.slider-item');
const totalItems = sliderItems.length;

function goToSlide(index) {
    sliderItems[currentIndex].classList.remove('active');
    currentIndex = (index + totalItems) % totalItems; // 保证索引值在0到总数之间循环
    sliderItems[currentIndex].classList.add('active');
}

// 自动切换每5秒
setInterval(() => {
    goToSlide(currentIndex + 1);
}, 5000);

// 初始显示第一个滑块
sliderItems[0].classList.add('active');
