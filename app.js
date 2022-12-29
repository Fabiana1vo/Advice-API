const para = document.querySelector("h1") //Estou pegando o campoo que eu quero que apareça a API
fetch("https://api.adviceslip.com/advice") // A Url que eu quero que ele retorne os dados 
.then( response => { //estou falando que eu quero a resposta da URL 
    return response.json () //Informando que eu quero o retorno em JSON
})

.then (data => {
    var advice = data.slip.advice //Aqui eu falo o que eu quero de informação da URL, de dentro do Objeto
    para.innerText = advice  //Estou informando o tipo de dado que me retornará, que no caso é texto
})

