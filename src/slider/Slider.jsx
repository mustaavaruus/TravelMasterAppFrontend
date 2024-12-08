import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import s from './Slider.module.css';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="https://biz-nes.ru/wp-content/uploads/2023/06/kupi_gotoviy_biznes-805.jpg" className={s.imgWrapper} />
        <Carousel.Caption>
          <h3>Столовые</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://officenavigator.ru/upload/resize_cache/iblock/051/77uzl644794zcuuoqf4tiohvd7k9t32z/1350_700_2/vibrat_ofis.jpg" className={s.imgWrapper}/>
        <Carousel.Caption>
          <h3>Центральный офис</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://greenstore.ru/wp-content/uploads/kak-vybrat-optovyj-sklad-produktov-pitaniya-1-1024x685.jpg" className={s.imgWrapper} />
        <Carousel.Caption>
          <h3>Склад</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://balashover.ru/picture/news/35979_f78907fec1eea4d4d1844a1366abe70e.png" className={s.imgWrapper} />
        <Carousel.Caption>
          <h3>Поставщики</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;