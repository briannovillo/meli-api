import { Request, Response, NextFunction } from "express";
import { search, get } from "../../controllers/product/ProductController";

export default [
  {
    path: "/api/items",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        if (req.query.q) {
          res.status(200).send(await search(req.query.q));
        }
      }
    ]
  },
  {
    path: "/api/items/:id",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        if(req.params.id) {
          res.status(200).send(await get(req.params.id));
        }
      }
    ]
  }
];