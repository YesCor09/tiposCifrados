import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cesar from './assets/cesar.png';
import escitala from './assets/escitala.png';
import cifraDjango from './assets/CifradoDjango.jpg';
import cifraRC6 from './assets/cifradoRC6.png';

const TiposCifrado = () => {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
        },
        cifradoContainer: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: windowWidth < 768 ? 'wrap' : 'nowrap', 
            flexDirection: windowWidth < 768 ? 'column' : 'row',
        },
        title: {
            fontSize: windowWidth < 768 ? '24px' : '36px',
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
            margin: '10px',
            cursor: 'pointer',
            transition: 'box-shadow 0.3s ease',
            width: windowWidth < 768 ? '100%' : 'auto',
        },
        image: {
            width: windowWidth < 768 ? '120px' : '150px', 
            height: 'auto',
            marginBottom: '10px',
        },
        text: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333',
        },
    };

    return (
        <div className="tipos-cifrado-container" style={styles.container}>
            <h1 style={styles.title}>Luis Ricardo Ibarra Coronel 7A</h1>
            <h1 style={styles.title}>Elige un tipo de Cifrado</h1>
            <div className='cifrados-container' style={styles.cifradoContainer}>
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

                <div
                    style={styles.cifradoItem}
                    onClick={() => navigate('/cifraDjango')}
                >
                    <img src={cifraDjango} alt="Cifrado Django" style={styles.image} />
                    <h3 style={styles.text}>Cifrado Django</h3>
                </div>
                <div
                    style={styles.cifradoItem}
                    onClick={() => navigate('/cifraRC6')}
                >
                    <img src={cifraRC6} alt="Cifrado RC6" style={styles.image} />
                    <h3 style={styles.text}>Cifrado RC6</h3>
                </div>
            </div>
        </div>
    );
};

export default TiposCifrado;
