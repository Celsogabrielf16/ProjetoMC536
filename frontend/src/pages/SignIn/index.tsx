import React, { useState } from 'react';
import { ReactComponent as ClosedEye } from '../../assets/icons/closedEye.svg';
import { ReactComponent as OpenEye} from '../../assets/icons/openEye.svg';
import './signIn.css';
import { useNavigate } from 'react-router-dom';
import Header from 'src/components/Header';
import axios from 'axios';

export function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            // Envia os dados para o backend (alterar URL para o endpoint real)
            const response = await axios.get('http://localhost:8080/empresas/senha', {

                params: {
                    email: email, 
                    senha: password, 
                },
            });

            if (response.data) {

                // 'Login bem-sucedido!'
                localStorage.setItem('authToken', JSON.stringify(true));


                // Redireciona o usuário para a página inicial (home)
                navigate('../Home/index.tsx');

            } else {
                setError('Credenciais inválidas!');
            }
        } catch (err) {
            setError('Erro ao conectar com o servidor.');
        }
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
