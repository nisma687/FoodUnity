import { Container, Card } from 'react-bootstrap';

const FoodWaste = () => {
  const videos = [
    "https://www.youtube.com/embed/EwS2Xc2IT_0?si=4uY9_OHl-LokU77j",
    "https://www.youtube.com/embed/ishA6kry8nc?si=yDNn9_5OlCpK2tsz",
   "https://www.youtube.com/embed/QvkDDA62-tw?si=sb0GKQzdX5cYNsq2"
  ];

  return (
    <div className="mt-2 mb-2">
      <Container>
        <h4 className="text-2xl text-center
        text-purple-900 font-bold mt-5 mb-5
        ">
          Say No to Food Waste
        </h4>
        <h3 className="text-xl font-semibold text-center text-purple-600">Watch Our Videos to 
            learn More About it</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          {videos.map((video, index) => (
            <Card key={index} className="mx-2">
              <Card.Body>
                <iframe
                  width="320"  // Set the width to make the video smaller
                  height="180" // Set the height to make the video smaller
                  src={video}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FoodWaste;
