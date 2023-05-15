const card = [
["护士","SIC"],
["企业讲师","培训师","小中教师","SIE"],
["儿童辅导师","早教教师","幼儿园教师","SAC"],
["心理咨询师","SIA"],
["社会工作者","SRI"],
["健身教练","瑜伽教练","SRE"],
["保姆","SCR"],
["航空公司","乘务员","SCE"],
["导游","导览人员","SEA"],
["词曲创作家","编剧","舞者","音乐家","艺术家","AIR"],
["主持人","演员","歌手","播音员","模特","ASE"],
["外语翻译","ASE"],
["记者","自媒体","ASE"],
["作者","文字工作者","编辑","AC"],
["美容","造型师","ARS"],
["建筑师","室内设计师","美术","动画","产品设计师","ARE"],
["摄影师","ARE"],
["花艺","园艺师","ARC"],
["业务人员","销售人员","商业经理","ESR"],
["人士专员","人力资源专员","ESC"],
["品牌公关","活动策划人员","ESI"],
["市场营销","社群运营人员","EAC"],
["创业家","企业家","商人","EIS"],
["律师","法务人员","EIC"],
["项目管理人员","ECS"],
["门店导购","售货员","店长","ECS"],
["商业咨询","企业管理顾问","ECI"],
["金融分析师","金融交易员","CES"],
["秘书","CES"],
["银行职员","财务","出纳","记账人员","CIE"],
["会记师","CIE"],
["测试工程师","运维工程师","CIR"],
["公务员","事业单位人员","CE"],
["档案数据","管理人员","CER"],
["行政人员","CER"],
["客户服务人员","CSE"],
["市场调研","数据分析师","ICE"],
["兽医助理","兽医","IRC"],
["制程工程师","化学工程师","IRC"],
["科研人员","IRC"],
["机师","飞行员","IRC"],
["计算机与互联网","程序员","IRC"],
["医生","ISR"],
["学者","大学教授","ISE"],
["司机","快递员","RCS"],
["安保人员","RCS"],
["餐饮","旅游","酒店服务人员","RCS"],
["军人","警察","RCE"],
["机械工程师","土木工程师","机械维修人员","RCI"],
["按摩师","理疗师","RCI"],
["机械工程师","RCI"],
["厨师","RAC"],
["农业生产人员","养殖技术人员","RIC"],
];
for (x=0;x<card.length;x++){
    card[x].push('none');
}
var yesCard = [];
var noCard = [];
var currentCard = 0;


//Player score controller
var scoreCount = {
    R:0,
    I:0,
    A:0,
    S:0,
    E:0,
    C:0
}

var main_loop = setInterval(function(){
    //HTML div
    var cardDeck = document.getElementById('cardDeck');
    var noDeck = document.getElementById('noDeck');
    var yesDeck = document.getElementById('yesDeck');
    
    //HTML button
    var preCard = document.getElementById('previousCard');
    var yes = document.getElementById('yes');
    var no = document.getElementById('no');
    cardDeck.innerHTML = ''

    //HTML score
    var r = document.getElementById('r');
    var i = document.getElementById('i');
    var a = document.getElementById('a');
    var s = document.getElementById('s');
    var e = document.getElementById('e');
    var c = document.getElementById('c');
    var result = document.getElementById("result")

    //Render current card
    if (currentCard != card.length-1){
        for (x=0;x<card[currentCard].length-1;x++){
            tempChild = document.createElement('p');
            tempChild.innerHTML = card[currentCard][x];
            cardDeck.appendChild(tempChild);
        }
    }
    else{
        cardDeck.innerHTML = "<br>无"
    }
    
    //Button fucntion
    yes.onclick = function(){
        if (currentCard!=card.length-1){
            card[currentCard].pop()
            card[currentCard].push('yes');
            yesCard.push(card[currentCard]);
            currentCard++;
            calScore();
            console.log(currentCard)
        }
    }
    no.onclick = function(){
        if (currentCard!=card.length-1){
            card[currentCard].pop()
            card[currentCard].push('no');
            noCard.push(card[currentCard]);
            currentCard++;
            calScore();
        }
    }
    preCard.onclick = function(){
        if (currentCard!= 0){
            currentCard--;
            if (yesCard.indexOf(card[currentCard])!=-1){
                yesCard.pop()
            }
            else{
                noCard.pop();
            }
            calScore();
        }
    }

    //Update deck
    yesDeck.innerHTML = ""
    if (yesCard.length!=0){
        for (x=0;x<yesCard[yesCard.length-1].length-1;x++){
            let tempChild = document.createElement('p');
            tempChild.innerHTML = yesCard[yesCard.length-1][x];
            yesDeck.appendChild(tempChild);
            
        }
    }
    else{
        yesDeck.innerHTML = "<br>无"
    }
    if (noCard.length!=0){
        noDeck.innerHTML = ""
        for (x=0;x<noCard[noCard.length-1].length-1;x++){
            let tempChild = document.createElement('p');
            tempChild.innerHTML = noCard[noCard.length-1][x];
            noDeck.appendChild(tempChild);
        }
    }
    else{
        noDeck.innerHTML = "<br>无"
    }

    //function for Calculate score 
    function calScore(){
        scoreCount["R"] = 0
        scoreCount["I"] = 0
        scoreCount["A"] = 0
        scoreCount["S"] = 0
        scoreCount["E"] = 0
        scoreCount["C"] = 0
        for (x=0;x<yesCard.length;x++){
            scores = yesCard[x][yesCard[x].length-2];
            scores = scores.split("");
            for (y=0;y<scores.length;y++){
                scoreCount[scores[y]]++;
            }
        }
    }
    
    r.innerHTML = `R : ${scoreCount["R"]}`
    i.innerHTML = `I : ${scoreCount['I']}`
    a.innerHTML = `A : ${scoreCount['A']}`
    s.innerHTML = `S : ${scoreCount['S']}`
    e.innerHTML = `E : ${scoreCount['E']}`
    c.innerHTML = `C : ${scoreCount['C']}`
    res = Math.max(...Object.values(scoreCount))
    for (x=0;x<Object.keys(scoreCount).length;x++){
        if (scoreCount[Object.keys(scoreCount)[x]] == res){
            res = Object.keys(scoreCount)[x]
            break
    }
}
    

    if (currentCard == card.length-1){
        if (res=="R"){
            res = "实际型"
        }
        else if(res=="I"){
            res = "研究型"
        }
        else if(res=="A"){
            res = "艺术型"
        }
        else if(res=="S"){
            res = "社会型"
        }
        else if(res=="E"){
            res = "企业型"
        }
        else if(res=="C"){
            res = "常规型"
        }
        result.innerHTML = `您喜欢的工作是偏向${res}`
    }else{
        result.innerHTML = ""
    }
},1)