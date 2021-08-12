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
                    event: '慶生會10'
                },
                {
                    month: 'Aug',
                    date: '2021/08/21',
                    event: '慶生會11'
                },
                {
                    month: 'Aug',
                    date: '2021/08/22',
                    event: '慶生會12'
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
        function month(year,month) {
            const select = document.querySelector('.ui-datepicker-month')
            const value = select.options[select.selectedIndex].text;
            // console.log(select.selectedIndex)
            const today = new Date();
            const week = today.setDate(today.getDate() +14)
            console.log(week.toLocaleString());
            const monthEvent = data.map(function (item, index) {
                // console.log(item.date);
                if (item.month === value) {
                    return `<p class='third'>${item.date.substr(5)}  <span class='mx-2'>${item.event}</span><p>`
                }
            });
            $('#event').html(monthEvent)
        }
        function gotoDate(ev) {
            const event = data.map(function (item, index) {
                console.log(ev);
                // console.log(item.date);
                if (item.date === ev) {
                    return `<p class='third'>${item.date.substr(5)}  <span class='mx-2'>${item.event}</span><p>`
                } else {
                    return ``
                }
            })
            $('#event').html(event)
        }
        // function gotoDate(ev) {

        //     data.forEach((obj) => {
        //             const div = document.querySelector('#event')
        //         const vEvent = obj.event.map(function (item, index) {
        //                 console.log(item.date);
        //                 console.log(ev);
        //                 if (item.date === ev) {
        //                     return `<p class='primary'>${item.date.substr(0, 5)}  <span class='mx-2'>${item.event}</span><p>`
        //                 }
        //             })
        //             $('#event').html(vEvent)
        //     });
        //     // data.map(function(item,index){
        //     //     console.log(item);
        //     // })
        //     // if (item.event.length > 0) {
        //     //     // console.log(item);
        //     //     const vEvent = item.event.map(function (obj, index) {
        //     //         console.log(obj.date);
        //     //         console.log(ev);
        //     //         if (obj.date === ev) {
        //     //             return `<p class='primary'>${obj.date.substr(0, 5)}  <span class='mx-2'>${obj.event}</span><p>`
        //     //         }
        //     //         else {
        //     //             return ``
        //     //         }
        //     //     })
        //     //     $('#event').html(vEvent)
        //     // }
        //         // const vEvent = event.map(function (item, index) {
        //         //     if (item.date === ev) {
        //         //         return `<p class='primary'>${item.date.substr(0, 5)}  <span class='mx-2'>${item.event}</span><p>`
        //         //     } else {
        //         //         return ``
        //         //     }
        //         // })
            
            
        // }
        $("#datepicker").datepicker({
            changeMonth: true,
            onSelect: gotoDate,
            onChangeMonthYear: month,
            showMonthAfterYear: true,
            dateFormat: "yy/mm/dd"
        });
        // $("#datepicker").datepicker("option", "dateFormat", "dd");
        // $('#datepicker').change(function () {
        //     $('.ui-datepicker-month').val($('#datepicker').val());
        // })
        window.onload = month;
    });
