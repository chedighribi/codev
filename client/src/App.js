import './App.css';
import Subscribers from './component/Subscribers';
import {Admin,Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import SubscribersList from './component/SubscribersList';


function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='Subscribers' list={SubscribersList} />
    </Admin>
  );
}

export default App;
