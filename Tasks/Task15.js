const books = [
  {
    title: 'The Psychology Of Money',
  description: 'Wealth',
  numberOfPages: 256,
  author: 'Morgan Housel',
  reading: true,
}, 
{
title: 'The Virtual Savvy Checklist',
  description: 'Starter Guide',
  numberOfPages: 11,
  author: 'Abbey Ashley',
  reading: false,
},
{
title: 'Native Son',
  description: 'African-American',
  numberOfPages: 546,
  author: 'Richard Wright',
  reading: true,
}
];

for(let i = 0; i < books.length; i++) {
  if (books[i].reading) {
    console.log(books[i]);
  }
}