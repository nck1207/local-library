function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    let borrowed = book.borrows[0].returned;
    if (borrowed === false) {
      acc++;
    }
    return acc;
  }, 0);
}

function _sortObjectByValues(obj){
  const keys = Object.keys(obj);
  return keys.sort((keyA, keyB)=>{
      if(obj[keyA] > obj[keyB]){
          return -1;
      } else if(obj[keyB] > obj[keyA]){
          return 1;
      }
      return 0;
  });
}

function getMostCommonGenres(books) {
  let countObj = books.reduce((acc, {genre}) => {
    if(acc[genre]){
        acc[genre]+=1;
    } else{
        acc[genre]=1;
    }
    return acc;
}, {});
let sortedKeys = _sortObjectByValues(countObj);
let result = sortedKeys.map(sorted1 => ({name: sorted1, count: countObj[sorted1]})).slice(0,5) 
return result;
}

function getMostPopularBooks(books) {
  const popularBooks =
    books.map((book) => 
  {return {name: book.title, count: book.borrows.length};})
  .sort(function (bookA, bookB) {
        return bookB.count - bookA.count;
      });
      return popularBooks.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  const authorList = books.reduce((acc, book) => { 
    let { authorId, borrows } = book;
    const Obj = authors.find(author => author.id === authorId);
    const name = `${Obj.name.first} ${Obj.name.last}`;
    var count = borrows.length;
    const author = acc.find(author => author.name === name);
    if(author) {
      author.count += count;
    } else {
      const addAu = {
        name,
        count
      };
      acc.push(addAu);
    }
    return acc;
  }, []);
  const sorted = authorList.sort((authorA, authorB) => authorB.count - authorA.count).slice(0,5);
  return sorted
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
}