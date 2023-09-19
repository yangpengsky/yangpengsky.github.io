var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://www.yangpengsky.top:9000/myblog/images/2023/05/panda.png");
         document.title = '我相信你还会回来的！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://www.yangpengsky.top:9000/myblog/images/2023/05/panda.png");
         document.title = '哈哈，我就知道！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });