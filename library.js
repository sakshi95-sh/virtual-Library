//Library 
class Library {
  constructor(bookName, authorName,availability) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.availability = availability;
  }
}
const bookDetails = [];
bookDetails.push(new Library('Atomic Habits', 'James Clear', true));
bookDetails.push(new Library('Deep Work', 'Cal Newport', true));
bookDetails.push(new Library('The Pragmatic Programmer', 'Andrew Hunt & David Thomas', true));
bookDetails.push(new Library('Show Your Work!', 'Austin Kleon', true));
bookDetails.push(new Library('Can’t Hurt Me', 'David Goggins', true));
bookDetails.push(new Library('So Good They Can’t Ignore You', 'Cal Newport', true));
bookDetails.push(new Library('Clean Code', 'Robert C. Martin (Uncle Bob)', true));


class UserDetails{
   #userBorrowed = [];
  constructor(userName, id) {
    this.userName = userName;
    this.id = id;
  }
  borrowBook(bookname) {
    for (let books of bookDetails)
    {
      if (books.bookName === bookname && books.availability != true) {
       return console.log(`This ${bookname} is currently unavailable`)
      }
      else if(books.bookName === bookname) {
        books.availability = false;
       this.#userBorrowed.push({
          title: books.bookName,
          author: books.authorName
        });
        return console.log(`Book has been issued ${books.bookName} - ${books.authorName}`)
      }
    }
    return console.log("We don't have this book in Library")
  }
  myBorrowed() {
    if (this.#userBorrowed.length === 0)
    {
      return console.log("You haven't borrowed any books.");
    }
  this.#userBorrowed.forEach((book,index) => {
      console.log(`${index+1}. ${book.title} -${book.author} `)
    });
  }
  returnBook(name) {
    for (let book of bookDetails) {
      if (book.bookName==name) {
        book.availability = true;
       this.#userBorrowed =this.#userBorrowed.filter(ele => !new RegExp(name).test(ele))
        return `Book returned successfully`
      }
    }
  }
  checkBookAvailabitity(status = false) {
    if (status) {
     return bookDetails
    } else
      return bookDetails.filter(books => books.availability === true);
    
  }
}

class Admin extends UserDetails{
  allBooks() {
    const bookDetails = this.checkBookAvailabitity(true)
    for (let books of bookDetails) {
      console.log(`Book: ${books.bookName} Author: ${books.authorName} - ${books.availability?'Available':'Borrowed'}`)
    }
    
    }
}
class Member extends UserDetails {
  allBooks() {
    //Only available books details
    const bookDetails = this.checkBookAvailabitity()
    for (let books of bookDetails) {
     console.log(`Book: ${books.bookName} -  Author: ${books.authorName} - ${books.availability='AVAIABLE'}`);
    }
    
  }
}

const user1 = new UserDetails('Joel', 124);
const user2 = new UserDetails('Ben', 1242);
const admin = new Admin('Admin', 9898);
const membe1 = new Member('Joel', 124);
const member2 = new Member('Cindy',124);




