const { Product, Category, SubCategory, SubSubCategory } = require("../models");

module.exports = {
    async getAllProducts(req, res) {
        try {
            let products = await Product.findAll({
                order: [['createdAt', 'DESC']],
                includes: [
                    { model: Category },
                    { model: SubCategory },
                    { model: SubSubCategory },
                ],
            });
            res.send(products);
        } catch (err) {
            res.status(500).send ({
                error: 'Sorry, an error occured when trying to fetch the products.'
            });
        }
    },
    async topSellProduct(req, res) {
        try {
            let limit = req.params.limit;
            let products = await Product.findAll({
                limit: parseInt(limit),
                order: [['Sales', 'DESC']],
                attributes: [
                    "id",
                    "title",
                    "amount",
                    "rating",
                    "sales",
                    "currency",
                    "imageOne",
                    "CategoryId",
                    "SubCategory",
                    "SubSubCategory",
                ],
            });
            res.send(products);
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to fetch to sell peroducts.',
            });
        }
    },
    async newAddProduct(req, res) {
        try {
            let limit = req.params.limit;
            let products = await Product.findAll({
                limit: parseInt(limit),
                order: [['createdAt', 'DESC']],
                attributes: [
                    "id",
                    "title",
                    "amount",
                    "rating",
                    "sales",
                    "currency",
                    "imageOne",
                    "CategoryId",
                    "SubCategory",
                    "SubSubCategory",
                ],
            });
            res.send(products);
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to fetch recently added products.',
            });
        }
    },
    async getRecommendation(req, res) {
        try {
            let recommendation = await Product.findAll({
                where: {
                    SubSubCategoryId: req.params.SubSubCategoryId,
                },
                limit: parseInt(req.params.limit),
                order: [['createdAt', 'DESC']],
                attributes: [
                    "id",
                    "title",
                    "amount",
                    "rating",
                    "sales",
                    "currency",
                    "imageOne",
                    "CategoryId",
                    "SubCategory",
                    "SubSubCategory",
                ],
            });
            res.send(recommendation);
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to fetch recommended products.'
            });
        }
    },
    async getProductSales(req, res) {
        try {
            let product = await Product.findById(req.params.productId, {
                attributes: ["Sales"],
            });
            res.send(product);
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to fetch a product sales',
            });
        }
    },
    async getProduct(req, res) {
        try {
            let product = await Product.findById(req.params.productId);
            res.send(product);
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to fetch a product.',
            });
        }
    },

    async getProductId(req, res) {
        try {
            let product = await Product.findOne({
                where: {
                    title: decodeURLComponent(req.params.productTitle),
                },
            });
            res.send(String(product.id));
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to fetch a product.',
            });
        }
    },
    async getProductRating(req, res) {
        try {
            let product = await Product.findById(req.params.productId, {
                attributes: ["rating", "peopleRated"],  
            });
            res.send(product);
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to fetch a product.'
            });
        }
    },

    async createProduct(req, res) {
        try {
            if (req.files != undefined) {
                req.body.imageOne = "http://127.0.0.1:8098/" + req.files[0].path;
                if (req.files[1] != undefined) {
                    req.body.image2 = "http://localhost:8084/" + req.files[1].path;
                    if (req.files[2] != undefined) {
                      req.body.image3 = "http://localhost:8084/" + req.files[2].path;
                      if (req.files[3] != undefined) {
                        req.body.image4 = "http://localhost:8084/" + req.files[3].path;
                        if (req.files[4] != undefined) {
                          req.body.image5 = "http://localhost:8084/" + req.files[4].path;
                          if (req.files[5] != undefined) {
                            req.body.image6 =
                              "http://localhost:8084/" + req.files[5].path;
                            if (req.files[6] != undefined) {
                              req.body.image7 =
                                "http://localhost:8084/" + req.files[6].path;
                              if (req.files[7] != undefined) {
                                req.body.image8 =
                                  "http://localhost:8084/" + req.files[7].path;
                                if (req.files[8] != undefined) {
                                  req.body.image9 =
                                    "http://localhost:8084/" + req.files[8].path;
                                  if (req.files[9] != undefined) {
                                    req.body.image10 =
                                      "http://localhost:8084/" + req.files[9].path;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }

                let product = await Product.create(req.body);
                res.send({ id: product.id });
            } catch (err) {
                res.status(500).send ({
                    error: 'Sorry, an error occured when trying to create a product.',
                });
            }
        },
        async updateProduct(req, res) {
            try {
                await Product.update(req.body, {
                    where: {
                        id: req.body.id,
                    },
                });
                res.send(req.body);
            } catch (err) {
                res.status(500).send({
                    error: 'Sorry, an error occured when trying to update a product.',
                });
            }
        },
        async deleteProduct(req, res) {
            try {
                let productId = req.params.productId;
                let product = await Product.findById(productId);
                if(!product) {
                    return res.status(403).send({
                        error: 'Sorry, no product to delete.',
                    });
                }
                await product.destroy();
                res.send(product);
            } catch (err) {
                res.status(500).send({
                    error: 'Sorry, an error occured when trying to delete a product.',
                });
            }
        },
    };