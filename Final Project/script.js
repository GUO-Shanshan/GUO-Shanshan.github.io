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
}, 4000);

// 初始显示第一个滑块
sliderItems[0].classList.add('active');



document.addEventListener('DOMContentLoaded', function() {
    // 获取所有的 <path> 元素
    const paths = document.querySelectorAll('#china-map path');

    // 遍历每一个 <path> 元素
    paths.forEach((path) => {
        // 为每个省份路径添加点击事件监听器
        path.addEventListener('click', function() {
            const provinceId = path.id; // 获取路径的 id

            // 根据 id 进行页面跳转或显示特定信息
            navigateToProvincePage(provinceId);
        });

        // 可选：添加鼠标悬停效果
        path.addEventListener('mouseover', function() {
            path.style.fill = '#ccc';  // 鼠标悬停时改变填充颜色
        });

        path.addEventListener('mouseout', function() {
            path.style.fill = '#eee';  // 鼠标离开时还原填充颜色
        });
    });

    // 根据省份 ID 进行跳转的函数
    function navigateToProvincePage(provinceId) {
        switch (provinceId) {
            case 'beijing':
                window.open('https://english.visitbeijing.com.cn/', '_blank');
                break;
            case 'shanghai':
                window.open('https://english.shanghai.gov.cn/en-TravelinShanghai/index.html', '_blank');
                break;
            // 添加更多省份对应的链接
            default:
                alert('This province is under construction.');
        }
    }    
});

function navigateToRegion(region) {
    switch (region) {
        case 'shanghai':
            window.location.href = 'https://english.shanghai.gov.cn/en-TravelinShanghai/index.html';
            break;
        case 'beijing':
            window.location.href = 'https://english.visitbeijing.com.cn/';
            break;
        case 'guangzhou':
            window.location.href = 'https://www.travelguangzhou.cn/';
            break;
        case 'chengdu':
            window.location.href = 'https://www.gochengdu.cn/';
            break;
        case 'shenzhen':
            window.location.href = 'https://www.shenzhen.gov.cn/en/';
            break;
        case 'hangzhou':
            window.location.href = 'https://en.gotohz.com/';
            break;
        default:
            alert('More regions coming soon!');
    }
}



