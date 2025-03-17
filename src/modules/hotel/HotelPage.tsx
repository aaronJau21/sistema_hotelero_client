import { useParams } from "react-router-dom";

const HotelPage = () => {
  const params = useParams();
  console.log(params, "PARAMS");
  return (
    <div>
      <h1>Hotel Page</h1>
      <br />
      <br />
      <br />
      <p>País: {params.pais}</p>
      <p>Ciudad: {params.ciudad}</p>
      <p>Hotel: {params.hotelName}</p>
    </div>
  );
};

export default HotelPage;
