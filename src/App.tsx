import { ClickCounter } from './ClickCounter';
import './App.css';
import IMAGE from './react.png';
import SVG from './react.svg';

export function App() {
  import('./func').then((data) => console.log(data.printOne()));
  return (
    <>
      <h1>Hello React TypeScript Template {process.env.name}</h1>
      <img src={IMAGE} alt="React Logo" width="350" height="300" />
      <img src={SVG} alt="React SVG" width="350" height="300" />
      <ClickCounter />
    </>
  );
}
