const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

const titles = movies
  .filter((m) => m.year === 2018 && m.rating >= 4) // 过滤
  .sort((a, b) => b.rating - a.rating) // 排序
  .map((m) => m.title); // 提取电影标题

console.log(titles);
