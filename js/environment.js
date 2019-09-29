const width = 28;
const height = 28;
const nodesRow = 64;

document.querySelector('#clrEnv').addEventListener('click', function() {
    generateEnvironment();
});

generateEnvironment();

generateStartEnd(594, 615);
drawStartEndPath(594, 615);

function drawStartEndPath(start, end) {
    let x1, x2, y1, y2;
    let startNode = document.querySelectorAll(`[data-id="${start}"]`)[0].childNodes[1];
    let endNode = document.querySelectorAll(`[data-id="${end}"]`)[0].childNodes[1];

    x1 = startNode.x.baseVal.value + width/2;
    x2 = endNode.x.baseVal.value + width/2;

    y1 = startNode.y.baseVal.value + height/2;
    y2 = endNode.y.baseVal.value + height/2;


    svg.innerHTML += 
    `
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:rgb(0,0,255);stroke-width:2" />
    `;
}

function calcPos(num) {
    return num*2+1;
}

function generateStartEnd(start, end) {
    let startNodePos = calcPos(start);
    let endNodePos = calcPos(end);

    svg.childNodes[startNodePos].childNodes[1].setAttribute('fill', 'green');
    svg.childNodes[startNodePos].childNodes[1].setAttribute('start', true);

    svg.childNodes[endNodePos].childNodes[1].setAttribute('fill', 'red');
    svg.childNodes[endNodePos].childNodes[1].setAttribute('end', true);
}

function generateEnvironment() {
    let svg = document.querySelector('#svg');
    let content;

    let x = 0;
    let y = 0;

    for (let i = 0; i < ((1920/30) * (1080/30)); i++) {
        content +=
        `
        <g data-id="${i}">
            <rect class="rect" x="${x}" y="${y}" width="${width}" height="${height}" r="0" rx="0" ry="0" fill="#ffffff" stroke="#000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0.2;" stroke-opacity="0.2"></rect>       
        </g>
        `;
        x += width;
        if (i % nodesRow == 0 && i != 0) {
            x = 0;
            y += height;
        }
    }
    
    svg.innerHTML = content;
}

document.oncontextmenu = function(e) {
    if (e.srcElement.parentNode.parentNode.parentNode.id == 'environment') {
        e.preventDefault();
    }
}

let paint = false;
let erase = false;

document.addEventListener('click', function (event) {
	if (event.which == 1) {
        draw(1);
    }

    if (event.which == 3) {
        draw(0);
    }
});

document.addEventListener('mouseover', function(event) {
    if (paint) {
        draw(1);
    }

    if (erase) {
        draw(0);
    }
});

document.addEventListener('mousedown', function(event) {
    if (event.which == 3) {
        if (!erase) {
            erase = true;
            draw(0);
        }
    }
    if (event.which == 1) {
        if (!paint) {
            paint = true;
            draw(1);
        } 
    }
    
});

document.addEventListener('mouseup', function(event) {
    if (paint) {
        paint = false;
    }
    if (erase) {
        erase = false;
    }
});

function draw(mode) {
    if (mode == 0) {
        // Erase
        if (!event.target.closest('.rect')) return;
        event.target.setAttribute('fill', '#FFF');
    }

    if (mode == 1) {
        // Paint - Wall
        if (!event.target.closest('.rect')) return;
        event.target.setAttribute('fill', '#808080');
    }
}

function playSound() {
    let audio = new Audio('./resources/pop.flac');
    audio.play();
}