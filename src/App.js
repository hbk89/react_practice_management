import { Customer } from "./components/customer.js";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "이덕호",
    birthday: "898989",
    gender: "남자",
    job: "developer",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "최찬미",
    birthday: "909090",
    gender: "남자",
    job: "officer",
  },
  {
    id: 1,
    image: "https://placeimg.com/64/64/3",
    name: "쁨뿌미",
    birthday: "212121",
    gender: "모름",
    job: "tea",
  },
];

function App() {
  return (
    <div>
      {customers.map(c=>{
        return <Customer data = {c}/>
      })}
    </div>
  );
}

export default App;
