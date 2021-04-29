import { Table, TableBody, TableCell, TableRow, TableHead } from "@material-ui/core";
import Customer from "./components/customer.js";

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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Photo</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Birth</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Job</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(c=>{
            return <Customer data={c} />
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
