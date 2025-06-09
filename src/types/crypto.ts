export interface EncryptResponse {
  encrypted: string;
  key: string;
  iv: string;
}

export interface DecryptRequest {
  encrypted: string;
  key: string;
  iv: string;
}
