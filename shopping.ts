  class Product{
	name: string;
  price: number;
  constructor(name, price) {
    this.name = name;
    this.price = price;
    }
  }
  
  class ShoppingCart {
	items: any;
	product: any;
	quantity: number;

    constructor() {
      this.items = [];
    }
  
    add_product(product, quantity = 1) {
      this.items.push({ product, quantity });
    }
  
    remove_product(name) {
      this.items = this.items.filter(({product}) => product.name !== name);
    }
  
    update_quantity(product, quantity) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].product === product) {
          this.items[i].quantity = quantity;
          break;
        }
      }
    }
  
    get_items() {
      if (this.items.length !== 0) {
        for (const { product, quantity } of this.items) {
          console.log(`Product: ${product.name}, Quantity: ${quantity}`);
        }
      } else {
        console.log("Cart is Empty");
      }
    }
  
    calculate_total_price() {
      let total_price = 0;
      for (const { product, quantity } of this.items) {
        total_price += product.price * quantity;
      }
      console.log(`Total Price: $${total_price}`);
    }
  
    empty_cart() {
      this.items = [];
    }
  
    search_product(name) {
      const foundProduct = this.items.find(({ product }) => product.name === name);
      if (foundProduct) {
        console.log(`Found ${name} in the cart`);
      } else {
        console.log("Product not found in the cart.");
      }
    }
  }
  
  const product1:Product = new Product("Milk", 0.5);
  const product2:Product = new Product("Coffee", 0.25);
  const product3:Product = new Product("Toast", 0.75);
  const product4:Product = new Product("Sugar", 2.0);
  const product5:Product = new Product("Bread", 1.5);
  
  const cart:ShoppingCart = new ShoppingCart();
  cart.add_product(product1, 3);
  cart.add_product(product2, 2);
  cart.add_product(product3, 1);
  cart.add_product(product4, 2);
  cart.add_product(product5, 1);
  
  cart.remove_product("Milk");
  cart.update_quantity(product3, 2);
  cart.get_items();
  cart.calculate_total_price();
  cart.search_product("Coffee");
  

