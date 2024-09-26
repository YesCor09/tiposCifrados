import React from 'react';
import { useNavigate } from 'react-router-dom';
import cesar from './assets/cesar.png'
import escitala from './assets/escitala.png'

const TiposCifrado = () => {
    const navigate = useNavigate();

    return (
        <div className="tipos-cifrado-container" style={styles.container}>
             <h1 style={styles.title}>Luis Ricardo Ibarra Coronel 7A</h1>
            <h1 style={styles.title}>Elige un tipo de Cifrado</h1>
            <div
                style={styles.cifradoItem}
                onClick={() => navigate('/cesar')}
            >
                <img src={cesar} alt="Cifrado César" style={styles.image} />
                <h3 style={styles.text}>Cifrado César</h3>
            </div>

            <div
                style={styles.cifradoItem}
                onClick={() => navigate('/escitala')}
            >
                <img src={escitala} alt="Cifrado Escítala" style={styles.image} />
                <h3 style={styles.text}>Cifrado Escítala</h3>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
    },
    title: {
        fontSize: '36px', 
        fontWeight: 'bold', 
        color: '#333', 
        marginBottom: '40px', 
        textAlign: 'center', 
        fontFamily: "'Roboto', sans-serif", 
    },
    cifradoItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        width: '250px',
        height: '250px',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
    },
    cifradoItemHover: {
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    },
    image: {
        width: '150px',
        height: 'auto',
        marginBottom: '10px',
    },
    text: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
    },
};

export default TiposCifrado;
