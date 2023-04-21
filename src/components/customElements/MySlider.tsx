import Carousel from 'react-bootstrap/Carousel';

const MySlider = (): JSX.Element =>
<Carousel className='mt-4 mb-4' style={{
    display: 'block',
    width: '1000px',
    height: '350px !important',
    margin: '0 auto'
}}>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src="https://rozetked.me/images/uploads/mlXdqUmTryIZ.jpeg"
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
        src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614723742_172-p-foni-dlya-odezhdi-215.jpg"
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
        src="https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg"
        alt="Third slide"
    />

    <Carousel.Caption>
        <h3>Акссесуары</h3>
        <p>Различная акссесуары подходящее под ваше настроение</p>
    </Carousel.Caption>
    </Carousel.Item>
</Carousel>

export default MySlider;