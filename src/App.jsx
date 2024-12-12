import { Provider } from 'react-redux';
import './App.css';
import Main from './Pages/main';
import store from './Redux/store';

function App() {
  return (
   
   <Provider store={store}>
     <Main/>
   </Provider>
  
   
    
  );
}

export default App;
