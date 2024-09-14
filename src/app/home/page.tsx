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
            <div>
                <input type="text" placeholder="O que quero aprener hoje"></input>
                <h1>Olá Inserir nome</h1>
                <div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vnGsgBgV8QW50dp-wZ4GoCNWu4egKYuxAw&s"></img>
                        <p><strong>Calculo II</strong></p>
                        <p>6 Monitores</p>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vnGsgBgV8QW50dp-wZ4GoCNWu4egKYuxAw&s"></img>
                        <p><strong>Bioquimica Lab.</strong></p>
                        <p>27 Monitores</p>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vnGsgBgV8QW50dp-wZ4GoCNWu4egKYuxAw&s"></img>
                        <p><strong>Fund. IA</strong></p>
                        <p>10 Monitores</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
