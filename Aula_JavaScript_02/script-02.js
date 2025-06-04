function calculador (operacao){
 const a = parseFloat(document.getElementById('valor01').value);
 const b = parseFloat(document.getElementById('valor02').value);
 let resultado;
 if (isNaN(a) || isNaN(b)) {
    resultado = 'Insira dois números válidos';
  } 
  else {
    switch (operacao) {
      case '+':
        resultado = a + b;
        break;
      case '-':
        resultado = a - b;
        break;
      case '*':
        resultado = a * b;
        break;
      case '/':
        resultado = b !== 0 ? a / b : 'Erro: divisão por zero';
        break;
      default:
        resultado = 'Operação inválida';
        case '**':
          resultado = Math.pow(a, b);
        break;
    }
  }
    document.getElementById('resultado').innerText = resultado;

}