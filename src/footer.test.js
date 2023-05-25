import ReactDOM from 'react-dom';
import Footer from './footer/Footer';

test('Se carga el footer', () => {
  const div = document.createElement('footer');
  ReactDOM.render(<Footer />, div);
});