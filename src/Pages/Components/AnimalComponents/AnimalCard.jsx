import { motion } from "framer-motion";
import {textAnimation} from '../../../Variants'

const AnimalCard = ({ filteredAnimals,pictures }) => {
    return (
      <>
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((animal) => {
            return (
              <motion.div
                variants={textAnimation}
                viewport={{ once: true }}
                initial="hiddenY"
                whileInView="visible"
                className="animal-card"
                key={animal.id}
              >
                <div className="animal-card-image">
                  <img
                    src={pictures[animal.name.toLowerCase().replace(/[\s-]/g, "")]}
                    alt=""
                  />
                </div>
                <div className="animal-card-text">
                  <h4>{animal.name}</h4>
                  {animal.origin && <p>Country of origin: {animal.origin}</p>}
                  {animal.place_of_found && (
                    <p>Can be found in: {animal.place_of_found}</p>
                  )}
                  <p className="read-more">Read More...</p>
                </div>
              </motion.div>
            );
          })
        ) : (
          <h5>Sorry, no animals match your search!</h5>
        )}
      </>
    );
  };

  export default AnimalCard