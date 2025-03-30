document.addEventListener('DOMContentLoaded', function() {
    // 添加导航高亮效果
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 移除所有链接的active类
            navLinks.forEach(l => l.classList.remove('active'));
            
            // 给当前点击的链接添加active类
            this.classList.add('active');
        });
    });
    
    // 添加滚动到相应部分的功能
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') {
                // 如果点击的是首页，滚动到顶部
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                // 滚动到目标部分
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}); 