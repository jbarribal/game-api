import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const addGame = async (req, res) => {
    
        try {
    
            const game = await prisma.game.create({
                data: req.body
            })
    
            return game
    
        } catch (e) {
            console.log(e)
            
        }
}

export const getGames = async (req, res) => {

    try {

        let games = await prisma.game.findMany()
        if(!games) {
            return res.json({message: 'No games found'})
        }
        return games
        
    }catch(error) {
        console.log(error)
       
    }

}

export const getGamebyId = async (req, res) => {

   try{
    const { id }  = req.params
    let game = await prisma.game.findUnique({
        where: {id: id}
    })

    if(!game) {
        res.status(404).json({error: 'No game found'})
        return

    }
    return game

   }catch(error) {
       console.log(error)
     
   }


}

export const deleteGame = async (req,res) => {
    try{

        const { id } = req.params
        const game = await prisma.game.delete({
            where: {id: id}
        })

        return game

    } catch(e) {
        console.log(e)
        
    }
}

export const editGame = async (req, res) => {

    try {

        const { id } = req.params
        const game = await prisma.game.update({
            where: {id: id},
            data: req.body
        })

        return game


    } catch (e) {
        console.log(e)
        

    }

}