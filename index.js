function helloWorld() {
    console.log("Hello World!");
}

const saudacao = () => {
    const hora = new Date().getHours();
    if (hora <= 12) return 'Bom dia';
    if (hora <= 18) return 'Bom tarde';
    return 'Boa noite'
}

helloWorld();
console.log('A saudação do momento é ' + saudacao());
