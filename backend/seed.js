import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./models/user.model.js";
import Shop from "./models/shop.model.js";
import Item from "./models/item.model.js";
import dotenv from "dotenv";
dotenv.config();

const password = await bcrypt.hash("Demo@1234", 10);

const demoData = [
  {
    owner: {
      fullName: "Rajesh Kumar",
      email: "rajesh.demo@swado.com",
      mobile: "9876543210",
      role: "owner",
    },
    shop: {
      name: "Spice Garden",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
      city: "Mumbai",
      state: "Maharashtra",
      address: "123 Linking Road, Bandra West, Mumbai",
    },
    items: [
      { name: "Butter Chicken", category: "North Indian", price: 280, foodType: "non veg", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400" },
      { name: "Dal Makhani", category: "North Indian", price: 180, foodType: "veg", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
      { name: "Paneer Tikka", category: "Snacks", price: 220, foodType: "veg", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400" },
      { name: "Chicken Biryani", category: "Main Course", price: 320, foodType: "non veg", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400" },
    ]
  },
  {
    owner: {
      fullName: "Priya Sharma",
      email: "priya.demo@swado.com",
      mobile: "9876543211",
      role: "owner",
    },
    shop: {
      name: "Pizza Palace",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
      city: "Delhi",
      state: "Delhi",
      address: "45 Connaught Place, New Delhi",
    },
    items: [
      { name: "Margherita Pizza", category: "Pizza", price: 299, foodType: "veg", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400" },
      { name: "Pepperoni Pizza", category: "Pizza", price: 349, foodType: "non veg", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400" },
      { name: "Garlic Bread", category: "Snacks", price: 120, foodType: "veg", image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=400" },
      { name: "Pasta Arrabiata", category: "Main Course", price: 249, foodType: "veg", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400" },
    ]
  },
  {
    owner: {
      fullName: "Amit Singh",
      email: "amit.demo@swado.com",
      mobile: "9876543212",
      role: "owner",
    },
    shop: {
      name: "Burger Barn",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
      city: "Bangalore",
      state: "Karnataka",
      address: "88 MG Road, Bangalore",
    },
    items: [
      { name: "Classic Burger", category: "Burgers", price: 199, foodType: "non veg", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400" },
      { name: "Veggie Burger", category: "Burgers", price: 159, foodType: "veg", image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400" },
      { name: "French Fries", category: "Fast Food", price: 99, foodType: "veg", image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400" },
      { name: "Chicken Wings", category: "Snacks", price: 249, foodType: "non veg", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400" },
    ]
  },
  {
    owner: {
      fullName: "Sneha Reddy",
      email: "sneha.demo@swado.com",
      mobile: "9876543213",
      role: "owner",
    },
    shop: {
      name: "Dosa Corner",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500",
      city: "Chennai",
      state: "Tamil Nadu",
      address: "56 Anna Nagar, Chennai",
    },
    items: [
      { name: "Masala Dosa", category: "South Indian", price: 120, foodType: "veg", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400" },
      { name: "Idli Sambar", category: "South Indian", price: 80, foodType: "veg", image: "https://images.unsplash.com/photo-1630383249896-483b1fbf9f22?w=400" },
      { name: "Vada", category: "Snacks", price: 60, foodType: "veg", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400" },
      { name: "Uttapam", category: "South Indian", price: 100, foodType: "veg", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400" },
    ]
  },
  {
    owner: {
      fullName: "Vikram Patel",
      email: "vikram.demo@swado.com",
      mobile: "9876543214",
      role: "owner",
    },
    shop: {
      name: "Biryani House",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500",
      city: "Hyderabad",
      state: "Telangana",
      address: "12 Banjara Hills, Hyderabad",
    },
    items: [
      { name: "Hyderabadi Biryani", category: "Main Course", price: 350, foodType: "non veg", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400" },
      { name: "Veg Biryani", category: "Main Course", price: 250, foodType: "veg", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400" },
      { name: "Mutton Curry", category: "Main Course", price: 380, foodType: "non veg", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400" },
      { name: "Gulab Jamun", category: "Desserts", price: 80, foodType: "veg", image: "https://images.unsplash.com/photo-1601303516534-bf4b5b27c5ff?w=400" },
    ]
  },
  {
    owner: {
      fullName: "Meera Joshi",
      email: "meera.demo@swado.com",
      mobile: "9876543215",
      role: "owner",
    },
    shop: {
      name: "Chinese Wok",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500",
      city: "Pune",
      state: "Maharashtra",
      address: "33 FC Road, Pune",
    },
    items: [
      { name: "Veg Fried Rice", category: "Chinese", price: 180, foodType: "veg", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400" },
      { name: "Chicken Noodles", category: "Chinese", price: 220, foodType: "non veg", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400" },
      { name: "Spring Rolls", category: "Snacks", price: 140, foodType: "veg", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400" },
      { name: "Manchurian", category: "Chinese", price: 160, foodType: "veg", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400" },
    ]
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Connected to MongoDB");

    for (const data of demoData) {
      // Create owner
      const owner = await User.create({
        ...data.owner,
        password,
        location: { type: "Point", coordinates: [0, 0] }
      });

      // Create shop
      const shop = await Shop.create({
        ...data.shop,
        owner: owner._id,
      });

      // Create items and link to shop
      const itemIds = [];
      for (const item of data.items) {
        const newItem = await Item.create({ ...item, shop: shop._id });
        itemIds.push(newItem._id);
      }

      // Update shop with item ids
      await Shop.findByIdAndUpdate(shop._id, { items: itemIds });

      console.log(`✅ Created: ${data.shop.name} (${data.shop.city})`);
    }

    console.log("\n🎉 All demo data seeded successfully!");
    console.log("Demo owner password: Demo@1234");
    mongoose.disconnect();

  } catch (err) {
    console.error("❌ Error:", err.message);
    mongoose.disconnect();
  }
}

seed();