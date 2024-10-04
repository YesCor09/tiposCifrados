import { useState } from "react";
import Button from '@mui/material/Button';
import toast from "react-hot-toast";
import blake from 'blakejs';

const CifradoDjango = () => {
    const [clave, setClave] = useState('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');
    const [targetDeb, setTargerDeb] = useState('');
    const [password, setPassword] = useState('');
    const [claveDescifrado, setClaveDescifrado] = useState('')
    const [outputMessage, setOutputMessage] = useState('');


    return (
        <div style={{ padding: "20px", textAlign: "center", display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
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
                        placeholder="16 digitos"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
                    />
                </div>

                <div style={{ marginBottom: "20px" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginRight: "10px" }}
                    >
                        Cifrar Datos
                    </Button>
                </div>
            </div>
            

            <div className="divDataCifrado" style={styles.divData}>
                <div style={{ marginBottom: "20px" }}>
                    <text>Nombre:</text>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <text>Correo electronico:</text>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <text>Telefono:</text>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <text>Direccion:</text>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <text>Tarjeta Debito/Credito</text>
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
                        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ marginRight: "10px" }}
                    >
                        Descifrar Datos
                    </Button>
                </div>
                <div className="divResultDecifrado">
                <div style={{ marginBottom: "20px" }}>
                    <text>Nombre:</text>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <text>Correo electronico:</text>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <text>Telefono:</text>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <text>Direccion:</text>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <text>Tarjeta Debito/Credito</text>
                    </div>
                </div>
            </div>
            <div>
                {outputMessage && (
                    <textarea
                        readOnly
                        value={outputMessage}
                        style={{
                            width: "300px",
                            height: "200px",
                            padding: "10px",
                            fontSize: "16px",
                            resize: "none",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            marginBottom: "10px",
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export { CifradoDjango };

const styles = {
    divData: {
        alignItems: 'center',
        margin: '20px', 
        borderWidth: '2px', 
        borderColor: '#f1f1f1', 
        borderStyle: 'solid',
        padding: '10px'
    }
}
