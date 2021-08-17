const marqueeArr = document.querySelectorAll('#marquee')
    marqueeArr.forEach((marquee) =>{
        let heightMarqueeList = 0
        const marqueeLi = marquee.querySelectorAll('ul:first-of-type li')
        marqueeLi.forEach((item) =>{
            heightMarqueeList += item.offsetHeight
            // console.log(item.offsetHeight);
        })
        const marqueeUl = marquee.querySelectorAll('ul')
        // console.log(marqueeUl);
        marqueeUl.forEach((list) => {
            list.style.Height = heightMarqueeList + 'px';
            // console.log(list.style.Height);
        })
        // marquee.style.height = heightMarqueeList + 'px';
    }) 
    $(function () {
        // const data = [
        //     {
        //         'month': 'Aug',
        //         'event':[
        //         {
        //             date: '08/05/2021',
        //             event:'公益講座'
        //         },
        //         {
        //             date: '08/06/2021',
        //             event:'公益講座'
        //         },
        //         {
        //             date:'08/09/2021',
        //             event:'公益路跑'
        //         },
        //         {
        //             date: '08/10/2021',
        //             event: '慶生會'
        //         }]
        //     },
        //     {
        //         'month': 'Sep',
        //         'event':[
        //         {
        //             date: '09/05/2021',
        //             event:'公益講座'
        //         }]
        //     }
        // ]
        const data = [
                {
                    month: 'Aug',
                    date: '2021/08/19',
                    event: '公益路跑'
                },
                {
                    month: 'Aug',
                    date: '2021/08/20',
                    event: '會議20'
                },
                {
                    month: 'Aug',
                    date: '2021/08/23',
                    event: '會議23'
                },
                {
                    month: 'Aug',
                    date: '2021/08/24',
                    event: '會議24'
                },
                {
                    month: 'Aug',
                    date: '2021/08/31',
                    event: '會議31'
                },
                {
                    month: 'Sep',
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
                        htmlTemplate = htmlTemplate + `<p class='third'>${item.date.substr(5)}  <span class='mx-2'>${item.event}</span><p>`

                        const event = document.querySelector('#event')
                        event.innerHTML += htmlTemplate
                    }
                })
            });
        }

        function month(year,month) {
            const select = document.querySelector('.ui-datepicker-month')
            const value = select.options[select.selectedIndex].text;
            // console.log(month)
            const monthEvent = data.map(function (item, index) {
                if (item.month === value) {
                    return `<p class='third'>${item.date.substr(5)}  <span class='mx-2'>${item.event}</span><p>`
                }
            });
            $('#event').html(monthEvent)
        }
        function gotoDate(ev) {
            const event = data.map(function (item, index) {
                console.log(ev);
                if (item.date === ev) {
                    return `<p class='third'>${item.date.substr(5)}  <span class='mx-2'>${item.event}</span><p>`
                }
                else {
                    return ``
                }
            })
            $('#event').html(event)
        }
        $("#datepicker").datepicker({
            changeMonth: true,
            onSelect: gotoDate,
            onChangeMonthYear: month,
            showMonthAfterYear: true,
            dateFormat: "yy/mm/dd"
        });
        window.onload = month;
    });
