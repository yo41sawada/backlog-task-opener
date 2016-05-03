/**
 * Backlog Task Opener
 *
 * @author yoshihisa.wada@flect.co.jp
 **/
jQuery(function($){
    // 課題をまとめて開くリンク
    $(".ico").prepend('<a id="openKeys">課題をまとめて開く</a>');

    //　openKeys押下時
    $(function(){
        $("#openKeys").on('click',function(event){
            $("td.key a").each(function() {
                var targetlink = $(this).attr("href");
                console.log(targetlink);
                window.open( targetlink,"_blank");
            });
        });
    });

});