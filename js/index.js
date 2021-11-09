
// 即時宣導 跑馬燈
$(function () {
    const marqueeData =[
        "<a herf='http://www.google.com'>請注意於11/1將有火警警鈴修繕作業，請各位同仁聽到響鈴，不要驚慌，謝謝。請注意請注意請注意請注意請</a>",
        "test22",
        // "test333",
        // "test4444",
    ]
    function marqueeArr(marqueeData) {
        const marquee = document.querySelector(".marquee ul")
        const marqueeLi = marquee.childNodes;
        var html = "";
        for (let i = 0; i < marqueeData.length; i++) { 
            html += `<li class="marquee-item">${marqueeData[i]}</li>`;
        }
        marquee.innerHTML = html
        
        for (let i = 0; i < marqueeLi.length; i++) {
            const Li = marqueeLi[i];
            Li.style.animationDelay = `${i * 10}s`;
            Li.style.animationDuration = `${marqueeLi.length + 20}s`;
        }
    }
    marqueeArr(marqueeData)
})

// HomeBanner 輪播
$(function () {
    const data =[
        [
            "https://fakeimg.pl/1000x450/",
            "http://www.google.com.tw"
        ],
        [
            "https://fakeimg.pl/1000x450/",
            "http://www.yahoo.com.tw"
        ],
        [
            "https://fakeimg.pl/1000x450/",
            "http://www.facebook.com.tw"
        ],
        [
            "https://fakeimg.pl/1000x450/",
            "http://www.msn.com.tw"
        ],
    ]
    function carousal (data) {
        // console.log(data);
        var html = "";
        for (var i = 0; i < data.length; i++) {
            html += `<div class="carousel-item photoLink">`;
            html += `<a href=${data[i][1]} target=_blank><img src="${data[i][0]}" class="img-fluid" alt="..."></a>`;
            html += "</div>";
            if (i == 9) {
                break;
            }
        }
        $(".carousel-inner").html(html); //印出html
        $(".carousel-inner>div").first().addClass("active"); 
    }
    carousal(data)
    //下方自動加入控制圓鈕
    const total = document.querySelectorAll('.carousel-item').length
    append_li();
    function append_li() {
        let li = "";
        var get_ac = $(".carousel-inner .active");
        var ac = $(".carousel .carousel-inner div").index(get_ac);

        for (var i = 0; i <= total - 1; i++) {
            if (i == (ac) / 2) {
                li += `<button type="button" data-bs-target="#carouselExampleIndicators" class="active" data-bs-slide-to="${i}" class="active"
                            aria-current="true"></button>`;
            } else {
                li += `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}"
                            ></button>`;
            }
        }
        $(".carousel-indicators").append(li);
    }

    //單則隱藏控制鈕
    if (total.length < 2) {
        $('.carousel-indicators').hide();
    }
}
);


//行事曆
$(function () {
        const data = [
                {
                    month: 'August',
                    date: '2021/08/19',
                    event: '公益路跑公益路跑公益路跑公益路跑公益路跑公益路跑'
                },
                {
                    month: 'August',
                    date: '2021/08/19',
                    event: '公益路跑222'
                },
                {
                    month: 'August',
                    date: '2021/08/20',
                    event: '會議20'
                },
                {
                    month: 'August',
                    date: '2021/08/23',
                    event: '會議23'
                },
                {
                    month: 'August',
                    date: '2021/08/24',
                    event: '會議24'
                },
                {
                    month: 'August',
                    date: '2021/08/31',
                    event: '會議31'
                },
                {
                    month: 'September',
                    date: '2021/09/01',
                    event: '慶生會'
                }]
        function today() {
            const todayEvent = data.map(function(item,index){
                const today = new Date().format("yyyy/MM/dd");
                if (item.date === today) {
                    return `<p class='third'>${item.date.substr(5)}  <span class='mx-2'>${item.event}</span><p>`
                }
            });
            $('#event').html(todayEvent)
        }
        function week() {
            const startDate = new Date();
            let endDate = new Date();
            endDate.setDate(startDate.getDate() + 14);
            const dateList = [];
            // console.log(startDate.getMonth()); 
            while ((endDate.getTime() - startDate.getTime()) >= 0) {
                let year = startDate.getFullYear();
                let month = (startDate.getMonth() + 1).toString().length === 1 ? "0" + (startDate.getMonth() + 1).toString() : (
                    startDate.getMonth() + 1);
                let day = startDate.getDate().toString().length === 1 ? "0" + startDate.getDate() : startDate.getDate();
                dateList.push(`${year}/${month}/${day}`);
                startDate.setDate(startDate.getDate() + 1);
            }
            data.map(function (item, index) {
                dateList.forEach((vDay) => {
                    if (item.date === vDay) {
                        let htmlTemplate = ''
                        htmlTemplate = htmlTemplate + `<li class='third'>${item.date.substr(5)}  <p class='mx-2'>${item.event}</p></li>`

                        const event = document.querySelector('#event')
                        event.innerHTML += htmlTemplate
                    }
                })
            });
        }

        function month() {
            const select = document.querySelector('.ui-datepicker-month')
            const value = select.options[select.selectedIndex].text;
            const monthEvent = data.map(function (item, index) {
                if (item.month === value) {
                    return `<li class='third eventList lh-30'>${item.date.substr(5)}<p class='lh-20 text'>${item.event}</p></li>`
                }
            });
            $('#event').html(monthEvent)
        }
        function gotoDate(ev) {
            const event = data.map(function (item, index) {
                // console.log(ev);
                if (item.date === ev) {
                    return `<li class='third eventList lh-30'>${item.date.substr(5)}<p class='lh-20 text'>${item.event}</p></li>`
                }
                else {
                    return ``
                }
            })
            $('#event').html(event)
        }
        $(".datepicker").datepicker({
            changeMonth: true,
            changeYear: true,
            onSelect: gotoDate,
            onChangeMonthYear: month,
            showMonthAfterYear: true,
            dateFormat: "yy/mm/dd",
            stepMonths: 1,
            monthNamesShort: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            dayNamesMin:[ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
        });
        window.onload = month;
});
