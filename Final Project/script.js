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

// 获取汉堡菜单和导航栏元素
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarCenter = document.getElementById('navbar-center');
const navbarRight = document.getElementById('navbar-right');

// 点击汉堡菜单时切换导航栏的显示状态
hamburgerMenu.addEventListener('click', () => {
    navbarCenter.classList.toggle('active'); // 展开或折叠菜单
    navbarRight.classList.toggle('active');  // 展开或折叠右侧部分
});



//变化的图片设置
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



//地图设置
document.addEventListener("DOMContentLoaded", function() {
    // 获取地图的所有省份的 path 元素
    const regions = document.querySelectorAll("#china-map path");

    // 为每个省份添加点击事件
    regions.forEach(region => {
        region.addEventListener("click", function() {
            const regionId = this.id;
            // 根据区域的 ID 选择跳转的链接
            navigateToProvincePage(regionId);
        });

        // 添加鼠标悬停效果
        region.addEventListener("mouseover", function() {
            region.style.fill = '#006400';  // 鼠标悬停时改变填充颜色
        });

        region.addEventListener("mouseout", function() {
            region.style.fill = '#eee';  // 鼠标离开时还原填充颜色
        });
    });

    // 根据省份 ID 进行跳转的函数
    function navigateToProvincePage(provinceId) {
        switch (provinceId) {
            case 'beijing':
                window.open("https://english.visitbeijing.com.cn/", "_blank");
                break;
            case 'shanghai':
                window.open("https://www.meet-in-shanghai.net/", "_blank");
                break;
            case 'yunnan':
                window.open("https://en.yunnantourism.com/html/2021/yunnantourism_0226/1.html", "_blank");
                break;
            case 'guangxi':
                window.open("http://en.gxzf.gov.cn/", "_blank");
                break;
            case 'guangdong':
                window.open("http://www.eguangzhou.gov.cn/", "_blank");
                break;
            case 'hubei':
                window.open("http://en.hubei.gov.cn/tourism_2018/selectedtravelroutes/", "_blank");
                break;
            case 'zhejiang':
                window.open("http://www.ezhejiang.gov.cn/travel.html", "_blank");
                break;
            case 'jiangsu':
                window.open("https://en.jiangsu.gov.cn/col/col88903/index.html", "_blank");
                break;
            case 'taiwan':
                window.open("https://eng.taiwan.net.tw/", "_blank");
                break;
            case 'tianjin':
                window.open("http://www.exploringtianjin.com/index.html", "_blank");
                break;
            case 'chongqing':
                window.open("https://www.ichongqing.info/","_blank");
                break;
            case 'shanxi':
                window.open("http://www.goshanxi.com.cn/","_blank");
                break;
            case 'shaanxi':
                window.open("https://www.instagram.com/visit_shaanxi/?hl=en","_blank");
                break;
            case 'hainan':
                window.open("http://www.ehainan.gov.cn/","_blank");
                break;
            case 'gansu':
                window.open("http://www.gogansu.com/","_blank");
                break;
            case 'shandong':
                window.open("http://shandong.chinadaily.com.cn/","_blank");
                break;
            case 'hong_kong_special_administrative_region':
                window.open("https://www.discoverhongkong.com/us/index.html","_blank");
                break;
            case 'macau_special_administrative_region':
                window.open("https://www.dst.gov.mo/en/home.html","_blank");
                break;
            case 'fujian':
                window.open("http://www.gofujian.com.cn/usefulinfo.html","_blank");
                break;
            case 'sichuan':
                window.open("https://www.sichuantravelguide.com/","_blank");
                break;
            case 'jilin':
                window.open("https://www.gojilin.gov.cn/","_blank");
                break;
            case 'heilongjiang':
                window.open("https://www.saporedicina.com/english/travel-to-heilongjiang/","_blank");
                break;
            case 'liaoning':
                window.open("https://www.travellerspoint.com/guide/Liaoning/","_blank");
                break;
            default:
                alert("No official tourism site linked for this region yet.");
        }
    }
});




//小贴士的内容
document.querySelectorAll('.accordion-title').forEach((button) => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        // Toggle visibility of the content
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});



//朝代历史地图放大
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("timelineImage");
var modalImg = document.getElementById("imgInModal");
var captionText = document.getElementById("caption");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}