
document.addEventListener('DOMContentLoaded', () => {

    const contentA1 = document.getElementById('contentA1');
    const sortA1 = document.getElementById('sortA1');

    let opac = false /* 控制主边栏是否可见(用于修改透明度的判断) */


    /* 点击展开&收起侧边栏 */

    sortA1.addEventListener('click', () => {
        if (opac) {
            contentA1.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            opac = false
        } else {
            contentA1.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
            opac = true
        }
    })

});