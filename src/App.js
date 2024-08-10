import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponents from './components/MyComponents';
//de viet theo kieu class
import React from 'react';

class App extends React.Component {



  render() {
    return (
      <div className='app-container'>hello
      <br/>
        <MyComponents />

      </div>
    )
  }
}


//func compo
// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello world
//           babel compiler giup ta có thể code các phiên bản js khác nhau trong cùng prọ
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>

//     <div>hello 
// <MyComponents/>

//     </div>
//   );
// }

export default App;
