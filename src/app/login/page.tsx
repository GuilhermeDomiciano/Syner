import Image from 'next/image';
import Coruja from './img/coruja.png';
import Mundo from './img/mundo.png';
import './App.css';

export default function Page() {
    return (
        <div className="container">
            <div className='container-esquerdo'>
                <Image src={Coruja} alt="Coruja" />
                <h1 style={{color: "#4E74F9"}}><strong>SYNER</strong></h1>
                <button>Criar Conta</button>
                <button>Continuar com o Google</button>
                <button>Entrar com instituição de ensino</button>
            </div>
            <div className="divisor"></div>
            <div className='container-direito'>
                <Image src={Mundo} alt="Mundo"/>
                <p>O Syner é uma plataforma de monitoria colaborativa, em que alunos de todo o mundo podem se conectar para compartilhar conhecimentos e aprender juntos.</p>
                <button>Login</button>
            </div>
        </div>
    );
}
