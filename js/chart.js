// https://www.chartjs.org/docs/latest/getting-started/
// version 3.2.0

const showPie = function () {
        const data = {
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        };
        // console.log(data.datasets[0].data[0]);
        const config = {
            type: 'pie',
            data: data,
        };
    
        var myChart = new Chart(
            $('#myChart'),
            config
        );
        $('#show').html( `
        <td>${data.datasets[0].data[0]}</td>
        <td>${data.datasets[0].data[1]}</td>
        <td>${data.datasets[0].data[2]}</td>
        `)
}
showPie()

const showBar = function () {
    var bar = $('#BarChart');
    var BarChart = new Chart(bar, {
        type: 'bar',
        data: {
            labels: ['一月', '二月', '三月'],
            datasets: [{
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1,
                label: '銷售業績(百萬)',
                data: [60, 49, 72]
            }]
        }
    });
    $("#showBar").html(`<thead>
                            <tr>
                                <th scope="col">一月</th>
                                <th scope="col">二月</th>
                                <th scope="col">三月</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${BarChart.data.datasets[0].data[0]}</td>
                                <td>${BarChart.data.datasets[0].data[1]}</td>
                                <td>${BarChart.data.datasets[0].data[2]}</td>
                            </tr>
                        </tbody>`)
}
showBar()

const showLine = function () {
    const line = $('#LineChart');
    // const labels = Utils.months({count: 7});
    const LineChart = new Chart(line, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr'],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
            }]
        },
    })
    $("#showLine").html(`<thead>
                            <tr>
                                <th scope="col">Jan</th>
                                <th scope="col">Feb</th>
                                <th scope="col">Mar</th>
                                <th scope="col">Apr</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${LineChart.data.datasets[0].data[0]}</td>
                                <td>${LineChart.data.datasets[0].data[1]}</td>
                                <td>${LineChart.data.datasets[0].data[2]}</td>
                                <td>${LineChart.data.datasets[0].data[3]}</td>
                            </tr>
                        </tbody>`)
}
showLine()

const showMix = function () {
    const mix = $('#MixChart');
    const MixChart = new Chart(mix, {
        type: 'bar',
        data: {
            labels: ['一月', '二月', '三月', '四月'],
            datasets: [{
                label: '銷售業績(百萬)',
                data: [60, 49, 72, 88],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(130, 255, 30, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1,
            }, {
                type: 'line',
                label: '去年銷售',
                data: [12, 19, 3, 5],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 255, 255, 1)'
            }]
        },
    })
    $("#showMix").html(`<thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Jan</th>
                                <th scope="col">Feb</th>
                                <th scope="col">Mar</th>
                                <th scope="col">Apr</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>今年度</th>
                                <td>${MixChart.data.datasets[0].data[0]}</td>
                                <td>${MixChart.data.datasets[0].data[1]}</td>
                                <td>${MixChart.data.datasets[0].data[2]}</td>
                                <td>${MixChart.data.datasets[0].data[3]}</td>
                            </tr>
                            <tr>
                                <th>去年度</th>
                                <td>${MixChart.data.datasets[1].data[0]}</td>
                                <td>${MixChart.data.datasets[1].data[1]}</td>
                                <td>${MixChart.data.datasets[1].data[2]}</td>
                                <td>${MixChart.data.datasets[1].data[3]}</td>
                            </tr>
                        </tbody>`)
}
showMix()
