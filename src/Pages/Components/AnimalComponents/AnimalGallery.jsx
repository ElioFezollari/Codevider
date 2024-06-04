import { useEffect, useState } from "react";
import { getAll } from "../../Services/getAll";
import AnimalCard from "./AnimalCard";
import AnimalPopUp from '../AnimalComponents/AnimalPopUp'
import magnifying from "../../../assets/magnifying.svg";

const AnimalGallery = ({ animal, pictures }) => {
  const [animals, setAnimals] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState("");
  const [filteredSelect, setFilteredSelect] = useState();
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  useEffect(() => {
    getAll(animal).then((animal) => setAnimals(animal));
  }, []);

  let filteredAnimals = animals.filter(
    (animal) =>
      animal.name.toLowerCase().includes(filteredSearch.toLowerCase()) &&
      (!filteredSelect ||
        (animal.origin &&
          animal.origin.toLowerCase() === filteredSelect.toLowerCase()) ||
        (animal.place_of_found &&
          animal.place_of_found.toLowerCase() === filteredSelect.toLowerCase()))
  );

  const uniqueCategories = [];

  animals.forEach(animal => {
    if (animal.origin && !uniqueCategories.includes(animal.origin)) {
      uniqueCategories.push(animal.origin);
    }
    else if (animal.place_of_found && !uniqueCategories.includes(animal.place_of_found)) {
      uniqueCategories.push(animal.place_of_found);
    }
  });

  const cardClicked =(id) =>{
    setSelectedAnimal(id)
  }
  const popUpClosed = () =>{
    setSelectedAnimal(null);
  }

  
  return (
    <div className="animal-gallery">
      <div className="animal-gallery-wrapper">
        <div className="animal-search-wrapper">
          <input
            value={filteredSearch}
            onChange={(e) => setFilteredSearch(e.target.value)}
            className="animal-search"
            type="text"
            placeholder={` Search for ${animal}...`}
          />
          <img src={magnifying} alt="" />
        </div>
        <div>
        <select className="animal-select"
          name=""
          id=""
          onChange={(e) => setFilteredSelect(e.target.value)}
        >
          <option value="">Country of the animal</option>
          {uniqueCategories.map((category, index) => {
            return (
              <option key={index}>
                {category}
              </option>
            );
          })}
        </select>
        </div>
      </div>
      <div className="animal-card-wrapper">
        <AnimalCard
          cardClicked={cardClicked}
          filteredAnimals={filteredAnimals}
          animal={animal}
          pictures={pictures}
        />
      </div>

    {selectedAnimal &&(
        <AnimalPopUp animal={selectedAnimal} closePopUp={popUpClosed} pictures={pictures}/>
      )}
      
    </div>
  );
};

export default AnimalGallery;
