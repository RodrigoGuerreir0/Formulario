const meuFormulario = document.getElementById('meuFormulario') //puxa todas as informações relacionados ao ID meuFormulario

// meuFormulario.addEventListener('submit', function(event){
//     alert('Estou funcionando!!!')  
// })

meuFormulario.addEventListener('submit',function(event){
    event.preventDefault()

var nome = document.getElementById('nome').value
var telefone = document.getElementById('telefone').value
var email = document.getElementById('email').value
var assunto = document.getElementById('assunto').value
var menssagem = document.getElementById('menssagem').value

var nomeCodificado = encodeURIComponent(nome)
var telefoneCodificado = encodeURIComponent(telefone)
var emailCodificado = encodeURIComponent(email)
var assuntoCodificado = encodeURIComponent(assunto)
var menssagemCodificado = encodeURIComponent(menssagem)

window.location.href='envio.html' +
    '?Nome= ' +nome+
    '&Telefone= '+telefone+
    '&E-mail= '+email+
    '&Assunto= '+assunto+
    '&Menssagem= '+menssagem

})

