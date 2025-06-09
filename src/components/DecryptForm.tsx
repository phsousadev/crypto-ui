import { useState } from 'react';
import type { DecryptRequest } from '../types/crypto';
import { decryptText } from '../services/crypto.service';
import { getErrorMessage } from '../utils/error-helper';

export default function DecryptForm() {
  const [form, setForm] = useState<DecryptRequest>({ encrypted: '', key: '', iv: '' });
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleDecrypt = async () => {
    setError('');
    setResult('');

    const { encrypted, key, iv } = form;

    if (!encrypted.trim() || !key.trim() || !iv.trim()) {
      return setError('⚠️ Todos os campos são obrigatórios para descriptografar.');
    }

    try {
      const res = await decryptText(form);
      setResult(res.text);
    } catch (error) {
      setError(getErrorMessage(error));
    }
  };

  return (
    <div>
      <h2>Descriptografar</h2>
      <textarea
        rows={3}
        placeholder="Texto criptografado"
        value={form.encrypted}
        onChange={e => setForm({ ...form, encrypted: e.target.value })}
      />
      <input
        placeholder="Chave"
        value={form.key}
        onChange={e => setForm({ ...form, key: e.target.value })}
      />
      <input
        placeholder="IV"
        value={form.iv}
        onChange={e => setForm({ ...form, iv: e.target.value })}
      />
      <button onClick={handleDecrypt}>Descriptografar</button>

      {error && <div className="error">{error}</div>}
      {result && (
        <div className="result">
          <p><strong>Texto Original:</strong> {result}</p>
        </div>
      )}
    </div>
  );
}
