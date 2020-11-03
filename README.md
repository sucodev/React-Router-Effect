## React Router Effect - Version 0.1
Para começar a utilizar o React Router Effect, será necessário instalar o : react-router-dom ( versão 6.0 beta )

### Instalação : 
1) yarn add history babel-types react-router-dom@next;
2) npm i history react-router-dom@next;

### Exemplos de uso : 
Dentro de Routes, declare o componente RouterEffect e passe como parâmetro o tempo em que o componente será renderizado em tela.
Já, para aplicar as animações nos componentes será preciso declarar em um estilo global as classes que estão no arquivo style.css 
No Exemplo abaixo, o componente <Contact/>, levará 500ms para ser renderizado após o clique do usuário.

 <Routes>
  <RouterEffect path="/" element={<Home />} time={600} end />
  <RouterEffect path="about" element={<About />} time={800} />
  <RouterEffect path="contact" element={<Contact />} time={500} />
  <RouterEffect path="p/:id" element={<Post />} time={500} />
  <RouterEffect path="*" element={<NotExist />} time={500} />
 </Routes>
 
 ### Componente Contato
 
 import React from 'react';
 import { Container } from './style';

  const Contact = () => {
    return (
      <Container className="fadeOut">
        <h2>Support</h2>
        <p>Fale conosco</p>
      </Container>
    );
  };

export default Contact;

### Componente Com Link

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    async function getAllPost(url) {
      const response = await fetch(url);
      const json = await response.json();
      setPosts(json);
    }
    getAllPost('http://localhost:1337/postagens');
  }, []);

  if (posts === null) return null;

  return (
    <>
      <Container className="fadeIn"> // Neste exemplo foi usado a animação fadeIn
        <h1>
          Um site simples usando reactjs
        </h1>
      </Container>
      <Posts className="fadeIn">
        {posts.map((post) => (
          <Link key={post.id} to={`p/${post.id}`}>
            <img
              src={`http://localhost:1337${post.imagem[0].url}`}
              alt={post.Titulo}
            />
          </Link>
        ))}
      </Posts>
    </>
  );
};

export default Home;

