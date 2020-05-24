module.exports = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        privilegies: ['add-books', 'remove-books', 'edit-books'],
        firstName: 'Юрий',
        lastName: 'Кундин',
        books: [
          {
            types: ['electronic', 'paper'],
            cover: 'https://pbs.twimg.com/media/Di3NAdTX0AAYOIL.jpg',
            title: 'PIXAR Как вдохнуть в бизнес новую жизнь',
            author: {
              firstName: 'Лоуренс',
              lastName: 'Леви',
            },
          },
        ],
      });
    }, 2000);
  });
};
