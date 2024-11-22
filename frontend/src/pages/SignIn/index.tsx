import React, { useState } from 'react';
import { ReactComponent as ClosedEye } from '../../assets/icons/closedEye.svg';
import { ReactComponent as OpenEye} from '../../assets/icons/openEye.svg';
import './signIn.css';
import Header from 'src/components/Header';
import axios from 'axios';

export function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            // Envia os dados para o backend (alterar URL para o endpoint real)
            const response = await axios.post('http://localhost:0000/exemplo', {
                email: email,
                password: password,
            });

            if (response.data.success) {

                // 'Login bem-sucedido!'


                localStorage.setItem('authToken', response.data.token); // Armazena o token no localStorage


                // redirecionar o usuário


            } else {
                setError('Credenciais inválidas!');
            }
        } catch (err) {
            setError('Erro ao conectar com o servidor.');
        }
    };

    // Função para lidar com o logout
    const handleLogout = () => {
        // Remove o token do LocalStorage ao fazer logout
        localStorage.removeItem('authToken');

    };


    return (
      <> 
        <Header/>
        <div className="container">
            <form onSubmit={handleLogin}>
                <h2>
                    <span className="highlight">E</span>ntrar
                </h2>

                <div className="dadosEntrada">
                    <input 
                        type="email" 
                        id="email" 
                        autoComplete="off" 
                        placeholder="Email" 
                        value={email}  
                        onChange={(e) => setEmail(e.target.value)}
                        required  
                    />
                </div>

                <div className="dadosEntrada">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="senha"
                        placeholder="Senha"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className='iconEye' onClick={togglePasswordVisibility}>
                        {showPassword ? <OpenEye /> : <ClosedEye />}
                    </div>
                </div>

                {error && <div className="error-message">{error}</div>}

                <button type="submit">Entrar</button>
            </form>
        </div>
      </>  
    );
}

export default SignIn;
