
function Cart(){
    this.items = [];
  
    this.addToCart = function(item){
        this.items.push(item);
    };

    this.subtotal = 0;
    this.delivery = null
  }

  function Crust(name, price){
    this.name = name;
    this.price = price;
  }

  function Topping(name, price){
    this.name = name;
    this.price = price;
  }