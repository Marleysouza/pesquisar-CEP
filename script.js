const form = document.getElementById('search-bar');
const pesq = document.getElementById('search');
const card = document.getElementById('card');
const exp = document.getElementById('exp');
const docbtn =  document.getElementById('doc-btn');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const input = pesq.value;

    const submitCEP = async () => {
        const resposta = await fetch(`https://viacep.com.br/ws/${input}/json/`);
        const endereço = await resposta.json();

        card.children[1].children[1].innerText = endereço.logradouro;
        card.children[1].children[3].innerText = endereço.complemento;
        card.children[1].children[5].innerText = endereço.unidade;
        card.children[1].children[7].innerText = endereço.bairro;
        card.children[1].children[9].innerText = endereço.localidade;
        card.children[2].children[1].innerText = endereço.uf;
        card.children[2].children[3].innerText = endereço.ibge;
        card.children[2].children[5].innerText = endereço.gia;
        card.children[2].children[7].innerText = endereço.ddd;
        card.children[2].children[9].innerText = endereço.siafi;
        
        exp.innerText = `CEP: ${input}`
        docbtn.innerHTML = `<a href="https://viacep.com.br/ws/${input}/json/" target="_blank" rel="noopener noreferrer">json</a><a href="https://viacep.com.br/ws/${input}/xml/" target="_blank" rel="noopener noreferrer">xml</a><a href="https://www.google.com.br/maps/search/${input}+${endereço.logradouro}+${endereço.bairro}+${endereço.localidade}/@-3.7276344,-38.4901343,14z/data=!3m1!4b1?entry=" target="_blank" rel="noopener noreferrer">Maps</a>`
    }
    submitCEP();
})
