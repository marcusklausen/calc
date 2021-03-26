
let calc = document.querySelector('#calc');
let func = document.querySelector('.functions');
let selectedFunc = "";

func.addEventListener('click', function(event){
    selectedFunc = event.target.id
    event.target.style.background = "brown";
});

calc.addEventListener('submit', function(e) {
    e.preventDefault();

    let n1 = document.querySelector('#n1').value;
    let n2 = document.querySelector('#n2').value;
    let output = document.querySelector('#result');


    output.innerHTML = pocketRainer(n1,n2,func);

    
});

function pocketRainer(n1,n2,func) {

        n1 = parseFloat(n1);
        n2 = parseFloat(n2);

        if(selectedFunc == 'plus') {
            return n1+n2;
        }
        else if (selectedFunc == 'minus') {
            return n1-n2;
        }

        else if(selectedFunc == 'gange') {
            return n1*n2;
        }
        else if(selectedFunc == 'divider') {
            return n1/n2;
        }
}
