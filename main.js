document.addEventListener('DOMContentLoaded', function() {

 //include the   'async':false   parameter or the object data won't get captured when loading
var jsonRawFile = $.getJSON({'url': "https://raw.githubusercontent.com/ortalyarts/frontendmentor-results-summary-component/main/data.json", 'async': false});
console.log(jsonRawFile);
var jsonFile = jsonRawFile.responseJSON;

console.log(jsonFile);

//NEW function
function listItemsForEach() {
    jsonFile.forEach((item) => {
        el = document.createElement('div');
        el.innerHTML = 
            `
            
            <div class="bar orange"></div>
            <p>${item.day}</p>
            </div>
            `;
        el.classList.add('day');    
        document.querySelector('#bars-container').appendChild(el);
        console.log(item); // prints each object (category) in the console
      });
}
if(jsonFile) {
    listItemsForEach();
}
else {
    alert('Sorry! No data for you.');
}

});