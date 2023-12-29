import CityRooms from "../City Rooms/CityRooms";
import TopCategory from "../top Category/TopCategory";

const MainSection = () => {
  return (
    <div className="mainSection py-14">
      <TopCategory />
      <CityRooms />
    </div>
  );
};

export default MainSection;
