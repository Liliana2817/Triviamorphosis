import { Link } from 'react-router-dom';
function Jugar() {
    return (
      <main>
        <h1>Jugar</h1>
        <hr />
        <Link to={`/jugar`}>Jugar</Link>
        
      </main>

    );
  };
  
export default Jugar;