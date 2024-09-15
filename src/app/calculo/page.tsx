"use client";
import Calculo from './img/Imagem.png';
import User from './img/user.png'
import Image from 'next/image';

export default function Page() {
    return (
        
        <div style={{ fontSize: 12 }}>
            <ul>
                <li>
                <button onClick={() => window.location.href = 'http://localhost:3000'}>Home</button>
                </li>
                <li>
                    <button>Comunidade</button>
                </li>
                <li>
                    <button>Recados</button>
                </li>
                <li>
                    <button>Agenda</button>
                </li>
                <li>
                    <button onClick={() => window.location.href = 'http://localhost:3000/chat'}>Chat</button>
                </li>
                <li>
                <button onClick={() => window.location.href = 'http://localhost:3000/perfil'}>Perfil</button>
                </li>
            </ul>
            <Image src={User} alt="user" style={{ width: "10rem", height: "10rem", borderRadius: "50%" }}/>
            <h1>Calculo II</h1>
            <h3>6 monitores</h3>
            <br></br>
            <div>
            <ul>
                <li>
                    <button>Monitores</button>
                </li>
                <li>
                    <button>Materiais</button>
                </li>
                <li>
                    <button>Testes</button>
                </li>
            </ul>
            </div>
            <div>
                <Image src={User} alt="user" style={{ width: "10rem", height: "10rem", borderRadius: "50%" }}/>
                <h3>Silas Oliveira</h3>
                <p>Monitor de Matemática</p>
            </div>
            <div>
            <Image src={User} alt="user" style={{ width: "10rem", height: "10rem", borderRadius: "50%" }}/>
                <h3>Amon Silva</h3>
                <p>Monitor de Matemática</p>
            </div>
            <div>
            <Image src={User} alt="user" style={{ width: "10rem", height: "10rem", borderRadius: "50%" }}/>
                <h3>Cleide Nascimento</h3>
                <p>Monitor de Matemática</p>
            </div>
            <div>
            <Image src={User} alt="user" style={{ width: "10rem", height: "10rem", borderRadius: "50%" }}/>
                <h3>Josefina Silva</h3>
                <p>Monitor de Matemática</p>
            </div>
            <div>
            <Image src={User} alt="user" style={{ width: "10rem", height: "10rem", borderRadius: "50%" }}/>
                <h3>Maria Paula</h3>
                <p>Monitor de Matemática</p>
            </div>
            <div>
            <Image src={User} alt="user" style={{ width: "10rem", height: "10rem", borderRadius: "50%" }}/>
                <h3>Simone Lucas</h3>
                <p>Monitor de Matemática</p>
            </div>
        </div>
    )
}
