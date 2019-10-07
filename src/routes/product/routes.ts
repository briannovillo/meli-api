import { Request, Response, NextFunction } from "express";
import { search, get } from "../../controllers/product/ProductController";

export default [
  {
   /**
   * @api {get} /api/items/ Search Products
   * @apiName search
   * @apiGroup Product
   *
   * @apiParam {String} q Text for search in Product Title.
   *
   * @apiSuccess {Object} product.
   */
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
   /**
   * @api {get} /api/items/:id Get Product by ID
   * @apiName get
   * @apiGroup Product
   *
   * @apiParam {String} id Product ID.
   *
   * @apiSuccess {Object} product.
   */
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