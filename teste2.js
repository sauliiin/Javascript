

let emailsCadastrados = ["saulohr@yahoo.com.br","carlos@gmail.com","marcelada@sougay.com", "marcelada@sougay.com"];

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

if (hasDuplicates(emailsCadastrados) == true) {
  console.log('Email ja cadastrado');
  emailsCadastrados.pop();
}

console.log(emailsCadastrados)