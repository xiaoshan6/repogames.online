document.addEventListener('DOMContentLoaded', function() {
    // 创建返回顶部按钮元素
    const backToTopButton = document.createElement('div');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = 'Top';
    
    // 添加内联样式确保按钮位置正确
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.width = '40px';
    backToTopButton.style.height = '40px';
    backToTopButton.style.backgroundColor = '#007AFF';
    backToTopButton.style.color = 'white';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.display = 'flex';
    backToTopButton.style.justifyContent = 'center';
    backToTopButton.style.alignItems = 'center';
    backToTopButton.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    backToTopButton.style.opacity = '0';
    backToTopButton.style.visibility = 'hidden';
    backToTopButton.style.transition = 'all 0.3s ease';
    backToTopButton.style.zIndex = '1000';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.fontSize = '14px';
    backToTopButton.style.fontWeight = 'bold';
    
    document.body.appendChild(backToTopButton);
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        // 当页面滚动超过300px时显示按钮
        if (window.scrollY > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    // 点击事件 - 滚动回顶部
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 悬停效果
    backToTopButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#0062cc';
        this.style.transform = 'translateY(-3px)';
    });
    
    backToTopButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#007AFF';
        this.style.transform = 'translateY(0)';
    });
}); 