const input = document.querySelector('#input'),
    output = document.querySelector('#output'),
      clearBtn = document.getElementById('clearBtn'),
      brackets = document.querySelectorAll('.brackets'),
      numbers = document.querySelectorAll('.numbers'),
      symbols = document.querySelectorAll('.symbols'),
      backBtn = document.getElementById('backBtn');

numbers.forEach(number => {
    number.addEventListener("click", (e) =>{
        // alert(e.target.innerHTML)
        if(input.innerHTML == ""){
            input.innerHTML = e.target.innerHTML
        }else{
            // console.log(input.innerHTML.slice(0,1));
            input.innerHTML += e.target.innerHTML
        }
    })
})

clearBtn.addEventListener("click", () =>{
    input.innerHTML = ''
    output.innerHTML = ''
})

backBtn.addEventListener("click", () =>{
    input.innerHTML = input.innerHTML.slice(0, -1);
})

input.addEventListener("click", () =>{
    input.innerHTML = input.innerHTML.length >= 12;
})

symbols.forEach(symbols => {
    symbols.addEventListener("click", (e) =>{
        // input.innerHTML += e.target.innerHTML
        if(e.target.innerHTML == '=' && input.innerHTML != ""){
            let result = eval(input.innerHTML) 
            output.innerHTML = result;
        }else if(input.innerHTML == ''){
            input.innerHTML = input.innerHTML
        }else{
            input.innerHTML += e.target.innerHTML
            console.log(input.innerHTML.charAt(0));
        }
    })
})

brackets.forEach(bracket => {
    bracket.addEventListener("click", (e) =>{
        input.innerHTML += e.target.innerHTML
    })
})