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
        const num1 = document.getElementById('num1')
        const num1Count = num1.getElementsByTagName('span')
        
        let collection = document.getElementById('collection')
        let draggerBox = document.querySelector('.dragger_box');
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
                htmlTemplate = htmlTemplate + `<span class="m-1 badge math bg-${obj.color} rounded-pill" id="${obj.id}" data-math="${obj.math}" data-value="${obj.math}">  
                  ${obj.title}
                </span>`;
                const menu = document.querySelector('#menu');
                menu.innerHTML += htmlTemplate
            } else {
                let htmlTemplate = ''
                htmlTemplate = htmlTemplate + `<span class="m-1 badge numBox bg-${obj.color} rounded-pill" id="${obj.id}" data-value="${obj.price}">  
                  ${obj.title}${obj.price}
                </span>`;
                const menu = document.querySelector('#menu');
                menu.innerHTML += htmlTemplate
            }
            
        });
        // function allowDrop(ev) {
        //     ev.preventDefault();
        // }
        // function drag(ev) {
        //     ev.dataTransfer.setData("application/json", ev.target.dataset.value);
        //     // ev.dataTransfer.setData("application/json", ev.target.dataset.math);
        //     ev.dataTransfer.setData("text/plain", ev.target.id);
        //     ev.target.style.opacity = "0.4";
        //     // console.log(ev.target.dataset.value);
        // }
        
        // dropper.forEach((item) => {
        //     item.addEventListener("dragenter", (e) => {
        //         e.target.style.background = "#ebf8ff";
        //         e.target.style.borderStyle = 'dashed';
        //         e.target.style.opacity = "1";
        //     });
        //     item.addEventListener("dragleave", (e) => {
        //        e.target.style.background = "#FFF";
        //         e.target.style.opacity = "1";
        //     });
        //     item.addEventListener("dragend", (e) => {
        //        e.target.style.background = "#FFF";
        //         e.target.style.opacity = "1";
        //     });
        // })
        
        // draggerBox.addEventListener("dragenter", (e) => {
        //     e.target.style.background = "#ebf8ff";
        //     e.target.style.borderStyle = 'dashed';
        //     // e.target.style.opacity = "1";
        // });
        // draggerBox.addEventListener("dragleave", (e) => {
        //     e.target.style.background = "#FFF";
        //     // e.target.style.opacity = "1";
        // });
        // draggerBox.addEventListener("dragend", () => {
        //     // e.target.style.opacity = "1";
        //     let evalStrAry_length = evalStrAry.length;
        //     let evalStrAry_math_length = evalStrAry_math.length;
        //     evalStrAry = evalStrAry.slice(0, evalStrAry_length - 1);
        //     evalStrAry_math = evalStrAry_math.slice(0, evalStrAry_math_length - 1);
        //     let evaluation_math = eval(evalStrAry_math.join(' '));
            
        //     console.log(evalStrAry);
        //     console.log(evalStrAry.length);
        //     if(displayVal === '') {
        //         displayVal = '0';
        //     }
        //     disPlayresult.value = evaluation_math;
        //     disPlayDetail.innerText = evalStrAry.join(' ');
        // },false);

        // function drop(ev) {
        //     ev.preventDefault();
        //     var data = ev.dataTransfer.getData("text/plain");
        //     var data2 = ev.dataTransfer.getData("application/json");
        //     // var dataMath = parseInt(ev.dataTransfer.getData("application/json"));
        //     // console.log(typeof(data2));
        //     // console.log(ev.target.getAttribute('data-value'));
        //     ev.target.appendChild(document.getElementById(data));
        //     ev.target.style.opacity = "1";
        //     ev.target.style.background = "#FFF";


        // }

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

// const menu = document.querySelector('#menu')
// Sortable.create( el, {
//   		// 參數設定[註1]
//   		disabled: false, // 關閉Sortable
//   		animation: 150,  // 物件移動時間(單位:毫秒)
//   		handle: "#collection",  // 可拖曳的區域
//   		// filter: ".ignore",  // 過濾器，不能拖曳的物件
//   		preventOnFilter: true, // 當過濾器啟動的時候，觸發event.preventDefault()
//   		draggable: ".badge",  // 可拖曳的物件
//   		ghostClass: "sortable-ghost",  // 拖曳時，給予物件的類別
//   		chosenClass: "sortable-chosen",  // 選定時，給予物件的類別
//   		forceFallback: false  // 忽略HTML5 DnD
//   	});

$(function() {
    $( "#menu" ).sortable({
      connectWith: ".dragger_box"
    }).disableSelection();
  });