/**
 * Created by Devin on 2017/1/12.
 */
init(0.2, "mylegend", 3654, 914, main);
var backLayer, meteorLayer;
var back, meteor;
var maxFrame = 100, indexFrame = 0;  //频率
function main() {
    LStage.setDebug(true);

    //加入底板层
    backLayer = new LSprite();
    addChild(backLayer);
    //加入流星层
    meteorLayer = new LSprite();
    addChild(meteorLayer);

    //画一个黑色矩形作为背景
    back = new LGraphics();
    back.drawRect(0, "", [0, 0, LStage.width, LStage.height], true, "rgba(0,0,0,0)");
    backLayer.addChild(back);

    //画一个黄色矩形作为一颗流星
    meteor = new LSprite();
    meteor.graphics.drawRect(0, "", [0, 0, 3, 3], true, "#999");
    //meteor.graphics.arc(0, 0, 2, 2, Math.PI * 2, true, "#efefef")

    backLayer.addEventListener(LEvent.ENTER_FRAME, onframe);
}
function onframe() {
    if (indexFrame > maxFrame) {
        indexFrame = 0;
        //为每个流星添加一个拖尾
        var smearing = new Smearing(meteor, 50);
        smearing.x = Math.floor(Math.random() * 2050);   //   流星区域宽度
        smearing.y = 0;
        smearing.to(10, {
            x: -(Math.floor(Math.random() * (500 - 480) + 800)),  //偏向角度
            y: 1000                                              //流星区域的高度
        });
        meteorLayer.addChild(smearing);
    }
    for (var key in meteorLayer.childList) {
        if (meteorLayer.childList[key].mode == "complete") {
            meteorLayer.removeChild(meteorLayer.childList[key]);
        }
    }
    indexFrame++;
}