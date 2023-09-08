let myGraph = document.getElementById('myGraph');
let trace1 = {};
trace1.type = "bar";
trace1.name = "Lion";
trace1.x = [];
trace1.y = [];
trace1.x[0] = animals_Taipei_Zoo[0]['name'];
trace1.y[0] = animals_Taipei_Zoo[0]['count'];
trace1.x[1] = animals_Taoyuan_Zoo[0]['name'];
trace1.y[1] = animals_Taoyuan_Zoo[0]['count'];


let trace2 = {};
trace2.type = "bar";
trace2.name = "Tiger";
trace2.x = [];
trace2.y = [];
trace2.x[0] = animals_Taipei_Zoo[1]['name'];
trace2.y[0] = animals_Taipei_Zoo[1]['count'];
trace2.x[1] = animals_Taoyuan_Zoo[1]['name'];
trace2.y[1] = animals_Taoyuan_Zoo[1]['count'];



let trace2 = {};
trace3.type = "bar";
trace3.name = "Monkey";
trace3.x = [];
trace3.y = [];
trace3.x[0] = animals_Taipei_Zoo[2]['name'];
trace3.y[0] = animals_Taipei_Zoo[2]['count'];
trace3.x[1] = animals_Taoyuan_Zoo[2]['name'];
trace3.y[1] = animals_Taoyuan_Zoo[2]['count'];

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);

let layout = {
    margin:{
        t:0
    }
};

Plotly.newPlot(myGraph, data, layout);