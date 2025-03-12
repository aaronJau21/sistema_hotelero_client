import { useParams } from "react-router-dom";

const HotelPage = () => {
  const params = useParams();

  return (
    <div>
      <h1>Hotel Page</h1>
      <br />
      <br />
      <br />
      <p>País: {params.country}</p>
      <p>Ciudad: {params.city}</p>
      <p>Hotel: {params.hotel}</p>
    </div>
  );
};

export default HotelPage;
