import logo from './assets/tomboloStamp.png';
import nascita from './assets/AgostinhoFilippettoInvertletras.png';
import matrimonio from './assets/casamento3.jpg';
import statoFamiglia from './assets/statoFamiglia.png';
import therezaNascimento from './assets/therezaNascimento.png';
import therezaNascimento2 from './assets/therezaNascimento2.png';
import batizadoHeitor from './assets/batizadoHeitor.png';
import luizAgostinhonasc from './assets/luizAgostinhonasc.jpeg';
import foto1912 from './assets/1912.jpg';
import foto1908 from './assets/seminario.jpg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core'
import { faAccusoft, faAlgolia, faDelicious } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-title">La famiglia Filippetto in Brasile</p>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>

      <div>
        <h1>Linha do tempo</h1>
        <br />

        <div className='tempo'>
          <h2>Agostino Filippetto</h2>
          <p>Nascimento: 07/08/1861</p>
          <p>Pai: Luigi Filippetto</p>
          <p>Mãe: Maria Liviero</p>
        </div>
        
        <img src={nascita} className="imagem" alt="Nascimento" />
        <p >
          Documento da Parhocchia di S. Andrea AP di Tombolo: 13/11/1886
          </p>
        <br />
        <hr></hr>

        <p className='tempo'>
          Falecimento de seu Pai: 1874<br />
          Ele tinha APROXIMADAMENTE 60 anos de idade.
        </p>
        <hr></hr>

        <p className='tempo'>Casamento: 26/11/1886</p>

        <img src={matrimonio} className="imagem" alt="Casamento" />

        <hr></hr>
        <p className='tempo'>
          1° Filho: Angela: 23/12/1886<br />
          Tombolo, Padova
        </p>

        <hr></hr>
        <p className='tempo'>2° Filho: Luigi: 1889<br />
          Tombolo, Padova
        </p>

        <hr></hr>

        <p className='tempo'>
          Falecimento de sua Mãe: 1889<br />
          Ela tinha APROXIMADAMENTE 62 anos de idade.
        </p>
        <hr></hr>

        <p className='tempo'>
          3° Filho: Maria Luigia: 10/10/1890<br />
          Tombolo, Padova
        </p>

        <p className='tempo'>
          Ela ficou em Tombolo até completar 7 anos enquanto seus pais e 
          irmãos mais velhos imigravam para o Brasil.<br />
          Foi para o Brasil em 20/03/1897.
         
        </p>
        
        <hr></hr>
        <p>Imigração para o Brasil 06/09/1891</p>
        <img src={statoFamiglia} className="imagem" alt="Casamento" />

        <hr></hr>

        <p className='tempo'><FontAwesomeIcon className='icones' icon={faDelicious} />
              &ensp;&ensp;??? Compra do terreno no Seminário 1892 ???
        </p>

        <hr></hr>

        <p className='tempo'>4° Filho: Luisa: 1893<br />
          ??? Curityba, Paraná ???<br />
          <br/>
        </p>

        
        <hr></hr>

        <p className='tempo'>5° Filho: Thereza: 05/11/1896<br />
          Curityba, Paraná<br />
          <br/>
        </p>

        <ul className='lista'>
          <li>Agostinho Filipeto</li>
          <li>Izabel Arizazi</li>
        </ul>
        
        <img src={therezaNascimento} className="imagem" alt="Nascimento" /> <br />
        <img src={therezaNascimento2} className="imagem" alt="Nascimento" />
        

        <hr></hr>

        <p className='tempo'>6° Filho: Heitor: 02/02/1899</p>
        <img src={batizadoHeitor} className="imagem" alt="Nascimento" />
        <hr></hr>

        <p>7° Filho: Luiz Agostinho: 19/12/1900</p>

        <img src={luizAgostinhonasc} className="imagem" alt="Nascimento" />
        
        

        <hr></hr>
        <p className='tempo'>8° Filho: Francisco Angelo: 23/12/1906</p>
        <hr></hr>

        <img src={foto1908} className="imagem" alt="Nascimento" title='1908 APROXIMADAMENTE'/>
        <hr></hr>

        <img src={foto1912} className="imagem" alt="Nascimento" title='1912 APROXIMADAMENTE' />

        <hr></hr>

      <p className='tempo'><big>??</big> Óbito: 1923-1940 <big>??</big></p>

        <div className='lista'>
          <ul>
            <li>
              <FontAwesomeIcon className='icones' icon={faDelicious} />
              &ensp;&ensp;Luiz Agostinho comprou o 1° túmulo da família no cemitério
                do Agua Verde para o seu pai. Quadra 169.
            </li>
            <li>
              <FontAwesomeIcon className='icones' icon={faDelicious} />
              &ensp;&ensp;Nas escrituras de registro de imóveis pode haver documetação
              de óbito de Agostino
            </li>
            <li>
              <FontAwesomeIcon className='icones' icon={faDelicious} />
              &ensp;&ensp;Inventário dos béns.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
