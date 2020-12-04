import {BoardingHouse} from "../model/boardingHouse";

export default interface BoardingRepository{

   addBoarding(boarding:BoardingHouse):void;
    getAllBoarding():Promise<BoardingHouse[]>;

}
