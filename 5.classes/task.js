class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    set state(state) {
      if (state <= 0) {
        this._state = 0;
      } else if (state >= 100) {
        this._state = 100;
      } else {
        this._state = state;
      }
    }
  
    get state() {
      return this._state;
    }
  
	fix() {
		let oneAndHalf = this.state * 1.5;
		if (oneAndHalf <= 0) {
			this.state = 0;
		} else if (oneAndHalf > 100) {
			this.state = 100;
		} else {
			this.state = oneAndHalf;
		}
	}
  
}
  
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = 'magazine';
    }
}
  
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = 'book';
      this.author = author;
    }
}
  
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'novel';
    }
}
    
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'fantastic';
    }
}
    
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'detective';
    }
}


class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
    
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
    
    findBookBy(type, value) {
      for (let book of this.books) {
        if (book[type] === value) {
          return book;
        } 
      }
      return null;
    }
    
    giveBookByName(bookName) {
      for (let book in this.books) {
        if (this.books[book].name === bookName) {
          const giveBook = this.books[book];
          this.books.splice(book, 1);
          return giveBook;
        } 
      }
      return null;
    }
}


class Student {
    constructor (fullname) {
      this.name = fullname,
      this.marks = {};
    }
  
    addMark(mark, subjectName) {
      if (mark < 1 || mark > 5 || typeof mark !== "number") {
        return console.log('Ошибка, оценка должна быть числом от 1 до 5');
      } else if (this.marks[subjectName] === undefined) {
        this.marks[subjectName] = [mark];
      } else if (this.marks[subjectName]) {
        this.marks[subjectName].push(mark);
      }
    }
  
    getAverageBySubject(subjectName) {
      if (this.marks[subjectName]) {
        let avg = 0;
        for (let value of this.marks[subjectName]) {
          avg += value;
        }
        return avg / this.marks[subjectName].length;
      } else {
        return console.log("Несуществующий предмет");
      }
    }
  
    getAverage() {
      let avgAll = 0;
      let index = 0;
      for (let prop in this.marks) {
        avgAll += this.getAverageBySubject(prop);
        index += 1;
      }
      return avgAll / index;
    }
  
    exclude(reason) {
      delete this.marks;
      this.excluded = reason;
    }
  
 }