const cart = new Cart();
const crusts = {
  "Cryspy": new Crust("Cryspy", 100),
  "Stuffed": new Crust("Stuffed", 150),
}
const toppings = {
  "Beacon":new Topping("Beacon", 200),
  "Chicken":new Topping("Chicken", 250)
}

const zones = {
  "Zone A":new Zone("Zone A", 50),
  "Zone B":new Zone("Zone B", 150)
}

let selectePizza;
let cartItemTmpl;

function updateOrderPrice(){
  let totalPrice = selectePizza.price;
  if(selectePizza.crust) totalPrice += selectePizza.crust.price;

  if(selectePizza.toppings)
    for(let i=0; i<selectePizza.toppings.length; i++){
      totalPrice += selectePizza.toppings[i].price;
    }

  $('#exampleModal .price').html(totalPrice);
  $('.itemCount').html(cart.items.length);

  $('#cartItems').html("");
  // // console.log(cart.items)

  let subTotal = 0;
  const deliveryPrice = cart.delivery ? cart.delivery.price : 0;
  for(let i=0; i<cart.items.length; i++){
    const item = cart.items[i];
    // // console.log(item);
    $('#cartItems').append(cartItemTmpl+'test');
    $('#cartItems li:last img').attr('src', item.image);
    $('#cartItems li:last .description').html(item.name);
    $('#cartItems li:last .price').html(item.price);

    subTotal+=item.price;

  }

  $('.subtotal').html(subTotal);
  $('.cost').html(subTotal + deliveryPrice);

}

$(document).ready(function(){

  const orderModal = new bootstrap.Modal(document.getElementById('exampleModal'), {});
  cartItemTmpl = $('#cartItems').html();


  $('.orderBtn').on("click", function(){
    const data = $(this).data();
    // console.log(data)
    selectePizza = new Pizza(data.name);
    selectePizza.image = $(this).closest('.d-flex').parent().find('img').attr('src');

    $('#exampleModal img').attr('src', selectePizza.image);
    orderModal.show();

    // cart.addToCart(pizza);

    // // console.log(cart.items);
  });

  $('#exampleModal #size').on("change", function(){
    const size = $(this).val();
    selectePizza.price =  selectePizza.sizes[size];

    // console.log(selectePizza);
    updateOrderPrice()
  });

  $('#exampleModal #crust').on("change", function(){
    const crust = $(this).val();
    selectePizza.crust = crusts[crust];
    updateOrderPrice()
  });

  $('#zones').on("change", function(){
    const zone = $(this).val();
    selectePizza.delivery = zones[zone];
    console.log(selectePizza.delivery)
    updateOrderPrice()
  });

  $('#exampleModal #topping').on("change", function(){
    const toppingValues = $(this).val();
    selectePizza.toppings = [];
    for(let i=0; i<toppingValues.length; i++){
      const t = toppingValues[i];
      selectePizza.toppings.push( toppings[t])
    }

    // console.log(selectePizza);
    updateOrderPrice()
  });

  $('#exampleModal #orderBtn').on("click", function(){
    cart.addToCart(selectePizza);
    orderModal.hide();
    updateOrderPrice();
    // selectePizza = undefined;
  })
  $('#checkoutBtn').on("click", function(){
   alert("Order Received");
   var myOffcanvas = document.getElementById('offcanvasExample')
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
    // selectePizza = undefined;
    bsOffcanvas.hide()
  })

});