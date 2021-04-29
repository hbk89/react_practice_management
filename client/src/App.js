import { Table, TableBody, TableCell, TableRow, TableHead } from "@material-ui/core";
import Customer from "./components/customer.js";

function App() {

  const state = {
    customers: ""
  }

  async function callApi(){
    const response = await fetch('/get/customers');
  }
  
  callApi()
  .then(res => state({customers: res}))
  .catch(err => console.log(err));

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
          {state.customers? state.customers.map(c=>{
            return <Customer data={c} />
          }) : ""}
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
