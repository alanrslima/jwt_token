import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'


export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).json({
      message: 'Token is missign'
    })
  }

  const [, token] = authToken.split(" ");
  try {
    verify(token, "46dad1ae-53e5-11ec-bf63-0242ac130002")
    return next();
  } catch (error) {
    return res.status(401).json({
      message: 'Token invalid'
    })
  }

}