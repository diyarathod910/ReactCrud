import React from "react";

import { FaArrowRight } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

import apple_logo from './Assets/apple-logo.png';
import apple_phone from './Assets/apple-phone.png';
import video_game from './Assets/videogame.png';
import keyboard from './Assets/keyboard.png';
import lcd_monitor from './Assets/gaming_monitor.png';
import chair from './Assets/comfort_chair.png';
import coat from './Assets/north-coat.png';
import gucci_bag from './Assets/gucci_bag.png';
import cpu_cooler from './Assets/cpu_cooler.png';
import bookself from './Assets/bookshelf.png';
import cat_speaker from "./Assets/cat_speaker.png";
import dog_food from "./Assets/dry_dog_Food.png";
import dslr from "./Assets/dslr.png";
import gaming_laptop from "./Assets/gamimg_laptop.png";
import product_set from "./Assets/product_set.png";
import electric_Car from "./Assets/electric_cr.png";
import shoes from "./Assets/shoes.png";
import ps5 from "./Assets/ps5.png";
import womens_collection from "./Assets/womens_collection.png";
import speaker from './Assets/amazon_speaker.png';
import gucci_perfume from './Assets/gucci_perfume.png';
import { AiOutlineTruck } from "react-icons/ai";
import { LuHeadphones } from "react-icons/lu";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoMdSend } from "react-icons/io";
import qrcode from './Assets/qrcode.png';
import playstore from './Assets/playstore.png';
import appstore from './Assets/appstore.png';
import { FaInstagram } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter, CiUser } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { MdOutlineCopyright } from "react-icons/md";




import { useState } from "react";





export const Home = () => {
    const navigate = useNavigate()
    // array
    let productArray = [
        {
            id: 1,
            name: "HAVIT HV-G92 Gamepad",
            discount: "-40%",
            price: 120,
            oldPrice: 160,
            img: video_game,
            reviews: 88,
            qty: 0,
            category: "sales",
        },
        {
            id: 2,
            name: "AK-900 Wired Keyboard",
            discount: "-35%",
            price: 960,
            qty: 0,

            oldPrice: 1160,
            img: keyboard,
            reviews: 75,
            category: "sales",
        },
        {
            id: 3,
            name: "IPS LCD Gaming Monitor",
            discount: "-30%",
            price: 370,
            oldPrice: 400,
            img: lcd_monitor,
            reviews: 99,
            qty: 0,

            category: "sales",
        },
        {
            id: 4,
            name: "S-Series Comfort Chair ",
            discount: "-25%",
            price: 375,
            oldPrice: 400,
            img: chair,
            qty: 0,

            reviews: 99,
            category: "sales",
        },
        {
            id: 5,
            name: "The north coat",
            price: 260,
            oldPrice: 360,
            img: coat,
            qty: 0,

            reviews: 65,
            category: "selling",
        },
        {
            id: 6,
            name: "Gucci duffle bag",
            price: 960,
            oldPrice: 1160,
            img: gucci_bag,
            reviews: 65,
            category: "selling",
        },
        {
            id: 7,
            name: "RGB liquid CPU Cooler",
            price: 160,
            oldPrice: 170,
            img: cpu_cooler,
            reviews: 65,
            category: "selling",
        },
        {
            id: 8,
            name: "Small BookSelf",
            price: 360,
            oldPrice: 400,
            img: bookself,
            reviews: 65,
            category: "selling",
        },
        {
            id: 9,
            name: "Breed Dry Dog Food",
            price: 100,
            img: dog_food,
            reviews: 35,
            category: "explore1",
        },
        {
            id: 10,
            name: "CANON EOS DSLR Camera",
            price: 360,
            img: dslr,
            reviews: 95,
            category: "explore1",
        },

        {
            id: 11,
            name: "ASUS FHD Gaming Laptop",
            price: 700,
            img: gaming_laptop,
            reviews: 325,
            category: "explore1",
        },
        {
            id: 12,
            name: "Curology Product Set",
            price: 500,
            img: product_set,
            reviews: 145,
            category: "explore1",
        },
        {
            id: 13,
            name: "Kids Electric Car",
            price: 960,
            img: electric_Car,
            reviews: 65,
            category: "explore1",
        },
        {
            id: 14,
            name: "Curology Product Set",
            price: 1160,
            img: shoes,
            reviews: 35,
            category: "explore1",
        },
        {
            id: 15,
            name: "Curology Product Set",
            price: 660,
            img: video_game,
            reviews: 55,
            category: "explore1",
        },
        {
            id: 16,
            name: "Curology Product Set",
            price: 660,
            img: coat,
            reviews: 55,
            category: "explore1",
        }
    ];

    localStorage.setItem("product_array", JSON.stringify(productArray));


    const salesProducts = productArray.filter(
        (product) => product.category === "sales"
    );

    const sellingProducts = productArray.filter(
        (item) => item.category === "selling"
    );

    const exploreProducts = productArray.filter((item) => item.category === "explore1");


    const [wishlist, setWishlist] = useState(() => {
        const stored = localStorage.getItem("wishlist");
        return stored ? JSON.parse(stored) : [];
    });

    const toggleWishlist = (product) => {
        const exists = wishlist.some(item => item.id === product.id);

        let updatedWishlist;

        if (exists) {
            // remove product
            updatedWishlist = wishlist.filter(item => item.id !== product.id);
        } else {
            // add full product
            updatedWishlist = [...wishlist, product];
        }
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };

    // cart method
    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });
    const addToCart = (product) => {
        const exists = cart.some(item => item.id === product.id);

        let updatedCart;
        if (exists) {
            updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        }
        else {
            updatedCart = [...cart, { ...product, quantity: 1 }];
        }
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        navigate("/cart");
    }


    return (
        <>
            <div>
                <header className="w-full flex flex-col items-center justify-center bg-[#000000] py-3">
                    <div className="w-[80%] flex items-center justify-between">
                        <div className="w-[70%] flex items-center justify-center">
                            <p className="text-white font-[poppins] text-[14px] ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                        </div>
                        <div className="w-[20%]">
                            <select name="" id="" className=" font-[Poppins] font-regular text-[14px] text-[#fff] bg-[#000]">
                                <option className="font-[Poppins] text-[14px] text-[#fff] font-medium ">English
                                </option>
                                <option value="" className=" text-[14px] text-[#fff] font-medium ">French
                                </option>
                                <option value="">American</option>
                            </select>
                        </div>
                    </div>
                </header>
                <nav className="w-full border-b border-gray-200">
                    <div className="w-[80%] mx-auto flex items-center justify-between py-5">
                        <div className="font-bold text-[24px] font-[Inter]">
                            Exclusive
                        </div>
                        <ul className="flex gap-8 text-sm font-medium font-[Poppins] text-[16px]">
                            <li><a href="home" className="hover:underline">Home</a></li>
                            <li><a href="contact" className="hover:underline">Contact</a></li>
                            <li><a href="about" className="hover:underline">About</a></li>
                            <li><a href="sign_up" className="hover:underline">Sign Up</a></li>
                        </ul>


                        <div className="flex items-center gap-4">

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="bg-gray-100 text-sm px-4 py-2 pr-10 rounded-md outline-none"
                                />
                                <i className="fa-solid fa-magnifying-glass absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                            </div>


                            <div className="relative cursor-pointer" onClick={() => navigate("/wishlist")}>
                                <IoIosHeartEmpty className="text-lg" size={25} />

                                {wishlist.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                                        {wishlist.length}
                                    </span>
                                )}
                            </div>

                            <FaCartShopping className="text-lg cursor-pointer" />
                            <CiUser onClick={() => navigate("/account")} className="text-lg cursor-pointer" />
                        </div>

                    </div>
                </nav>
                <section className="w-full bg-white py-10 flex justify-center">
                    <div className="w-[80%] flex  bg-black  items-center">
                        <div className="w[10%] pl-10 pt-7 pr-5 pb-7 flex flex-col gap-[10px]">
                            <div className="w-full flex gap-[30px] items-center ">
                                <img src={apple_logo} alt='apple-logo'></img>
                                <p className="text-white font-[Poppins] text-[16px]">iPhone 14 Series</p>
                            </div>
                            <div className='w-full flex flex-col gap-[10px]'>
                                <p className='w-[60%] font-[Inter] font-semibold text-[48px] text-[#FAFAFA]'>
                                    Up to 10% off Voucher
                                </p>
                                <div className="flex gap-[10px] items-center ">
                                    <a href='#' className='font-[Poppins] text-[16px] font-Medium text-[#FAFAFA] hover:border-b-2'>Shop Now</a><FaArrowRight className="text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[60%] flex items-start justify-start">
                            <img src={apple_phone} alt="apple-phone" className="w-[50%] "></img>
                        </div>
                    </div>
                </section>
                {/* today's section */}
                <section className="w-full bg-white py-10 flex justify-center">
                    <div className="w-[80%] flex flex-col gap-[10px]">
                        {/* today section */}
                        <div className="w-[full] flex flex-col gap-[20px]">
                            <div className="flex items-center gap-[10px]">
                                <div className="w-[3px] h-[40px] bg-[#DB4444] p-3 rounded-[4px]"></div>
                                <p className="text-[#DB4444] text-[16px] font-semibold font-[Poppins]">
                                    Today’s
                                </p>
                            </div>
                            <div className="flex items-center gap-[50px]">
                                <p className="font-[Inter] text-[36px] text-[#000000] font-semibold">Flash Sales</p>
                                <div className="flex items-center gap-6">
                                    {/* Days */}
                                    <div className="text-center">
                                        <p className="text-[12px] font-medium text-[#000000] font-[Poppins]">Days</p>
                                        <p className="text-[32px] text-[#000000] font-bold font-[Inter]">03</p>
                                    </div>

                                    <span className="text-red-500 text-xl font-bold">:</span>

                                    {/* Hours */}
                                    <div className="text-center">
                                        <p className="text-[12px] font-medium text-[#000000] font-[Poppins]">Hours</p>
                                        <p className="text-[32px] text-[#000000] font-bold font-[Inter]">23</p>
                                    </div>

                                    <span className="text-red-500 text-xl font-bold">:</span>

                                    {/* Minutes */}
                                    <div className="text-center">
                                        <p className="text-[12px] font-medium text-[#000000] font-[Poppins]">Minutes</p>
                                        <p className="text-[32px] text-[#000000] font-bold font-[Inter]">19</p>
                                    </div>

                                    <span className="text-red-500 text-xl font-bold">:</span>

                                    {/* Seconds */}
                                    <div className="text-center">
                                        <p className="text-[12px] font-medium text-[#000000] font-[Poppins]">Seconds</p>
                                        <p className="text-[32px] text-[#000000] font-bold font-[Inter]">56</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* product showcase */}
                        <div className="w-full flex justify-between gap-4">
                            {salesProducts.map((product, index) => (
                                <div
                                    key={product.id}
                                    className="w-[23%] flex flex-col gap-3 hover:cursor-pointer  " >
                                    {/* IMAGE BOX */}
                                    <div className="bg-gray-100 p-5 flex flex-col  gap-4 group">

                                        {/* top row: discount + icons */}
                                        <div className="flex justify-between items-start">
                                            {product.discount && (
                                                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                                                    {product.discount}
                                                </span>
                                            )}

                                            <div className="flex flex-col gap-2">
                                                <button className="bg-white p-2 rounded-full" onClick={(e) => { toggleWishlist(product) }} >
                                                    <FaHeart size={18} className={wishlist.some(item => item.id == product.id) ? "text-red-500" : "text-gray-400"} />
                                                </button>
                                                <button className="bg-white p-2 rounded-full" onClick={() => { localStorage.setItem("Product", JSON.stringify(product)); navigate('/details') }}>
                                                    <FaEye size={18} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* IMAGE */}
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="h-36 mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                        />

                                        {/* ADD TO CART (hidden until hover) */}
                                        <button onClick={() => addToCart(product)} className="hidden group-hover:flex justify-center items-center bg-black text-white py-2 transition">
                                            Add To Cart
                                        </button>
                                    </div>

                                    {/* PRODUCT INFO */}
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-sm font-medium font-[Poppins]">{product.name}</h3>

                                        <div className="flex gap-2 items-center">
                                            <span className="text-red-500 font-semibold font-[Poppins]">${product.price}</span>
                                            {product.oldPrice && (
                                                <span className="text-gray-400 line-through text-sm font-[Poppins]">
                                                    ${product.oldPrice}
                                                </span>
                                            )}
                                        </div>

                                        {/* RATING */}
                                        <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                            <span className="text-gray-500 text-xs ml-1">
                                                ({product.reviews})
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* VIEW ALL BUTTON */}
                        <div className="flex justify-center mt-10">
                            <button className="bg-red-500 text-white px-6 py-3 rounded font-[Poppins]">
                                View All Products
                            </button>
                        </div>
                    </div>
                </section>
                {/* best selling section */}
                <section className="w-full bg-white py-10 flex justify-center">
                    <div className="w-[80%] flex flex-col gap-[10px]">
                        {/* today section */}
                        <div className="w-[full] flex flex-col gap-[20px]">
                            <div className="flex items-center gap-[10px]">
                                <div className="w-[3px] h-[40px] bg-[#DB4444] p-3 rounded-[4px]"></div>
                                <p className="text-[#DB4444] text-[16px] font-semibold font-[Poppins]">
                                    This Month
                                </p>
                            </div>
                            {/* solgan */}
                            <div className="flex justify-between ">
                                <p className="font-[Inter] text-[36px] text-[#000000] font-semibold">Best Selling Products</p>
                                <button className="bg-red-500 text-white px-6 py-3 rounded font-[Poppins]">
                                    View All Products
                                </button>
                            </div>
                        </div>
                        {/* card */}
                        <div className="w-full flex justify-between gap-4 mt-5">
                            {sellingProducts.map((product, index) => (
                                <div
                                    key={product.id}
                                    className="w-[23%] flex flex-col gap-3 hover:cursor-pointer " >
                                    {/* IMAGE BOX */}
                                    <div className="bg-gray-100 p-5 flex flex-col  gap-4 group">

                                        {/* top row: discount + icons */}
                                        <div className="flex justify-end items-end">


                                            <div className="flex flex-col gap-2">
                                                <button className="bg-white p-2 rounded-full" onClick={(e) => { toggleWishlist(product) }} >
                                                    <FaHeart size={18} className={wishlist.some(item => item.id == product.id) ? "text-red-500" : "text-gray-400"} />
                                                </button>
                                                <button className="bg-white p-2 rounded-full" onClick={() => { localStorage.setItem("Product", JSON.stringify(product)); navigate('/details') }}>
                                                    <FaEye size={18} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* IMAGE */}
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="h-36 mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* PRODUCT INFO */}
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-sm font-medium font-[Poppins]">{product.name}</h3>

                                        <div className="flex gap-2 items-center">
                                            <span className="text-red-500 font-semibold font-[Poppins]">${product.price}</span>
                                            {product.oldPrice && (
                                                <span className="text-gray-400 line-through text-sm font-[Poppins]">
                                                    ${product.oldPrice}
                                                </span>
                                            )}
                                        </div>

                                        {/* RATING */}
                                        <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                            <span className="text-gray-500 text-xs ml-1">
                                                ({product.reviews})
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* category */}
                <section className="w-full bg-white py-10 flex justify-center">
                    <div className="w-[80%] flex  justify-between bg-[#000] px-10 py-10" >
                        <div className="w-[40%] flex flex-col gap-[30px]">
                            <p className="font-[Poppins] font-semibold text-[#00FF66] text-[16px]" >Categories</p>
                            <p className="font-[Inter] font-semibold text-[48px] text-[#FAFAFA]">Enhance Your Music Experience</p>
                            <div className="flex gap-[20px] w-[100%] ">
                                <div className="flex flex-col items-center rounded-[50%] p-4 bg-[#fff] w-[15%]">
                                    <p className="font-[Poppins] font-semibold text-[16px] text-[#000000]">23</p>
                                    <p className="font-[Poppins] font-regular text-[11px] text-[#000000]">Hours</p>
                                </div>
                                <div className="flex flex-col items-center rounded-[50%] p-4 bg-[#fff] w-[15%]">
                                    <p className="font-[Poppins] font-semibold text-[16px] text-[#000000]">05</p>
                                    <p className="font-[Poppins] font-regular text-[11px] text-[#000000]">Days</p>
                                </div>
                                <div className="flex flex-col items-center rounded-[50%] p-4 bg-[#fff] w-[15%]">
                                    <p className="font-[Poppins] font-semibold text-[16px] text-[#000000]">59</p>
                                    <p className="font-[Poppins] font-regular text-[11px] text-[#000000]">Minutes</p>
                                </div>
                                <div className="flex flex-col items-center rounded-[50%] p-4 bg-[#fff] w-[15%]">
                                    <p className="font-[Poppins] font-semibold text-[16px] text-[#000000]">35</p>
                                    <p className="font-[Poppins] font-regular text-[11px] text-[#000000]">Seconds</p>
                                </div>

                            </div>
                            <button className="w-[50%] p-5 bg-[#00FF66] font-[Poppins] rounded-[5px] font-medium text-[16px] text-[#363738] hover:">
                                Buy Now!
                            </button>
                        </div>
                        <div className="w-[50%] flex items-center justify-center">
                            <img src={cat_speaker} className="w-[100%]"></img>
                        </div>
                    </div>
                </section>
                {/* explore products */}
                <section className="w-full  py-10 flex justify-center">
                    <div className="w-[80%] flex flex-col gap-[10px]">
                        {/* today section */}
                        <div className="w-[full] flex flex-col gap-[20px]">
                            <div className="flex items-center gap-[10px]">
                                <div className="w-[3px] h-[40px] bg-[#DB4444] p-3 rounded-[4px]"></div>
                                <p className="text-[#DB4444] text-[16px] font-semibold font-[Poppins]">
                                    Our Products
                                </p>
                            </div>
                            {/* solgan */}
                            <div >
                                <p className="font-[Inter] text-[36px] text-[#000000] font-semibold">Explore Our Products</p>
                            </div>
                        </div>
                        {/* card */}

                        <div className="w-full flex justify-between flex-wrap gap-8 mt-5">
                            {exploreProducts.map((product, index) => (
                                <div
                                    key={product.id}
                                    className="w-[23%] flex flex-col gap-3hover:cursor-pointer " >
                                    {/* IMAGE BOX */}
                                    <div className="bg-gray-100 p-5 flex flex-col  gap-4 group">

                                        {/* top row: discount + icons */}
                                        <div className="flex justify-end items-end">

                                            <div className="flex flex-col gap-2">
                                                <button className="bg-white p-2 rounded-full" onClick={(e) => { toggleWishlist(product) }} >
                                                    <FaHeart size={18} className={wishlist.some(item => item.id == product.id) ? "text-red-500" : "text-gray-400"} />
                                                </button>
                                                <button className="bg-white p-2 rounded-full" onClick={() => { localStorage.setItem("Product", JSON.stringify(product)); navigate('/details') }}>
                                                    <FaEye size={18} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* IMAGE */}
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="h-36 mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                        />
                                        {/* ADD TO CART (hidden until hover) */}
                                        <button onClick={() => addToCart(product)} className="hidden group-hover:flex justify-center items-center bg-black text-white py-2 transition">
                                            Add To Cart
                                        </button>
                                    </div>

                                    {/* PRODUCT INFO */}
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-sm font-medium font-[Poppins]">{product.name}</h3>

                                        <div className="flex gap-2 items-center">
                                            <span className="text-red-500 font-semibold font-[Poppins]">${product.price}</span>
                                            {product.oldPrice && (
                                                <span className="text-gray-400 line-through text-sm font-[Poppins]">
                                                    ${product.oldPrice}
                                                </span>
                                            )}
                                        </div>

                                        {/* RATING */}
                                        <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                            <span className="text-gray-500 text-xs ml-1">
                                                ({product.reviews})
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>



                    </div>
                </section>
                {/* featured section */}
                <section className="w-full  py-7 flex justify-center ">
                    <div className="w-[80%] flex flex-col gap-[10px]">
                        {/* today section */}
                        <div className="w-[full] flex flex-col gap-[20px]">
                            <div className="flex items-center gap-[10px]">
                                <div className="w-[3px] h-[40px] bg-[#DB4444] p-3 rounded-[4px]"></div>
                                <p className="text-[#DB4444] text-[16px] font-semibold font-[Poppins]">
                                    Featured
                                </p>
                            </div>
                            {/* solgan */}
                            <div >
                                <p className="font-[Inter] text-[36px] text-[#000000] font-semibold">New Arrival</p>
                            </div>
                        </div>
                        {/* main section */}
                        <div className="w-full flex justify-between gap-6">
                            {/* LEFT BIG CARD */}
                            <div className="w-[48%] bg-black rounded-xl pt-5 pl-5 pr-5 flex items-end transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group cursor-pointer">
                                <div className="flex flex-col gap-2 pb-8 text-white">
                                    <h2 className="text-2xl font-semibold">PlayStation 5</h2>
                                    <p className="text-sm text-gray-300 max-w-xs">
                                        Black and White version of the PS5 coming out on sale.
                                    </p>
                                    <button className="text-sm underline w-fit">Shop Now</button>
                                </div>

                                <div >
                                    <img
                                        src={ps5}
                                        alt="PlayStation 5"
                                        className="ml-auto w-[100%] object-contain "
                                    />
                                </div>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="w-[50%] flex flex-col gap-6">
                                {/* TOP RIGHT CARD */}
                                <div className="w-full bg-black rounded-xl pt-5 pl-5 pr-5 flex items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group cursor-pointer">
                                    <div className="flex flex-col gap-2 text-white max-w-xs">
                                        <h2 className="text-2xl font-semibold">Women’s Collections</h2>
                                        <p className="text-sm text-gray-300">
                                            Featured woman collections that give you another vibe.
                                        </p>
                                        <button className="text-sm underline w-fit">Shop Now</button>
                                    </div>

                                    <div>
                                        <img
                                            src={womens_collection}
                                            alt="Women"
                                            className="ml-auto w-[100%] object-contain"
                                        />
                                    </div>
                                </div>

                                {/* BOTTOM RIGHT */}
                                <div className="w-full flex justify-between gap-4 ">
                                    {/* SPEAKER */}
                                    <div className="w-[48%] bg-black rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group cursor-pointer">
                                        <img
                                            src={speaker}
                                            alt="Speaker"
                                            className=" object-contain mx-auto"
                                        />

                                        <div className="text-white">
                                            <h3 className="text-lg font-semibold">Speakers</h3>
                                            <p className="text-sm text-gray-300">
                                                Amazon wireless speakers
                                            </p>
                                            <button className="text-sm underline">Shop Now</button>
                                        </div>
                                    </div>

                                    {/* PERFUME */}
                                    <div className="w-[48%] bg-black rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group cursor-pointer">
                                        <img
                                            src={gucci_perfume}
                                            alt="Perfume"
                                            className=" object-contain mx-auto"
                                        />

                                        <div className="text-white">
                                            <h3 className="text-lg font-semibold">Perfume</h3>
                                            <p className="text-sm text-gray-300">
                                                GUCCI INTENSE OUD EDP
                                            </p>
                                            <button className="text-sm underline">Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* section */}
                <section className="w-full  pt-12 pb-8 flex justify-center">
                    <div className="w-[70%] flex justify-between items-center">
                        <div className="w-[32%] flex flex-col items-center text-center gap-3">
                            <div className="w-20 p-5 rounded-full bg-gray-200 flex items-center justify-center">
                                <div className="w-12 p-3 rounded-full bg-black flex items-center justify-center">
                                    <AiOutlineTruck className="text-white w-6 h-6" />
                                </div>
                            </div>

                            <h3 className="text-[20px] font-semibold font-[Poppins]">
                                FREE AND FAST DELIVERY
                            </h3>
                            <p className="text-[14px] text-[#000] font-[Poppins] ">
                                Free delivery for all orders over $140
                            </p>
                        </div>
                        {/* item2 */}
                        <div className="w-[32%] flex flex-col items-center text-center gap-3">
                            <div className="w-20 p-5 rounded-full bg-gray-200 flex items-center justify-center">
                                <div className="w-12 p-3 rounded-full bg-black flex items-center justify-center">
                                    <LuHeadphones className="text-white w-6 h-6" />
                                </div>
                            </div>

                            <h3 className="text-[20px] font-semibold font-[Poppins]">
                                24/7 CUSTOMER SERVICE
                            </h3>
                            <p className="text-[14px] text-[#000] font-[Poppins] ">
                                Friendly 24/7 customer support
                            </p>
                        </div>
                        {/* item 3 */}
                        <div className="w-[32%] flex flex-col items-center text-center gap-3">
                            <div className="w-20 p-5 rounded-full bg-gray-200 flex items-center justify-center">
                                <div className="w-12 p-3 rounded-full bg-black flex items-center justify-center">
                                    <VscWorkspaceTrusted className="text-white w-6 h-6" />
                                </div>
                            </div>

                            <h3 className="text-[20px] font-semibold font-[Poppins]">
                                MONEY BACK GUARANTEE
                            </h3>
                            <p className="text-[14px] text-[#000] font-[Poppins] ">
                                We reurn money within 30 days
                            </p>
                        </div>
                    </div>
                </section>
                {/* footer */}
                <footer className="w-full bg-[#000] flex justify-center items-center flex-col text-white pt-10 mt-[10%] gap-[30px]">
                    <div className="w-[80%] flex justify-between items-center pt-8">
                        <div className="w-[15%] flex flex-col gap-[20px]">
                            <h1 className="font-[Inter] text-[24px] font-bold">Exclusive</h1>
                            <p className="font-[Poppins] text-[20px] font-medium">Subscribe</p>
                            <p className="font-[Poppins] text-[16px] font-medium">Get 10% off your first order</p>
                            <div className="flex items-center border border-gray-600 rounded px-3 py-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-transparent text-sm outline-none flex-1 placeholder-gray-500"
                                />
                                <IoMdSend className="w-4 h-4 text-white cursor-pointer" size={20} />
                            </div>
                        </div>
                        <div className="w-[15%] flex flex-col gap-[25px]">
                            <h1 className="font-[Inter] text-[24px] font-bold">Support</h1>
                            <p className="font-[Poppins] text-[16px] font-regular">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                            <p className="font-[Poppins] text-[16px] font-regular">exclusive@gmail.com</p>
                            <p className="font-[Poppins] text-[16px] font-regular">+88015-88888-9999</p>
                        </div>
                        <div className="w-[15%] flex flex-col gap-[13px]">
                            <h1 className="font-[Inter] text-[24px] font-bold">Account</h1>
                            <a href="account" className="font-[Poppins] text-[16px] font-regular">My Account</a>
                            <a href="register" className="font-[Poppins] text-[16px] font-regular">Login / Register</a>
                            <a href="cart" className="font-[Poppins] text-[16px] font-regular">Cart</a>
                            <a href="wishlist" className="font-[Poppins] text-[16px] font-regular">Wishlist</a>
                            <a href="product_details" className="font-[Poppins] text-[16px] font-regular">Shop</a>
                        </div>
                        <div className="w-[10%] flex flex-col gap-[20px]">
                            <h1 className="font-[Inter] text-[24px] font-bold">Quick Link</h1>
                            <button className="font-[Poppins] text-[16px] font-regular">Privacy Policy</button>
                            <button className="font-[Poppins] text-[16px] font-regular">Terms Of Use</button>
                            <button className="font-[Poppins] text-[16px] font-regular">FAQ</button>
                            <button className="font-[Poppins] text-[16px] font-regular">Contact</button>
                        </div>
                        <div className="w-[20%] flex flex-col gap-[20px]">
                            <h1 className="font-[Inter] text-[24px] font-bold">Download App</h1>
                            <p className="font-[Poppins] text-[12px] font-medium text-[#FAFAFA]">Save $3 with App New User Only</p>
                            <div className="w-full flex justify-between">
                                <div className="w-[50%]">
                                    <img src={qrcode} alt="qrcode" className="w-[70%]"></img>
                                </div>
                                <div className="w-[50%] flex flex-col gap-[10px]">
                                    <div className="w-full">
                                        <img src={playstore} alt="playstore" className="w-full"></img>
                                    </div>
                                    <div className="w-full">
                                        <img src={appstore} alt="appstore" className="w-full"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 text-white items-center">

                                <RiFacebookLine className="text-white w-5 h-6" />
                                < CiTwitter className="text-white w-5 h-6" />
                                <FaInstagram className="text-white w-5 h-5" />
                                <RiLinkedinLine className="text-white w-5 h-6" />
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 pb-5 flex items-center gap-[10px] ">
                        <MdOutlineCopyright className="text-[#F9F9F933]" /><p className="text-[#F9F9F933] font-[Poppins] text-[16px]">Copyright Rimel 2022. All right reserved</p>
                    </div>
                </footer>
            </div >
        </>
    )
}