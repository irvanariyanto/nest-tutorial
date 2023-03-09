import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('ValidateCustomer');
    const { authorization } = req.headers;
    if (!authorization)
      return res
        .status(403)
        .send({ error: 'No Authentication Token Provided' });

    if (authorization === '123') {
      next();
    } else {
      return res
        .status(403)
        .send({ error: 'Invalid Authentication Token Provided.' });
    }
  }
}
