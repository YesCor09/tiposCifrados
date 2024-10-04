import { useState } from "react";
import Button from '@mui/material/Button';
import toast from "react-hot-toast";
import blake from 'blakejs';

const CifradoRC6 = () => {
    const [clave, setClave] = useState('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');
    const [targetDeb, setTargerDeb] = useState('');
    const [password, setPassword] = useState('');
    const [claveDescifrado, setClaveDescifrado] = useState('')
    const [outputMessage, setOutputMessage] = useState('');
    const [message, setMessage] = useState(''); // Estado para el mensaje ingresado



    // Función que se ejecuta al hacer clic en el botón de cifrar o descifrar
    const handleAction = (isEncrypting) => {
        if (!message.trim()) {
            toast.error("El mensaje no puede estar vacío");
            return;
        }

        // const parsedKey = parseInt(key, 10);
        // if (isNaN(parsedKey) || parsedKey < 1) {
        //     toast.error("La clave debe ser un número mayor que 0");
        //     return;
        // }

        // const result = escitalaCipher(message, parsedKey, isEncrypting);
        // setOutputMessage(result);
        // toast.success(isEncrypting ? "Mensaje cifrado correctamente!" : "Mensaje descifrado correctamente!");
    };

    const handleCopy = () => {
        if (!outputMessage) {
            toast.error("No hay mensaje para copiar");
            return;
        }
        navigator.clipboard.writeText(outputMessage);
        toast.success('Mensaje copiado correctamente!');
    };


    return (
        <div style={{ padding: "20px", textAlign: "center", display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            <div className="divCifrado" style={styles.divData}>
                <h1>Cifrado de datos (RC6, RSA, HASH)</h1>

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

export { CifradoRC6 };

const styles={
    divData:{
        alignItems: 'center',
        margin: '20px', 
        borderWidth: '2px', 
        borderColor: '#f1f1f1', 
        borderStyle: 'solid',
        padding: '10px'
    },
}
