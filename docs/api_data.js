define({ "api": [
  {
    "type": "get",
    "url": "/api/items/:id",
    "title": "Get Product by ID",
    "name": "get",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Product ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "author",
            "description": "<p>Author of the API.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>Item that match with the specified ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"author\": {\n    \"name\": String\n    \"lastname\": String\n  },\n  \"item\": {\n    \"id\": String,\n    \"title\": String,\n    \"price\": {\n       \"currency\": String,\n       \"amount\": Number,\n       \"decimals\": Number\n    },\n    \"picture\": String,\n    \"condition\": String,\n    \"free_shipping\": Boolean,\n    \"sold_quantity\": Number,\n    \"description\": String\n  }\n}",
          "type": "200"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"error\": \"Missing id parameter in path\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/product/routes.ts",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/items/",
    "title": "Search Products",
    "name": "search",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>Text for search in Product Title.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "author",
            "description": "<p>Author of the API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "categories",
            "description": "<p>Categories of items.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>Items that match with the specified search.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"author\": {\n    \"name\": String\n    \"lastname\": String\n  },\n  \"categories\": [ String, String ... ],\n  \"items\":[\n    {  \n      \"id\": String,\n      \"title\": String,\n      \"price\": {  \n          \"currency\": String,\n          \"amount\": Number,\n          \"decimals\": Number\n      },\n      \"picture\": String,\n      \"condition\": String,\n      \"free_shipping\": Boolean\n    }\n  ]\n}",
          "type": "200"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"error\": \"Missing parameter q\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/product/routes.ts",
    "groupTitle": "Product"
  }
] });
