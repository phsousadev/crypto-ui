import EncryptForm from './components/EncryptForm';
import DecryptForm from './components/DecryptForm';

export default function App() {
  return (
    <div className="container">
      <h1>Sistema de Criptografia AES</h1>
      <section>
        <EncryptForm />
      </section>
      <hr />
      <section>
        <DecryptForm />
      </section>
    </div>
  );
}
