import DayCard from "../dayCard";
import "./index.css";

const DayList = () => {
  const daysImage = [
    {
      id: 1,
      img: "src/assets/day-1.jpg",
      title: "day one",
    },
    {
      id: 2,
      img: "src/assets/day-2.jpg",
      title: "day two",
    },
    {
      id: 3,
      img: "src/assets/day-3.jpg",
      title: "day one",
    },
    {
      id: 4,
      img: "src/assets/day-4.jpg",
      title: "day two",
    },
    {
      id: 5,
      img: "src/assets/day-5.jpg",
      title: "day one",
    },
    {
      id: 6,
      img: "src/assets/day-6.jpg",
      title: "day two",
    },
    {
      id: 7,
      img: "src/assets/day-7.jpg",
      title: "day one",
    },
    {
      id: 8,
      img: "src/assets/day-8.jpg",
      title: "day two",
    },
    {
      id: 9,
      img: "src/assets/day-9.jpg",
      title: "day one",
    },
    {
      id: 10,
      img: "src/assets/day-10.jpg",
      title: "day two",
    },
    {
      id: 11,
      img: "src/assets/day-11.jpg",
      title: "day one",
    },
    {
      id: 12,
      img: "src/assets/day-12.jpg",
      title: "day two",
    },
    {
      id: 13,
      img: "src/assets/day-13.jpg",
      title: "day one",
    },
    {
      id: 14,
      img: "src/assets/day-14.jpg",
      title: "day two",
    },
    {
      id: 15,
      img: "src/assets/day-15.jpg",
      title: "day one",
    },
    {
      id: 16,
      img: "src/assets/day-16.jpg",
      title: "day two",
    },
    {
      id: 17,
      img: "src/assets/day-17.jpg",
      title: "day two",
    },
    {
      id: 18,
      img: "src/assets/day-18.jpg",
      title: "day two",
    },
    {
      id: 19,
      img: "src/assets/day-19.jpg",
      title: "day two",
    },
    {
      id: 20,
      img: "src/assets/day-20.jpg",
      title: "day two",
    },
    {
      id: 21,
      img: "src/assets/day-21.jpg",
      title: "day two",
    },
    {
      id: 22,
      img: "src/assets/day-22.jpg",
      title: "day two",
    },
    {
      id: 23,
      img: "src/assets/day-23.jpg",
      title: "day two",
    },
    {
      id: 24,
      img: "src/assets/day-24.jpg",
      title: "day two",
    },
    {
      id: 25,
      img: "src/assets/day-25.jpg",
      title: "day two",
    },
  ];

  return (
    <div className="wrapper__days">
      {daysImage.map((image) => (
        <DayCard dayObject={image} key={image.id} />
      ))}
    </div>
  );
};

export default DayList;
