import { useState } from "react";
import toast from "react-hot-toast";
import Button from '@mui/material/Button';

const CifradoCesar = () => {
    const [message, setMessage] = useState(''); // Estado para el mensaje ingresado
    const [shift, setShift] = useState(0); // Estado para la clave de desplazamiento
    const [outputMessage, setOutputMessage] = useState(''); // Estado para el mensaje cifrado o descifrado

    // Función para aplicar el Cifrado César (cifrado o descifrado)
    const caesarCipher = (str, shift, isEncrypting) => {
        const direction = isEncrypting ? 1 : -1; // Definir dirección para cifrar o descifrar
        return str
        .split('')
        .map((char) => {
            if (/[a-zA-Z]/.test(char)) {
                const base = char === char.toLowerCase() ? 97 : 65; // Código ASCII de 'a' o 'A'
                return String.fromCharCode(
                    ((char.charCodeAt(0) - base + direction * shift + 26) % 26) + base
                );
            }
            return char; // Devolver otros caracteres (como espacios o símbolos) sin modificar
        })
        .join('');
    };

    // Función que se ejecuta al hacer clic en el botón de cifrar o descifrar
    const handleAction = (isEncrypting) => {
        if (!message.trim()) {
            toast.error("El mensaje no puede estar vacío");
            return;
        }

        const parsedShift = parseInt(shift, 10);
        if (isNaN(parsedShift) || parsedShift < 1) {
            toast.error("La clave debe ser un número mayor que 0");
            return;
        }

        const result = caesarCipher(message, parsedShift, isEncrypting);
        setOutputMessage(result);
        toast.success(isEncrypting ? "Mensaje cifrado correctamente!" : "Mensaje descifrado correctamente!");
    };

    // Función para copiar el mensaje
    const handleCopy = () => {
        if (!outputMessage) {
            toast.error("No hay mensaje para copiar");
            return;
        }
        navigator.clipboard.writeText(outputMessage);
        toast.success('Mensaje copiado correctamente!');
    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Cifrado César</h1>
            <text>Ingresa el mensaje:</text>
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Ej: Hola"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ padding: "10px", width: "300px", fontSize: "16px" }}
                />
            </div>
            <text>Cantidad de desplazamiento:</text>
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="number"
                    placeholder="Clave (desplazamiento)"
                    value={shift}
                    onChange={(e) => setShift(e.target.value)}
                    style={{ padding: "10px", width: "300px", fontSize: "16px" }}
                />
            </div>
            <div style={{ marginBottom: "20px" }}>
                <Button
                    onClick={() => handleAction(true)} // Pasamos true para cifrar
                    variant="contained"
                    color="primary"
                    style={{ marginRight: "10px" }}
                >
                    Cifrar Mensaje
                </Button>
                <Button
                    onClick={() => handleAction(false)} // Pasamos false para descifrar
                    variant="contained"
                    color="secondary"
                >
                    Descifrar Mensaje
                </Button>
            </div>
            <text>Mensaje Cifrado / Descifrado</text>
            {outputMessage && (
                <div style={{ marginTop: "20px" }}>
                    <textarea
                        readOnly
                        value={outputMessage}
                        style={{
                            width: "300px",
                            height: "100px",
                            padding: "10px",
                            fontSize: "16px",
                            resize: "none",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            marginBottom: "10px", 
                        }}
                    />
                    <div>
                        <Button
                            onClick={handleCopy}
                            variant="contained"
                            color="success"
                        >
                            Copiar
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export { CifradoCesar };
