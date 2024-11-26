import React, { useState } from 'react';
import axios from 'axios';
import './submitUpdate.css';
import Header from 'src/components/Header';

export function SubmitUpdate() {
  const [idObra, setIdObra] = useState('');
  const [cnpjEmpresa, setCNPJEmpresa] = useState('');
  const [dataAtualizacao, setDataAtualizacao] = useState('');
  const [gastoPlanejado, setGastoPlanejado] = useState('');
  const [gastoReal, setGastoReal] = useState('');
  const [porcentagemConcluida, setPorcentagemConcluida] = useState('');
  const [error, setError] = useState('');

  const convertDateToISO = (date: string) => {
    const [dia, mes, ano] = date.split('/');
    return `${ano}-${mes}-${dia}`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dataAtualizacaoFormatted = convertDateToISO(dataAtualizacao);

    const updateData = {
      id_obra: idObra,
      cnpj_empresa: cnpjEmpresa,
      data: dataAtualizacaoFormatted,
      gasto_planejado: parseFloat(gastoPlanejado),
      gasto_acumulado: parseFloat(gastoReal),
      porcentagem_concluida: porcentagemConcluida,
    };

    try {
      const response = await axios.post(
        'http://localhost:8080/atualizacoes',
        updateData
      );

      if (response.status === 200) {
        alert('Atualização cadastrada com sucesso!');
      } else {
        setError('Erro ao cadastrar a atualização.');
      }
    } catch (error) {
      setError('Erro ao cadastrar a atualização.');
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
              id="cnpjEmpresa"
              autoComplete="off"
              placeholder="CNPJ Empresa"
              value={cnpjEmpresa}
              onChange={(e) => setCNPJEmpresa(e.target.value)}
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
          <div className="dadosEntrada">
            <input
              type="text"
              id="porcentagemConcluida"
              autoComplete="off"
              placeholder="Porcentagem Concluida"
              value={porcentagemConcluida}
              onChange={(e) => setPorcentagemConcluida(e.target.value)}
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
