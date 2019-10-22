import { Request, Response } from "express";
import { search, get } from "../../controllers/product/ProductController";

const isValidId = (id: String) => id.indexOf("MLA") === 0;

export default [
	{
		/**
		 * @api {get} /api/items/:id Get Product by ID
		 * @apiName get
		 * @apiGroup Product
		 *
		 * @apiParam {String} id Product ID.
		 *
		 * @apiSuccess {Object} author Author of the API.
		 * @apiSuccess {Object} item Item that match with the specified ID.
		 *
		 * @apiSuccessExample {200} Success-Response:
		 * HTTP/1.1 200 OK
		 * {
		 *   "author": {
		 *     "name": String
		 *     "lastname": String
		 *   },
		 *   "item": {
		 *     "id": String,
		 *     "title": String,
		 *     "price": {
		 *        "currency": String,
		 *        "amount": Number,
		 *        "decimals": Number
		 *     },
		 *     "picture": String,
		 *     "condition": String,
		 *     "free_shipping": Boolean,
		 *     "sold_quantity": Number,
		 *     "description": String
		 *   }
		 *   "categories": [ String, String ... ]
		 * }
		 *
		 * @apiErrorExample {json} Error-Response:
		 * HTTP/1.1 400 Bad request
		 * {
		 *   "code": 400,
		 *   "message": "Missing id parameter in path"
		 * }
		 */
		path: "/api/items/:id",
		method: "get",
		handler: [
			async (req: Request, res: Response, next: any) => {
				if (req.params.id && isValidId(req.params.id)) {
					res.status(200).send(await get(req.params.id));
				} else {
					res.status(400).send({ message: "Missing id parameter in path", code: 400 });
				}
			}
		]
	},
	{
		/**
		 * @api {get} /api/items/ Search Products
		 * @apiName search
		 * @apiGroup Product
		 *
		 * @apiParam {String} q Text for search in Product Title.
		 *
		 * @apiSuccess {Object} author Author of the API.
		 * @apiSuccess {String[]} categories Categories of items.
		 * @apiSuccess {Object[]} items Items that match with the specified search.
		 *
		 * @apiSuccessExample {200} Success-Response:
		 * HTTP/1.1 200 OK
		 * {
		 *   "author": {
		 *     "name": String
		 *     "lastname": String
		 *   },
		 *   "categories": [ String, String ... ],
		 *   "items":[
		 *     {
		 *       "id": String,
		 *       "title": String,
		 *       "price": {
		 *           "currency": String,
		 *           "amount": Number,
		 *           "decimals": Number
		 *       },
		 *       "picture": String,
		 *       "condition": String,
		 *       "free_shipping": Boolean
		 *     }
		 *   ]
		 * }
		 *
		 * @apiErrorExample {json} Error-Response:
		 * HTTP/1.1 400 Bad request
		 * {
		 *   "code": 400,
		 *   "message": "Missing parameter q"
		 * }
		 */
		path: "/api/items",
		method: "get",
		handler: [
			async (req: Request, res: Response) => {
				if (req.query.q) {
					res.status(200).send(await search(req.query.q));
				} else {
					res.status(400).send({ message: "Missing parameter q", code: 400 });
				}
			}
		]
	}
];
