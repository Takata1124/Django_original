function btnClick(){

    window.scroll({top: 600, behavior: 'smooth'});
}

function iosBtnClick(){

    window.scroll({top: 1250, behavior: 'smooth'});
}

function selfBtnClick(){

    window.scroll({top: 1550, behavior: 'smooth'});
}

function contactBtnClick(){

    window.scroll({top: 2000, behavior: 'smooth'});
}

//tooltip機能
// $(function(){
//     $("#Tooltip ul li a").hover(function(){

//         var window_w = window.innerWidth;
//         console.log(window_w);

//         var lefOffsetPos = $(this).offset().left

//         var topPos = $(this).position().top;
//         var leftPos = $(this).position().left
//         var rightPos = $(this).position().right
//         var bottomPos = $(this).position().botton

//         $(".contact-container").append('<div id="tooltip"><p></p></div>');
//         $("#tooltip p").html($(this).children().attr("alt"));
//         $("#tooltip").css("bottom", topPos  + 150);
//         $("#tooltip").css("left", lefOffsetPos - 35);
//         $("#tooltip").fadeIn();
//     }, 
//     function(){
//         $("#tooltip").remove();
//     });
// });


//画像スクロールJQuery

// $(function(){
// // スクロールの方向　-1の時には左、1の時には右
//     var dir = -1;
//     var interval = 3000;
//     var duration = 700;
//     var timer;
//     // リストの順番を変更（3番目を1番最初にする）
//     $("#slide ul").prepend($("#slide li:last-child"));
//     // リストの位置を変更（画像1枚分ずらす）
//     $("#slide ul").css("left", -300);
//     timer = setInterval(slideTimer, interval);
//     // slideTimer()関数
//     function slideTimer(){
//     // スクロール方向の判断
//         if(dir == -1){
//         // 画像1枚分左へスクロール
//             $("#slide ul").animate({"left" : "-=300px"}, duration, 
//             function(){
//                 $(this).append($("#slide li:first-child"));
//                 $(this).css("left", -300);
//             });
//         }else{
//             // 画像1枚分右へスクロール
//             $("#slide ul").animate({"left" : "+=300px"}, duration, 
//             function(){
//                 $(this).prepend($("#slide li:last-child"));
//                 $(this).css("left", -300);
//                 dir = -1;
//             });
//         }
//     }
//     // 前へ戻るボタン
//     $("#prevBtn").click(function(){
//         // スクロール方向の切り替え（右）
//         dir = 1;
//         clearInterval(timer);
//         timer = setInterval(slideTimer, interval);
//         slideTimer();
//     });
//         // 次へ進むボタン
//     $("#nextBtn").click(function(){
//         // スクロール方向の切り替え（左）
//         dir = -1;
//         clearInterval(timer);
//         timer = setInterval(slideTimer, interval);
//         slideTimer();
//     });
// });

