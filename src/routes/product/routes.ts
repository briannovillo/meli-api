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
		 * @apiSuccess {String[]} categories Categories of items.
		 *
		 * @apiSuccessExample {200} Success-Response: 200
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
		 * @apiErrorExample {json} Error-Response: 400
		 * HTTP/1.1 400 Bad request
		 * {
		 *   "code": 400,
		 *   "message": "Missing id parameter in path"
		 * }
		 * 
		 * @apiErrorExample {json} Error-Response: 404
		 * HTTP/1.1 404 Not Found
		 * {
		 *   "code": 404,
		 *   "message": "Item with id MLA6224275519 not found"
		 * }
		 */
		path: "/api/items/:id",
		method: "get",
		handler: [
			async (req: Request, res: Response, next: any) => {
				try {
					if (req.params.id && isValidId(req.params.id)) {
						res.status(200).json(await get(req.params.id));
					} else {
						res.status(400).json({ code: 400, message: "Missing id parameter in path" });
					}
				} catch(e) {
					res.status(e.status).json({ code: e.status, message: e.message });
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
		 * @apiSuccessExample {200} Success-Response: 200
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
		 * @apiErrorExample {json} Error-Response: 400
		 * HTTP/1.1 400 Bad request
		 * {
		 *   "code": 400,
		 *   "message": "Missing parameter q"
		 * }
		 * @apiErrorExample {json} Error-Response: 404
		 * HTTP/1.1 404 Not Found
		 * {
		 *   "code": 404,
		 *   "message": "No Data Found"
		 * }
		 */
		path: "/api/items",
		method: "get",
		handler: [
			async (req: Request, res: Response) => {
				try {
					if (req.query.q) {
						res.status(200).json(await search(req.query.q));
					} else {
						res.status(400).json({ code: 400, message: "Missing parameter q" });
					}
				} catch(e) {
					res.status(404).json({ code: 404, message: e.message });
				}
			}
		]
	}
];
