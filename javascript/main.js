/*let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  // if(window.scrollY > 60){
  //   document.querySelector('#scroll-top').classList.add('active');
  // }else{
  //   document.querySelector('#scroll-top').classList.remove('active');
  // }

}
// window.onload = fadeOut();*/

const cart = new Cart();
const crusts = {
  "Cryspy": new Crust("Cryspy", 100),
  "Stuffed": new Crust("Stuffed", 150),
}
const toppings = {
  "Beacon":new Topping("Beacon", 200),
  "Chicken":new Topping("Chicken", 250)
}
$(document).ready(function(){

  const orderModal = new bootstrap.Modal(document.getElementById('exampleModal'), {})

  $('.orderBtn').on("click", function(){
    const pizza = $(this).data();
    console.log(pizza)
    cart.addToCart(pizza);

    console.log(cart.items);
  });
});