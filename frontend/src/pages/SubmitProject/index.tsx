import React, { useState } from 'react';
import './submitProject.css';
import Header from 'src/components/Header';
import axios from 'axios';

export function SubmitProject() {

    const [idLocation, setIdLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [expectedDate, setExpectedDate] = useState('');
    const [budget, setBudget] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');


    const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<string>('Status');
    const [selectedType, setSelectedType] = useState<string>('Tipo de obra');


    const toggleStatusDropdown = () => {
        setIsStatusDropdownOpen(!isStatusDropdownOpen);
    };

    const toggleTypeDropdown = () => {
        setIsTypeDropdownOpen(!isTypeDropdownOpen);
    };

    const handleStatusSelectOption = (option: string) => {
        setSelectedStatus(option);
        setIsStatusDropdownOpen(false);
    };

    const handleTypeSelectOption = (option: string) => {
        setSelectedType(option);
        setIsTypeDropdownOpen(false);
    };

    // Função para capturar os valores ao enviar o formulário
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        const formData = {
            idLocation,
            startDate,
            expectedDate,
            budget,
            name,
            selectedStatus,
            selectedType,
            description,
        };

        //console.log('Form Data:', formData);

        try {
            const response = await axios.post('http://localhost:0000/exemplo', formData);

            //'Projeto cadastrado com sucesso!'
        } catch (error) {

            //'Ocorreu um erro ao cadastrar o projeto. Tente novamente.'
        }
    };

    return (
        <> 
        <Header />
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>
                    <span className="highlight">C</span>adastrar Obra
                </h2>

                <div className="dadosEntrada">
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="ID Localização"
                        value={idLocation}
                        onChange={(e) => setIdLocation(e.target.value)}
                        required
                    />
                </div>

                <div className="dadosEntrada">
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Data Início"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>

                <div className="dadosEntrada">
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Data Previsão"
                        value={expectedDate}
                        onChange={(e) => setExpectedDate(e.target.value)}
                        required
                    />
                </div>

                <div className="dadosEntrada">
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Orçamento"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        required
                    />
                </div>

                <div className="dadosEntrada">
                    <input
                        type="text"
                        id="name"
                        autoComplete="off"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="custom-dropdown">
                    <button type="button" className="dropdown-btn" onClick={toggleStatusDropdown}>
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
                    <button type="button" className="dropdown-btn" onClick={toggleTypeDropdown}>
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
                            <li className="dropdown-option" onClick={() => handleTypeSelectOption('Construção')}>
                                Construção
                            </li>
                        </ul>
                    )}
                </div>

                <div className="dadosEntrada">
                    <input
                        type="text"
                        id="description"
                        autoComplete="off"
                        placeholder="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
        </>  
    );
}

export default SubmitProject;