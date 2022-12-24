interface dataTypeInterface {
  id: Number;
  heading: String;
  subheading: String;
  description: String;
  img: String;
  authorName: String;
  authorImg: String;
}

const data: dataTypeInterface[] = [
  {
    id: 0,
    heading: 'This is heading 0',
    subheading: 'This is Sub heading 0',
    description: 'This is description 0',
    img: 'https://fakeimg.pl/300/',
    authorName: 'Author Name 0',
    authorImg: 'https://cdn-icons-png.flaticon.com/512/1250/1250689.png',
  },
  {
    id: 1,
    heading: 'This is heading 1',
    subheading: 'This is Sub heading 1',
    description: 'This is description 1',
    img: 'https://fakeimg.pl/300/',
    authorName: 'Author Name 1',
    authorImg: 'https://cdn-icons-png.flaticon.com/512/1250/1250689.png',
  },
  {
    id: 2,
    heading: 'This is heading 2',
    subheading: 'This is Sub heading 2',
    description: 'This is description 2',
    img: 'https://fakeimg.pl/300/',
    authorName: 'Author Name 2',
    authorImg: 'https://cdn-icons-png.flaticon.com/512/1250/1250689.png',
  },
];

export default data;
