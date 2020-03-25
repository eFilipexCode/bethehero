import React, { useState } from 'react';
import './NewIncident.css';
import logo from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api.js';

function NewIncident() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    
    async function handleNewIncident(e) {
        e.preventDefault();

        const  data = {
            title,
            description: desc,
            value
        };

        try {
            api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });
            history.push('/profile');
        } catch (error) {
            alert("Erro ao cadastrar. Tente novamente.")
        }
    }

    return (
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft />
                        Voltar
                    </Link>
                </section>
                <form onSubmit={e => handleNewIncident(e)}>
                    <input placeholder="Título do caso" onChange={(e) => setTitle(e.target.value)} value={title}/>
                    <textarea placeholder="Descrição" onChange={(e) => setDesc(e.target.value)} value={desc}/>
                    <input placeholder="Valor em reais R$" onChange={(e) => setValue(e.target.value)} value={value}/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default NewIncident;
