let twd_jpy_line = document.getElementById('line-chart');
let twd_jpy_data = JSON.parse(document.getElementById('exchangeData').innerHTML);

let xData = [];
let yData = [];

console.log("[twd_jpy_data]", twd_jpy_data);

for(let x=0; x<twd_jpy_data.length;x++){
    xData.push(twd_jpy_data[x].date);
    yData.push(twd_jpy_data[x]["twd-jpy"]);
}

console.log("[xData]", xData);
console.log("[yData]", yData);

let lineChartData = [
    {
        x:xData,
        y:yData
    }
];

let layout = {
    margin:{
        t:0
    }
};

Plotly.newPlot(twd_jpy_line, lineChartData, layout);