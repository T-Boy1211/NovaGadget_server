const Product = require("../models/product.model");
const { broadcast } = require("../ws");

exports.addProducts = async (req, res) => {
  try {
    const { brand, name, description, features, price } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const imageUrl = req.file.path;

    const product = await new Product.create({
      adminId: req.admin.Id,
      imageUrl,
      brand,
      name,
      description,
      price,  
      features: features.split(",").map((feature) => {
        const [key, value] = feature.split(":");
        return { key: key.trim(), value: value.trim() };
      }),
    });

    broadcast({ type: "PRODUCT_ADDED", data: product });
    return res.status(201).json({ product, success: true, message: "Product added" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAdminProducts = async (req, res) => {
  try {
    const products = await Product.find({ admin: req.admin.Id });
    return res.status(200).json({ products, success: true });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ products, success: true });
  } catch (error) {
    return res.status(500).json({ success: false, message:  error.message });
  }
};

exports.getProductByBrand = async (req, res) => {
  try {
    const product = await Product.find({ brand: req.brand });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    return res.status(200).json({ product, success: true });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getProductByCategory = async (req, res) => {
  try {
    const product = await Product.find({ cartegory: req.category });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    return res.status(200).json({ product, success: true });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getProductByName = async (req, res) => {
  try {
    const product = await Product.find({ name: req.name });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    return res.status(200).json({ product, success: true });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
