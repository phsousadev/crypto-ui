import { useState } from 'react';
import type { EncryptResponse } from '../types/crypto';
import { encryptText } from '../services/crypto.service';
import { getErrorMessage } from '../utils/error-helper';

export default function EncryptForm() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<EncryptResponse | null>(null);
  const [error, setError] = useState('');

  const handleEncrypt = async () => {
    setError('');
    setResult(null);

    if (!text.trim()) {
      return setError('⚠️ Por favor, digite um texto para criptografar.');
    }

    try {
      const res = await encryptText(text);
      setResult(res);
    } catch (error) {
      setError(getErrorMessage(error));
    }
  };

  return (
    <div>
      <h2>Criptografar</h2>
      <textarea
        rows={4}
        placeholder="Digite o texto"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleEncrypt}>Criptografar</button>

      {error && <div className="error">{error}</div>}

      {result && (
        <div className="result">
          <p><strong>Criptografado:</strong> {result.encrypted}</p>
          <p><strong>Chave:</strong> {result.key}</p>
          <p><strong>IV:</strong> {result.iv}</p>
        </div>
      )}
    </div>
  );
}
