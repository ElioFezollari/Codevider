import { useEffect, useState } from "react";
import { getAll } from "../Services/getAll";
const AnimalGallery = ({ animal,pictures }) => {
  const [animals, setAnimals] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState("");
  useEffect(() => {
    getAll(animal).then((animal) => setAnimals(animal));
  }, []);
console.log(animals)
  let filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(filteredSearch.toLowerCase())
  );

  return (
    <div className="animal-gallery">
      <div className="animal-gallery-wrapper">
        <input
          value={filteredSearch}
          onChange={(e) => setFilteredSearch(e.target.value)}
          className="animal-search"
          type="text"
          placeholder={` \u{1F50E} Search for ${animal}`}
        />
      </div>
      <div className="animal-card-wrapper">
        {filteredAnimals.length>0 ? (
          filteredAnimals.map((animal) => {
            return (
              <div className="animal-card" key={animal.id}>
                <div className="animal-card-image">
                  <img
                    src={
                      pictures[animal.name.toLowerCase().replace(/\s/g, "")]
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
          })
        ) : (
          <h5>Sorry, no {animal} match your search!</h5>
        )}
      </div>
    </div>
  );
};

export default AnimalGallery;
