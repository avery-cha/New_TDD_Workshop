// A movie store is asking you to make an application
// the application can add movies to an inventory array,
// track if a movie is rented out or in stock,
// and calculate a customer's total cost for the # of rentals * # of days.
// A customer can only rent a movie if it is in stock.

export let inventory: Array<Movie> = [];

export class Movie{
  title: string;
  inStock: boolean;
  daysRented: number;

  constructor(title:string){
    this.title = title;
    this.inStock = true;
    this.daysRented = 0;
  }

  rentMovie() {
    this.inStock = false;
  }
}

export function addMovie(a:Movie){
  inventory.push(a);
}

export function movieRented(a:Movie){
  a.inStock = false;
}

export class Customer{
  name: string;
  rentals: Array<Movie>;
  amountDue: number;

  constructor(name: string){
    this.name = name;
    this.rentals = [];
    this.amountDue = 0;
  }

  checkoutMovie(a:Movie){
    if(a.inStock == true){
      this.rentals.push(a);
      movieRented(a);
      return ("checkout completed")
    }
    else if(a.inStock == false){
      return ("movie not in stock")
    }
  }

  calculateFees() {
    for(var rented of this.rentals){
      this.amountDue += (2*rented.daysRented)
    }
    return this.amountDue;
  }

}
