import express from "express"
import * as gameService from "../services/gameServices"

const router = express.Router()

router.post("/", function (req, res) {
    if (!req.body.name) {
      return res.status(400).send("Missing name parameter")
    }
    const newGame = gameService.createGame(req.body.name)
    res.status(201).json({ id: newGame.id, name: newGame.name })
  })

export default router
