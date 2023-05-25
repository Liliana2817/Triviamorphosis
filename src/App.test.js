import ReactDOM from 'react-dom';
import App from './App';

test('Se carga el header', () => {
  const div = document.createElement('Header');
  ReactDOM.render(<App />, div);

});
