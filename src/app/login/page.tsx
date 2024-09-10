import Image from 'next/image';
import Coruja from './img/coruja.png';
import Mundo from './img/mundo.png';

export default function Page() {
    return (
        <div className="">
            <div>
                <Image src={Coruja} alt="Coruja" />
                <h1 style={{color: "#4E74F9"}}><strong>SYNER</strong></h1>
                <button>Criar Conta</button>
                <button>Continuar com o Google</button>
                <button>Entrar com isntituição de ensino</button>
            </div>
            <div>
                <Image src={Mundo} alt="Mundo"/>
                <p>O Syner é uma plataforma de monitoria colaborativa, em que alunos de todo o mundo podem se conectar para compartilhar conhecimentos e aprender juntos.</p>
                <button>Login</button>
            </div>
        </div>
    );
}
