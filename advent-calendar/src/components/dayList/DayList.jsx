import DayCard from "../dayCard";
import "./index.css";

const DayList = () => {
  const daysImage = [
    {
      id: 1,
      img: "./assets/day-1.jpg",
      title: "day one",
    },
    {
      id: 2,
      img: "./assets/day-2.jpg",
      title: "day two",
    },
    {
      id: 3,
      img: "./assets/day-3.jpg",
      title: "day one",
    },
    {
      id: 4,
      img: "./assets/day-4.jpg",
      title: "day two",
    },
    {
      id: 5,
      img: "./assets/day-5.jpg",
      title: "day one",
    },
    {
      id: 6,
      img: "./assets/day-6.jpg",
      title: "day two",
    },
    {
      id: 7,
      img: "./assets/day-7.jpg",
      title: "day one",
    },
    {
      id: 8,
      img: "./assets/day-8.jpg",
      title: "day two",
    },
    {
      id: 9,
      img: "./assets/day-9.jpg",
      title: "day one",
    },
    {
      id: 10,
      img: "./assets/day-10.jpg",
      title: "day two",
    },
    {
      id: 11,
      img: "./assets/day-11.jpg",
      title: "day one",
    },
    {
      id: 12,
      img: "./assets/day-12.jpg",
      title: "day two",
    },
    {
      id: 13,
      img: "./assets/day-13.jpg",
      title: "day one",
    },
    {
      id: 14,
      img: "./assets/day-14.jpg",
      title: "day two",
    },
    {
      id: 15,
      img: "./assets/day-15.jpg",
      title: "day one",
    },
    {
      id: 16,
      img: "./assets/day-16.jpg",
      title: "day two",
    },
    {
      id: 17,
      img: "./assets/day-17.jpg",
      title: "day two",
    },
    {
      id: 18,
      img: "./assets/day-18.jpg",
      title: "day two",
    },
    {
      id: 19,
      img: "./assets/day-19.jpg",
      title: "day two",
    },
    {
      id: 20,
      img: "./assets/day-20.jpg",
      title: "day two",
    },
    {
      id: 21,
      img: "./assets/day-21.jpg",
      title: "day two",
    },
    {
      id: 22,
      img: "./assets/day-22.jpg",
      title: "day two",
    },
    {
      id: 23,
      img: "./assets/day-23.jpg",
      title: "day two",
    },
    {
      id: 24,
      img: "./assets/day-24.jpg",
      title: "day two",
    },
    {
      id: 25,
      img: "./assets/day-25.jpg",
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
