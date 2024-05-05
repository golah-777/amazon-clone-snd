import React from "react";
import Header from "./Header";
import Product from "./Product";
export default function Products() {
  return (
    <>
      <div className="products">
        <Product
          id="1"
          title="BestOffice High-Back Gaming Chair PC Office Chair Computer Racing Chair PU Desk Task Chair Ergonomic Executive Swivel Rolling Chair with Lumbar Support for Back Pain Women, Men,White"
          price= "86"
          img="https://m.media-amazon.com/images/I/61t4mpabO+L._AC_UL320_.jpg"
          srcset="https://m.media-amazon.com/images/I/61t4mpabO+L._AC_UL320_.jpg 1x, https://m.media-amazon.com/images/I/61t4mpabO+L._AC_UL480_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/61t4mpabO+L._AC_UL640_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/61t4mpabO+L._AC_UL800_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/61t4mpabO+L._AC_UL960_FMwebp_QL65_.jpg 3x"
          qrty = "1"
        ></Product>
        <Product
          id="2"
          title="SAMSUNG Galaxy A54 5G A Series Cell Phone, Unlocked Android Smartphone, 128GB, 6.4” Fluid Display Screen, Pro Grade Camera, Long Battery Life, Refined Design, US Version, 2023, Awesome Black"
          price="348"
          img="https://m.media-amazon.com/images/I/61MEp5HIdBL._AC_UY327_QL65_.jpg"
          qrty = "1"
        ></Product>
        <Product
          id="3"
          title="Umite Chef Kitchen Cooking Utensils Set, 33 pcs Non-Stick Silicone Cooking Kitchen Utensils Spatula Set with Holder, Wooden Handle Silicone Kitchen Gadgets Utensil Set (Khaki)"
          price="18"
          img="https://m.media-amazon.com/images/I/61SIeOHTpoL._AC_UL480_FMwebp_QL65_.jpg"
          qrty = "1"
        ></Product>
        <Product
          id="4"
          title="Dove Exfoliating Body Polish Crushed Cherries & Chia Milk Skin Care for Revitalized Skin Formulated with 1/4 Moisturizing Cream 10.5 oz"
          price="6"
          img="https://m.media-amazon.com/images/I/71ICveEyQHL._AC_UL480_FMwebp_QL65_.jpg"
          qrty = "1"
        ></Product>{" "}
        <Product
          id="5"
          title="SAMSUNG 32-Inch Class QLED 4K Q60D Series Quantum HDR Smart TV w/Object Tracking Sound Lite, Motion Xcelerator, Slim Design, Gaming Hub, Alexa Built-in (QN32Q60D, 2024 Model)"
          price="486"
          img="https://m.media-amazon.com/images/I/81ScYVlvRPL._AC_UY327_FMwebp_QL65_.jpg"
          qrty = "1"
        ></Product>{" "}
        <Product
          id="6"
          title="Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6 Full HD IPS Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD | Wi-Fi 6 | Windows 11 Home in S Mode"
          price="300"
          img="https://m.media-amazon.com/images/I/61gKkYQn6lL._AC_UY327_FMwebp_QL65_.jpg"
          qrty = "1"
        ></Product>
      </div>
    </>
  );
}
