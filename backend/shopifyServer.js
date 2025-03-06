require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const SHOPIFY_STORE = "legendchefsauce.com"; // ✅ Updated your store domain
const SHOPIFY_STOREFRONT_API_TOKEN = "9b6753d3ac3c6dd5ceb5960d4e84da0a"; // Replace with your token
const GRAPHQL_ENDPOINT = `https://${SHOPIFY_STORE}/api/2023-10/graphql.json`;

// ✅ Fetch Products from Shopify API
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
            price: node.variants.edges[0]?.node.price.amount || "N/A",
            currency: node.variants.edges[0]?.node.price.currencyCode || "USD",
            variantId: node.variants.edges[0]?.node.id || "", // ✅ Ensuring correct format
        }));

        res.json({ products });
    } catch (error) {
        console.error("❌ Error fetching Shopify products:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// ✅ Shopify Checkout Route
app.post("/api/shopify-checkout", async (req, res) => {
    try {
        const { items } = req.body;

        const response = await axios.post(
            GRAPHQL_ENDPOINT,
            {
                query: `
                    mutation CheckoutCreate($lineItems: [CheckoutLineItemInput!]!) {
                        checkoutCreate(input: { lineItems: $lineItems }) {
                            checkout {
                                webUrl
                            }
                            userErrors {
                                field
                                message
                            }
                        }
                    }
                `,
                variables: {
                    lineItems: items.map(item => ({
                        variantId: item.variantId,  // ✅ Ensuring GID format
                        quantity: item.quantity
                    }))
                }
            },
            {
                headers: {
                    "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_API_TOKEN,
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.data.data.checkoutCreate.userErrors.length > 0) {
            console.error("❌ Shopify Checkout Error:", response.data.data.checkoutCreate.userErrors);
            return res.status(400).json({ error: "Shopify Checkout Error", details: response.data.data.checkoutCreate.userErrors });
        }

        res.json({ checkoutUrl: response.data.data.checkoutCreate.checkout.webUrl });

    } catch (error) {
        console.error("❌ Error creating checkout:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to create checkout" });
    }
});

// ✅ Direct Checkout Link (No API)
app.post("/api/shopify-direct-checkout", async (req, res) => {
    try {
        const { items } = req.body;
        const cartQuery = items.map(item => `${item.variantId.split('/').pop()}:${item.quantity}`).join(",");

        const checkoutUrl = `https://${SHOPIFY_STORE}/cart/${cartQuery}`;
        
        res.json({ checkoutUrl });
    } catch (error) {
        console.error("❌ Error generating checkout link:", error.message);
        res.status(500).json({ error: "Failed to generate checkout link" });
    }
});

// ✅ Start Server
const PORT = 5002;
app.listen(PORT, () => console.log(`🚀 Shopify Server running on port ${PORT}`));
