generateEnvironment();

function generateEnvironment() {
    let svg = document.querySelector('#svg');
    let content;

    let x = 0;
    let y = 0;

    for (let i = 0; i < ((1920/30) * (1080/30)); i++) {
        content +=
        `
        <rect x="${x}" y="${y}" width="30" height="30" r="0" rx="0" ry="0" fill="#ffffff" stroke="#000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0.2;" stroke-opacity="0.2"></rect>       
        `;
        x += 30;
        if (i % 64 == 0 && i != 0) {
            x = 0;
            y += 30;
        }

        
        
        
    }
    
    svg.innerHTML = content;

// <rect x="0" y="0" width="30" height="30" r="0" rx="0" ry="0" fill="#ffffff" stroke="#000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0.2;" stroke-opacity="0.2"></rect>




    // document.querySelector('#environment').innerHTML = 
    // `
    // <svg height="1080" version="1.1" width="1920" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.0</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><rect x="0" y="0" width="30" height="30" r="0" rx="0" ry="0" fill="#ffffff" stroke="#000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0.2;" stroke-opacity="0.2"></rect><rect x="30" y="0" width="30" height="30" r="0" rx="0" ry="0" fill="#ffffff" stroke="#000" stroke-opacity="0.2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 0.2;"></rect></svg>
    // `;
}

