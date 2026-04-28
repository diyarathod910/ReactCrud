import React from "react";

import { IoIosHeartEmpty } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router";
import { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdForwardToInbox } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import qrcode from './Assets/qrcode.png';
import playstore from './Assets/playstore.png';
import appstore from './Assets/appstore.png';
import { FaInstagram } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { MdOutlineCopyright } from "react-icons/md";

export const Contact = () => {
    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState(() => {
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
                            <li><a href="signup" className="hover:underline">Sign Up</a></li>
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
                        <a href="contact" className="font-[Poppins] text-[14px] font-regular text-[#000000]">
                            Contact
                        </a>
                    </div>
                </div>
            </div>

            <section className="w-full flex justify-center">
                <div className="w-[80%] flex justify-between">
                    <div className="w-[40%] flex flex-col gap-[20px] shadow-[0px_4px_20px_#0000000D]  p-8 ">
                        <div className="w-[100%] flex  gap-5 items-center">
                            <div className="w-[12%] p-3 rounded-[50%] bg-[#DB4444] flex justify-center">
                                <IoCallOutline size={25} className="text-white" />
                            </div>
                            <p className="font-[Poppins] font-medium text-[16px] text-[#000000]">Call To Us</p>
                        </div>
                        <p className="font-[Poppins] font-regular text-[14px] text-[#000000]" >We are available 24/7, 7 days a week.</p>
                        <p className="font-[Poppins] font-regular text-[14px] text-[#000000] border-b-2 border-black pb-4">Phone: +8801611112222</p>

                        <div className="w-[100%] flex  gap-5 items-center">
                            <div className="w-[12%] p-3 rounded-[50%] bg-[#DB4444] flex justify-center">
                                <MdForwardToInbox size={25} className="text-white" />
                            </div>
                            <p className="font-[Poppins] font-medium text-[16px] text-[#000000]">Write To US</p>
                        </div>
                        <p className="font-[Poppins] font-regular text-[14px] text-[#000000]" >Fill out our form and we will contact you within 24 hours.</p>
                        <p className="font-[Poppins] font-regular text-[14px] text-[#000000] ">Emails: customer@exclusive.com</p>
                        <p className="font-[Poppins] font-regular text-[14px] text-[#000000] ">Emails: support@exclusive.com</p>
                    </div>
                    <div className="w-[55%] flex flex-col gap-[20px] shadow-[0px_4px_20px_#0000000D] p-4 items-end">
                        <div className="w-[100%] flex justify-between">
                            <input type="text" className="w-[32%] font-[Poppins] font-regular text-[16px] text-[#000000] opacity-[50%] bg-[#F5F5F5] rounded-[4px] p-3" placeholder="Your Name *"></input>
                            <input type="text" className="w-[32%] font-[Poppins] font-regular text-[16px] text-[#000000] opacity-[50%] bg-[#F5F5F5] rounded-[4px] p-3" placeholder="Your Email *" ></input>
                            <input type="text" className="w-[32%] font-[Poppins] font-regular text-[16px] text-[#000000] opacity-[50%] bg-[#F5F5F5] rounded-[4px] p-3" placeholder="Your Phone *" ></input>
                        </div>
                        <textarea type="text" className="w-[100%] font-[Poppins] font-regular text-[16px] text-[#000000] opacity-[50%] bg-[#F5F5F5] rounded-[4px] p-3 h-[150px] " placeholder="Your Message" />
                        <button type="button" className="w-[30%]  p-5 bg-[#DB4444] text-[#FAFAFA] text-[16px] font-[Poppins] font-medium rounded-[4px]">Send Message</button>
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
        </>
    )
}