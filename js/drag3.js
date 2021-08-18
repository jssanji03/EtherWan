const item =[
            {
                id:"add",
                title:'+',
                math:'+',
                price:'+',
                color:'info'
            },
            {
                id:"minus ",
                title:'-',
                math:'-',
                price:'-',
                color:'info'
            },
            {
                id:"multiply",
                title:'x',
                math: '*',
                price:'x',
                color:'info'
            },
            {
                id:"divided",
                title:'÷',
                math: '/',
                price:'÷',
                color:'info'
            },
            {
                id:"left",
                title:'(',
                math: '(',
                price:'(',
                color:'info'
            },
            {
                id:"right",
                title:')',
                math: ')',
                price:')',
                color:'info'
            },
            {
                id:"drag1",
                title:'blue',
                price:'100',
                color:'primary'
            },
            {
                id: "drag2",
                title: 'red',
                price: '80',
                color: 'danger'
            },
            {
                id: "drag3",
                title: 'yellow',
                price: '70',
                color: 'warning'
            },
            {
                id: "drag4",
                title: 'gray',
                price: '60',
                color: 'secondary'
            },
            {
                id: "drag5",
                title: 'dark',
                price: '50',
                color: 'dark'
            }
        ] 
        // const num1 = document.getElementById('num1')
        // const num1Count = num1.getElementsByTagName('span')
        const num1Count = document.querySelectorAll('.badge')
        
        let collection = document.getElementById('collection')
        let draggerBox = document.querySelectorAll('.dragger_box');
        let dragger = document.querySelectorAll('.numBox');
        let dropper = document.querySelectorAll('.textBox');
        let disPlayDetail = document.getElementById('detail')
        let disPlayresult = document.querySelector('#numTotal')
        let ac = document.getElementById('clear')
        let pendingVal;
        let displayVal = '0';
        let evalStrAry = [];
        let evalStrAry_math = [];

        item.forEach(function (obj, key) {
                    //function(item,index) //callback function
            if (obj.math) {
                let htmlTemplate = ''
                htmlTemplate = htmlTemplate + `<span draggable="true" ondragstart="drag(event)" ondragover="drop_handler(event)"class="m-1 badge math bg-${obj.color} rounded-pill" id="${obj.id}" data-math="${obj.math}" data-value="${obj.math}">  
                  ${obj.title}
                </span>`;
                const menu = document.querySelector('#menu');
                menu.innerHTML += htmlTemplate
            } else {
                let htmlTemplate = ''
                htmlTemplate = htmlTemplate + `<span draggable="true" ondragstart="drag(event)" class="m-1 badge numBox bg-${obj.color} rounded-pill" ondragover="drop_handler(event)" id="${obj.id}" data-value="${obj.price}">  
                  ${obj.title}${obj.price}
                </span>`;
                const menu = document.querySelector('#menu');
                menu.innerHTML += htmlTemplate
            }
            
        });
        function allowDrop(ev) {
            ev.preventDefault();
        }
        function drag(ev) {
            ev.dataTransfer.setData("application/json", ev.target.dataset.value);
            // ev.dataTransfer.setData("application/json", ev.target.dataset.math);
            ev.dataTransfer.setData("text/plain", ev.target.id);
            ev.target.style.opacity = "0.4";
            // let index = ev.target.index
            // console.log(index);
            // ev.dataTransfer.setData('text/plain', ev.target.index);
            ev.dataTransfer.effectAllowed = 'move';
            var index = $(ev.target).index();
            ev.dataTransfer.setData('text/plain', index);
            // console.log(index);
        }
        function drop_handler(ev) {
            ev.preventDefault()
            ev.dataTransfer.dropEffect = "none"
            // ev.dataTransfer.dropEffect = 'move';
            ev.dataTransfer.effectAllowed = "none";
        }
        function drop(ev) {
            ev.preventDefault();
            ev.target.style.opacity = "1";
            // var index = $(ev.target).index();
            var data = ev.dataTransfer.getData("text/plain");
            var data2 = ev.dataTransfer.getData("application/json");
            // var dataMath = parseInt(ev.dataTransfer.getData("application/json"));
            // var lines = ev.dataTransfer.getData("text/plain")
            for (let line of data) {
                let link = document.getElementById(data);
                // link.href = line;
                console.log(link);
                link.textContent = line;
                ev.target.appendChild(link);
            }

            // ev.target.appendChild(document.getElementById(data));
            ev.target.style.background = "#FFF";
        }
        function handleDragEnter(e) {
            e.preventDefault();
            e.target.style.background = "#ebf8ff";
        }
        function handleDragLeave(e) {
            e.preventDefault();
            e.target.style.background = "#FFF";
        }
        function handleDragEnd(e) {
            e.preventDefault();
            e.target.style.opacity = "1";
        }
        var dragSrcEl = null;
        function dragStart(e) {
            dragSrcEl = this;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', this.innerHTML);
        }

        dragger.forEach((item) => {
            item.addEventListener('dragstart', dragStart, false);
            item.addEventListener('dragover', drop_handler, false);
            item.addEventListener('dragend', handleDragEnd, false);
        })
        dropper.forEach((item) => {
            item.addEventListener('dragenter', handleDragEnter, false);
            item.addEventListener('dragleave', handleDragLeave, false);
            item.addEventListener('dragend', handleDragEnd, false);
        })

        draggerBox.forEach((item) => {
            item.addEventListener('dragenter', handleDragEnter, false);
            item.addEventListener('dragleave', handleDragLeave, false);
            item.addEventListener("dragend", (e) => {
            e.target.style.opacity = "1";
            let evalStrAry_length = evalStrAry.length;
            let evalStrAry_math_length = evalStrAry_math.length;
            evalStrAry = evalStrAry.slice(0, evalStrAry_length - 1);
            evalStrAry_math = evalStrAry_math.slice(0, evalStrAry_math_length - 1);
            let evaluation_math = eval(evalStrAry_math.join(' '));
            
            console.log(evalStrAry);
            // console.log(evalStrAry.length);
            if(displayVal === '') {
                displayVal = '0';
            }
            disPlayresult.value = evaluation_math;
            disPlayDetail.innerText = evalStrAry.join(' ');
            },false);
        })
        

    let updateDisplayVal = (e) => {
            // console.log(e.target);
        btnText = e.target.dataset.value;
    
        if(displayVal === '0') {
            displayVal = '';
            displayVal += btnText;
        } else {
            displayVal += btnText;
            }
            console.log(displayVal)
                disPlayresult.value = displayVal;
                disPlayDetail.innerText = displayVal;
            }
        
        for (let i = 0; i < dropper.length; i++) {
            dropper[i].addEventListener('dragend',updateDisplayVal,false);
        }


let performOperation = (e) => {
    // let operator = e.target.dataset.math; // 實際運算 ex 6/3
    // console.log(operator);
    if(disPlayDetail) {
        pendingVal = displayVal;
        displayVal = '0';
        disPlayresult.value = pendingVal;
        evalStrAry.push(pendingVal);
        evalStrAry_math.push(pendingVal);
        let evaluation_math = eval(evalStrAry_math.join(' '));
        console.log(evalStrAry);
        // console.log(evalStrAry_math);
        
        let evaluation_list = evalStrAry.join(' ');
        disPlayresult.value = evaluation_math;
        disPlayDetail.innerText = evaluation_list;
    }
}

for(let i=0; i<dropper.length; i++) {
    dropper[i].addEventListener('dragend',performOperation,false);
}

ac.addEventListener('click', () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStrAry = [];
    evalStrAry_math = [];
    let html;
    disPlayresult.value = displayVal;
    disPlayDetail.innerText = displayVal;
    html = collection.innerHTML;
    html = window.location.reload();
}, false);

// function reset() {
//     // collection.innerHTML = html;
//     window.location.reload();
// }
// let html;
// window.onload = function(){
//     html = collection.innerHTML;
// };
function TwoDecimal() {
    const Num = disPlayresult.value
    const TwoDecimal = Math.round(Num * 100) / 100;
    disPlayresult.value = TwoDecimal
}