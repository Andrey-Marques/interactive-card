//--------- verificaçao dos inpust do formulário----------
const inputs = document.querySelectorAll(".form-inputs")
const submit = document.querySelector(".submit")

submit.addEventListener('click', (e)=>{
    e.preventDefault()
    inputs.forEach((input) => {
        if(input.value !== ""){
            input.classList.add("check")
            input.classList.remove("fail")
            input.href
        }
        else if (input.value === ""){
            input.classList.add("fail")
            input.classList.remove("check")
            
        }
    })
});
//--------adicionando numero digitado no input do numero do cartção na imagem do cartão----------
const numeroCartao = document.querySelector(".input-numberCard")
const valor = numeroCartao.value;

numeroCartao.addEventListener('change', () => {
    const numero = document.querySelector(".numeros")
    if(numeroCartao.value){
        numero.innerHTML = numeroCartao.value;
    }
});



