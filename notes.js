// for printing cards
if(localStorage.getItem("1") !== null)
    answer = Array.from(localStorage.getItem("1").split(","));
else
    answer = new Array([","]);
console.log(answer);
    
    let n = answer.length;
    console.log(n);
    for(var i = 2 ; i < n ; i++)
    {
    let p = document.getElementById("abcd");
    p.innerHTML+= `<div class = "card" >
                        <div class = "container">
                        <h3> <b>  Note  ${i-1} </b> </h3>
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
