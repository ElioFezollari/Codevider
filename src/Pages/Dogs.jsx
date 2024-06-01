import AnimalHero from "./Components/AnimalHero"
import dogSwimming from '../assets/dog-swimming.mp4'
import AnimalGallery from "./Components/AnimalGallery"
const Dogs = () =>{
    return(
        <>
        <AnimalHero video={dogSwimming} animal={'dogs'}/>
        <AnimalGallery/>
        </>
    )
}
export default Dogs