(()=>{
    'use strict';


    const form = document.getElementById('form');
    const color = document.getElementById('color');
    const scheme = document.getElementById('scheme');
    const colorScheme = document.getElementById('colors');

    function displayColorScheme (data){
        let colorBars ='';
        data.colors.forEach( color => {
            colorBars += `
                <div class="color-bar" style="background: ${color.hex.value};">
                    <span class="color-code">${color.hex.value}</span>
                </div>
            `;
        })
        colorScheme.innerHTML = colorBars;
    }

    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        const hexColor = color.value.replace('#','');
        fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${scheme.value}`)
            .then(res => res.json())
            .then(data => displayColorScheme(data));
    });

})();