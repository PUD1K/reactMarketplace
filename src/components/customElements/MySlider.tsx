import Carousel from 'react-bootstrap/Carousel';
import notebookImg from '../../static/mlXdqUmTryIZ.jpeg'
import outfit from '../../static/1614723742_172-p-foni-dlya-odezhdi-215.jpg'
import cosmetica from '../../static/8ddfc54557334e96a2eac37ab491e1c5.jpg'


const MySlider = (): JSX.Element =>
<Carousel className='mt-4 mb-4'>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src={notebookImg}
        alt="First slide"
    />
    <Carousel.Caption>
        <h3>Компьютерная техника</h3>
        <p>Ноутбуки для работы, учебы и игр</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src={outfit}
        alt="Second slide"
    />

    <Carousel.Caption>
        <h3>Одежда</h3>
        <p>Мужская и женская одежда на любой вкус и сезон</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src={cosmetica}
        alt="Third slide"
    />

    <Carousel.Caption>
        <h3>Акссесуары</h3>
        <p>Различная акссесуары подходящее под ваше настроение</p>
    </Carousel.Caption>
    </Carousel.Item>
</Carousel>

export default MySlider;