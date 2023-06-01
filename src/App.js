import './assets/sass/app.sass'
import './assets/sass/signature.sass'
import Card from './components/Card'
import Signature from "./components/signature/Signature"
function App() {
  return (
    <main className="app">
      <Card />
      <Signature />
    </main>
  );
}

export default App;
