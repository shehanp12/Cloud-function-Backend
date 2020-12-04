import BoardingRepository from "../boardingRepository";
import  {BoardingHouse} from "../../model/boardingHouse";
import db from "../../utils/firestore";

const boardingRef= db.collection('BoardingHouse');

export  default  class BoardingHouseImpl implements   BoardingRepository{
     async addBoarding(boarding: BoardingHouse): Promise<void> {
         try{
             console.log(boarding)
             const res= await boardingRef.add(boarding);
             await  boardingRef.doc(res.id).update({id:res.id})

         }
         catch (e) {
             console.log(e)
         }
    }

    getAllBoarding(): Promise<BoardingHouse[]> {

        return Promise.resolve([]);
    }

}
