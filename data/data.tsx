export interface dataTypeInterface {
  id: Number;
  heading: String;
  subheading: String;
  description: String;
  category: String;
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
    category: 'national',
    img: 'https://i.pinimg.com/originals/a1/06/4a/a1064ae423f8e7b28a709adf6441ddb5.jpg',
    authorName: 'Kalp Adhwaryu',
    authorImg:
      'https://i.pinimg.com/originals/e1/81/f7/e181f7a71e26244725fcd15631263806.jpg',
  },
  {
    id: 1,
    heading: 'This is heading 1',
    subheading: 'This is Sub heading 1',
    description: 'This is description 1',
    category: 'international',
    img: 'https://i.pinimg.com/736x/ca/f7/13/caf7139f56d2208e4de5918001b96c1f.jpg',
    authorName: 'John Snow',
    authorImg:
      'https://i.pinimg.com/736x/56/27/e4/5627e427468eeb2ba7ef8d2a26c906d4.jpg',
  },
  {
    id: 2,
    heading: 'This is heading 2',
    subheading: 'This is Sub heading 2',
    description: 'This is description 2',
    category: 'politics',
    img: 'https://edenapp.com/wp-content/uploads/2020/10/0f6d9e3ad7f8648b525d209e481bd969.jpg',
    authorName: 'Karl Marx',
    authorImg:
      'https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg',
  },
  {
    id: 3,
    heading: 'This is heading 3',
    subheading: 'This is Sub heading 3',
    description: 'This is description 3',
    category: 'national',
    img: 'https://i.pinimg.com/originals/a1/06/4a/a1064ae423f8e7b28a709adf6441ddb5.jpg',
    authorName: 'Kalp Adhwaryu',
    authorImg:
      'https://i.pinimg.com/originals/e1/81/f7/e181f7a71e26244725fcd15631263806.jpg',
  },
  {
    id: 4,
    heading: 'This is heading 4',
    subheading: 'This is Sub heading 4',
    description: 'This is description 4',
    category: 'international',
    img: 'https://i.pinimg.com/736x/ca/f7/13/caf7139f56d2208e4de5918001b96c1f.jpg',
    authorName: 'John Snow',
    authorImg:
      'https://i.pinimg.com/736x/56/27/e4/5627e427468eeb2ba7ef8d2a26c906d4.jpg',
  },
  {
    id: 5,
    heading: 'This is heading 5',
    subheading: 'This is Sub heading 5',
    description: 'This is description 5',
    category: 'politics',
    img: 'https://edenapp.com/wp-content/uploads/2020/10/0f6d9e3ad7f8648b525d209e481bd969.jpg',
    authorName: 'Karl Marx',
    authorImg:
      'https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg',
  },
];

export default data;
