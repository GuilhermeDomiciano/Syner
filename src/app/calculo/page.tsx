"use client";
import Calculo from './img/Imagem.png';
import Image from 'next/image';

export default function Page() {
    return (
        
        <div>
            <ul>
                <li>
                    <button>Início</button>
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
                    <button>Chat</button>
                </li>
                <li>
                <button onClick={() => window.location.href = 'http://localhost:3000/perfil'}>Perfil</button>
                </li>
            </ul>
            <Image src={Calculo} alt="foto" />
            <h1>Calculo II</h1>
            <h3>6 monitores</h3>
            <br></br>

            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7JRe80D-AqarDoS7AP-1r6unr_JdefroaKw&s" alt="user" />
                <h3>Silas Oliveira</h3>
                <p>Monitor de Matemática</p>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7JRe80D-AqarDoS7AP-1r6unr_JdefroaKw&s" alt="user" />
                <h3>Amon Silva</h3>
                <p>Monitor de Matemática</p>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7JRe80D-AqarDoS7AP-1r6unr_JdefroaKw&s" alt="user" />
                <h3>Cleide Nascimento</h3>
                <p>Monitor de Matemática</p>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7JRe80D-AqarDoS7AP-1r6unr_JdefroaKw&s" alt="user" />
                <h3>Josefina Silva</h3>
                <p>Monitor de Matemática</p>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7JRe80D-AqarDoS7AP-1r6unr_JdefroaKw&s" alt="user" />
                <h3>Maria Paula</h3>
                <p>Monitor de Matemática</p>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7JRe80D-AqarDoS7AP-1r6unr_JdefroaKw&s" alt="user" />
                <h3>Simone Lucas</h3>
                <p>Monitor de Matemática</p>
            </div>
        </div>
    )
}
