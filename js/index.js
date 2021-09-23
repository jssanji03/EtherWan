
// 即時宣導 跑馬燈
$(function () {
    const marqueeData =[
        `1.景園高小，線房傳上地都懷……還大和一展早能像再統為毒來關上……後這的。少在不。有發毛成、車後位合孩百隊了心總毒上告施病來出，但他果造都意？要研化反員一母總再南，理來新西廣家得去農節；去時然金著不可型本家種最他任朋分沒的。和他體影克物作。
眼至後心為比會少有面也應顯為者在影，所跑舉沒天於人東、分推就這他友出，識機如知地、相身時共光時片要整以速了成我依父於照一可其應團女看父士廠期男斯城照客治歡想子斯`,
        "2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.",
        "3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.",
        "10. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.",
        "20. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.",
        "30. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.",
    ]
    function marqueeArr(marqueeData) {
        const marquee = document.querySelector(".marquee ul")
        const marqueeLi = marquee.childNodes;
        var html = "";
        for (let i = 0; i < marqueeData.length; i++) { 
            html += `<li class="marquee-item">${marqueeData[i]}</li>`;
        }
        marquee.innerHTML = html
        
        // $("#marquee").html(html); //印出html
        for (let i = 0; i < marqueeLi.length; i++) {
            const Li = marqueeLi[i];
            Li.style.animationDelay = `${4+i * 5}s`;
            Li.style.animationDuration = `${marqueeLi.length * 5}s`;
            // Li.style.animation = `display ${marqueeLi.length * 4}s ease-in-out infinite`;
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
                    event: '公益路跑'
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

        function month(year,month) {
            const select = document.querySelector('.ui-datepicker-month')
            const value = select.options[select.selectedIndex].text;
            // const col = document.querySelector('#event')
            // console.log(month)
            const monthEvent = data.map(function (item, index) {
                // console.log(item.month)
                // console.log(month)
                if (item.month === value) {
                    return `<li class='third'>${item.date.substr(5)}  <span class='lh-30 mx-3 text'>${item.event}</span></li>`
                }
            });
            $('#event').html(monthEvent)
        }
        function gotoDate(ev) {
            const event = data.map(function (item, index) {
                // console.log(ev);
                if (item.date === ev) {
                    return `<li class='third'>${item.date.substr(5)}  <p class='lh-30'>${item.event}</p></li>`
                }
                else {
                    return ``
                }
            })
            $('#event').html(event)
        }
        $(".datepicker").datepicker({
            changeMonth: true,
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
