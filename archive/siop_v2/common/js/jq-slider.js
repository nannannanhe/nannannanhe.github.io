
if (window.matchMedia( "(max-width: 770px)").matches) {
    /* ウィンドウサイズが 770px以下の場合に有効にしたい処理*/
    
} else {
    setInterval(function() { 
        $('#back-slider > img:first')
        .addClass('out')
        .next()
        .removeClass('out')
        .end();
        setTimeout(function(){
            $('#back-slider > img:first').appendTo('#back-slider');
        }, 1500);
        
    }, 15000);
}

