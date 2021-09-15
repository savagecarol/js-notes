// for printing cards
let answer = [];
let k = localStorage.getItem("1");
let n = k.length;

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

const form  = document.getElementById('one');
let text = document.getElementById('data');
form.addEventListener('click', (event) => {

    event.preventDefault();
    answer.push(text.value);
    localStorage.setItem("1" , answer);
    location.reload();
});
