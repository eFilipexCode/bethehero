import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './Logon.css';
import heroes from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import api from '../../services/api.js';

function Logon() {
    const [id, setId] = useState("");

    const history = useHistory();

    async function  handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('sessions', { id });
            console.log(response.data.name);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            
            history.push('/profile');
        } catch (error) {
            alert("Falha no login. Tente Novamente.");
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Logo" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                    onChange={e => setId(e.target.value)}
                    value={id}
                    placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroes} alt="Be The Hero!" />
        </div>
    );
};

export default Logon;