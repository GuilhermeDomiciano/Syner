"use client";
import Image from 'next/image';
import Rate from "./img/rate.png"

export default function Page() {
    return (
        <div>
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
                    <button>Perfil</button>
                </li>
            </ul>
            <div>
                <div>
                    <a href="https://www.gp1.com.br/pi/piaui/noticia/2022/5/10/veja-o-bo-registrado-pela-namorada-do-estudante-lucas-vinicius-525214.html" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://www.gp1.com.br/media/image_bank/2022/5/lucas-vinicius-monteiro-oliveira_r2vZvTa.jpg.1200x0_q85_upscale.webp"
                            style={{ width: "10rem", height: "10rem", borderRadius: "50%" }}
                            alt="Imagem"
                        />
                    </a>
                    <h1>Lucas Vinicius</h1>
                    <Image src={Rate} alt="Rate"/>
                    <p><strong>Dados pessoais</strong></p>
                    <p>Nome: Lucas Vinicius</p>
                    <p>Idade: 23</p>
                    <p>De: Palmas, Tocantins</p>
                    <p>Curso: Engenharia de Software</p>
                </div>
                <div>
                    <p><strong>Material publico</strong></p>
                    <ul>
                        <li>
                            <p>Numero decimal</p>
                        </li>
                        <li>
                            <p>Numero decimal</p>
                        </li>
                        <li>
                            <p>Numero decimal</p>
                        </li>
                    </ul>
                    <p><strong>Material publico</strong></p>
                    <ul>
                        <li>
                            <p>Monica</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
