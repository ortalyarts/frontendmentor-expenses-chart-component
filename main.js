

 //include the   'async':false   parameter or the object data won't get captured when loading
var jsonRawFile = $.getJSON({'url': "https://raw.githubusercontent.com/ortalyarts/frontendmentor-expenses-chart-component/main/data.json", 'async': false});

var jsonFile = jsonRawFile.responseJSON;

const delay = ms => new Promise(res => setTimeout(res, ms));



function listItemsForEach() {
    jsonFile.forEach((item, i) => {
        let height = item.amount / 5.584;
        el = document.createElement('div');
        el.innerHTML = 
            `            
            <div class="bar" ></div>
            <p>${item.day}</p>
            </div>
            `;
        el.classList.add('day');
        el.setAttribute('id',`day-${i+1}`);
        document.querySelector('#bars-container').appendChild(el);

        const bar = document.querySelector(`#day-${i+1} .bar`);
        
        // Animationg the height of the bar
        const setHeight = async () => {
            await delay(100);
            bar.style.height=`${height}rem`;
          };
          setHeight(); 
      });
}
if(jsonFile) {
    listItemsForEach();
}
else {
    alert('Sorry! No data for you.');
}

const today = document.querySelector('#day-3 .bar');
today.classList.add('turquoise');
