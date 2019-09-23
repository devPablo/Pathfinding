generateEnvironment();

function generateEnvironment() {
    let svg = document.querySelector('#svg');
    let content;

    let x = 0;
    let y = 0;

    const width = 30;
    const height = 30;

    for (let i = 0; i < ((1920/30) * (1080/30)); i++) {
        content +=
        `
        <rect class="rect" x="${x}" y="${y}" width="${width}" height="${height}" r="0" rx="0" ry="0" fill="#ffffff" stroke="#000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0.2;" stroke-opacity="0.2"></rect>       
        `;
        x += width;
        if (i % 64 == 0 && i != 0) {
            x = 0;
            y += height;
        }
    }
    
    svg.innerHTML = content;
}

document.oncontextmenu = function(e) {
    if (e.srcElement.parentNode.parentNode.id == 'environment') {
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
        // Paint
        if (!event.target.closest('.rect')) return;
        event.target.setAttribute('fill', '#808080');
        event.target.setAttribute('transform', 'matrix(1,0,0,1,0,0)');
    }
}