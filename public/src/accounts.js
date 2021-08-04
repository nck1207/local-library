function findAccountById(accounts, id) {
  let urAcc = accounts.find(account => account.id === id);
  return urAcc
}

function sortAccountsByLastName(accounts) {
  return sort = accounts.sort((AcA, AcB) => AcA.name.last > AcB.name.last ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  const { id: acctId } = account;
  return books.reduce((acc, book) => {
    return (
      acc + book.borrows.filter(borrow => borrow.id === acctId)
      .reduce((accountBorrows, borrow) => accountBorrows + 1, 0));
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksTakenOut = [];
    books.forEach(book => {
      if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
        booksTakenOut.push(book);
      }
    });
    booksTakenOut.forEach(book => {
      let authorName = authors.find(person => person.id === book.authorId);
      book['author'] = authorName;
    });
  return booksTakenOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
