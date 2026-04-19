import express from "express";
const router = express.Router();

const products = [
  { id: 1, name: "Pixel Phone", price: 799 },
  { id: 2, name: "Google Nest", price: 129 }
];

router.get("/", (req, res) => res.json(products));

export default router;
