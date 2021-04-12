let is = true;
let classify = document.getElementById('classify');
let page = document.getElementById('page');
let classifyPage = document.getElementById('classifyPage');
let select = document.getElementById('select');
let subpage = document.getElementById('subpage');

classify.onclick = () => {
    if (is) {
        page.style.opacity = '0.3';
        classifyPage.style.display = 'block';
        is = !is;
    }
};
select.onclick = () => {
    if (!is) {
        page.style.opacity = '1';
        classifyPage.style.display = 'none';
        is = !is;
    }
};
subpage.onclick = () => {
    if (!is) {
        page.style.opacity = '1';
        classifyPage.style.display = 'none';
        is = !is;
    }
};
