import BoardingRepository from "../repositories/boardingRepository";
import BoardingHouseImpl from "../repositories/firestore/boardingHouseImpl";
import {BoardingHouse} from "../model/boardingHouse";


const boardingRepository:BoardingRepository = new BoardingHouseImpl();

export default class  BoardingService{

    async  getAllBoarding(): Promise<BoardingHouse[]>{

        try{
            return  await  boardingRepository.getAllBoarding();
        }
        catch (e) {
            throw  e;

        }


    }

    async addBoarding(boarding:BoardingHouse) :Promise<void> {
            try {
                await boardingRepository.addBoarding(boarding);
            }
            catch (e) {
                throw  e;

            }
    }
}
