"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductController_1 = require("../../controllers/product/ProductController");
exports.default = [
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
            (req, res) => __awaiter(void 0, void 0, void 0, function* () {
                if (req.query.q) {
                    res.status(200).send(yield ProductController_1.search(req.query.q));
                }
            })
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
            (req, res) => __awaiter(void 0, void 0, void 0, function* () {
                if (req.params.id) {
                    res.status(200).send(yield ProductController_1.get(req.params.id));
                }
            })
        ]
    }
];
//# sourceMappingURL=routes.js.map