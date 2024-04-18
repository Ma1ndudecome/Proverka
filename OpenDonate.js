document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#add-button8').addEventListener('click', OpenBtn8);
    document.getElementById('Buy8').addEventListener('click', ValideForm8)
    document.querySelector('#add-button6').addEventListener('click', OpenBtn6);
    document.getElementById('Buy7').addEventListener('click', ValideForm6);
    document.querySelector('#add-button5').addEventListener('click', OpenBtn5);
    document.getElementById('Buy5').addEventListener('click', ValideForm5)
    document.querySelector('#add-button4').addEventListener('click', OpenBtn4);
    document.getElementById('Buy4').addEventListener('click', ValideForm4);
    document.querySelector('#add-button3').addEventListener('click', OpenBtn3);
    document.getElementById('Buy3').addEventListener('click', ValideForm3);
    document.querySelector('#add-button2').addEventListener('click', OpenBtn2);
    document.getElementById('Buy2').addEventListener('click',  ValideForm2)
    document.querySelector('#add-button1').addEventListener('click', OpenBtn1);
    document.getElementById('Buy1').addEventListener('click', ValideForm1);
    document.getElementById('Buy').addEventListener('click', ValideForm);
    document.querySelector('#add-button').addEventListener('click', OpenBtn);

});

function OpenBtn8(){
    const neakt8 = document.getElementById('neakt8');
    neakt8.classList.add('show');
    const Nick8 = document.getElementById('Nick8');
    const Email8 = document.getElementById('Email8');
    const Promo8 = document.getElementById('Promo8');
    const checkbox8 = document.getElementById('checkbox8');
    Nick8.classList.add('green');
    Email8.classList.add('green');
    Promo8.classList.add('green');
    checkbox8.classList.add('green');
 }
 function closeModal8(){
    const neakt8 = document.getElementById('neakt8');
    neakt8.classList.remove('show');
    const Nick8 = document.getElementById('Nick8');
    const Email8 = document.getElementById('Email8');
    const Promo8 = document.getElementById('Promo8');
    const checkbox8 = document.getElementById('checkbox8');
    Nick8.value = ''
    Email8.value = ''
    Promo8.value = ''
    checkbox8.checked = ''
 }
function ValideForm8(event){
    const Nick8 = document.getElementById('Nick8');
    const Email8 = document.getElementById('Email8');
    const checkbox8 = document.getElementById('checkbox8');
    const errorMessage8 = document.getElementById('errorMessage8');
    
    if(Nick8.value === '' || Email8.value ==='' || !checkbox8.checked){
        event.preventDefault(); 
        errorMessage8.style.display = 'block';
        Nick8.classList.remove('green');
        Nick8.classList.add('red');
        Email8.classList.remove('green');
        Email8.classList.add('red');
        checkbox8.classList.remove('green');
        checkbox8.classList.add('red');
    }else{
        errorMessage8.style.display = 'none'
    }
}






function OpenBtn(){
    const neakt1 = document.querySelector('#neakt');
    neakt1.classList.add('show');
    const Vozmojnost = document.getElementById('Vozmojnost');
    Vozmojnost.classList.add('showte');
    const  SamLite = document.querySelector('#SamLite');
    SamLite.classList.add('Liteanim');
    const Nick = document.getElementById('Nick');
    const Email = document.getElementById('Email');
    const checkbox = document.getElementById('checkbox');
    const Promo = document.getElementById('Promo');
    Nick.classList.add('green')
    Email.classList.add('green');
    checkbox.classList.add('green');
    Promo.classList.add('green');
    inter = setInterval(update, 1000);
    
}
function closeModal(){
    const neakt1 = document.querySelector('#neakt');
    neakt1.classList.remove('show');
    const errorMessage = document.getElementById('errorMessage1')
    Nick.value = ''
    Email.value = ''
    checkbox.checked = ''
    Promo.value = ''
    const Vozmojnost = document.getElementById('Vozmojnost');
    Vozmojnost.classList.remove('showte')
    const  SamLite = document.querySelector('#SamLite')
    SamLite.classList.remove('Liteanim');
    const sums = document.getElementById('Itogsum');
    sums.innerText = '29.00₽';
    Nick.classList.remove('red');
    Email.classList.remove('red');
    checkbox.classList.remove('red');
    errorMessage.style.display = 'none'
    clearInterval(inter);
}
function ValideForm(event){
    const Nick = document.getElementById('Nick');
    const Email = document.getElementById('Email');
    const checkbox = document.getElementById('checkbox');
    const errorMessage = document.getElementById('errorMessage1');
    const Promo = document.getElementById('Promo');
    if(Nick.value === '' || Email.value ==='' || !checkbox.checked){
        event.preventDefault(); 
        errorMessage.style.display = 'block';
        Nick.classList.remove('green');
        Nick.classList.add('red');
        Email.classList.remove('green');
        Email.classList.add('red');
        checkbox.classList.remove('green');
        checkbox.classList.add('red');
    }else{
        errorMessage.style.display = 'none'
    }
}
function update(){
    if(Promo.value === 'Vanya' || Promo.value === 'Dima' ){
        Itogsum.innerText = '20.00₽';
       
    }else{
        Itogsum.innerText = '29.00₽';
    }
}
function OpenBtn1(){
    const neakt2 = document.querySelector('#neakt1');
    neakt2.classList.add('show');
    const Nick1 = document.getElementById('Nick1');
    const Email1 = document.getElementById('Email1');
    const checkbox1 = document.getElementById('checkbox1');
    const Promo1 = document.getElementById('Promo1');
    Nick1.classList.add('green')
    Email1.classList.add('green');
    checkbox1.classList.add('green');
    Promo1.classList.add('green');
    inter = setInterval(update1, 1000);
}
function closeModal1(){
    const neakt2 = document.querySelector('#neakt1');
    neakt2.classList.remove('show');
    const errorMessage2 = document.getElementById('errorMessage2')
    Nick1.value = ''
    Email.value = ''
    Promo1.value = ''
    checkbox1.checked = ''
    Nick1.classList.remove('red');
    Email1.classList.remove('red');
    checkbox1.classList.remove('red');
    errorMessage2.style.display = 'none'
    const sums = document.getElementById('Itogsum1');
    sums.innerText = '49.00₽';
    clearInterval(inter)
}
function ValideForm1(event){
    const errorMessage1 = document.getElementById('errorMessage2');
    if(Nick1.value === '' || Email1.value === '' || !checkbox1.checked){
        event.preventDefault(); 
        errorMessage1.style.display = 'block'
        Nick1.classList.remove('green');
        Nick1.classList.add('red');
        Email1.classList.remove('green');
        Email1.classList.add('red');
        checkbox1.classList.remove('green');
        checkbox1.classList.add('red');  
    }else{
        errorMessage1.style.display = 'none'
    }
    
}
function update1(){
    if(Promo1.value === 'Vanya' || Promo1.value === 'Dima' ){
        Itogsum1.innerText = '38.00₽'
        
    }else{
        Itogsum1.innerText = '49.00₽'
    }
}
function OpenBtn2(){
    const neakt3 = document.querySelector('#neakt2');
    neakt3.classList.add('show');
    const Nick2 = document.getElementById('Nick2');
    const Email2 = document.getElementById('Email2');
    const checkbox2 = document.getElementById('checkbox2');
    const Promo2 = document.getElementById('Promo2');
    Nick2.classList.add('green');
    Email2.classList.add('green');
    Promo2.classList.add('green');
    checkbox2.classList.add('green');
    inter = setInterval(update2, 1000)
}
function closeModal2(){
    const neakt3 = document.querySelector('#neakt2');
    neakt3.classList.remove('show');
    const errorMessage3 = document.getElementById('errorMessage3');
    Nick2.value = ''
    Email2.value = ''
    checkbox2.value = ''
    Promo2.value = ''
    Nick2.classList.remove('red');
    Email2.classList.remove('red');
    checkbox2.classList.remove('red');
    errorMessage3.style.display = 'none';
    const sums = document.getElementById('Itogsum2');
    sums.innerText = '79.00₽';
    clearInterval(inter);
}
function ValideForm2(event){
    const errorMessage2 = document.getElementById('errorMessage3');
    if(Nick2.value === '' || Email2.value === '' || !checkbox2.checked){
        event.preventDefault(); 
        errorMessage2.style.display = 'block'
        Nick2.classList.remove('green');
        Nick2.classList.add('red');
        Email2.classList.remove('green');
        Email2.classList.add('red'); 
        checkbox2.classList.remove('green');
        checkbox2.classList.add('red'); 
    }else{
        errorMessage2.style.display = 'none'
    }
}
function update2(){
    if(Promo2.value === 'Vanya' || Promo2.value === 'Dima' ){
        Itogsum2.innerText = '70.00₽'
        
    }else{
        Itogsum2.innerText = '79.00₽'
    }
}
function OpenBtn3(){
    const neakt3 = document.querySelector('#neakt3');
    neakt3.classList.add('show');
    const Nick3 = document.getElementById('Nick3');
    const Email3 = document.getElementById('Email3');
    const checkbox3 = document.getElementById('checkbox3');
    const Promo3 = document.getElementById('Promo3');
    Nick3.classList.add('green');
    Email3.classList.add('green');
    checkbox3.classList.add('green');
    Promo3.classList.add('green');
    inter3 = setInterval(update3, 1000);
}
function closeModal3(){
    const neakt3 = document.querySelector('#neakt3');
    neakt3.classList.remove('show');
    Nick3.value = ''
    Email3.value = ''
    checkbox3.checked = ''
    Promo3.value = ''
    errorMessage4.style.display = 'none';
    Nick3.classList.remove('red');
    Email3.classList.remove('red');
    checkbox3.classList.remove('red');
    const sums = document.getElementById('Itogsum4');
    sums.innerText = '149.00₽';
    clearInterval(inter3)
}
function ValideForm3(event){
    const errorMessage4 = document.getElementById('errorMessage4');
    if(Nick3.value === '' || Email3.value === '' || !checkbox3.checked){
        event.preventDefault();
        errorMessage4.style.display = 'block';
        Nick3.classList.remove('green');
        Email3.classList.remove('green');
        checkbox3.classList.remove('green');
        Nick3.classList.add('red');
        Email3.classList.add('red');
        checkbox3.classList.add('red');
    }else{
        errorMessage4.style.display = 'none'
    }

}
function update3(){
    if(Promo3.value === 'Vanya' || Promo3.value === 'Dima' ){
        Itogsum4.innerText = '120.00₽'
        
    }else{
        Itogsum4.innerText = '149.00₽'
    }
}
function OpenBtn4(){
    const neakt4 = document.querySelector('#neakt4');
    neakt4.classList.add('show');
    const Nick4 = document.getElementById('Nick4');
    const Email4 = document.getElementById('Email4');
    const checkbox4 = document.getElementById('checkbox4');
    const Promo4 = document.getElementById('Promo4');
    Nick4.classList.add('green');
    Email4.classList.add('green');
    checkbox4.classList.add('green');
    Promo4.classList.add('green');
    inter = setInterval(update4, 1000);
}
function closeModal4(){
    const neakt4 = document.querySelector('#neakt4');
    neakt4.classList.remove('show');
    const Nick4 = document.getElementById('Nick4');
    const Email4 = document.getElementById('Email4');
    const checkbox4 = document.getElementById('checkbox4');
    const Promo4 = document.getElementById('Promo4');
    const errorMessage5 = document.getElementById('errorMessage5');
    errorMessage5.style.display = 'none'
    Nick4.value = ''
    Email4.value = ''
    checkbox4.checked = ''
    Promo4.value = ''
    const sums = document.getElementById('Itogsum5');
    sums.innerText = '229.00₽';
    clearInterval(inter);
}
function ValideForm4(event){
    const Nick4 = document.getElementById('Nick4');
    const Email4 = document.getElementById('Email4');
    const checkbox4 = document.getElementById('checkbox4');
    const errorMessage5 = document.getElementById('errorMessage5');
    if(Nick4.value === ''|| Email4.value === '' || !checkbox4.checked){
        event.preventDefault();
        errorMessage5.style.display = 'block'
        Nick4.classList.remove('green');
        Nick4.classList.add('red');
        Email4.classList.remove('green');
        Email4.classList.add('red');
        checkbox4.classList.remove('green');
        checkbox4.classList.add('red');
    }else{
        errorMessage5.style.display = 'none'
    }
}
function update4(){
    const Itogsum5 = document.getElementById('Itogsum5')
    if(Promo4.value === 'Dima' || Promo4.value === 'Vanya' ){
        Itogsum5.innerText = '200.00₽'
    }else{
        Itogsum5.innerText = '229.00₽'
    }
}
function OpenBtn5(){
    const neakt5 = document.getElementById('neakt5');
    neakt5.classList.add('show');
    const Nick5 = document.getElementById('Nick5');
    const Email5 = document.getElementById('Email5');
    const checkbox5 = document.getElementById('checkbox5');
    const Promo5 = document.getElementById('Promo5');
    Nick5.classList.add('green');
    Email5.classList.add('green');
    checkbox5.classList.add('green');
    Promo5.classList.add('green');
    inter = setInterval(update5, 1000);
}
function closeModal5(){
    const neakt5 = document.getElementById('neakt5');
    neakt5.classList.remove('show');
    const Nick5 = document.getElementById('Nick5');
    const Email5 = document.getElementById('Email5');
    const checkbox5 = document.getElementById('checkbox5');
    const Promo5 = document.getElementById('Promo5');
    Nick5.classList.remove('red');
    Email5.classList.remove('red');
    checkbox5.classList.remove('red');
    Promo5.classList.remove('red');
    Nick5.value = ''
    Email5.value = ''
    checkbox5.value = ''
    Promo5.value = ''
    const sums = document.getElementById('Itogsum6');
    sums.innerText = '439.00₽';
    clearInterval(inter);
}
function ValideForm5(event){
    const Nick5 = document.getElementById('Nick5');
    const Email5 = document.getElementById('Email5');
    const checkbox5 = document.getElementById('checkbox5');
    const errorMessage6 = document.getElementById('errorMessage6');
    if(Nick5.value === ''|| Email5.value === '' || !checkbox5.checked){
        event.preventDefault();
        errorMessage6.style.display = 'block'
        Nick5.classList.remove('green');
        Nick5.classList.add('red');
        Email5.classList.remove('green');
        Email5.classList.add('red');
        checkbox5.classList.remove('green');
        checkbox5.classList.add('red');
    }else{
        errorMessage6.style.display = 'none'
    }

}
function update5(){
    const Itogsum6 = document.getElementById('Itogsum6')
    if(Promo5.value === 'Dima' || Promo5.value === 'Vanya' ){
        Itogsum6.innerText = '380.00₽'
    }else{
        Itogsum6.innerText = '439.00₽'
    }
}
function OpenBtn6(){
    const neakt6 = document.getElementById('neakt6');
    neakt6.classList.add('show');
    const Nick6 = document.getElementById('Nick6');
    const Email6 = document.getElementById('Email6');
    const Promo6 = document.getElementById('Promo6');
    const checkbox6 = document.getElementById('checkbox6');
    Nick6.classList.add('green');
    Email6.classList.add('green');
    Promo6.classList.add('green');
    checkbox6.classList.add('green');
    inter = setInterval(update6, 1000)
    
 }
 function closeModal6(){
    const neakt6 = document.getElementById('neakt6');
    neakt6.classList.remove('show');
    const errorMessage7 = document.getElementById('errorMessage7');
    errorMessage7.style.display = 'none'
    const Nick6 = document.getElementById('Nick6');
    const Email6 = document.getElementById('Email6');
    const checkbox6 = document.getElementById('checkbox6');
    const Promo6 = document.getElementById('Promo6');
    Nick6.value = ''
    Email6.value = ''
    checkbox6.value = ''
    Promo6.value = ''
    const sums = document.getElementById('Itogsum7');
    sums.innerText = '799.00₽';
    clearInterval(inter)
    
 }
function ValideForm6(event){
    const Nick6 = document.getElementById('Nick6');
    const Email6 = document.getElementById('Email6');
    const checkbox6 = document.getElementById('checkbox6');
    const errorMessage7 = document.getElementById('errorMessage7');
    const Promo6 = document.getElementById('Promo6');
    if(Nick6.value === '' || Email6.value ==='' || !checkbox6.checked){
        event.preventDefault(); 
        errorMessage7.style.display = 'block';
        Nick6.classList.remove('green');
        Nick6.classList.add('red');
        Email6.classList.remove('green');
        Email6.classList.add('red');
        checkbox6.classList.remove('green');
        checkbox6.classList.add('red');
    }else{
        errorMessage7.style.display = 'none'
    }
}
function update6(){
    const Promo6 = document.getElementById('Promo6');
    if(Promo6.value === 'Dima' || Promo6.value === 'Vanya'){
        Itogsum7.innerText = '699.00₽'
    }else{
        Itogsum7.innerText = '799.00₽'
    }
}







