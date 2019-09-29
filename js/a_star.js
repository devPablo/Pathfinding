astar(svg.childNodes[calcPos(594)], svg.childNodes[calcPos(615)]);

function astar(start, end) {
    console.log(start, end);

    let data = calcNeighborData(start, end);

    for (let i = 0; i < data.length; i++) {
        (function (i) {
            setTimeout(function () {
                data[i].childNodes[1].setAttribute('fill', 'orange');
            }, 60*i);
          })(i);
    }
}

function calcNeighborData(start, end) {
    let startPos = Number.parseInt(start.getAttribute('data-id'));
    let nodes = [];

    nodes.push(svg.childNodes[calcPos(startPos-nodesRow-1)]);
    nodes.push(svg.childNodes[calcPos(startPos-nodesRow)]);
    nodes.push(svg.childNodes[calcPos(startPos-nodesRow+1)]);

    nodes.push(svg.childNodes[calcPos(startPos+1)]);

    nodes.push(svg.childNodes[calcPos(startPos+nodesRow+1)]);
    nodes.push(svg.childNodes[calcPos(startPos+nodesRow)]);
    nodes.push(svg.childNodes[calcPos(startPos+nodesRow-1)]);

    nodes.push(svg.childNodes[calcPos(startPos-1)]);

    return nodes;
}