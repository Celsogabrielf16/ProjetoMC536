import React, { useState } from 'react';
import { ReactComponent as ClosedEye } from '../../assets/icons/closedEye.svg';
import { ReactComponent as OpenEye} from '../../assets/icons/openEye.svg';
import './signIn.css';
import Header from 'src/components/Header';

export function SignIn() {
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
                    <span className="highlight">E</span>ntrar
                </h2>

                <div className="dadosEntrada">
                    <input type="email" id="email" autoComplete="off" placeholder="Email" required  />
                </div>
                <div className="dadosEntrada">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="senha"
                        placeholder="Senha"
                        required
                    />

                    <div className='iconEye' onClick={togglePasswordVisibility}>
                        {showPassword? <OpenEye/> : <ClosedEye/>}
                    </div>
                    
                </div>

                <button type="submit">Entrar</button>
            </form>

        </div>
      </>  
        
    );
}

export default SignIn;
