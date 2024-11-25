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
            case 'guangdong':
                window.open("https://www.travelchina.org.cn/sitefiles/gjly_zh/html/tourprovince/5146.shtml", "_blank");
                break;
            case 'yunnan':
                window.open("https://en.yunnantourism.com/html/2021/yunnantourism_0226/1.html", "_blank");
                break;
            case 'guangxi':
                window.open("http://en.gxzf.gov.cn/", "_blank");
                break;
            case 'guangzhou':
                window.open("http://www.eguangzhou.gov.cn/", "_blank");
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
            // 你可以继续为其他省份添加对应的跳转链接
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





// 定义语言内容
const translations = {
    en: {
        brand: "DISCOVER CHINA",
        home: "Home",
        whereToGo: "Where to go",
        whatToDo: "What to do",
        howToPlan: "How to plan",
        information: "Information",
        visaInfo: "Visa Information",
        stayWithUs: "Stay with Us",
        logIn: "Log in",
        search: "Search",
        favourites: "Favourites",
        welcomeMessage: "Welcome to China, where tradition meets modernity. From dazzling city lights to rich cultural heritage, China is a story waiting to be told. Come and experience the vibrant spirit of this incredible land!",
        locations: [
            "This is the Shanghai World Financial Center→",
            "This is the Palace Museum in Beijing→",
            "This is the CCTV Headquarters in Beijing→",
            "This is the Old Town of Lijiang, located in Yunnan Province.→",
            "This is Fenghuang Ancient Town, located in Hunan Province.→",
            "This is the Great Wall. Find more information on the Great Wall forum.→",
            "This is the Great Wall. Find more information on the Great Wall forum.→",
            "This is Guilin landscapes in Guangxi Provience. <br>Find more information (there is no official English Website of travelling in Guangxi)→",
            "These are the Villagescape Recommendations in China.→",
            "This is the landscape in Jilin Provience.→",
            "This is Beijing→",
            "This is cityscape in Hong Kong→",
            "This is the Terracotta in Shaanxi Provience→"
        ],
        destinationsTitle: "Destinations",
        tipsTitle: "Tips I Need to Know",
        visaRequirements: {
            title: "Visa Requirements",
            content: "Foreign visitors typically need a visa to enter China. Ensure you apply for the appropriate type of visa (e.g., tourist, business) well in advance of your travel dates.",
            linkText: "Learn More"
        },
        paymentMethods: {
            title: "Payment methods in China",
            content: "The official currency in China is the Renminbi (RMB), also known as the yuan (¥). It's recommended to have some cash for small purchases, although mobile payments like Alipay and WeChat Pay are widely used.",
            linkText: "Learn More"
        },
        language: {
            title: "Language",
            content: "Mandarin Chinese is the official language. English is spoken in major cities, but having a translation app or phrasebook can be very helpful in more remote areas.",
            linkText: "Translation App"
        },
        weather: {
            title: "Weather and Climate",
            content: "China is a vast country with diverse climates. Check the weather for your destination and pack accordingly. Summers can be hot and humid, while winters in the north are freezing.",
            linkText: "Weather Info"
        },
        transportation: {
            title: "Transportation",
            content: "China has an extensive public transportation network, including high-speed trains, subways, and buses. Ride-hailing apps like Didi are widely used for local travel.",
            linkText: "Train Travel Guide"
        },
        health: {
            title: "Health and Safety",
            content: "Tap water is not safe to drink in most parts of China. Bottled water is widely available. Ensure you have travel insurance and check for any required vaccinations before your trip."
        },
        museums: [
            {
                name: "National Museum of China",
                description: "Discover China's rich history through its vast collection of artifacts and historical exhibits."
            },
            {
                name: "Shaanxi History Museum",
                description: "Learn about the history of Shaanxi Province, home of the Terracotta Army."
            },
            {
                name: "Guangzhou Museum",
                description: "Dive into the cultural heritage of Guangdong Province at the Guangzhou Museum."
            },
            {
                name: "Chengdu Museum",
                description: "Uncover the history of Sichuan Province, from ancient times to the present."
            },
            {
                name: "Shenzhen Museum",
                description: "Learn about the rapid growth of Shenzhen and its fascinating transformation into a modern city."
            },
            {
                name: "Hangzhou Museum",
                description: "Immerse yourself in Hangzhou's history and culture, from tea to silk traditions."
            }
        ]
    },
    cn: {
        brand: "DISCOVER CHINA",
        home: "首页",
        whereToGo: "去哪里",
        whatToDo: "做什么",
        howToPlan: "如何规划",
        information: "信息",
        visaInfo: "签证信息",
        stayWithUs: "与我们沟通",
        logIn: "登录",
        search: "搜索",
        favourites: "收藏",
        welcomeMessage: `相知无远近，万里尚为邻。
        欢迎回到中国，探索独特的文化与自然景观！`,
        locations: [
            "这是上海环球金融中心→",
            "这是北京的故宫博物院→",
            "这是北京的中央电视台总部→",
            "这是位于云南省的丽江古城→",
            "这是位于湖南省的凤凰古城→",
            "这是长城，了解更多信息请访问长城论坛→",
            "这是长城，了解更多信息请访问长城论坛→",
            "这是广西桂林的山水风景。了解更多→",
            "这是中国的村庄景观推荐→",
            "这是吉林省的景观→",
            "这是北京城→",
            "这是香港的城市景观→",
            "这是陕西省的兵马俑→"
        ],
        destinationsTitle: "旅游目的地",
        tipsTitle: "出行须知",
        visaRequirements: {
            title: "签证要求",
            content: "外国游客通常需要签证才能进入中国。请确保在旅行日期前申请合适的签证类型（如旅游、商务等）。",
            linkText: "了解更多"
        },
        paymentMethods: {
            title: "中国的支付方式",
            content: "中国的官方货币是人民币（¥）。建议携带一些现金以备小额消费，虽然像支付宝和微信支付这样的移动支付手段非常普遍。",
            linkText: "了解更多"
        },
        language: {
            title: "语言",
            content: "普通话是中国的官方语言。在主要城市可以使用英语，但在偏远地区使用翻译应用程序或短语手册会非常有帮助。",
            linkText: "翻译应用"
        },
        weather: {
            title: "天气和气候",
            content: "中国幅员辽阔，气候多样。请检查您的目的地天气并做相应的准备。夏天可能炎热潮湿，而北方冬天则非常寒冷。",
            linkText: "天气信息"
        },
        transportation: {
            title: "交通",
            content: "中国拥有发达的公共交通网络，包括高铁、地铁和公交车。像滴滴这样的打车应用也被广泛用于本地出行。",
            linkText: "高铁旅行指南"
        },
        health: {
            title: "健康与安全",
            content: "中国大部分地区的自来水不能直接饮用。瓶装水随处可见。请确保您有旅行保险，并在旅行前检查所需的疫苗接种。"
        },
        museums: [
            {
                name: "中国国家博物馆",
                description: "通过丰富的文物和历史展品，探索中国的悠久历史。"
            },
            {
                name: "陕西历史博物馆",
                description: "了解陕西省的历史，这里是兵马俑的故乡。"
            },
            {
                name: "广州博物馆",
                description: "深入了解广东省的文化遗产，探索广州博物馆。"
            },
            {
                name: "成都博物馆",
                description: "了解四川省的历史，从古代到现代的发展历程。"
            },
            {
                name: "深圳博物馆",
                description: "了解深圳的快速发展及其令人着迷的现代化转型。"
            },
            {
                name: "杭州博物馆",
                description: "沉浸在杭州的历史和文化中，了解茶文化和丝绸传统。"
            }
        ]
        
    }
};

// 切换语言的函数
function setLanguage(language) {
    // 保存选择的语言到 localStorage
    localStorage.setItem("language", language);

    // 更新导航栏中的内容
    document.querySelector('.brand').textContent = translations[language].brand;
    document.querySelector('.navbar-center li:nth-child(1) a').textContent = translations[language].home;
    document.querySelector('.navbar-center li:nth-child(2) a').textContent = translations[language].whereToGo;
    document.querySelector('.navbar-center li:nth-child(3) a').textContent = translations[language].whatToDo;
    document.querySelector('.navbar-center li:nth-child(4) a').textContent = translations[language].howToPlan;
    document.querySelector('.dropdown-toggle').textContent = translations[language].information;
    document.querySelector('.dropdown-menu li:nth-child(1) a').textContent = translations[language].visaInfo;
    document.querySelector('.dropdown-menu li:nth-child(2) a').textContent = translations[language].stayWithUs;
    document.querySelector('.log-in').textContent = translations[language].logIn;


    // 更新 slider 中的内容
    const sliderItems = document.querySelectorAll('.slider-item');
    sliderItems.forEach((item, index) => {
        // 更新欢迎消息
        const overlayParagraph = item.querySelector('.overlay p');
        if (overlayParagraph) {
            overlayParagraph.textContent = translations[language].welcomeMessage;
        }

        // 更新链接文字
        const link = item.querySelector('.overlay a');
        if (link) {
            link.innerHTML = translations[language].locations[index];
        }
    });
    // 更新主标题
    document.querySelector('.hollow-text').textContent = translations[language].destinationsTitle;

    // 更新提示部分的标题和内容
    document.querySelector('#how-to-plan h2').textContent = translations[language].tipsTitle;

    // 更新 accordion 中的内容
    const accordionItems = document.querySelectorAll('.accordion-item');
    const accordionData = [
        translations[language].visaRequirements,
        translations[language].paymentMethods,
        translations[language].language,
        translations[language].weather,
        translations[language].transportation,
        translations[language].health
    ];

    accordionItems.forEach((item, index) => {
        item.querySelector('.accordion-title').textContent = accordionData[index].title;
        item.querySelector('.accordion-content p').textContent = accordionData[index].content;

        const link = item.querySelector('.accordion-content a');
        if (link && accordionData[index].linkText) {
            link.textContent = accordionData[index].linkText;
        }
    });

    // 更新博物馆的内容
    const museumCards = document.querySelectorAll('.grid .card');
    museumCards.forEach((card, index) => {
        const museum = translations[language].museums[index];
        if (museum) {
            card.querySelector('h4 a').textContent = museum.name;
            card.querySelector('.caption p').textContent = museum.description;
        }
    });
}

// 事件监听器：点击语言按钮时触发
document.getElementById("en-lang").addEventListener("click", () => setLanguage("en"));
document.getElementById("cn-lang").addEventListener("click", () => setLanguage("cn"));

// 页面加载时应用保存的语言
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "en"; // 默认语言为英文
    setLanguage(savedLanguage);
});
