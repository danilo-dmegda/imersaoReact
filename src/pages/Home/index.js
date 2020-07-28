import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carrousel from '../../components/Carousel'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={""} />
      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carrousel
        category={dadosIniciais.categorias[1]}
      />
      <Carrousel
        category={dadosIniciais.categorias[2]}
      />
      <Footer />
    </div>
  );
}

export default Home;
