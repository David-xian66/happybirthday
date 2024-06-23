function love() {
    // 获取跳动元素
    var jumpingElement = document.getElementById('love');

    // 定义起始和结束位置
    var start = 0;
    var end = -35; // 跳动的最高点

    // 设置一个间隔（例如50毫秒）
    var interval = 1200;

    // 创建一个跳动的间隔函数
    var jumpInterval = setInterval(function() {
    if (jumpingElement.style.top === '' || jumpingElement.style.top === '0px') {
        jumpingElement.style.top = end + 'px'; // 跳到最高点
    } else {
        jumpingElement.style.top = start + 'px'; // 回到原始位置
    }
    }, interval);

    // 停止跳动
    // 调用 clearInterval(jumpInterval);
};
love();