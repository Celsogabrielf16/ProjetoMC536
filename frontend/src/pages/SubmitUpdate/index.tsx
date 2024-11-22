import React, { useState } from 'react';
import axios from 'axios';
import './submitUpdate.css';
import Header from 'src/components/Header';

export function SubmitUpdate() {

    const [idObra, setIdObra] = useState('');
    const [dataAtualizacao, setDataAtualizacao] = useState('');
    const [gastoPlanejado, setGastoPlanejado] = useState('');
    const [gastoReal, setGastoReal] = useState('');


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        const updateData = {
            idObra,
            dataAtualizacao,
            gastoPlanejado,
            gastoReal,
        };


        try {

            const response = await axios.post('http://localhost:0000/exemplo', updateData); 

        } catch (error) {

            //'Ocorreu um erro ao enviar a atualização. Tente novamente.'
        }
    };

    return (
        <>
            <Header />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h2>
                        <span className="highlight">I</span>nserir Atualização
                    </h2>
                    <div className="dadosEntrada">
                        <input
                            type="text"
                            id="IDobra"
                            autoComplete="off"
                            placeholder="ID Obra"
                            value={idObra}
                            onChange={(e) => setIdObra(e.target.value)}
                            required
                        />
                    </div>
                    <div className="dadosEntrada">
                        <input
                            type="text"
                            id="dataAtualizacao"
                            autoComplete="off"
                            placeholder="Data Atualização"
                            value={dataAtualizacao}
                            onChange={(e) => setDataAtualizacao(e.target.value)}
                            required
                        />
                    </div>
                    <div className="dadosEntrada">
                        <input
                            type="text"
                            id="gastoPlanejado"
                            autoComplete="off"
                            placeholder="Gasto Planejado"
                            value={gastoPlanejado}
                            onChange={(e) => setGastoPlanejado(e.target.value)}
                            required
                        />
                    </div>
                    <div className="dadosEntrada">
                        <input
                            type="text"
                            id="gastoReal"
                            autoComplete="off"
                            placeholder="Gasto Real"
                            value={gastoReal}
                            onChange={(e) => setGastoReal(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Atualizar</button>
                </form>
            </div>
        </>
    );
}

export default SubmitUpdate;
