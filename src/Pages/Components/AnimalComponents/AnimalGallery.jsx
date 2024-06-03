import { useEffect, useState } from "react";
import { getAll } from "../../Services/getAll";
import AnimalCard from "./AnimalCard";
import magnifying from '../../../assets/magnifying.svg'
const AnimalGallery = ({ animal,pictures }) => {
  const [animals, setAnimals] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState("");
  useEffect(() => {
    getAll(animal).then((animal) => setAnimals(animal));
  }, []);
  let filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(filteredSearch.toLowerCase())
  );

  return (
    <div className="animal-gallery">
      <div className="animal-gallery-wrapper">
        <div className="animal-search-wrapper">
        <input
          value={filteredSearch}
          onChange={(e) => setFilteredSearch(e.target.value)}
          className="animal-search"
          type="text"
          placeholder={` Search for ${animal}`}
        />
        <img src={magnifying} alt="" />
      </div>
      </div>
      <div className="animal-card-wrapper">
        <AnimalCard filteredAnimals={filteredAnimals} animal={animal} pictures={pictures}/>
      </div>
    </div>
  );
};

export default AnimalGallery;
