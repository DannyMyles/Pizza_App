
function Cart(){
    this.items = [];
  
    this.addToCart = function(item){
        this.items.push(item);
    };

    this.subtotal = 0;
    this.delivery = null;
  }

  function Pizza(name){
    this.name = name;
    this.price = 0;
    this.crust = null;
    this.toppings = [];
    this.sizes = {
        "Small":500,
        "Medium": 800,
        "Large":1000
    }
  }

  function Crust(name, price){
    this.name = name;
    this.price = price;
  }

  function Topping(name, price){
    this.name = name;
    this.price = price;
  }

  function Zone(name, price){
      this.name = name;
      this.price = price;
  }