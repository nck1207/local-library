function findAuthorById(authors, id) {
  return findAu = authors.find((theAuthors) => theAuthors.id === id);
}

function findBookById(books, id) {
  return findBo = books.find((theBooks) => theBooks.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  return books.reduce( (BoA, BoB) => { BoA[+(BoB.borrows[0] && BoB.borrows[0].returned)]
    .push(BoB); return BoA }, [[],[]] )
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  let {borrows} = book;
  borrows.forEach(borrow=> {
    let account = accounts.find(acc => acc.id === borrow.id);
    account['returned'] = borrow.returned;
    result.push(account);
  });
  return result.slice(0,10)//.slice pulls specific items from a starting point and an end point 
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
