import './App.scss';
import MyComponent from '../components/MyComponent';

/***
 * 2 component: class component / function component (function, arrow)
 * arrow function: const App = () => {}
 */

function App() {
  return (
    <div>
      <header>
        <p>
          Hello world with React
        </p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
