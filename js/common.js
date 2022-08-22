// live2d模型
L2Dwidget.init({
    model: {
        // 模型
        // jsonPath:"./live2dw/live2d-widget-model-shizuku/assets/shizuku.model.json",
        jsonPath: "./live2dw/live2d-widget-model-koharu/assets/koharu.model.json",
        scale: 1 //模型缩放比例
    },
    display: {
        position: "left", //模型的位置（左or右）
        width: 200, //模型宽度
        height: 350, //模型高度
        hOffset: 0, //模型水平偏移量
        vOffset: -20 //模型垂直偏移量
    },
    mobile: {
        show: true, //手机端是否显示
        scale: 1 //缩放比例
    },
    react: {
        opacity: 1 //模型不透明度
    }
});

// 回到顶部
var backTop = document.getElementById("backTop");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        backTop.style.display = "block";
    } else {
        backTop.style.display = "none";
    }
};
