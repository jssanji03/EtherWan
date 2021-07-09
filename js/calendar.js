//創建日期-today
function toDay() {
    const my_date = new Date();
	$('.weekdays').html(`<th>
                    <div class="box"
                        <span>${my_date.format("yyyy-MM-dd")}</span>
                    </div>
                </th>`); //設定日期顯示
    $('.content').html(`<td> 
                    <div class="event"><div class="event-time">1:00pm to 3:00pm</div>可得到</div>
                    <div class="event_danger">重要事項</div>
                </td>`); //設定內容顯示
}

//創建日期-7天
function dateWeek() {
    const content = $(".content");
    const weekday = $(".weekdays");
    
    Date.prototype.addDays = function(days) {
        this.setDate(this.getDate() + days);
        return this;
    }
	var text = "";
	var title = "";
    for (var i=0; i <7; i++){ 
        const my_date = new Date();
	    title += `<th>
                    <div class="box"
                        <span>${my_date.addDays(i).format("yyyy-MM-dd")}</span>
                    </div>
                </th>`; 
    }
    //內容
	for(var i=1; i<=7; i++){
        text += `<td>
                    <div class="event"><div class="event-time">1:00pm</div>可得到</div>
                    <div class="event_danger"><div class="event-time">3:00pm</div>重要事項</div>
                </td>`; 
    }
	    weekday.html(title) //設定日期顯示
	    content.html(text)  //設定內容顯示
}

//創建日期-30天
function dateMonth() {
    const content = $(".content");
    const weekday = $(".weekdays");
    
    Date.prototype.addDays = function(days) {
        this.setDate(this.getDate() + days);
        return this;
    }
	    var text = "";
	    var title = "";
        for (var i = 0; i < 30; i++){ 
            const my_date = new Date();
	    	title += `<th>
                        <div class="box">
                            <span>${my_date.addDays(i).format("yyyy-MM-dd")}</span>
                        </div>
                    </th>`; 
        }
        //內容
	    for(var i=1; i<=30; i++){
            text += `<td> 
                        <div class="event">可得到</div>
                        <div class="event_danger">重要事項</div>
                    </td>`; 
	    }
	    weekday.html(title) //設定日期顯示
	    content.html(text)  //設定內容顯示
}

$(".choice button").eq(0).css({'background': '#2eafbb', 'color': '#FFF' })
$(".choice button").click(
    function () {
        $(".choice button").eq($(this).index()).css({'background': '#2eafbb', 'color': '#FFF' }).siblings().css({ 'background': '#FFCC01','color':'#5a5a5a' });
})



