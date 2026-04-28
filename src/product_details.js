import { IoIosHeartEmpty } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { FaHeart, FaEye } from "react-icons/fa";

import { IoMdSend } from "react-icons/io";
import qrcode from './Assets/qrcode.png';
import playstore from './Assets/playstore.png';
import appstore from './Assets/appstore.png';
import { FaInstagram } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { MdOutlineCopyright } from "react-icons/md";

import { useNavigate } from "react-router";


export const ProductDetail = () => {
    const navigate = useNavigate()

    const [details, setDetails] = useState(JSON.parse(localStorage.getItem("Product")));
    console.log(details);

    const fetched_array = JSON.parse(localStorage.getItem("product_array"));


    const relatedProduct = fetched_array.filter(
        (product) => product.category === "sales"
    );

    const [wishlist, setWishlist] = useState(() => {
        const stored = localStorage.getItem("wishlist");
        return stored ? JSON.parse(stored) : [];
    });

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


                            <div className="relative cursor-pointer" onClick={() => navigate("/wishlist")} >
                                <IoIosHeartEmpty className="text-lg" size={25} />

                                {wishlist.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                                        {wishlist.length}
                                    </span>
                                )}
                            </div>
                            <FaCartShopping className="text-lg cursor-pointer" />
                            <CiUser onClick={()=>navigate("/account")} className="text-lg cursor-pointer" />
                        </div>
                    </div>
                </nav>
                <div className="w-full flex justify-center py-10">
                    <div className="w-[80%] flex gap-2 items-center ">
                        <p className="font-[Poppins] text-[14px] font-regular text-[#000000] opacity-[50%]">
                            Account   /
                        </p>
                        <p className="font-[Poppins] text-[14px] font-regular text-[#000000] opacity-[50%]">
                            Gaming  /
                        </p>
                        <p className="font-[Poppins] text-[14px] font-regular text-[#000000] ">
                            ${details.name}
                        </p>
                    </div>
                </div>
                <section className="w-full flex justify-center">
                    <div className="w-[80%] flex justify-between">
                        {/* left */}
                        <div className="w-[15%] flex flex-col gap-[20px] ">
                            <div className="w-[100%] bg-[#F5F5F5] p-5 rounded-[4px] flex justify-center items-center">
                                <img src={details.img} alt={details.name}></img>
                            </div>
                            <div className="w-[100%] bg-[#F5F5F5] p-5 rounded-[4px] flex justify-center items-center">
                                <img src={details.img} alt={details.name}></img>
                            </div>
                            <div className="w-[100%] bg-[#F5F5F5] p-5 rounded-[4px] flex justify-center items-center">
                                <img src={details.img} alt={details.name}></img>
                            </div>
                            <div className="w-[100%] bg-[#F5F5F5] p-5 rounded-[4px] flex justify-center items-center">
                                <img src={details.img} alt={details.name}></img>
                            </div>
                        </div>
                        {/* middle */}
                        <div className="w-[40%] flex justify-center items-center ">
                            <div className="w-[100%] bg-[#F5F5F5] p-5 rounded-[4px] ">
                                <img src={details.img} alt={details.name} className="w-[100%] "></img>
                            </div>
                        </div>
                        {/* right */}
                        <div className="w-[40%] flex flex-col gap-[30px]">
                            <h1 className="font-[Inter] font-semibold text-[24px] text-[#000000]">{details.name}</h1>
                            {/* RATING */}
                            <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                <span className="text-gray-500 text-xs ml-1">
                                    (150 Reviews)
                                </span>
                                <span className="font-[Poppins] fomt-regular text-[14px] text-[#00FF66]">In Stock</span>
                            </div>
                            <p className="font-[Inter] font-regular text-[24px] text-[#000000]">${details.price}</p>
                            <p className="font-[Poppins] font-regular text-[14px] text-[#000000] border-b-2 pb-4 ">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive
                                for easy bubble free install & mess free removal Pressure sensitive.</p>
                            {/* COLORS */}
                            <div className="flex items-center gap-4">
                                <span className="font-medium font-[Inter] text-[20px]">Colours:</span>
                                <div className="flex gap-3">
                                    <span className="w-4  bg-red-500 rounded-full p-3 hover:border-2 border-amber-300"></span>
                                    <span className="w-4 p-3 bg-gray-800 rounded-full  hover:border-2 border-amber-300"></span>
                                </div>
                            </div>
                            <div className="flex gap-4 w-[100%]">
                                <p className="font-[Inter] font-regular text-[20px]">Size:</p>
                                <button className="w-[7%] border-2 rounded-[4px] font-[Poppins] text-[14px] bg-[#FAFAFA] hover:bg-[#DB4444] hover:text-[#FAFAFA]">XS</button>
                                <button className="w-[7%] border-2 rounded-[4px] font-[Poppins] text-[14px] bg-[#FAFAFA] hover:bg-[#DB4444] hover:text-[#FAFAFA]">S</button>
                                <button className="w-[7%] border-2 rounded-[4px] font-[Poppins] text-[14px] bg-[#FAFAFA] hover:bg-[#DB4444] hover:text-[#FAFAFA]">M</button>
                                <button className="w-[7%] border-2 rounded-[4px] font-[Poppins] text-[14px] bg-[#FAFAFA] hover:bg-[#DB4444] hover:text-[#FAFAFA]">L</button>
                                <button className="w-[7%] border-2 rounded-[4px] font-[Poppins] text-[14px] bg-[#FAFAFA] hover:bg-[#DB4444] hover:text-[#FAFAFA]">XL</button>
                            </div>
                            {/* QUANTITY + BUTTON */}
                            <div className="flex gap-10 ">
                                <div className="flex border-2 border-slate-700 w-[30%] justify-between">
                                    <button className="px-3 py-1 hover:bg-red-500 hover:text-white hover:border-0 w-[20%]">-</button>
                                    <input type="number" className="px-4 py-1 border-x-2 border-slate-700 w-[50%]" placeholder="1"></input>
                                    <button className="px-3 py-1 hover:bg-red-500 hover:text-white w-[20%] ">+</button>
                                </div>

                                <button onClick={() => addToCart(details)} className=" w-[30%] border-2 border-black px-6 py-1 hover:bg-red-500 hover:text-white hover:border-0">
                                    Buy Now
                                </button>

                                <button className="border-2 border-black p-2">
                                    <FaRegHeart />
                                </button>
                            </div>
                            <div className="w-[100%] border-2 border-[#00000080] rounded-[4px] flex flex-col">
                                <div className="flex gap-5 items-center p-4 border-b-2 border-[#00000080]">
                                    <div>
                                        <FaTruck size={30} />
                                    </div>
                                    <div className="flex flex-col ">
                                        <p className="font-[Poppins] font-medium text-[12px] text-[#000000]">Free Delivery</p>
                                        <p className="font-[Poppins] font-medium text-[12px] text-[#000000]">Enter your postal code for Delivery Availability</p>
                                    </div>
                                </div>

                                <div className="flex gap-5 items-center p-4">
                                    <div>
                                        <FiRefreshCw size={30} />
                                    </div>
                                    <div className="flex flex-col ">
                                        <p className="font-[Poppins] font-medium text-[12px] text-[#000000]">Return Delivery</p>
                                        <p className="font-[Poppins] font-medium text-[12px] text-[#000000]">Free 30 Days Delivery Returns.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full mt-10 flex justify-center">
                    <div className="w-[80%] flex flex-col gap-[10px]">
                        {/* today section */}
                        <div className="w-[full] flex flex-col gap-[20px]">
                            <div className="flex items-center gap-[10px]">
                                <div className="w-[3px] h-[40px] bg-[#DB4444] p-3 rounded-[4px]"></div>
                                <p className="text-[#DB4444] text-[16px] font-semibold font-[Poppins]">
                                    Related Item
                                </p>
                            </div>

                        </div>
                        {/* card */}
                        <div className="w-full flex justify-between gap-4 mt-5">
                            {relatedProduct.map((product, index) => (
                                <div
                                    key={product.id}
                                    className="w-[23%] flex flex-col gap-3 hover:cursor-pointer " >
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
                                                <button className="bg-white p-2 rounded-full">
                                                    <FaHeart size={18} />
                                                </button>
                                                <button className="bg-white p-2 rounded-full">
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
                                        <button className="hidden group-hover:flex justify-center items-center bg-black text-white py-2 transition">
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
                {/* footer */}
                <footer className="w-full bg-[#000] flex justify-center items-center flex-col text-white pt-10 mt-20 gap-[30px]">
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
                            <a href="#" className="font-[Poppins] text-[16px] font-regular">My Account</a>
                            <a href="#" className="font-[Poppins] text-[16px] font-regular">Login / Register</a>
                            <a href="#" className="font-[Poppins] text-[16px] font-regular">Cart</a>
                            <a href="#" className="font-[Poppins] text-[16px] font-regular">Wishlist</a>
                            <a href="#" className="font-[Poppins] text-[16px] font-regular">Shop</a>
                        </div>
                        <div className="w-[10%] flex flex-col gap-[20px]">
                            <h1 className="font-[Inter] text-[24px] font-bold">Quick Link</h1>
                            <a href="#" className="font-[Poppins] text-[16px] font-regular">Privacy Policy</a>
                            <a href="#" className="font-[Poppins] text-[16px] font-regular">Terms Of Use</a>
                            <a href="#" className="font-[Poppins] text-[16px] font-regular">FAQ</a>
                            <a href="#" className="font-[Poppins] text-[16px] font-regular">Contact</a>
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
            </div>
        </>
    )
}