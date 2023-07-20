import express from 'express'
import {
    getGames,
    getGamebyId,
    deleteGame,
    editGame,
    addGame
} from '../controller/game.js'



const router = express.Router()

router.get("/", async (req, res) => {
    const games = await getGames()
    return res.json(games)
})

router.post("/", async (req, res) => {
    const game = await addGame(req, res)
    return res.json(game)
})

router.delete("/:id", async (req, res) => {
    const game = await deleteGame(req)
    return res.json(game)
})

router.get("/id/:id", async (req, res) => {
    const game = await getGamebyId(req, res)
    return res.json(game)
})

router.put("/:id", async (req, res) => {
    const game = await editGame(req, res)
    return res.json(game)
})


export default router