import Table from 'react-bootstrap/Table';

export const PriceList = (props) => {
  const saveFile = async (blob) => {
    const a = document.createElement('a');
    a.download = '../priceList.xlsx';
    a.href = URL.createObjectURL(blob);
    a.addEventListener('click', (e) => {
      setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
    });
    a.click();
  };

  const obj = { hello: 'world' };
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });

  return (
    <div id='priceList' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Cenník</h2>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>Zoznam náradia:</th>
              <th>Záloha:</th>
              <th>Cena nájmu na 24h</th>
              <th>Cena nájmu na víkend (pia-pon)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Ručné náradie:
              </td>
            </tr>
            <tr>
              <td>Aku skrutkovač </td>
              <td>100</td>
              <td>10</td>
              <td>16</td>
            </tr>
            <tr>
              <td>Aku rázový uťahovák</td>
              <td>100</td>
              <td>10</td>
              <td>16</td>
            </tr>
            <tr>
              <td>Aku príklepová vŕtačka </td>
              <td>100</td>
              <td>12</td>
              <td>18</td>
            </tr>
            <tr>
              <td>Aku uhlová brúska 125mm </td>
              <td>50</td>
              <td>7</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Uhlová brúska 230mm </td>
              <td>50</td>
              <td>12</td>
              <td>18</td>
            </tr>
            <tr>
              <td>Vŕtacie a sekacie kladivo </td>
              <td>300</td>
              <td>20</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Búracie kladivo 17kg</td>
              <td>500</td>
              <td>28</td>
              <td>42</td>
            </tr>
            <tr>
              <td>Drážkovacia fréza </td>
              <td>200</td>
              <td>25</td>
              <td>36</td>
            </tr>
            <tr>
              <td>Priamočiara píla </td>
              <td>100</td>
              <td>10</td>
              <td>16</td>
            </tr>
            <tr>
              <td>Leštička </td>
              <td>100</td>
              <td>10</td>
              <td>16</td>
            </tr>
            <tr>
              <td>Teplovzdušná pištoľ </td>
              <td>50</td>
              <td>6</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Miešadlo </td>
              <td>100</td>
              <td>10</td>
              <td>16</td>
            </tr>
            <tr>
              <td colSpan={4}>Veľké náradie:</td>
            </tr>
            <tr>
              <td>Rezačka dlažby do 1300mm</td>
              <td>50</td>
              <td>15</td>
              <td>22</td>
            </tr>
            <tr>
              <td>Elektrocentrála </td>
              <td>200</td>
              <td>25</td>
              <td>36</td>
            </tr>
            <tr>
              <td>Vibračná doska jednosmerná </td>
              <td>200</td>
              <td>25</td>
              <td>36</td>
            </tr>
            <tr>
              <td>Vibračná doska reverzná </td>
              <td>300</td>
              <td>40</td>
              <td>60</td>
            </tr>
            <tr>
              <td>Miešačka 160l </td>
              <td>150</td>
              <td>15</td>
              <td>22</td>
            </tr>
          </tbody>
        </Table>

        <button className='btn btn-custom btn-lg page-scroll' onClick={() => saveFile(blob)}> Stiahni cenník </button>
        </div>
      </div>
    </div>

  )
}
