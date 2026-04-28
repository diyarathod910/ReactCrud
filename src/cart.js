import React from "react";

import { IoIosHeartEmpty } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import qrcode from './Assets/qrcode.png';
import playstore from './Assets/playstore.png';
import appstore from './Assets/appstore.png';
import { FaInstagram } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { MdOutlineCopyright } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
export const Cart = () => {
    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState(() => {
        const stored = localStorage.getItem("wishlist");
        return stored ? JSON.parse(stored) : [];
    });
    // cart usestate
    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });
    // update the cart
    const updateQuantity = (id, newQty) => {
        const updatedCart = cart.map(item =>
            item.id === id
                ? { ...item, quantity: newQty }
                : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    // remove product from cart
    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    // subtotal
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    console.log(subtotal);
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
                            <CiUser onClick={() => navigate("/account")} className="text-lg cursor-pointer" />

                        </div>
                    </div>
                </nav>
                <div className="w-full flex justify-center py-10">
                    <div className="w-[80%] flex gap-2 items-center ">
                        <a href="home" className="font-[Poppins] text-[14px] font-regular text-[#000000] opacity-[50%]">
                            Home   /
                        </a>
                        <a href="cart" className="font-[Poppins] text-[14px] font-regular text-[#000000]">
                            Cart
                        </a>
                    </div>
                </div>
                <section className="w-full flex justify-center">
                    <div className="w-[80%] flex flex-col items-center gap-5">
                        <div className="w-full flex justify-between items-center p-5 shadow-[0px_4px_20px_#0000000D] rounded-md ">
                            <p className="w-[35%] font-[Poppins] font-regular text-[16px] text-[#000000]">
                                Product
                            </p>
                            <p className="w-[15%] font-[Poppins] font-regular text-[16px] text-[#000000] text-center">
                                Price
                            </p>
                            <p className="w-[20%] font-[Poppins] font-regular text-[16px] text-[#000000] text-center">
                                Quantity
                            </p>
                            <p className="w-[25%] font-[Poppins] font-regular text-[16px] text-[#000000] text-right">
                                Subtotal
                            </p>
                        </div>

                        {cart.map((item) => (

                            <div className="w-full flex justify-between items-center p-5 shadow-[0px_4px_20px_#0000000D] rounded-md">
                                {/* Product */}
                                <div key={item.id} className="flex items-center gap-4 w-[35%] relative">
                                    <button onClick={() => removeFromCart(item.id)} className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full p-1">
                                        <FaTimes size={10} />
                                    </button>

                                    <img src={item.img} alt={item.name} className="w-20" />
                                    <p>{item.name}</p>
                                </div>

                                <p className="w-[15%] text-center">${item.price}</p>
                                {/* Quantity */}
                                <div className="w-[20%] text-center">
                                    <input

                                        type="number"
                                        value={item.quantity}
                                        className="w-[50%] border rounded px-2 py-1 "
                                        onChange={(e) =>
                                            updateQuantity(item.id, parseInt(e.target.value))
                                        }
                                    />
                                </div>

                                {/* Subtotal */}
                                <p className="w-[25%] text-right pr-5">
                                    ${item.price * item.quantity}
                                </p>

                            </div>
                        ))}
                        <div className="w-full flex justify-between">
                            <button onClick={() => navigate('/home')} className="w-[20%] p-5 font-[Poppins] font-medium text-[16px] text-[#000000] border-2 border-slate-400 rounded-[4px]  ">
                                Return To Shop
                            </button>
                            <button className="w-[20%] p-5 font-[Poppins] font-medium text-[16px] text-[#000000] border-2 border-slate-400 rounded-[4px]">
                                Update Cart
                            </button>
                        </div>
                    </div>

                </section>
                <section className="w-full flex justify-center pt-[5%]">
                    <div className="w-[80%] flex justify-between">
                        <div className="w-[45%] flex justify-between items-start">
                            <input type="text" placeholder="Coupon Code" className="w-[60%] p-5 font-[Poppins] font-medium text-[16px] text-[#000000] border-2 border-black rounded-md "></input>
                            <button type="button" className="w-[35%] p-5 bg-[#DB4444] font-[Poppins] font-medium text-[16px] text-[#FAFAFA] rounded-md " >Apply Coupon</button>
                        </div>
                        <div className="w-[40%] border-2 border-black p-5 flex gap-5 flex-col ">
                            <p className="font-[Poppins] font-medium text-[20px]">Cart Total</p>
                            <div className="w-full flex justify-between border-b-2 border-slate-400 pb-3">
                                <p className="font-[Poppins] font-medium text-[16px] text-[#000000]">Subtotal</p>
                                <p className="font-[Poppins] font-medium text-[16px] text-[#000000]">${subtotal}</p>
                            </div>
                            <div className="w-full flex justify-between border-b-2 border-slate-400 pb-3">
                                <p className="font-[Poppins] font-medium text-[16px] text-[#000000]">Shipping</p>
                                <p className="font-[Poppins] font-medium text-[16px] text-[#000000]">Free</p>
                            </div>
                            <div className="w-full flex justify-between">
                                <p className="font-[Poppins] font-medium text-[16px] text-[#000000]">Total</p>
                                <p className="font-[Poppins] font-medium text-[16px] text-[#000000]">${subtotal}</p>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={() => navigate('/checkout')} className="w-[70%] p-5 bg-[#DB4444] font-[Poppins] font-medium text-[16px] text-[#ffffff]">Procees to checkout</button>
                            </div>
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
            </div>
        </>
    );
}