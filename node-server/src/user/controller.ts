import { Request, Response } from 'express';

export const get = (req: Request, res: Response) => {
    res.json({
        data: {
            name: 'John Doe'
        }
    })
}

export const getById = (req: Request, res: Response) => {
    const { id } = req.params;
    res.status(200).send({
        data: {
            id
        }
    })
}

export const post = (req: Request, res: Response) => {

}

export const put = (req: Request, res: Response) => {

}