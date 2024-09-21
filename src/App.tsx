
import { Banner } from './componentes/banner';
import { Content } from './componentes/content';
import { Header } from './componentes/header';
import { Servicos } from './componentes/servicos';
import { Projetos } from './componentes/Projetos';
import { Footer } from './componentes/footer';
import { ContactForm }from './componentes/form';

import './App.css';

export function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Content />
      <Servicos />
      <Projetos />
      <ContactForm />
      <Footer />
    </div>
  );
}