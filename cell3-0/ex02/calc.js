    let run;
    window.onload = () => {setTimeout(() => {if (!run) 
        {alert('Please, use me...');}
			}, 30 * 1000);
        }
        
function calc() {
	run = 1;
	let result;
	let text;
	const nb1 = +document.getElementById('number1').value;
	const nb2 = +document.getElementById('number2').value;
	const signEl = document.getElementById('sign');
	const sign = signEl.options[signEl.selectedIndex].value;
    if (nb1 < 0 || nb2 < 0) {text = 'Error :('} 
    else if (sign == '+') {result = nb1 + nb2} 
    else if (sign == '-') {result = nb1 - nb2} 
    else if (sign == '*') {result = nb1 * nb2}
    else if (sign == '%' && nb2 == 0) {text = "It's over 9000!";}
    else if (sign == '/' && nb2 == 0) {text = "It's over 9000!";}
    else if (sign == '/') {result = nb1 / nb2}
    else {result = nb1 % nb2}
    text = result == undefined ? text : `${nb1} ${sign} ${nb2} = ${result}`;
    document.getElementById("res").innerHTML = "The Result is " + text + ".";
    console.log(text);
    alert(text);
}
//     setTimeout(useMe, 3000);
// }

// function useMe(){
//     alert("Use Me Please!!");
// }
