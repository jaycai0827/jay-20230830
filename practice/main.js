let myGraph = document.getElementById('myGraph');
d3.csv(dataURL).then(getCSV_Data);

function unpack(rows, key) {
    return rows.map(function (row) {
        return row[key];
    })
}

function getCSV_Data(rows) {
    let trace1 = {};
    trace1.mode = "lines";
    trace1.type = "scatter";
    trace1.name = "Lyft";
    trace1.x = unpack(rows, 'date');
    trace1.y = unpack(rows, 'lyft');

    let trace2 = {};
    trace2.mode = "lines";
    trace2.type = "scatter";
    trace2.name = "Uber";
    trace2.x = unpack(rows, 'date');
    trace2.y = unpack(rows, 'uber');
    trace2.visible = false;

    let trace3 = {};
    trace3.mode = "lines";
    trace3.type = "scatter";
    trace3.name = "Yellow";
    trace3.x = unpack(rows, 'date');
    trace3.y = unpack(rows, 'yellow');
    trace3.visible = false;

    let data = [];
    data.push(trace1);
    data.push(trace2);
    data.push(trace3);
    let layout = {
        title: 'Lyft vs Uber vs Yellow',
        margin: {
            t: 50,
            l: 50,
        },
        updatemenus:[
            {
                y:1.2,
                x:0.3,
                yanchor:'top',
                buttons:[
                    {
                        method:'restyle',
                        args:['visible',[true, false, false]],
                        label:"Lyft"
                    },
                    {
                        method:'restyle',
                        args:['visible',[false, true, false]],
                        label:"Uber"
                    },
                    {
                        method:'restyle',
                        args:['visible',[false, false, true]],
                        label:"Yellow"
                    },
                    {
                        method:'restyle',
                        args:['visible',[true, true, true]],
                        label:"Display All"
                    },
                ]
            }
        ]
    };
    Plotly.newPlot(myGraph, data, layout);
}

