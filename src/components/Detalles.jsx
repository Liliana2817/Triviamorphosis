import { Link, useParams } from 'react-router-dom';
import detallesValores from '../data/datos_valor.json';
import { Card } from 'antd';

const { Meta } = Card;


function Detalles() {
  const { id } = useParams();
  const detalles = detallesValores[id];

  if (!detalles) {
    return (
      <div>
        <h2>Error</h2>
        <p>No se encontraron detalles para la ID {id}.</p>
        <Link to="/">Volver a la home</Link>
        <hr />
      </div>
    );
  }

  const { title, level, invited } = detalles;
  return (
    <main>
      <h2>Detalle</h2>
      <p>Me han pasado la id {id} en el state</p>
      <p>{title}</p>
      <p>{level}</p>
      <p>{invited}</p>
      <Link to="/">Volver a la home</Link>
      <hr />
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </main>
  );
}

export default Detalles;
