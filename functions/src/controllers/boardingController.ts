import {Request,Response} from "express";
import {BoardingHouse} from "../model/boardingHouse";
import BoardingService from "../services/boardingService";

const express = require("express");
const  router = express.Router();

const boardingService : BoardingService = new BoardingService();

router.get('/',async function (req:Request,res:Response) {
    try{
        const boardingList: null | BoardingHouse[] = await  boardingService.getAllBoarding();
        res.status(200).send(boardingList)
    }
    catch (e) {
        console.log(e)
        res.status(500).send(e.message)
    }
})

router.post('/', async function(req: Request, res:Response) {
    try{
        const boardingList:BoardingHouse = req.body;
        await boardingService.addBoarding(boardingList)
        res.status(200).send();
    }catch (e) {
        console.log(e);
        res.status(500).send(e.message);
    }

});


module.exports = router;
