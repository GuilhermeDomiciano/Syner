"use client";

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
                    <button onClick={() => window.location.href = 'http://localhost:3000/perfil'}>Perfil</button>
                </li>
            </ul>
            <div>
                <div>
                    <img src="https://pbs.twimg.com/profile_images/1272953901231280136/uR2BWZEa_400x400.jpg" style={{ width: "5rem", height: "5rem", borderRadius: "50%" }} alt="pfp"></img>
                    <h1>Sylas Oliveira</h1>
                    <p>Monitor de Matematica</p>
                </div>
                <div>
                    <img src="https://pbs.twimg.com/profile_images/1272953901231280136/uR2BWZEa_400x400.jpg" style={{ width: "5rem", height: "5rem", borderRadius: "50%" }} alt="pfp"></img>
                    <h1>Outro monitor</h1>
                    <p>Monitor de Algoritmos</p>
                </div>
                <div>
                    <img src="https://pbs.twimg.com/profile_images/1272953901231280136/uR2BWZEa_400x400.jpg" style={{ width: "5rem", height: "5rem", borderRadius: "50%" }} alt="pfp"></img>
                    <h1>Monitor numero 3</h1>
                    <p>Monitor de Bioquímica</p>
                </div>
                <div style={{border: "blue, 2px, solid"}}>
                    <h1>Div do chat</h1>
                    <p>conversasoes</p>
                    <p>conversasoes</p>
                    <p>conversasoes</p>
                    <p>conversasoes</p>
                    <p>conversasoes</p>
                    <p>conversasoes</p>
                    <p>conversasoes</p>
                </div>
            </div>
        </div>
    );
}
