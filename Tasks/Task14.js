const books = {
  title: 'The Psychology Of Money',
  description: 'Wealth',
  numberOfPages: 256,
  author: 'Morgan Housel',
  reading: true,

  toggleReadingStatus: function () {
    this.reading = !this.reading;
  console.log(this.reading);  
  }
};

books.toggleReadingStatus();