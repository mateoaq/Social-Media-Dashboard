function cambiar(){
    const body = document.getElementById('body')
    var card = document.getElementsByName('card')
    const clase = body.classList[0]
    if(clase != "dark"){
        body.classList.add('dark');
        for (var i = 0; i<card.length; i++) {
            card[i].classList.add('dark');
         }

    }else{
        body.classList.remove('dark');
        for (var i = 0; i<card.length; i++) {
            card[i].classList.remove('dark');
         }
    } 
}