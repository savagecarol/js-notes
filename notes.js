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

let form  = document.getElementById('one');
let text = document.getElementById('data');
form.addEventListener('click', () => {
    answer.push(text.value);
    localStorage.setItem("1" , answer);
    location.reload();
});
