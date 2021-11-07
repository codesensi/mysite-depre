// 切换标签实现网页标题变化
let originTitile = document.title;
let titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '404啦！!!!∑(ﾟДﾟノ)ノ ';
        clearTimeout(titleTime);
    } else {
        document.title = '哈哈，骗你的！ヾ(ﾟ∀ﾟゞ)';
        titleTime = setTimeout(function () {
            document.title = originTitile;
        }, 2000);
    }
});

// 鼠标点击特效
onload = function () {
    let click_cnt = 0;
    let $html = document.getElementsByTagName("html")[0];
    let $body = document.getElementsByTagName("body")[0];
    $html.onclick = function (e) {
        let $elem = document.createElement("b");
        $elem.style.color = "#E94F06";
        $elem.style.zIndex = 9999;
        $elem.style.position = "absolute";
        $elem.style.select = "none";
        let x = e.pageX;
        let y = e.pageY;
        $elem.style.left = (x - 10) + "px";
        $elem.style.top = (y - 20) + "px";
        clearInterval(anim);
        switch (++click_cnt) {
            case 3:
                $elem.innerText = "OωO";
                break;
            case 5:
                $elem.innerText = "(๑•́ ∀ •̀๑)";
                break;
            case 10:
                $elem.innerText = "(๑•́ ₃ •̀๑)";
                break;
            case 13:
                $elem.innerText = "(๑•̀_•́๑)";
                break;
            case 16:
                $elem.innerText = "（￣へ￣）";
                break;
            case 21:
                $elem.innerText = "(╯°口°)╯(┴—┴";
                break;
            case 25:
                $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
                break;
            case 30:
                $elem.innerText = "╮(｡>口<｡)╭";
                break;
            case 33:
                $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
                break;
            case 36:
                $elem.innerText = "(ꐦ°᷄д°᷅)";
                break;
            default:
                $elem.innerText = "❤";
                break;
        }
        $elem.style.fontSize = Math.random() * 10 + 8 + "px";
        let increase = 0;
        let anim;
        setTimeout(function () {
            anim = setInterval(function () {
                if (++increase === 150) {
                    clearInterval(anim);
                    $body.removeChild($elem);
                }
                $elem.style.top = y - 20 - increase + "px";
                $elem.style.opacity = (150 - increase) / 120;
            }, 8);
        }, 70);
        $body.appendChild($elem);
    };
};

// 网站运行时间
let now = new Date();
function createTime() {
    let grt = new Date("01/01/2021 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now.setTime(now.getTime() + 250);
    let days = (now - grt) / 1000 / 60 / 60 / 24;
    let dnum = Math.floor(days);
    let hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
    let hnum = Math.floor(hours);
    if (String(hnum).length === 1) {
        hnum = "0" + hnum;
    }
    let minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
    let mnum = Math.floor(minutes);
    if (String(mnum).length === 1) {
        mnum = "0" + mnum;
    }
    let seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    let snum = Math.round(seconds);
    if (String(snum).length === 1) {
        snum = "0" + snum;
    }
    document.getElementById("date").innerHTML = "本站已安全运行" + dnum + "天";
    document.getElementById("time").innerHTML = hnum + "小时" + mnum + "分" + snum + "秒";
}
setInterval("createTime()", 250);
