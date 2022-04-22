import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export async function ensureAuthenticatedClient(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({
            message: 'Token missing'
        })
    }

    const [,token] = authHeader.split(" ")

    try {
        const { sub } = verify(token, 'b38558c7d49b8457152648426eedcdba') as IPayload

        req.id_client = sub

        return next()
    } catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
}