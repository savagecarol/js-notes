// for printing cards
function dell(key)
{
    localStorage.removeItem(key);
    location.reload();
}

for (i=0; i<localStorage.length; i++)  
{  
    let key = localStorage.key(i); 
    let value = localStorage.getItem(key);
    let p = document.getElementById("abcd");
            p.innerHTML+= `
                        <div class = "card" >           
                        <div class = "container">
                        <img src ="https://www.pinclipart.com/picdir/middle/35-356107_close-button-icon-png-clipart.png" class = "img" onclick = "dell('${key}')" >
                        <h4> <b>  ${key} </b> </h4>
                            <h6>
                                ${value} 
                            </h6>
                        </div>
                    </div> `;
 }
 
// for text field
let form  = document.getElementById('one');
let text = document.getElementById('data');
let head = document.getElementById('head');
form.addEventListener('click', () => {
    localStorage.setItem(head.value , text.value);
    location.reload();
});



