const txt = document.getElementById('text');
const contador = document.getElementById('contadorCaracteres');

txt.addEventListener('input', function(){
    textLength = txt.value.length;
    contador.textContent = textLength;
})
