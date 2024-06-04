import close from "../../../assets/close.svg";
const AnimalPopUp = ({ animal, closePopUp, pictures }) => {
  return (
    <div className="pop-up-wrapper">
      <div className="animal-pop-up">
        <div className="pop-up-button-wrapper">
          <div className="pop-up-content-wrapper">
            <button onClick={() => closePopUp()} className="pop-up-button">
              <img src={close} />
            </button>
            <div>
              <img
                className="animal-image"
                src={pictures[animal.name.toLowerCase().replace(/[\s-]/g, "")]}
                alt="picture of an animal"
              />
              <div className="heading-pop-up">
                <h4>Main Details</h4>
                <p>Name: {animal.name}</p>
                {animal.origin ? (
                  <p>Country of origin: {animal.origin}</p>
                ) : (
                  <p>
                    Country in which this bird can be found:{" "}
                    {animal.place_of_found}
                  </p>
                )}
              </div>
            </div>
            <div className="text-pop-up">
              <div className="additional-details-header">
                <h4>Additional Details</h4>
              </div>
              <div className="additional-details">
                {animal.temperament ? (
                  <p>
                    {animal.name}'s temperament: {animal.temperament}
                  </p>
                ) : (
                  <p>
                    {animal.name}'s species: {animal.species}
                  </p>
                )}
                {animal.colors ? (
                  <p>
                    {animal.name}'s colours:{" "}
                    {animal.colors.map((color) => color + " ")}
                  </p>
                ) : (
                  <p>
                    {animal.name}'s family: {animal.family}
                  </p>
                )}
                {animal.breed_group && (
                  <p>
                    {animal.name}'s breed group: {animal.breed_group}'s
                  </p>
                )}
                {animal.size && (
                  <p>
                    {animal.name}'s size: {animal.size}'s
                  </p>
                )}
                {animal.lifespan && (
                  <p>
                    {animal.name}'s lifespan: {animal.lifespan}
                  </p>
                )}
                {animal.habitat && (
                  <p>
                    {animal.name}'s habitat: {animal.habitat}
                  </p>
                )}
                {animal.diet && (
                  <p>
                    {animal.name}'s diet: {animal.diet}
                  </p>
                )}
                {animal.weight_kg && (
                  <p>
                    {animal.name}'s weight in kg: {animal.weight_kg}kg
                  </p>
                )}
                {animal.wingspan_cm && (
                  <p>
                    {animal.name}'s wingspan in cm: {animal.wingspan_cm}cm
                  </p>
                )}
                <p>Short Description: {animal.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pop-up-overlay"></div>
    </div>
  );
};
export default AnimalPopUp;
