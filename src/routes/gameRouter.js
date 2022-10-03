import express from "express"
import * as gameService from "../services/gameService"

const router = express.Router()

router.post("/", function (res, res)) {

    const newGame = gameService.createGame(req.body.name)
    if (!newGame) {
        return res.status(404).send("Not found")
    }
    res.status(201).json({ id: newGame.id, name: newGame.name })

}

export default router
