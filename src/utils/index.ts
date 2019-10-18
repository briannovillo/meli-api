import { Router, Request, Response, NextFunction } from "express";

type Middleware = (router: Router) => void;

export const applyMiddlewares = (middlewares: Middleware[], router: Router) => middlewares.forEach(
  wrapper => wrapper(router)
);

type Handler = (req: Request, res: Response, next: NextFunction) => Promise<void>;

type Route = {
  path: string; 
  method: string; 
  handler: Handler[];
};

export const applyRoutes = (routes: Route[], router: Router) => routes.forEach(
  (route: Route) => {
    const { path, method, handler } = route;
    (router as any)[method](path, handler);
  }
);