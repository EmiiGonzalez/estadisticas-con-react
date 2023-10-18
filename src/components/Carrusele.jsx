import Carousel from 'react-bootstrap/Carousel';

export const Carrusele = () => {
  return (
    <Carousel fade className="h-50">
      <Carousel.Item>
        <img src="src\img\1.jpg" alt="imagen" className="d-block w-100 h-100"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="src\img\2.jpg" alt="imagen" className="d-block w-100 h-100"/>
        <Carousel.Caption>
          <h3>Segunda slide</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="src\img\3.png" alt="imagen" className="d-block w-100 h-100"/>
        <Carousel.Caption>
          <h3>Tercera slide</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
