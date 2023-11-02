import Outfit from "./Outfit";
import {outfitImages} from '../data';


function OutfitList() {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 outfit-list justify-center items-center flex-wrap space-x-4 space-y-4 p-4 sm:p-8 lg:p-12">
            {outfitImages.map((project) =>{
                return <Outfit key={project.id} {...project}/>
            })}
        </div> 
    );
    
}

export default OutfitList;