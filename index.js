let spans = document.querySelectorAll('span');
let display = document.calc.display;


spans.forEach(element => {
  element.addEventListener('click', () => {
    let key = element.innerText;

    render(key);

  })
});


function render(key)
{

  switch (key) {
    case '<' : 
    display.value = display.value.substr(0, display.value.length-1);
    break;
    case 'C':
      display.value = '';
      break;
    case '/':
      display.value += '/'
      break;
    case '9':
      display.value += '9'
      break;
    case '8':
      display.value += '8'
      break;
    case '7':
      display.value += '7'
      break;
    case '6':
      display.value += '6'
      break;
    case '5':
      display.value += '5'
      break;
    case '4':
      display.value += '4'
      break;
    case '3':
      display.value += '3'
      break;
    case '2':
      display.value += '2'
      break;
    case '1':
      display.value += '1'
      break;
    case '0':
      display.value += '0'
      break;
    case '*':
      display.value += '*'
      break;
    case '.':
      display.value += '.'
      break;
    case '+':
      display.value += '+'
      break;
    case '-':
      display.value += '-'
      break;
    case '=':
      try{
        let resultado = eval(display.value);
        display.value = resultado;
      }
      catch(err){
        alert('Erro operação não está formatada corretamente');
      }
      break;
    default:
      break;
  }
}