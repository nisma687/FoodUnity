
import { Carousel } from
 'flowbite-react';

const Banner = () => {
    return (

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 lg:h-30rem mt-2 mb-4">

      <Carousel leftControl="left" rightControl="right">
        <img src="https://i.ibb.co/Wz273QT/1.jpg" alt="..." />
        <img src="https://i.ibb.co/8MgqRxc/2p.jpg" alt="..." />
        <img src="https://i.ibb.co/GM1Rc3X/istockphoto-1333790678-1024x1024.jpg" alt="..." />
        <img src="https://i.ibb.co/8zcRqvG/istockphoto-1311922883-1024x1024.jpg" alt="..." />
        
      </Carousel>
    </div>
    );
};

export default Banner;