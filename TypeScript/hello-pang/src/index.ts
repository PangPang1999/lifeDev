let employee: {
  id: number;
  name: string;
  retire: (date: Date) => void; // 明确返回类型为 void
} = {
  id: 1,
  name: "John",
  retire: (date: Date) => {
    console.log(date);
  },
};
