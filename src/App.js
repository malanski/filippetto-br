import logo from './assets/tomboloStamp.png';
import nascita from './assets/AgostinhoFilippettoInvertletras.png';
import matrimonio0 from './assets/casamento00.png';
import matrimonio from './assets/casamento3.jpg';
import grafia0 from './assets/grafia00.jpg';
import statoFamiglia from './assets/statoFamiglia.png';
import angela0 from './assets/angela00.png';
import therezaNascimento from './assets/therezaNascimento.png';
import therezaNascimento2 from './assets/therezaNascimento2.png';
import batizadoHeitor from './assets/batizadoHeitor.png';
import luizAgostinhonasc from './assets/luizAgostinhonasc.jpeg';
import luizAgostinhoBatisado from './assets/luizAgostinhoBatisado.png';
import foto1912 from './assets/1912.jpg';
import foto1908 from './assets/seminario.jpg';
import regua from './assets/regua.png';
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
          <div className='lista'>
            <p>Nascimento: 07/08/1861</p>

            <p>Natural de: tombolo, Padova, Veneto, Itália</p>
            <p>Pai: Luigi Antonio Filippetto</p>
            <p>Mãe: Maria Liviero</p>
          </div>
        </div>
        
        <img src={nascita} className="imagem" alt="Nascimento" />
        <p >
          Documento da Parhocchia di S. Andrea AP di Tombolo: 13/11/1886
          </p>
        <br />
        <hr></hr>

        <p className='tempo'>
          Falecimento do pai Luigi Filippetto: 1874<br />
          Observação: Luigi Filippetto tinha APROXIMADAMENTE 60 anos de idade quando faleceu.
        </p>
        <hr></hr>

        <div className='tempo'>
          <p>Casamento: 27/11/1886</p>
          <p>Noiva: Orsola Francesca Rizzardi</p>
          <p>Observação: casal prestes a ter a primeira filha, Angela, um mês depois de casarem.</p>
        </div>

        <img src={matrimonio0} className="imagem" alt="Casamento" />
        <img src={matrimonio} className="imagem" alt="Casamento" />
        
        <div className='tempo'>
          <p>Analisando a caligrafia das palavras identificadas</p>
          <img src={grafia0} className="imagem" alt="Casamento" />
        </div>

        <hr></hr>
        <div className='tempo'>
          <p>
            1° Filho: Angela: 23/12/1886<br />
            Tombolo, Padova<br />
          
          </p>
          <img src={angela0} className="imagem" alt="Casamento" />
          <p>Observação: Ou ano de nascimento da filha Angela esta errado ou o grau de parentesco esta errado.</p>
          
        </div>
        <hr></hr>
        <p className='tempo'>2° Filho: Luigi: 1889<br />
          Tombolo, Padova
        </p>

        <hr></hr>

        <p className='tempo'>
          Falecimento de sua mãe, Maria Liviero: 1889<br />
          Observação: Maria Liviero tinha APROXIMADAMENTE 62 anos de idade ao falecer.
        </p>
        <hr></hr>

        <p className='tempo'>
          3° Filho: Maria Luigia: 10/10/1890<br />
          Tombolo, Padova
        </p>

        <p className='tempo'>
          Observação: Maria Luigia ficou em Tombolo até completar 7 anos, enquanto seus pais e 
          irmãos mais velhos imigravam para o Brasil.<br />
          Mais tarde ela foi para o Brasil, em 20/03/1897.
         
        </p>

        <hr></hr>

        <div className='tempo'>
          
          <p>Imigração para o Brasil 06/09/1891</p>
          <img src={statoFamiglia} className="imagem" alt="Casamento" />
          
          <br />
          
        </div>
        <hr></hr>

        <p className='tempo'>
          <FontAwesomeIcon className='icones' icon={faDelicious} />
          &ensp;&ensp;??? Quando foi a Compra do terreno no Seminário 1892 ???&ensp;&ensp;
          <FontAwesomeIcon className='icones' icon={faDelicious} />
        </p>

        <div className='lista'>
          <ul>
            <li>
              <FontAwesomeIcon className='icones' icon={faDelicious} />
              &ensp;&ensp;Qual é o cartório-Igreja onde esta e escritura do Imóvel.
              
            </li>
            <li>  
              <FontAwesomeIcon className='icones' icon={faDelicious} />
              &ensp;&ensp;Rua General Mario Tourinho n°200. 
            </li>
            <li>
              <FontAwesomeIcon className='icones' icon={faDelicious} />
              &ensp;&ensp;Avenida Ns. Aparecida n° ???.
            </li>
          </ul>
        </div>

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


        <img src={therezaNascimento} className="imagem" alt="Nascimento" /> <br />
        <img src={therezaNascimento2} className="imagem" alt="Nascimento" />
        

        <hr></hr>

        <p className='tempo'>6° Filho: Heitor: 02/02/1899</p>
        <p className='tempo'>Batizado</p>
        <img src={batizadoHeitor} className="imagem" alt="Nascimento" />
        <hr></hr>
        <div className='tempo'>
  
          <p>7° Filho: Luiz Agostinho: 19/12/1900</p>
  
          <img src={luizAgostinhonasc} className="imagem" alt="Nascimento" />
          <img src={luizAgostinhoBatisado} className="imagem" alt="Nascimento" />

  
  
        </div>

        <hr></hr>
        <p className='tempo'>8° Filho: Francisco Angelo: 23/12/1906</p>
        <hr></hr>

        <img src={foto1908} className="imagem" alt="Nascimento" title='1908 APROXIMADAMENTE'/>
        <hr></hr>

        <img src={foto1912} className="imagem" alt="Nascimento" title='1912 APROXIMADAMENTE' />

        <hr></hr>

      <p className='tempo'><big>??</big> Quando foi o Óbito de Agostino: 1920-1940 <big>??</big></p>

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
              &ensp;&ensp;Inventário dos béns de Agostino.
            </li>
          </ul>
        </div>

        <hr></hr>
        
        <div className='tempo'>
        <p>Linha Do Tempo</p>
          <img src={regua} className="imagem" alt="Casamento" />
        </div>

        <hr></hr>
      </div>
    </div>
  );
}

export default App;
