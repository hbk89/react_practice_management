import {Customer} from './components/customer.js'

const customer = {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '이덕호',
  'birthday' : '891029',
  'gender' : '남자',
  'job' : 'developer'
}

function App() {
  return (
    <div>
      <Customer 
        data = {customer}
      />
    </div>
  );
}

export default App;
