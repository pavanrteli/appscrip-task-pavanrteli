'use client';

import Header from "../../components/Header/Header";
import Filters from "../../components/Filters/Filters";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Head from "next/head";
import styles from "./page.module.css";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

// Dummy data for products
const products = [
	{
		id: 1,
		name: "PPXOC MILKYWAY DRESS IN ...",
		price: null,
		image: "/image.png",
		badge: "NEW PRODUCT",
		outOfStock: false,
	},
	{
		id: 2,
		name: "PPXOC MILKYWAY DRESS IN ...",
		price: null,
		image: "/teddyfront.png",
		badge: null,
		outOfStock: true,
	},
	{
		id: 3,
		name: "PRODUCT NAME",
		price: null,
		image: "/Rectangle 29438.png",
		badge: null,
		outOfStock: false,
	},
	{
		id: 4,
		name: "PRODUCT NAME",
		price: null,
		image: "/cap.png",
		badge: null,
		outOfStock: false,
	},
	{
		id: 5,
		name: "PRODUCT NAME",
		price: null,
		image: "/bag.png",
		badge: null,
		outOfStock: false,
	},
	{
		id: 6,
		name: "PRODUCT NAME",
		price: null,
		image: "/teddy.png",
		badge: null,
		outOfStock: false,
	},
	{
		id: 7,
		name: "PRODUCT NAME",
		price: null,
		image: "/purse.png",
		badge: null,
		outOfStock: false,
	},
	{
		id: 8,
		name: "PRODUCT NAME",
		price: null,
		image: "/foldbag.png",
		badge: null,
		outOfStock: false,
	},
	{
		id: 9,
		name: "PRODUCT NAME",
		price: null,
		image: "/stdbag.png",
		badge: null,
		outOfStock: false,
	},
	{
		id: 10,
		name: "PRODUCT NAME",
		price: null,
		image: "/stripsbag.png",
		badge: null,
		outOfStock: false,
	},
	{
		id: 11,
		name: "PRODUCT NAME",
		price: null,
		image: "/wbbag.png",
		badge: null,
		outOfStock: false,
	},
	{
		id: 12,
		name: "PRODUCT NAME",
		price: null,
		image: "/brownbag.png",
		badge: null,
		outOfStock: false,
	},
	{
		id: 13,
		name: "PRODUCT NAME",
		price: null,
		image: "/Rectangle 29438.png",
		badge: null,
		outOfStock: false,
	},
	{
		id: 14,
		name: "PRODUCT NAME",
		price: null,
		image: "/teddyfront.png",
		badge: null,
		outOfStock: false,
	},
	{
		id: 15,
		name: "PRODUCT NAME",
		price: null,
		image: "/cap.png",
		badge: null,
		outOfStock: false,
	},
	{
		id: 16,
		name: "PRODUCT NAME",
		price: null,
		image: "/stdbag.png",
		badge: null,
		outOfStock: false,
	},
	{
		id: 17,
		name: "PRODUCT NAME",
		price: null,
		image: "/bag.png",
		badge: null,
		outOfStock: false,
	},
	{
		id: 18,
		name: "PRODUCT NAME",
		price: null,
		image: "/brownbag.png",
		badge: null,
		outOfStock: false,
	},
	// ...add more dummy products as needed...
];

export default function Home() {
	const [showFilters, setShowFilters] = useState(true);
	return (
		<>
			<Head>
				<title>PLP - Product Listing Page</title>
				<meta
					name="description"
					content="Browse our collection of modern furniture and decor. Find the best deals on chairs, tables, lamps, and more."
				/>
				<meta property="og:title" content="PLP - Product Listing Page" />
				<meta
					property="og:description"
					content="Browse our collection of modern furniture and decor. Find the best deals on chairs, tables, lamps, and more."
				/>
			</Head>
			<Header />
			<div className={styles.titleSection}>
				<h1>DISCOVER OUR PRODUCTS</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
					scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
				</p>
			</div>
			<div className={styles.filterBar}>
				<div style={{ display: "flex", alignItems: "center" }}>
					<span className={styles.count}>3425 ITEMS</span>
					<button
						className={styles.hideFilter}
						onClick={() => setShowFilters((prev) => !prev)}
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							style={{ marginRight: "6px", verticalAlign: "middle" }}
						>
							<path
								d="M10 12L6 8L10 4"
								stroke="#888"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						{showFilters ? "HIDE FILTER" : "SHOW FILTER"}
					</button>
				</div>
				<span className={styles.recommended}>RECOMMENDED</span>
			</div>
			<main className={styles.main}>
				{showFilters && <Filters />}
				<section className={styles.productsSection}>
					<ProductGrid products={products} />
				</section>
			</main>
			<Footer />
		</>
	);
}
