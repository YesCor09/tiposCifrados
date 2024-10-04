import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import toast from "react-hot-toast"; 

const CifradoDjango = () => {
    const [clave, setClave] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');
    const [targetDeb, setTargerDeb] = useState('');
    const [password, setPassword] = useState('');

    const [nameEncrypt, setEncryptName] = useState('');
    const [emailEncrypt, setEncryptEmail] = useState('');
    const [telephoneEncrypt, setEncryptTelephone] = useState('');
    const [addressEncrypt, setEncryptAddress] = useState('');
    const [targetDebEncrypt, setEncryptTargerDeb] = useState('');
    const [passwordEncrypt, setEncryptPassword] = useState('');

    const [nameDecrypt, setDecryptName] = useState('');
    const [emailDecrypt, setDecryptEmail] = useState('');
    const [telephoneDecrypt, setDecryptTelephone] = useState('');
    const [addressDecrypt, setDecryptAddress] = useState('');
    const [targetDebDecrypt, setDecryptTargerDeb] = useState('');
    const [passwordDecrypt, setDecryptPassword] = useState('');

    const [claveDescifrado, setClaveDescifrado] = useState('');

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Detectar cambio de tamaño de la ventana
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const validateForm = () => {
        if (!clave || !name || !email || !telephone || !address || !targetDeb || !password) {
            toast.error('Todos los campos son obligatorios');
            return false;
        }
        return true;
    };

    const sendDataEncrypt = async () => {
        if (!validateForm()) return;
        try {
            const rs = await fetch("https://undetesteo.pythonanywhere.com/api/cifrar/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    key: clave,
                    name: name,
                    email: email,
                    phone: telephone,
                    address: address,
                    credit_card: targetDeb,
                    password: password
                })
            });
            const result = await rs.json();
            setEncryptName(result.encrypted_name);
            setEncryptEmail(result.encrypted_email);
            setEncryptTelephone(result.encrypted_phone);
            setEncryptAddress(result.encrypted_address);
            setEncryptTargerDeb(result.encrypted_credit_card);
            setEncryptPassword(result.encrypted_password);
        } catch (error) {
            console.error(error);
        }
    };

    const sendDataDeCrypt = async () => {
        try {
            const rs = await fetch("https://undetesteo.pythonanywhere.com/api/descifrar/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    key_decrypt: claveDescifrado,
                    key_used: clave,
                    encrypted_name: nameEncrypt,
                    encrypted_email: emailEncrypt,
                    encrypted_phone: telephoneEncrypt,
                    encrypted_address: addressEncrypt,
                    encrypted_credit_card: targetDebEncrypt,
                })
            });
            const result = await rs.json();
            setDecryptName(result.decrypted_name);
            setDecryptEmail(result.decrypted_email);
            setDecryptTelephone(result.decrypted_phone);
            setDecryptAddress(result.decrypted_address);
            setDecryptTargerDeb(result.decrypted_credit_card);
            setDecryptPassword(result.decrypted_password);
        } catch (error) {
            console.error(error);
        }
    };

    const getResponsiveStyles = () => {
        if (windowWidth <= 480) {
            // Para dispositivos móviles
            return {
                divData: {
                    width: '90%',
                    padding: '10px',
                    margin: '10px 0',
                    wordWrap: 'break-word',      
                    overflowWrap: 'break-word', 
                    overflow: 'hidden',          
                    textOverflow: 'ellipsis',
                    borderWidth: '2px', 
                    borderColor: '#f1f1f1', 
                    borderStyle: 'solid',
                },
                input: {
                    width: '80%',
                    padding: '10px',
                    fontSize: '16px',
                },
                button: {
                    width: '80%',
                    marginRight: '10px'
                },
                container: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px'
                }
            };
        } else if (windowWidth <= 768) {
            // Para tablets
            return {
                divData: {
                    width: '80%',
                    padding: '10px',
                    margin: '20px',
                    wordWrap: 'break-word',      
                    overflowWrap: 'break-word', 
                    overflow: 'hidden',          
                    textOverflow: 'ellipsis',
                    borderWidth: '2px', 
                    borderColor: '#f1f1f1', 
                    borderStyle: 'solid',
                },
                input: {
                    width: '80%',
                    padding: '10px',
                    fontSize: '16px'
                },
                button: {
                    width: '80%',
                    marginRight: '10px'
                },
                container: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px'
                }
            };
        } else {
            // Para pantallas más grandes
            return {
                divData: {
                    width: '30%',
                    padding: '10px',
                    margin: '20px',
                    wordWrap: 'break-word',      
                    overflowWrap: 'break-word', 
                    overflow: 'hidden',          
                    textOverflow: 'ellipsis',
                    borderWidth: '2px', 
                    borderColor: '#f1f1f1', 
                    borderStyle: 'solid',
                },
                input: {
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px'
                },
                button: {
                    width: '100%',
                    marginRight: '10px'
                },
                container: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px'
                }
            };
        }
    };

    const styles = getResponsiveStyles();

    return (
        <div style={styles.container}>
            <div className="divCifrado" style={styles.divData}>
                <h1>Cifrado de datos en DJANGO</h1>

                <text>Clave para descifrar</text>
                <div style={{ marginBottom: "20px" }}>
                    <input
                        type="text"
                        placeholder="Clave"
                        value={clave}
                        onChange={(e) => setClave(e.target.value)}
                        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
                    />
                </div>

                <text>Nombre</text>
                <div style={{ marginBottom: "20px" }}>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
                    />
                </div>

                <text>Correo electronico</text>
                <div style={{ marginBottom: "20px" }}>
                    <input
                        type="email"
                        placeholder="Correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
                    />
                </div>

                <text>Telefono</text>
                <div style={{ marginBottom: "20px" }}>
                    <input
                        type="text"
                        placeholder="Telefono"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
                    />
                </div>

                <text>Direccion</text>
                <div style={{ marginBottom: "20px" }}>
                    <input
                        type="text"
                        placeholder="Direccion"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
                    />
                </div>

                <text>Tarjeta de Debito/Credito</text>
                <div style={{ marginBottom: "20px" }}>
                    <input
                        type="text"
                        placeholder="16 digitos"
                        value={targetDeb}
                        onChange={(e) => setTargerDeb(e.target.value)}
                        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
                    />
                </div>

                <text>Contraseña</text>
                <div style={{ marginBottom: "20px" }}>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
                    />
                </div>

                <div style={{ marginBottom: "20px" }}>
                    <Button
                        onClick={() => sendDataEncrypt()}
                        variant="contained"
                        color="primary"
                        style={{ marginRight: "10px" }}
                    >
                        Cifrar Datos
                    </Button>
                </div>
            </div>

            <div className="divDataCifrado" style={styles.divData}>
                <h1>Datos Cifrados</h1>
                <div style={{ marginBottom: "20px" }}>
                    <text>Nombre: {nameEncrypt}</text>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <text>Correo electronico: {emailEncrypt}</text>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <text>Telefono: {telephoneEncrypt}</text>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <text>Direccion: {addressEncrypt}</text>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <text>Tarjeta Debito/Credito: {targetDebEncrypt}</text>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <text>Contraseña: {passwordEncrypt}</text>
                </div>
            </div>

            <div className="divDataDescifrado" style={styles.divData}>
                <h1>Clave para descifrar los datos</h1>
                <div style={{ marginBottom: "20px" }}>
                    <input
                        type="text"
                        placeholder="Clave"
                        value={claveDescifrado}
                        onChange={(e) => setClaveDescifrado(e.target.value)}
                        style={styles.input}
                    />
                </div>

                <div style={{ marginBottom: "20px" }}>
                    <Button
                        onClick={() => sendDataDeCrypt()}
                        variant="contained"
                        color="secondary"
                        style={styles.button}
                    >
                        Descifrar Datos
                    </Button>
                </div>

                <div className="divResultDescifrado">
                    <h1>Datos Descifrados</h1>
                    <div style={{ marginBottom: "20px" }}>
                        <text>Nombre: {nameDecrypt}</text>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <text>Correo electronico: {emailDecrypt}</text>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <text>Telefono: {telephoneDecrypt}</text>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <text>Direccion: {addressDecrypt}</text>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <text>Tarjeta Debito/Credito: {targetDebDecrypt}</text>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <text>Contraseña: {passwordDecrypt}</text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { CifradoDjango };