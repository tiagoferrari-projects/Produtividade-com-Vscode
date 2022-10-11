//TODO teste1 


function helloWorld(){
    console.log("Hello World!");
}

// FIXME teste 2

const saudacao = () => {
    var data = new Date()
    return  data.getHours() <= 12? "Bom dia": data.getHours() <= 18? "Boa tarde": "Boa noite";
}
 
// TAG nova tag
// demonstração comentário
helloWorld();
console.log('A saudação do momento é ' + saudacao());
