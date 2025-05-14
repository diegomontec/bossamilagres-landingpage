import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

interface CarouselProps {
  images: string[];
  altTextPrefix?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, altTextPrefix }) => {
  return (
    <CCarousel controls indicators interval={2000} touch transition="crossfade">
      {images.map((image, index) => (
        <CCarouselItem key={index}>
          <CImage
            className="d-block w-full rounded-md"
            src={image}
            alt={`${altTextPrefix} ${index + 1}`}
          />
        </CCarouselItem>
      ))}
    </CCarousel>
  );
};

export default Carousel;
