/**
 * Created by Devin on 2017/1/12.
 */
init(0.2, "mylegend", 3654, 914, main);
var backLayer, meteorLayer;
var back, meteor;
var maxFrame = 100, indexFrame = 0;  //Ƶ��
function main() {
    LStage.setDebug(true);

    //����װ��
    backLayer = new LSprite();
    addChild(backLayer);
    //�������ǲ�
    meteorLayer = new LSprite();
    addChild(meteorLayer);

    //��һ����ɫ������Ϊ����
    back = new LGraphics();
    back.drawRect(0, "", [0, 0, LStage.width, LStage.height], true, "rgba(0,0,0,0)");
    backLayer.addChild(back);

    //��һ����ɫ������Ϊһ������
    meteor = new LSprite();
    meteor.graphics.drawRect(0, "", [0, 0, 3, 3], true, "#999");
    //meteor.graphics.arc(0, 0, 2, 2, Math.PI * 2, true, "#efefef")

    backLayer.addEventListener(LEvent.ENTER_FRAME, onframe);
}
function onframe() {
    if (indexFrame > maxFrame) {
        indexFrame = 0;
        //Ϊÿ���������һ����β
        var smearing = new Smearing(meteor, 50);
        smearing.x = Math.floor(Math.random() * 2050);   //   ����������
        smearing.y = 0;
        smearing.to(10, {
            x: -(Math.floor(Math.random() * (500 - 480) + 800)),  //ƫ��Ƕ�
            y: 1000                                              //��������ĸ߶�
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