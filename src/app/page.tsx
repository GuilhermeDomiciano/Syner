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
                    <button onClick={() => window.location.href = 'http://localhost:3000/chat'}>Chat</button>
                </li>
                <li>
                    <button onClick={() => window.location.href = 'http://localhost:3000/perfil'}>Perfil</button>
                </li>
            </ul>
            <div>
                <input type="text" placeholder="O que quero aprender hoje" />
                <h1>Olá, Inserir nome</h1>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div>
                        <button onClick={() => window.location.href = 'http://localhost:3000/calculo'}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vnGsgBgV8QW50dp-wZ4GoCNWu4egKYuxAw&s" alt="Calculo II" />
                        </button>
                        <p><strong>Cálculo II</strong></p>
                        <p>6 Monitores</p>
                        <button onClick={() => window.location.href = 'http://localhost:3000/calculo'}>Ver mais</button>
                    </div>
                    <div>
                        <button onClick={() => alert('Bioquímica Lab. selecionado')}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vnGsgBgV8QW50dp-wZ4GoCNWu4egKYuxAw&s" alt="Bioquimica Lab" />
                        </button>
                        <p><strong>Bioquímica Lab.</strong></p>
                        <p>27 Monitores</p>
                        <button onClick={() => alert('Bioquímica Lab. selecionado')}>Ver mais</button>
                    </div>
                    <div>
                        <button onClick={() => alert('Fund. IA selecionado')}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vnGsgBgV8QW50dp-wZ4GoCNWu4egKYuxAw&s" alt="Fund. IA" />
                        </button>
                        <p><strong>Fund. IA</strong></p>
                        <p>10 Monitores</p>
                        <button onClick={() => alert('Fund. IA selecionado')}>Ver mais</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

