import React from "react";
import Widget from "./Widget";

function Widgets() {
  const data = [
    {
      id: 1,
      img: "https://images.bewakoof.com/uploads/grid/app/DOTD-1613642030.png",
      title: "Design of the day",
    },
    {
      id: 2,
      img:
        "https://images.bewakoof.com/uploads/grid/app/FOTM-msite-highlight-box-1615556276.jpg",
      title: "Fabric of the month",
    },
    {
      id: 3,
      img:
        "https://images.bewakoof.com/uploads/grid/app/bewakoof-roots-to-ramp-indofusion-collection-highlight-box-1615306413.png",
      title: "Ethnic Fusion Wear",
    },
    {
      id: 4,
      img:
        "https://images.bewakoof.com/uploads/grid/app/buy-2-get-1-msite-highlight-box-1614010782.png",
      title: "Buy Two Get One Free",
    },
    {
      id: 5,
      img:
        "https://images.bewakoof.com/uploads/grid/app/clearance-1613642029.png",
      title: "Clearance Zone",
    },
    {
      id: 6,
      img:
        "https://images.bewakoof.com/uploads/grid/app/new-arrivals-1613642030.png",
      title: "New Arrivals",
    },
    {
      id: 7,
      img:
        "https://images.bewakoof.com/uploads/grid/app/Bestsellers-1603991978.png",
      title: "Bestsellers",
    },
    {
      id: 8,
      img: "https://images.bewakoof.com/uploads/grid/app/bazaar-1613642029.png",
      title: "Bazaar By Bewakoof",
    },
    {
      id: 9,
      img: "https://images.bewakoof.com/uploads/grid/app/winter-1613642032.png",
      title: "The Winter Store",
    },
    {
      id: 10,
      img:
        "https://images.bewakoof.com/uploads/grid/app/Collabs-1603994138.gif",
      title: "Collaborations",
    },
    {
      id: 11,
      img:
        "https://images.bewakoof.com/uploads/grid/app/cotm-msite-highlight-box-1614945600.jpg",
      title: "Color of the Month",
    },

    //https://images.bewakoof.com/uploads/grid/app/cotm-msite-highlight-box-1614945600.jpg
  ];
  return (
    <div className="widget">
      <div className="widget__wrapper">
        <div className="widgets">
          {data.map((widget, index) => (
            <Widget img={widget.img} key={index} title={widget.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Widgets;
