import { useEffect, useState } from "react";
import { getAll } from "../Services/getAll";
import dogPictures from "../Services/DogPictures";
const AnimalGallery = ({ animal }) => {
  const [animals, setAnimals] = useState();
  const setAllAnimals = async () => {
    const newAnimals = await getAll(animal);
    setAnimals(newAnimals);
  };
  useEffect(() => {
    setAllAnimals();
  }, []);
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 7000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div className="animal-gallery">
      <div className="animal-gallery-wrapper">
        <input
          className="animal-search"
          type="text"
          placeholder={` \u{1F50E} Search for ${animal}`}
        />
      </div>
      <div className="animal-card-wrapper">
        {animals &&
          animals.map((animal) => {
            return (
              <div
                className="animal-card"
                options={defaultOptions}
                key={animal.id}
              >
                <div className="animal-card-image">
                <img
                  src={
                    dogPictures[animal.name.toLowerCase().replace(/\s/g, "")]
                  }
                  alt=""
                />
                </div>
                <div className="animal-card-text">
                <h4>{animal.name}</h4>
                <p>Country of origin: {animal.origin}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AnimalGallery;
