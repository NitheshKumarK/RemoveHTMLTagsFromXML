import './App.css';
import Header from './components/Header';
let app = {
  title: "Indecision app"
};
function App() {
  return (
    <Header title={app.title}/>
  );
}

export default App;
