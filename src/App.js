import React from 'react'
import './App.css';
import { Header } from './components/header/Header'
import { HeadButton } from './components/header/HeadButton'
import { MainBody } from './components/body/MainBody'
import { Bar } from './components/body/Bar'
import { ContentBody } from './components/body/ContentBody'
import { ProductCard } from './components/products/ProductCard'
import {Article} from './components/body/Article'

function App() {
  return (
    <div className="App">
      <Header src='https://www.matrix42.com/resource/image/103682/landscape_ratio3x2/1200/800/9066b78b1084065d2662e01f8f6de07e/nJ/zf-friedrichshafen-ag-logo-img.jpg'>
        <HeadButton title='Menu' />
        <HeadButton title='Address' />
        <HeadButton title='About' />
      </Header>
      <MainBody>
        <Bar></Bar>
        <ContentBody>
          <ProductCard title='Набір інструментів' url='https://content.rozetka.com.ua/goods/images/preview/11177915.jpg' description='Материал: хром-ванадиевая сталь Вес 6 кг' price='1562 грн.' />
          <ProductCard title='Набір інструментів' url='https://content.rozetka.com.ua/goods/images/preview/11177915.jpg' description='Материал: хром-ванадиевая сталь Вес 6 кг' price='1562 грн.' />
          <ProductCard title='Набір інструментів' url='https://content.rozetka.com.ua/goods/images/preview/11177915.jpg' description='Материал: хром-ванадиевая сталь Вес 6 кг' price='1562 грн.' />
          <ProductCard title='Набір інструментів' url='https://content.rozetka.com.ua/goods/images/preview/11177915.jpg' description='Материал: хром-ванадиевая сталь Вес 6 кг' price='1562 грн.' />
          <ProductCard title='Набір інструментів' url='https://content.rozetka.com.ua/goods/images/preview/11177915.jpg' description='Материал: хром-ванадиевая сталь Вес 6 кг' price='1562 грн.' />
          <ProductCard title='Набір інструментів' url='https://content.rozetka.com.ua/goods/images/preview/11177915.jpg' description='Материал: хром-ванадиевая сталь Вес 6 кг' price='1562 грн.' />
          <ProductCard title='Набір інструментів' url='https://content.rozetka.com.ua/goods/images/preview/11177915.jpg' description='Материал: хром-ванадиевая сталь Вес 6 кг' price='1562 грн.' />
        </ContentBody>
        <Bar>
          <Article title='Article' url='https://seeklogo.com/images/I/IMG-logo-931DB0D0DA-seeklogo.com.gif' description='Обтекание картинки текстом обычно используется для компактного размещения материала и связывания между собой иллюстраций и текста. Само обтекание создаётся с помощью '/>
          <Article title='Article' url='https://seeklogo.com/images/I/IMG-logo-931DB0D0DA-seeklogo.com.gif' description='Обтекание картинки текстом обычно используется для компактного размещения материала и связывания между собой иллюстраций и текста. Само обтекание создаётся с помощью '/>
          <Article title='Article' url='https://seeklogo.com/images/I/IMG-logo-931DB0D0DA-seeklogo.com.gif' description='Обтекание картинки текстом обычно используется для компактного размещения материала и связывания между собой иллюстраций и текста. Само обтекание создаётся с помощью '/>
          <Article title='Article' url='https://seeklogo.com/images/I/IMG-logo-931DB0D0DA-seeklogo.com.gif' description='Обтекание картинки текстом обычно используется для компактного размещения материала и связывания между собой иллюстраций и текста. Само обтекание создаётся с помощью '/>
        </Bar>
      </MainBody>

    </div>
  );
}

export default App;
