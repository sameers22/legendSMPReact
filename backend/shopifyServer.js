require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const SHOPIFY_STORE = "legendchefsauce.com";  // Replace with your store domain
const SHOPIFY_STOREFRONT_API_TOKEN = "8979c4d8168e7a532a32059a5834885b"; // Replace with your token

const GRAPHQL_ENDPOINT = `https://${SHOPIFY_STORE}/api/2023-10/graphql.json`;

// ✅ Fetch Products from Shopify
app.get('/api/shopify-products', async (req, res) => {
    try {
        const response = await axios.post(
            GRAPHQL_ENDPOINT,
            {
                query: `
                    {
                        products(first: 10) {
                            edges {
                                node {
                                    id
                                    title
                                    description
                                    featuredImage {
                                        url
                                    }
                                    variants(first: 1) {
                                        edges {
                                            node {
                                                id
                                                price {
                                                    amount
                                                    currencyCode
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                `
            },
            {
                headers: {
                    "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_API_TOKEN,
                    "Content-Type": "application/json",
                },
            }
        );

        const products = response.data.data.products.edges.map(({ node }) => ({
            id: node.id,
            title: node.title,
            description: node.description,
            image: node.featuredImage?.url || "",
            price: node.variants.edges[0].node.price.amount,
            currency: node.variants.edges[0].node.price.currencyCode,
            variantId: node.variants.edges[0].node.id,
        }));

        res.json({ products });
    } catch (error) {
        console.error("Error fetching Shopify products:", error);
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// ✅ Start Server
const PORT = 5002;
app.listen(PORT, () => console.log(`🚀 Shopify Server running on port ${PORT}`));
