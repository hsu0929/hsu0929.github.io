$(document).on('click','.material-symbols-outlined',function(){
    $(this).parents('.contact').html('');
})


//當按鍵是data="add"時，數字增加；當按鍵是data="minus"時，數字減少
$('.count-btn').click(function () {
    //.attr()=>屬性，點擊時判斷data是什麼
    var btnType = $(this).attr('data');
    //取input的舊的值，以方便做運算
    var inputVal = $('#addResult').val();
    console.log(inputVal);
    //if點下去的按鍵data="add"=>數字＋1
    if (btnType=='add') {
        //input id="addResult"的value要加1
        $('#addResult').val(parseInt(inputVal)+1);
    } else if (btnType=='minus'&&inputVal>1) {
        $('#addResult').val(parseInt(inputVal)-1);
    }
})
