//Library
class Library {
  constructor() {
    this.catalog = [];
    this.historyLog = [];
  }

  //get all books
  get getAllBook() {
    return this.catalog;
  }
  //⁠insert a new book 
  addBook(bookDetails) {
    this.catalog.push(bookDetails);
    console.log(this.catalog);
    return this.catalog
  }
  //delete a book
  remove(bookName) {
   const matchedBookIndex=  this.catalog.findIndex(val => {
      return val.bookName === bookName
   })
    this.catalog.splice(matchedBookIndex, 1)
    console.log(this.catalog)
  
    return this.catalog
  }
  //borrow a book
  borrow(bookName, userDetails) {
    //To Match The Books Details 
    const matchedBookIndex = this.catalog.findIndex(val =>
    { return val.bookName === bookName })
    if (matchedBookIndex != -1 && this.catalog[matchedBookIndex].availability === true) {
      const currentDate = new Date();
      const borrowed = {
        name: userDetails.name,
        id: userDetails.id,
        email:userDetails.email,
        action: "borrowed",
        bookName: bookName,
        Date: `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()+1}`,
      }   
      this.catalog[matchedBookIndex].availability = false;
      console.log(borrowed)
      return this.historyLog.push(borrowed);
    }
    else return console.log(`This Book is not currently Available`);
  }
  //Return a  Book
  return(bookName,userDetails) {
  const matchedBookIndex = this.catalog.findIndex(val =>
    { return val.bookName === bookName })
      const currentDate = new Date();
      const borrowed = {
        name: userDetails.name,
        id: userDetails.id,
        email:userDetails.email,
        action: "Returned",
        bookName: bookName,
        Date: `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()+1}`,
      }   
      this.catalog[matchedBookIndex].availability = false;
      console.log(borrowed)
      return this.historyLog.push(borrowed);
  }
  history(id) {
    if (id === null) {
            console.log(this.historyLog)
      return this.historyLog
    }
    else {
      console.log(this.historyLog)
      const userHisory = this.historyLog.filter((val) => {
        return val.id === id
      })
      console.log(userHisory)
      return userHisory
    }
  }
  // Get Available Book
  availableBook() {
    const availableBooks=  this.catalog.filter(val => {
      return val.availability === true
    })
    return availableBooks.forEach(book =>
      console.log(`Book: ${book.bookName}, Author: ${book.authorName}, Available: ${book.availability}`));
  }
}

class User{
  constructor(name, email, id,role,library) {
    /* To Call Parent Constructor */
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = role;
    this.library = library;

  }
  borrow(bookName) {
    console.log("USER ID", this.id)
   this.library.borrow(bookName,this);
  }
  return(bookName) {
    this.library.return(bookName,this);
  }
  viewAvailableBooks() {
    this.library.availableBook()
  }
  history() {
    this.library.history(this.id)
  }
}

class Admin extends User{
  history(id=null) {
    console.log("ADMIN HISTORY")
    return this.library.history(id);
  }
  addBook(bookDetails) {
    return this.library.addBook(bookDetails)
  }

  remove(bookName) {
    return this.library.remove(bookName)
  }

}

const firstBook = {
  bookName: 'Atomic Habits',
  authorName: 'James Clear',
  availability: true,
};

const secondBook = {
  bookName: 'Deep Work',
  authorName: 'Cal Newport',
  availability: true,
};

const thirdBook = {
  bookName: 'The Pragmatic Programmer',
  authorName: 'Andrew Hunt & David Thomas',
  availability: true,
};

const fourthBook = {
  bookName: 'Show Your Work!',
  authorName: 'Austin Kleon',
  availability: true,
};

const fifthBook = {
  bookName: 'Can’t Hurt Me',
  authorName: 'David Goggins',
  availability: true,
};

const sixthBook = {
  bookName: 'So Good They Can’t Ignore You',
  authorName: 'Cal Newport',
  availability: true,
};

const seventhBook = {
  bookName: 'Clean Code',
  authorName: 'Robert C. Martin',
  availability: true,
};

const eighthBook = {
  bookName: 'Mindset: The New Psychology of Success',
  authorName: 'Carol S. Dweck',
  availability: true,
};

const library = new Library;
library.addBook(firstBook);
library.addBook(secondBook);
library.addBook(thirdBook);
library.addBook(fourthBook);
library.addBook(eighthBook);
library.addBook(sixthBook);
const user1 = new User('abc', 'abd@xyz.com', 12,'user', library);
user1.borrow('Mindset: The New Psychology of Success', user1)
user1.return('Mindset: The New Psychology of Success', user1)
user1.viewAvailableBooks();
user1.history(12)

const user2 = new User('xyz', 'xyz@xyz.com', 14, 'user',library);
user2.borrow('So Good They Can’t Ignore You', user2)
user2.return('So Good They Can’t Ignore You', user2)
user1.viewAvailableBooks();
user1.history(14)

const user3 = new User('user', 'admin@xyz.com', 14,'user' , library);


const admin = new Admin('Admin', 'admin@xyz.com', 18, 'admin', library);
admin.history();

admin.addBook(fifthBook);
admin.remove('Atomic Habits');