import React, { useState } from 'react';
import './submitUpdate.css';
import Header from 'src/components/Header';

export function SubmitUpdate() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    
    return (
        <> 
        <Header/>
        <div className="container">
            <form>
                <h2>
                    <span className="highlight">I</span>nserir Atualização
                </h2>
                <div className="dadosEntrada">
                    <input type="text" id="IDobra" autoComplete="off" placeholder="ID Obra" required/>
                </div>
                <div className="dadosEntrada">
                    <input type="text" id="dataAtualização" autoComplete="off" placeholder="Data Atualização" required/>
                </div>
                <div className="dadosEntrada">
                    <input type="text" id="gastoPlanejado" autoComplete="off" placeholder="Gasto Planejado" required/>
                </div>
                <div className="dadosEntrada">
                    <input type="text" id="gastoReal" autoComplete="off" placeholder="Gasto Real" required/>
                </div>
                <button type="submit">Atualizar</button>
            </form>
        </div>
    </>      
    );
}
export default SubmitUpdate;