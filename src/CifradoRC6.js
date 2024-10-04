import { useState } from "react";
import Button from '@mui/material/Button';
import toast from "react-hot-toast";

const CifradoRC6 = () => {
    const [clave, setClave] = useState('')
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

    const [claveDescifrado, setClaveDescifrado] = useState('')

    const validateForm = () => {
        if (!clave || !name || !email || !telephone || !address || !targetDeb || !password) {
            toast.error('Todos los campos son obligatorios');
            return false;
        }
        return true;
    };
    

    const sendDataEncrypt = async () =>{
        if (!validateForm()) return;
        try {
            const rs = await fetch("https://recipehub-api-main.vercel.app/encrypt", {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
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
            })
            const result = await rs.json()
            setEncryptName(result.encrypted_name)
            setEncryptEmail(result.encrypted_email)
            setEncryptTelephone(result.encrypted_phone)
            setEncryptAddress(result.encrypted_address)
            setEncryptTargerDeb(result.encrypted_credit_card)
            setEncryptPassword(result.encrypted_password)
        } catch (error) {
            console.error(error)
        }
    }

    const sendDataDeCrypt = async () =>{
        if(!validateForm()) return
        try {
            const rs = await fetch("https://recipehub-api-main.vercel.app/decrypt", {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    key: claveDescifrado,
                    encrypted_name: nameEncrypt,
                    encrypted_email: emailEncrypt,
                    encrypted_phone: telephoneEncrypt,
                    encrypted_address: addressEncrypt,
                    encrypted_credit_card: targetDebEncrypt,
                })
            })

            const result = await rs.json()
            console.log(result)
            setDecryptName(result.decrypted_name)
            setDecryptEmail(result.decrypted_email)
            setDecryptTelephone(result.decrypted_phone)
            setDecryptAddress(result.decrypted_address)
            setDecryptTargerDeb(result.decrypted_credit_card)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div style={{ padding: "20px", textAlign: "center", display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            <div className="divCifrado" style={styles.divData}>
                <h1>Cifrado de datos EXPRESS</h1>

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
                        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <Button
                        onClick={() => sendDataDeCrypt()}
                        variant="contained"
                        color="secondary"
                        style={{ marginRight: "10px" }}
                    >
                        Descifrar Datos
                    </Button>
                </div>
                <div className="divResultDecifrado">
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
                </div>
            </div>

            {/* <div>
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
            </div> */}
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
        padding: '10px',
        width: '30%',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
    },
}
