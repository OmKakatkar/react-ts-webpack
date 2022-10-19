import './App.css';
import IMAGE from './react.png';
import SVG from './react.svg';

export function App() {
  return (
    <>
      <h1>React TypeScript Template</h1>;
      <img
        src={IMAGE}
        alt='React Logo'
        width='350'
        height='300'
      />
      <img
        src={SVG}
        alt='React SVG'
        width='350'
        height='300'
      />
    </>
  );
}
