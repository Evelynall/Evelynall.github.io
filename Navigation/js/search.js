
document.addEventListener('DOMContentLoaded', function () {
  // 原有JavaScript代码

  const searchInput = document.getElementById('searchInput');


  searchInput.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      let keyword = searchInput.value;
      window.location.href = `https://cn.bing.com/search?pglt=163&q=${keyword}`;
    }
  });
}); 

