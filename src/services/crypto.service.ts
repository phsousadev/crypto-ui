import type { DecryptRequest, EncryptResponse } from "../types/crypto";

const BASE_URL = 'http://127.0.0.1:3001';

export async function encryptText(text: string): Promise<EncryptResponse> {
  const response = await fetch(`${BASE_URL}/encrypt`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) throw new Error('Erro ao criptografar');
  return response.json();
}

export async function decryptText(data: DecryptRequest): Promise<{ text: string }> {
  const response = await fetch(`${BASE_URL}/decrypt`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error('Erro ao descriptografar');
  return response.json();
}
