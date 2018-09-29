// ==UserScript==
// @name         漫畫聯合國
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      /^http[s]?\:\/\/www.comicun.com\/.*$/
// @grant        none
// ==/UserScript==

(function() {
    $("#ComicPic").width("40%");
    $("#ComicPic").click(function(){
        if($("a:contains('下一頁')").attr('href')!="javascript:nextpage();")
            location.href = $("a:contains('下一頁')").attr('href');
        else
            location.href = $("a:contains('下一章')").eq(1).attr('href');
    });
})();