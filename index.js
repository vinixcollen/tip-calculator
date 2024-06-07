const billInput = document.querySelector(".bill-input");

const btn = document.querySelector(".buttons")
btn.addEventListener("click", function(event){
    const btnText = event.target.innerText;
    const tipAmount = document.querySelector(".tip-amount").innerText;
    do{
        if (btnText === 5){
            tipAmount === billInput * 0.95;
        } else if (btnText === 10){
            tipAmount === billInput * 0.9;
        } else if (btnText === 15){
            tipAmount === billInput * 0.85;
        } else if (btnText === 25){
            tipAmount === billInput * 0.75;
        } else if (btnText === 50){
            tipAmount === billInput * 0.5;
        } else{
            const tipInput = document.querySelector(".tip-input");
            tipAmount === billInput * (1 - (tipInput / 100));
        }
    } while (btn.isInteger(btnText) && btnText > 0);
});


function countNumberOfPeople (num){
    const num = document.querySelector(".num-of-people").innerText;
    do{
        if (num === 0){
            num.querySelector()
        }
    } while (num.isInteger() && num >= 0);
};
