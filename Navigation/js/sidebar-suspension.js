
document.addEventListener('DOMContentLoaded', () => {

    const floating = document.getElementById('floating');
    const circle = document.getElementById('circle');
    const svg = document.getElementById('circlesvg');
    const gotop = document.getElementById('gotop');
    const contentexpand = document.getElementById('contentexpand');
    const contentsvg = document.getElementById('contentsvg');
    const switch_icon = document.getElementById('switch_icon');

    var buttons = false /* 控制是否有主动点击按钮，如果主动点击过，则自动展开不再起效 */
    var opac = false /* 控制主边栏是否可见(用于修改透明度的判断) */

    window.addEventListener('scroll', function () {
        /* 当滚动高度超过980后，将侧边栏设为显现 */
        if (window.pageYOffset > 1000 && buttons == false) {
            floating.style.opacity = 1;
            svg.style.transform = 'rotate(45deg)';
            circle.style.width = '120px';
            opac = true
        } else if (buttons == false) {
            floating.style.opacity = 0;
            svg.style.transform = 'rotate(0deg)';
            circle.style.width = '25px';
            opac = false
        }
        circle.style.opacity = this.window.pageYOffset / 1000;
        gotop.style.opacity = this.window.pageYOffset / 1000;
        if (opac) {
            floating.style.opacity = this.window.pageYOffset / 1000;
        }
    })

    /* 点击展开&收起侧边栏 */

    circle.addEventListener('click', () => {
        if (floating.style.opacity === "0") {
            buttons = true
            floating.style.opacity = 1;
            svg.style.transform = 'rotate(45deg)';
            circle.style.width = '120px';
            opac = true
        } else {
            buttons = true
            floating.style.opacity = 0;
            svg.style.transform = 'rotate(0deg)';
            circle.style.width = '25px';
            opac = false
        }
    })

    /* 展开收起所有 */
    var allClosed = true
    contentexpand.addEventListener('click', () => {
        allClosed = !allClosed
        if (allClosed) {
            document.querySelectorAll('details').forEach(d => d.removeAttribute('open'));
            contentsvg.style.transform = 'rotate(270deg)';
        } else {
            document.querySelectorAll('details').forEach(d => d.setAttribute('open', ''));
            contentsvg.style.transform = 'rotate(0deg)';
        }
    })

    /* 切换图标风格 */

    var allClosed = true
    /* 读取是否有保存图标 */
    let currentStyle = localStorage.getItem("currentStyle");
    if (currentStyle == null) {
        currentStyle = 'Square_icon';
    }
    /* 切换图标 */
    switch_icon.addEventListener('click', () => {
        if (currentStyle === 'Circle_icon') {
            currentStyle = 'Square_icon';
            localStorage.setItem('currentStyle', 'Square_icon');
        } else {
            currentStyle = 'Circle_icon';
            localStorage.setItem('currentStyle', 'Circle_icon');
        }
        document.querySelector(`link[href="css/${currentStyle}.css"]`).disabled = false;
        document.querySelector(`link[href="css/${currentStyle === 'Circle_icon' ? 'Square_icon' : 'Circle_icon'}.css"]`).disabled = true;
    });
})

