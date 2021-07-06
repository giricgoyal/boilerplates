import { Request, Response } from 'express'

export const func = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({
            message: 'ok',
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'An error occured',
        })
    }
}
