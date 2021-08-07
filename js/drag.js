const item =[
            {
                id:"add",
                title:'+',
                price:'',
                color:'info'
            },
            {
                id:"multiply",
                title:'x',
                price:'',
                color:'info'
            },
            {
                id:"drag1",
                title:'blue',
                price:100,
                color:'primary'
            },
            {
                id: "drag2",
                title: 'red',
                price: 80,
                color: 'danger'
            },
            {
                id: "drag3",
                title: 'yellow',
                price: 70,
                color: 'warning'
            },
            {
                id: "drag4",
                title: 'gray',
                price: 60,
                color: 'secondary'
            },
            {
                id: "drag5",
                title: 'dark',
                price: 50,
                color: 'dark'
            }
        ] 
        const num1 = document.getElementById('num1')
        const num1Count = num1.getElementsByTagName('span')
        const num2 = document.getElementById('num2')
        const num2Count = num2.getElementsByTagName('span')
        const num3 = document.getElementById('num3')
        const num3Count = num3.getElementsByTagName('span')
        const res = document.getElementById('res')
        const valueBox = document.querySelector('#valueBox')
        
        
        let collection = document.getElementById('collection')
        let draggerBox = document.querySelector('.dropper_box');
        let dragger = document.querySelectorAll('.numBox');
        let dropper = document.querySelectorAll('.textBox');
        let result = document.querySelector('#numTotal')
        let ac = document.getElementById('clear')
        let pendingVal;
        let evalStrAry = '';

        item.forEach(function (obj, key) {
                    //function(item,index) //callback function
                    let htmlTemplate = ''
                    htmlTemplate = htmlTemplate + `<span draggable="true" ondragstart="drag(event)" class="m-1 badge numBox bg-${obj.color} rounded-pill" id="${obj.id}" data-value="${obj.price}">  
                      ${obj.title}${obj.price}
            </span>`;
            const menu = document.querySelector('#menu');
            menu.innerHTML += htmlTemplate
            
        });
        function allowDrop(ev) {
            ev.preventDefault();
        }
        function drag(ev) {
            // ev.dataTransfer.setData("text", ev.target.dataset.value,1);
            ev.dataTransfer.setData("text/plain", ev.target.id);
            ev.target.style.opacity = "0.4";
        }
        
        dragger.forEach((item)=>{
            item.addEventListener("dragstart", (e) => {
            //    e.target.style.background = "#FFF";
                e.target.style.opacity = "0.4";
            });
            item.addEventListener("dragleave", (e) => {
               e.target.style.background = "#FFF";
                e.target.style.opacity = "1";
            });
            item.addEventListener("dragend", (e) => {
               e.target.style.background = "#FFF";
                e.target.style.opacity = "1";
            });
        })
        dropper.forEach((item) => {
            item.addEventListener("dragenter", (e) => {
                e.target.style.background = "#ebf8ff";
                e.target.style.borderStyle = 'dashed';
            });
            item.addEventListener("dragleave", (e) => {
               e.target.style.background = "#FFF";
                e.target.style.opacity = "1";
            });
            item.addEventListener("dragend", (e) => {
               e.target.style.background = "#FFF";
                e.target.style.opacity = "1";
            });
            
        })
        draggerBox.addEventListener("dragenter", (e) => {
            e.target.style.background = "#ebf8ff";
        });
        draggerBox.addEventListener("dragleave", (e) => {
            e.target.style.background = "#FFF";
            e.target.style.opacity = "1";
        });
        function drop(ev) {
            ev.preventDefault();
            // console.log(ev.target);
            var data = ev.dataTransfer.getData("text/plain");
            // var data2 = parseInt(ev.dataTransfer.getData("text",1));
            ev.target.appendChild(document.getElementById(data));
            ev.target.style.opacity = "1";
            ev.target.style.background = "#FFF";
            // console.log(evalStrAry);
            let num1Total = 0;
            for (let i = 0; i < num1Count.length; i++) {
                const num = parseInt(num1Count[i].getAttribute('data-value'))
                num1Total += num
                // 用 children[i] 來取得遍歷到子元素
            } console.log('num1Total', num1Total);
            evalStrAry = num1Total

            let num2Total = 0;
            for (let i = 0; i < num2Count.length; i++) {
                const num = parseInt(num2Count[i].getAttribute('data-value'))
                num2Total += num
            } console.log('num2Total', num2Total);

            let num3Total = 0;
            for (let i = 0; i < num3Count.length; i++) {
                const num = parseInt(num3Count[i].getAttribute('data-value'))
                num3Total += num
            } console.log('num3Total', num3Total);

            
            const calculate =  function(x,y,z){
                return (x > 0 && y > 0 && z > 0) ? ((x + y) * z)
                :  (z === 0) ? (x + y)
                :  (x != 0 || y != 0) ? ((x + y) * z)
                :   z
            }
            result.value = calculate(num1Total, num2Total, num3Total);
            // res.innerHTML = evalStrAry
            dropper.forEach((item) => {
                item.addEventListener('drop', function (event) {
                    console.log(event.target);
                    console.log(event.currentTarget);
                    // evalStrAry += event.target.innerText
                    // res.innerHTML = evalStrAry
                })
            })
        }

        function reset() {
            // collection.innerHTML = html;
            window.location.reload();
        }
        let html;
        window.onload = function(){
            html = collection.innerHTML;
        };  