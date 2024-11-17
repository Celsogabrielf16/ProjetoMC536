import React, { useState } from 'react';
import './submitProject.css';
import Header from 'src/components/Header';

export function SubmitProject() {
    // Estado para controlar a visibilidade de cada dropdown
    const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);

    // Estado para armazenar as opções selecionadas
    const [selectedStatus, setSelectedStatus] = useState<string>('Status');
    const [selectedType, setSelectedType] = useState<string>('Tipo de obra');

    // Função para alternar a visibilidade do dropdown de Status
    const toggleStatusDropdown = () => {
        setIsStatusDropdownOpen(!isStatusDropdownOpen);
    };

    // Função para alternar a visibilidade do dropdown de Tipo de obra
    const toggleTypeDropdown = () => {
        setIsTypeDropdownOpen(!isTypeDropdownOpen);
    };

    // Função para lidar com a seleção de uma opção no dropdown de Status
    const handleStatusSelectOption = (option: string) => {
        setSelectedStatus(option);
        setIsStatusDropdownOpen(false);  // Fecha o dropdown após a seleção
    };

    // Função para lidar com a seleção de uma opção no dropdown de Tipo de obra
    const handleTypeSelectOption = (option: string) => {
        setSelectedType(option);
        setIsTypeDropdownOpen(false);  // Fecha o dropdown após a seleção
    };

    return (
        <> 
        <Header />
        <div className="container">
            <form>
                <h2>
                    <span className="highlight">C</span>adastrar Obra
                </h2>

                <div className="dadosEntrada">
                    <input type="text" autoComplete="off" placeholder="ID Localização" required />
                </div>

                <div className="dadosEntrada">
                    <input type="text" autoComplete="off" placeholder="Data Início" required />
                </div>

                <div className="dadosEntrada">
                    <input type="text" autoComplete="off" placeholder="Data Previsão" required />
                </div>

                <div className="dadosEntrada">
                    <input type="text" autoComplete="off" placeholder="Orçamento" required />
                </div>

                <div className="dadosEntrada">
                    <input type="text" id="name" autoComplete="off" placeholder="Nome" required />
                </div>

                <div className="custom-dropdown">
                    <button className="dropdown-btn" onClick={toggleStatusDropdown}>
                        {selectedStatus}
                    </button>
                    {isStatusDropdownOpen && (
                        <ul className="dropdown-list">
                            <li className="dropdown-option" onClick={() => handleStatusSelectOption('Em andamento')}>
                                Em andamento
                            </li>
                            <li className="dropdown-option" onClick={() => handleStatusSelectOption('Concluída')}>
                                Concluída
                            </li>
                            <li className="dropdown-option" onClick={() => handleStatusSelectOption('Cancelada')}>
                                Cancelada
                            </li>
                        </ul>
                    )}
                </div>

                <div className="custom-dropdown">
                    <button className="dropdown-btn" onClick={toggleTypeDropdown}>
                        {selectedType}
                    </button>
                    {isTypeDropdownOpen && (
                        <ul className="dropdown-list">
                            <li className="dropdown-option" onClick={() => handleTypeSelectOption('Reforma')}>
                                Reforma
                            </li>
                            <li className="dropdown-option" onClick={() => handleTypeSelectOption('Acessibilidade')}>
                                Acessibilidade
                            </li>
                            <li className="dropdown-option" onClick={() => handleTypeSelectOption('Encanamento')}>
                                Encanamento
                            </li>
                            <li className="dropdown-option" onClick={() => handleTypeSelectOption('Renovação')}>
                                Renovação
                            </li>
                            <li className="dropdown-option" onClick={() => handleTypeSelectOption('Construção')}>
                                Construção
                            </li>
                            <li className="dropdown-option" onClick={() => handleTypeSelectOption('Ampliação')}>
                                Ampliação
                            </li>
                        </ul>
                    )}
                </div>

                <div className="dadosEntrada">
                    <input type="text" id="description" autoComplete="off" placeholder="Descrição" required />
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
        </>  
    );
}

export default SubmitProject;
