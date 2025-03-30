document.addEventListener('DOMContentLoaded', function() {
    // 获取全屏按钮和iframe元素
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const gameIframe = document.getElementById('game-iframe');
    
    // 全屏按钮点击事件
    fullscreenBtn.addEventListener('click', function() {
        // 尝试使iframe进入全屏模式
        if (gameIframe.requestFullscreen) {
            gameIframe.requestFullscreen();
        } else if (gameIframe.mozRequestFullScreen) { // Firefox
            gameIframe.mozRequestFullScreen();
        } else if (gameIframe.webkitRequestFullscreen) { // Chrome, Safari
            gameIframe.webkitRequestFullscreen();
        } else if (gameIframe.msRequestFullscreen) { // IE/Edge
            gameIframe.msRequestFullscreen();
        }
    });
});

<script>
    // 使用 fetch API 加载底部内容
    fetch('bottom.html') // 确保路径正确
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
</script> 