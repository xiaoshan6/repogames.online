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