// Marcar como Client Component
"use client";

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
                    {/* Correção no onClick */}
                    <button onClick={() => window.location.href = 'http://localhost:3000/perfil'}>Perfil</button>
                </li>
            </ul>
            <div>
                <input type="text" placeholder="O que quero aprender hoje" />
                <h1>Olá, Inserir nome</h1>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vnGsgBgV8QW50dp-wZ4GoCNWu4egKYuxAw&s" alt="Calculo II" />
                        <p><strong>Cálculo II</strong></p>
                        <p>6 Monitores</p>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vnGsgBgV8QW50dp-wZ4GoCNWu4egKYuxAw&s" alt="Bioquimica Lab" />
                        <p><strong>Bioquímica Lab.</strong></p>
                        <p>27 Monitores</p>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vnGsgBgV8QW50dp-wZ4GoCNWu4egKYuxAw&s" alt="Fund. IA" />
                        <p><strong>Fund. IA</strong></p>
                        <p>10 Monitores</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
