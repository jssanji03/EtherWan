/////### DateRangePicker 日期時間選擇 Start ###/////
// https://www.daterangepicker.com/
$(function () { 
  $('input[name="dateTimesPick"]').daterangepicker({
    timePicker: true,
    singleDatePicker: true,
    locale: {
      format: 'YYYY/MM/DD hh:mm A'
    }
  });
});

// 單日期選擇器 //
$(function () {  
  $('input[name="singleDate"]').daterangepicker({
    singleDatePicker: true,
  showDropdowns: true,
  //   minYear: 1901,
  // maxYear: parseInt(moment().format('YYYY'), 10),
    locale: {
      format: 'YYYY/MM/DD'
    }
    
  });
});
/////###  End ###/////

/////### magicsuggest 支援可輸入select Start ###/////
// http://nicolasbize.com/magicsuggest/doc.html  

$(function () { 
  $('.searchAddress').magicSuggest({
　　placeholder:'---- 請輸入 ----',
　　allowFreeEntries: true,
　　maxSelection:1,
　　autoSelect:true,
　　displayField:"value",
　　resultAsString:true,
    selectionStacked: true,
    toggleOnClick: true,
　　data: ['台北', '新北市']
  }); 
});


///##### disabled magicsuggest 支援可輸入select #####////
$(function () { 
  $('.searchAddress_disable').magicSuggest({
　　placeholder:'---- 請輸入 ----',
　　allowFreeEntries: true,
　　maxSelection:1,
　　autoSelect:true,
　　displayField:"value",
　　resultAsString:true,
    selectionStacked: true,
    toggleOnClick: true,
    disabled: true,
　　data: ['台北', '新北市']
  }); 
});
/////###  End ###/////


/////### 單選 select2 Start ###/////
// https://select2.org/getting-started/basic-usage
$(function () {
    $(".singleSelect").select2({
    placeholder: "---- 請選擇 ----",
    allowClear: true,
    closeOnSelect: true,
    allowHtml: true,
    });
});

// #### 複選 Select2 #### //
$(function () { 
  $(".multipleSelect").select2({
    placeholder: "---- 請選擇 ----",
    allowClear: true,
    tags: true,
    // closeOnSelect: false,
  });
});  
/////###  End ###/////    


/////### textArea內容  字數限制 ###/////
$(".fixedArea").on('keyup', function () {
  maxlength = 700;
  const keyupNum = $(".fixedArea").val().length
  $(".wordsNum").text($(".fixedArea").val().length)
  if (keyupNum > maxlength) {
    $(".wordsNum").text(700)
    $(".fixedArea").text($(".fixedArea").val().substring(0,700))
  } 
})
/////###  End ###/////



/////### Datatable Control Start ###/////
// https://datatables.net/

//## 包含標題與搜尋功能 RWD card - Start ##//
$(".listDataTable").DataTable({
        searching: true,
        "paging": true,
  "orderCellsTop": true,
        
            
        // "orderMulti": true,
        "stateSave": true,
        "fnInitComplete": function (settings, json) {  
        $(".listDataTable").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>")},
        "autoWidth": true,  
        // "scrollX": true,
        "language": {
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
        },
        buttons: [
            {
              extend: 'excel',
              text: '<i class="fa fa-copy"></i> Excel',
              exportOptions: {
              columns: ':visible'
              }
            },
            {
              extend: 'colvis',
              text: '<i class="fas fa-filter"></i> Colvis',
              columns: ':not(:eq(8),:eq(1))',
        
            },
            
        ],
        dom: "<'row justify-content-between'<'listTitle col-md-8'B><'col-md-4'fr>>" +
        "<'row'<'col-sm-12'tlp>>",
  })

    // $(".listTitle").append(`<div class='text-md-left text-center'>
    //                         <h2 class="currentName">OOO<span class="currentTitle">的安排日程</span></h2>
    //                     </div>`)


  // Datatable Hover Background //
    let oldColor = "";
    $(".listDataTable tbody tr").mouseover(function () {
        oldColor = $(this).css("background-color");
	  $(this).css("background-color","#ffdab5");
    }).mouseout(function () {
        $(this).css("background-color",oldColor);
    });
  
//## 包含標題與搜尋功能 RWD card - End ##//    

//## Datatable Responsive 套件 - Start ##//
 $('.datatable-RWD').DataTable({
        searching: false,
        "paging": false,
        "ordering": false,
        "info": false,
        "autoWidth": false,
        scroller: true,
        responsive: true,
        "lengthChange": false,
        "language": {
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
        },
        dom: "<'row'<'col-xl-12'fr>>" +
            "<'row'<'col-sm-12'tlp>>",
    }
);
//## Datatable Responsive 套件 - End ##//   

//## Datatable CSS客製 RWD card - Start ##//
  $('.datatable-card,.table-gray').DataTable({
        searching: true,
        "paging": true,
        "ordering": false,
        "scrollX": true,
        "language": {
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
        },
        dom: "<'row'<'col-xl-12'fr>>" +
            "<'row'<'col-sm-12'tlp>>",
    }
  );
//## Datatable CSS客製 RWD card - End ##//
/////### Datatable Control End ###/////


/////###  設定列印範圍 Start ###/////
function printDiv(){
  var newWin=window.open('','列印視窗');
  newWin.document.open();
  newWin.document.write('<html>'+
    '<head>'+
      '<link rel="stylesheet" href="./scss/print.css">'+
    '</head>'+
    '<body onload="window.print()">'+
      $('#List').html()+
    '</body>'+
  '</html>');
  newWin.document.close();
  setTimeout(function(){newWin.close();},10);
}
/////###  設定列印範圍 End ###/////

/////###  顯示密碼 Start  ###/////
$('.showpassword').click(function () {
        if($(".password_input").attr("type")=="password"){
          $(".password_input").attr("type","text");
          $(".showpassword").css("opacity", 0.3)
          $(this).toggleClass("fa-eye fa-eye-slash")
        }
        else{
          $(".password_input").attr("type","password");
          $(".showpassword").css("opacity", 1)
          $(this).toggleClass("fa-eye fa-eye-slash")
        }
})
/////###  顯示密碼 End  ###/////

/////###  顯示圖片 Start  ###/////
$(function () {
    $('.showPic').on('click', function(e){      
      const objectURL = $(this).attr('src');
      // console.log("objectURL", objectURL);
      $(".showMaxPic").attr("src", objectURL);
    }); 
});
/////###  顯示圖片 End  ###/////