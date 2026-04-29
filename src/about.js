import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router";
import { useState } from "react";
// import { IoCallOutline } from "react-icons/io5";
// import { MdForwardToInbox } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import qrcode from './Assets/qrcode.png';
import playstore from './Assets/playstore.png';
import appstore from './Assets/appstore.png';
import { FaInstagram } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { MdOutlineCopyright } from "react-icons/md";
import { MdStorefront } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import { FaCoins } from "react-icons/fa6";
import { AiOutlineTruck } from "react-icons/ai";
import { LuHeadphones } from "react-icons/lu";
import { VscWorkspaceTrusted } from "react-icons/vsc";

import about_photo from './Assets/about.png';
import company_1 from "./Assets/carousel-1.png";
import company_2 from "./Assets/carousel-2.png";
import company_3 from "./Assets/carousel-3.png";


export const About = () => {
    const navigate = useNavigate();
    const [wishlist] = useState(() => {
        const stored = localStorage.getItem("wishlist");
        return stored ? JSON.parse(stored) : [];
    });
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
                        <a href="about" className="font-[Poppins] text-[14px] font-regular text-[#000000]">
                            About
                        </a>
                    </div>
                </div>
                <section className="w-[100%] flex justify-center">
                    <div className="w-[80%] flex justify-between">
                        <div className="w-[45%] flex flex-col items-ceter justify-center  gap-[25px]">
                            <h2 className="font-[Inter] font-semibold text-[54px] text-[#000000]">Our Story</h2>
                            <p className="font-[Poppins] font-regular text-[16px] text-[#000000]">
                                Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace
                                with an active presense in Bangladesh. Supported by wide range of tailored marketing,
                                data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3
                                millioons customers across the region.</p>
                            <p className="font-[Poppins] font-regular text-[16px] text-[#000000]">
                                Exclusive has more than 1 Million products to offer, growing at a very fast.
                                Exclusive offers a diverse assotment in categories ranging  from consumer.
                            </p>
                        </div>
                        <div className="w-[50%] ">
                            <img src={about_photo} alt="about photo" className="w-full"></img>
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-center mt-[5%]">
                    <div className="w-[80%] flex justify-between">
                        <div className="  w-[23%] flex flex-col justify-center items-center gap-[10px] border-2 border-slate-400 rounded-md py-8 px-6 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:shadow-xl hover:-translate-y-2 group">
                            <div className="w-19 p-4  rounded-full bg-gray-200 flex items-center justify-center">
                                <div className="w-15 p-3 rounded-full bg-black flex items-center justify-center group-hover:bg-white">
                                    <MdStorefront size={30} className="text-white text-lg group-hover:text-black" />
                                </div>
                            </div>
                            <h2 className="font-[Inter] font-bold text-[32px] text-[#000000] group-hover:text-white ">10.5k </h2>
                            <p className="font-[Poppins] font-regular text-[16px] text-[#000000] group-hover:text-white">
                                Sallers active our site
                            </p>
                        </div>
                        {/* card-2 */}
                        <div className="w-[23%] flex flex-col justify-center items-center gap-[10px] border-2 border-slate-400 rounded-md py-8 px-6 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:shadow-xl hover:-translate-y-2 group">
                            <div className="w-19 p-4  rounded-full bg-gray-200 flex items-center justify-center">
                                <div className="w-15 p-3 rounded-full bg-black flex items-center justify-center  group-hover:bg-white">
                                    <FaDollarSign size={30} className="text-white text-lg group-hover:text-black" />
                                </div>
                            </div>
                            <h2 className="font-[Inter] font-bold text-[32px] text-[#000000] group-hover:text-white">33k </h2>
                            <p className="font-[Poppins] font-regular text-[16px] text-[#000000] group-hover:text-white">
                                Sallers active our site
                            </p>
                        </div>
                        {/* card 3 */}
                        <div className="w-[23%] flex flex-col justify-center items-center gap-[10px] border-2 border-slate-400 rounded-md py-8 px-6 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:shadow-xl hover:-translate-y-2 group">
                            <div className="w-19 p-4  rounded-full bg-gray-200 flex items-center justify-center">
                                <div className="w-15 p-3 rounded-full bg-black flex items-center justify-center  group-hover:bg-white">
                                    <CiGift size={30} className="text-white text-lg group-hover:text-black" />
                                </div>
                            </div>
                            <h2 className="font-[Inter] font-bold text-[32px] text-[#000000] group-hover:text-white ">10.5k </h2>
                            <p className="font-[Poppins] font-regular text-[16px] text-[#000000] group-hover:text-white">
                                Sallers active our site
                            </p>
                        </div>
                        {/* card 4 */}
                        <div className="w-[23%] flex flex-col justify-center items-center gap-[10px] border-2 border-slate-400 rounded-md py-8 px-6 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:shadow-xl hover:-translate-y-2 group">
                            <div className="w-19 p-4  rounded-full bg-gray-200 flex items-center justify-center">
                                <div className="w-15 p-3 rounded-full bg-black flex items-center justify-center  group-hover:bg-white">
                                    <FaCoins size={30} className="text-white text-lg group-hover:text-black" />
                                </div>
                            </div>
                            <h2 className="font-[Inter] font-bold text-[32px] text-[#000000] group-hover:text-white">10.5k </h2>
                            <p className="font-[Poppins] font-regular text-[16px] text-[#000000] group-hover:text-white">
                                Sallers active our site
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-center mt-[5%]">
                    <div className="w-[80%] flex justify-between">
                        <div className="w-[31%] flex flex-col gap-[10px] cursor-pointer transition-all duration-300 ease-in-out  hover:shadow-xl hover:-translate-y-2 group">
                            <div className="w-[100%] px-3 pt-5 bg-[#F5F5F5] flex justify-center">
                                <img src={company_1} className="w-[60%]" alt="company-member"></img>
                            </div>
                            <h1 className="font-[Inter] font-medium text-[32px] text-[#000000]">Tom Cruise</h1>
                            <p className="font-[Poppins] font-regular text-[16px] text-[#000000]">Founder & Chairman</p>
                            <div className="flex gap-[15px] cursor-pointer">
                                <CiTwitter size={25} />
                                <FaInstagram size={25} />
                                <RiLinkedinLine size={25} />
                            </div>
                        </div>
                        <div className="w-[31%] flex flex-col gap-[15px] cursor-pointer transition-all duration-300 ease-in-out  hover:shadow-xl hover:-translate-y-2 group">
                            <div className="w-[100%] px-3 pt-5 bg-[#F5F5F5] flex justify-center">
                                <img src={company_2} className="w-[72%]" alt="company-member"></img>
                            </div>
                            <h1 className="font-[Inter] font-medium text-[32px] text-[#000000]">Emma Watson</h1>
                            <p className="font-[Poppins] font-regular text-[16px] text-[#000000]">Managing Director</p>
                            <div className="flex gap-[15px]">
                                <CiTwitter size={25} />
                                <FaInstagram size={25} />
                                <RiLinkedinLine size={25} />
                            </div>
                        </div>
                        <div className="w-[31%] flex flex-col gap-[15px] cursor-pointer transition-all duration-300 ease-in-out  hover:shadow-xl hover:-translate-y-2 group">
                            <div className="w-[100%] px-3 pt-5 bg-[#F5F5F5] flex justify-center">
                                <img src={company_3} className="w-[80%]" alt="company-member"></img>
                            </div>
                            <h1 className="font-[Inter] font-medium text-[32px] text-[#000000]">Will Smith</h1>
                            <p className="font-[Poppins] font-regular text-[16px] text-[#000000]">Product Designer</p>
                            <div className="flex gap-[15px]">
                                <CiTwitter size={25} />
                                <FaInstagram size={25} />
                                <RiLinkedinLine size={25} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full  pt-[5%] pb-8 flex justify-center ">
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
            </div>
        </>
    )
}