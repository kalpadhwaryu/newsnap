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
    heading:
      'BlueNoroff APT Hackers Using New Ways to Bypass Windows MotW Protection',
    subheading: 'Cyber Security',
    description:
      'BlueNoroff, a subcluster of the notorious Lazarus Group, has been observed adopting new techniques into its playbook that enable it to bypass Windows Mark of the Web (MotW) protections.This includes the use of optical disk image (.ISO extension) and virtual hard disk (.VHD extension) file formats as part of a novel infection chain, Kaspersky disclosed in a report published today.',
    category: 'national',
    img: 'https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEgBHYtEMVlKngXEE9EL7TbcZfU5p7_ymhs0vtM3ATlHfh0xTDoYGnup6Ex5Chb4frKU_vyYoKwyGRFkEQQdOsHVqJThyOP8teA41Oxnarr1E8kQEJRT6mlOWdi9LEaByS7rLYB8tawSjFNqjTxw7FO25x6sD2Y7C8F0Dw9ScUFVR0-j7PE9J_VkoAPc/s728-rj-e3650/windows-security.png',
    authorName: 'Kalp Adhwaryu',
    authorImg:
      'https://i.pinimg.com/originals/e1/81/f7/e181f7a71e26244725fcd15631263806.jpg',
  },
  {
    id: 1,
    heading: 'Tech Trends and Predictions That Will Shape 2023',
    subheading: 'Trends in Technology',
    description:
      'They are real but largely unseen until an event – a data breach, a cloud outage, a social movement – brings them to our attention. The cloud and AI are no longer frontiers. The digital economy is the new tech green space. Nearly 8 out of every ten companies have experienced at least one cloud data breach. The transition to net-zero will be as disruptive as the industrial revolution. Businesses need to separate the trends from the hype to capture competitive value. That’s what drives my annual ritual of making tech predictions for our next orbit around the sun. The future is beginning to take shape, and here are my predictions for tech trends coming in the year ahead.',
    category: 'international',
    img: 'https://cdn.plainconcepts.com/wp-content/uploads/2022/11/Tech-Trends-2023-1.jpg',
    authorName: 'John Snow',
    authorImg:
      'https://i.pinimg.com/736x/56/27/e4/5627e427468eeb2ba7ef8d2a26c906d4.jpg',
  },
  {
    id: 2,
    heading: 'World Economy Is Headed For A Recession In 2023, Says Researcher',
    subheading: 'Global Economy',
    description:
      'The world faces a recession in 2023 higher borrowing costs aimed at tackling inflation cause a number of economies to contract, according to the Centre for Economics and Business Research. The global economy surpassed $100 trillion for the first time in 2022 but will stall in 2023 as policy makers continue their fight against soaring prices, the British consultancy said in its annual World Economic League Table.',
    category: 'politics',
    img: 'https://www.millenniumpost.in/h-upload/2022/12/26/660509-r.webp',
    authorName: 'Karl Marx',
    authorImg:
      'https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg',
  },
  {
    id: 3,
    heading:
      'Putin bans Russian oil exports to countries that imposed price cap -decree',
    subheading: 'World Politics',
    description:
      'President Vladimir Putin on Tuesday delivered Russia’s long-awaited response to a Western price cap, signing a decree that bans the supply of oil and oil products to nations participating in the cap from Feb. 1 for five months. The Group of Seven major powers, the European Union and Australia agreed this month to a $60-per-barrel price cap on Russian seaborne crude oil effective from Dec. 5 over Moscow’s “special military operation” in Ukraine.',
    category: 'national',
    img: 'https://images.indianexpress.com/2022/12/putin-3-1-1-1.jpeg',
    authorName: 'Kalp Adhwaryu',
    authorImg:
      'https://i.pinimg.com/originals/e1/81/f7/e181f7a71e26244725fcd15631263806.jpg',
  },
  {
    id: 4,
    heading: 'Government Gives Official Recognition To Esports',
    subheading: 'Gaming Industry',
    description:
      'The Government of India on Tuesday gave Esports a major boost by integrating it with mainline sports disciplines in the country. The President of India, Droupadi Murmu, in exercise of the powers "conferred by clause (3) of article 77 of the Constitution" amended the rules governing Esports and asked the Ministry of Electronics and Information Technology and the Sports Ministry to include "e-Sports as part of multi-sports events". There had been a growing demand for Esports to be included in the curriculum of multi-discipline events after it was included in the 2018 Jakarta Asian Games as a demonstration sport, meaning medals won in the sport were not counted in the official overall medals tally.',
    category: 'international',
    img: 'https://c.ndtvimg.com/2021-08/2ettm0i_online-gaming-video-games-chinareuters650_625x300_30_August_21.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605',
    authorName: 'John Snow',
    authorImg:
      'https://i.pinimg.com/736x/56/27/e4/5627e427468eeb2ba7ef8d2a26c906d4.jpg',
  },
  {
    id: 5,
    heading:
      'Hardik Pandya To Lead In T20Is Against Sri Lanka, Rohit Sharma Returns As Captain In ODIs',
    subheading: 'Cricket',
    description:
      "Star all-rounder Hardik Pandya will lead the Indian cricket team in the three-match T20I series against Sri Lanka, starting on January 3 in Mumbai, the BCCI announced in a statement late on Tuesday night. Rohit Sharma, Virat Kohli, KL Rahul are not part of the T20I squad. Rohit will return to lead Team India in the ODI series against the same opponents, starting on January 10. While Suryakumar Yadav will be the vice-captain of the side in the T20I series, Hardik will be Rohit's deputy in the ODIs. While Rohit is still recovering from a thumb injury, the BCCI press release did not state anything on whether Pandya's appointment was a permanent change or just for one series.",
    category: 'politics',
    img: 'https://c.ndtvimg.com/2022-11/h8ei4v2_hardik-pandya_625x300_10_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605?output-quality=80&downsize=1060:*',
    authorName: 'Karl Marx',
    authorImg:
      'https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg',
  },
];

export default data;
