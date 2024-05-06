//dont forget to import your functions
import { Movie, addMovie, movieRented, Customer} from './MovieStore'

describe("Movie Store", () => {
   test("should allow user to add a movie to inventory", () => {
    const newMovie = new Movie("Fast and Furious");
    addMovie(newMovie);

    expect(newMovie.inStock).toEqual(true);
  })

  test("if movie is rented, it should not be in stock", () => {
    const newMovie = new Movie ("Pirates of the Caribbean");
    addMovie(newMovie);
    movieRented(newMovie);

    expect(newMovie.inStock).toEqual(false);
  })

  test("allows a customer to check out a movie in stock", () => {
    const newMovie = new Movie("Godzilla");
    addMovie(newMovie);

    const newCustomer = new Customer("John Doe");
    expect(newCustomer.checkoutMovie(newMovie)).toEqual("checkout completed");

  })

  test("wont allow a customer to check out a movie out of stock", () => {
    const newMovie = new Movie("Finding Nemo");
    addMovie(newMovie);
    movieRented(newMovie)

    const newCustomer = new Customer("Jane Doe");
    expect(newCustomer.checkoutMovie(newMovie)).toEqual("movie not in stock");

  })

  test("calculates customer total cost for # of rentals * # of days", () => {
    const newMovie1 = new Movie("Twilight");
    const newMovie2 = new Movie("New Moon");
    const newMovie3 = new Movie("Eclipse");


    const newCustomer = new Customer("John Cena");

    newMovie1.daysRented = 7;
    newMovie2.daysRented = 7;
    newMovie3.daysRented = 7;

    newCustomer.checkoutMovie(newMovie1);
    newCustomer.checkoutMovie(newMovie2);
    newCustomer.checkoutMovie(newMovie3);


    expect(newCustomer.calculateFees()).toEqual(42)
  })


   });
