// for printing cards
let answer = new Array([","]);
answer = localStorage.getItem("1").split(",");
let n = answer.length;
console.log(n);
for(var i = 1 ; i < n ; i++)
{
    let p = document.getElementById("abcd");
    p.innerHTML+= `<div class = "card" >
                        <div class = "container">
                        <h3> <b>  Note  ${i} </b> </h3>
                            <h6>
                                ${answer[i]} 
                            </h6>
                        </div>
                    </div> `;
} 

// for text field
const form  = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    answer.push(form.elements['data'].value);
    localStorage.setItem("1" , answer);
    location.reload();
});
