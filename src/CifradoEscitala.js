import { useState } from "react";
import Button from '@mui/material/Button';
import toast from "react-hot-toast";

const CifradoEscitala = () => {
    const [message, setMessage] = useState(''); // Estado para el mensaje ingresado
    const [key, setKey] = useState(1); // Estado para la clave (número de columnas)
    const [outputMessage, setOutputMessage] = useState(''); // Estado para el mensaje cifrado o descifrado

    // Función para aplicar el Cifrado Escítala
    const escitalaCipher = (str, numColumns, isEncrypting) => {
        const spaceIndexes = [];
        let normalizedMessage = '';

        // Recorrer el mensaje y separar los espacios
        for (let i = 0; i < str.length; i++) {
            if (str[i] === ' ') {
                spaceIndexes.push(i); // Guardar las posiciones de los espacios
            } else {
                normalizedMessage += str[i]; // Construir mensaje sin espacios
            }
        }

        const numRows = Math.ceil(normalizedMessage.length / numColumns);
        let transformedMessage = '';

        if (isEncrypting) {
            // Cifrar (Escribir por filas, leer por columnas)
            for (let col = 0; col < numColumns; col++) {
                for (let row = 0; row < numRows; row++) {
                    const index = row * numColumns + col;
                    if (index < normalizedMessage.length) {
                        transformedMessage += normalizedMessage[index];
                    }
                }
            }
        } else {
        // Descifrar (Escribir por columnas, leer por filas)
        const decryptedArr = Array.from({ length: numRows }, () => "");
        const colLength = Math.floor(normalizedMessage.length / numColumns);
        const extraChars = normalizedMessage.length % numColumns;

        let index = 0;
        for (let col = 0; col < numColumns; col++) {
            const charsInColumn = col < extraChars ? colLength + 1 : colLength;
            for (let row = 0; row < charsInColumn; row++) {
                if (index < normalizedMessage.length) {
                    decryptedArr[row] += normalizedMessage[index];
                    index++;
                }
            }
        }
        transformedMessage = decryptedArr.join('');
        }

        // Insertar los espacios de vuelta en las posiciones originales
        for (let spaceIndex of spaceIndexes) {
            transformedMessage = [transformedMessage.slice(0, spaceIndex), ' ', transformedMessage.slice(spaceIndex)].join('');
        }

        return transformedMessage;
    };

    // Función que se ejecuta al hacer clic en el botón de cifrar o descifrar
    const handleAction = (isEncrypting) => {
        if (!message.trim()) {
            toast.error("El mensaje no puede estar vacío");
            return;
        }

        const parsedKey = parseInt(key, 10);
        if (isNaN(parsedKey) || parsedKey < 1) {
            toast.error("La clave debe ser un número mayor que 0");
            return;
        }

        const result = escitalaCipher(message, parsedKey, isEncrypting);
        setOutputMessage(result);
        toast.success(isEncrypting ? "Mensaje cifrado correctamente!" : "Mensaje descifrado correctamente!");
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
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Cifrado Escítala</h1>
            <text>Ingresa el mensaje: </text>
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Ej: Hola"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ padding: "10px", width: "300px", fontSize: "16px" }}
                />
            </div>
            <text>Ingresa el numero de columnas: </text>
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="number"
                    placeholder="Clave (número de columnas)"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    style={{ padding: "10px", width: "300px", fontSize: "16px" }}
                />
            </div>
            <div style={{ marginBottom: "20px" }}>
                <Button
                    onClick={() => handleAction(true)}
                    variant="contained"
                    color="primary"
                    style={{ marginRight: "10px" }}
                >
                    Cifrar Mensaje
                </Button>
                <Button
                    onClick={() => handleAction(false)}
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
                        >
                            Copiar
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export { CifradoEscitala };
