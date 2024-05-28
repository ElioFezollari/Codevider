import dog from "../../assets/dog.webp";
import cat from "../../assets/cat.webp";
import bird from "../../assets/bird.webp";

import eagle from '../../assets/eagle.mp4'
import { useState } from "react";
import { motion } from "framer-motion";
import { cardAnimation } from "../../Variants";

const Hero = () =>{
    const [animalHovered, setAnimalHovered] = useState(false);
    return (
      <section className="hero">
        <div>
          <h3>Browse through the most amazing animals.</h3>
          <p>Pick one of the following galleries to view the animal</p>
          <ul>
            <li>
              <a
                href=""
                onMouseEnter={() => setAnimalHovered("dog")}
                onMouseLeave={() => {
                  setAnimalHovered(false);
                }}
              >
                Dogs
              </a>
            </li>
            <li>
              <a
                href=""
                onMouseEnter={() => setAnimalHovered("cat")}
                onMouseLeave={() => {
                  setAnimalHovered(false);
                }}
              >
                Cats
              </a>
            </li>
            <li>
              <a
                href=""
                onMouseEnter={() => setAnimalHovered("bird")}
                onMouseLeave={() => {
                  setAnimalHovered(false);
                }}
              >
                Birds
              </a>
            </li>
          </ul>

        </div>
        <motion.div className="hero-img">
          <motion.video autoPlay muted loop src={eagle}
                    variants={cardAnimation}
                    initial="hidden"
                    animate={animalHovered === false ? "visible" : "hidden"}></motion.video>
          <motion.img
            variants={cardAnimation}
            initial="hidden"
            animate={animalHovered === "dog" ? "visible" : "hidden"}
            src={dog}
            alt="Picture of a dog"
          />
          <motion.img
            variants={cardAnimation}
            initial="hidden"
            animate={animalHovered === "cat" ? "visible" : "hidden"}
            src={cat}
            alt="Picture of a cat"
          />
          <motion.img
            variants={cardAnimation}
            initial="hidden"
            animate={animalHovered === "bird" ? "visible" : "hidden"}
            src={bird}
            alt="Picture of a cat"
          />
        </motion.div>
  
      </section>)
}
export default Hero