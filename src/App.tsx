
import { Banner } from './componentes/banner';
import { Content } from './componentes/content';
import { Header } from './componentes/header';
import { Servicos } from './componentes/servicos';

import './App.css';

export function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Content />
      <Servicos />
    </div>
  );
}