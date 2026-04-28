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
import check_1 from "./Assets/check-1.png";
import check_2 from "./Assets/check-2.png";
import check_3 from "./Assets/check-3.png";
import check_4 from "./Assets/check-4.png";

export const Checkout = () => {
    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState(() => {
        const stored = localStorage.getItem("wishlist");
        return stored ? JSON.parse(stored) : [];
    });
    const [cart] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });
    let subtotal = 0;

    cart.forEach((item) => {
        subtotal += item.price * item.quantity;
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
                            <CiUser onClick={()=>navigate("/account")} className="text-lg cursor-pointer" />

                        </div>
                    </div>
                </nav>
                <div className="w-full flex justify-center py-10">
                    <div className="w-[80%] flex gap-2 items-center ">
                        <a href="" className="font-[Poppins] text-[14px] font-regular text-[#000000] opacity-[50%]">
                            Account   /
                        </a>
                        <a href="" className="font-[Poppins] text-[14px] font-regular text-[#000000] opacity-[50%]">
                            My Account /
                        </a>
                        <a href="" className="font-[Poppins] text-[14px] font-regular text-[#000000] opacity-[50%]">
                            Product /
                        </a>
                        <a href="" className="font-[Poppins] text-[14px] font-regular text-[#000000] opacity-[50%]">
                            View Cart /
                        </a>
                        <a href="checkout" className="font-[Poppins] text-[14px] font-regular text-[#000000] ">
                            CheckOut
                        </a>
                    </div>
                </div>
                <section className="w-full flex justify-center">
                    <div className="w-[80%] flex justify-between flex-col ">
                        <p className="font-[Inter] font-medium text-[36px] text-[#000000] ">
                            Billing Details
                        </p>
                        <div className="w-full flex justify-between">
                            <div className="w-[45%] flex flex-col gap-[25px] mt-[2%]">

                                <div className="w-full">
                                    <p className="font-[Poppins] font-regular text-[16px] text-[#000000] opacity-[50%] ">First Name*</p>
                                    <input type="text" className="p-3 bg-[#F5F5F5] rounded-[4px] w-full"></input>
                                </div>
                                <div className="w-full">
                                    <p className="font-[Poppins] font-regular text-[16px] text-[#000000] opacity-[50%] ">Company Name</p>
                                    <input type="text" className="p-3 bg-[#F5F5F5] rounded-[4px] w-full"></input>
                                </div>
                                <div className="w-full">
                                    <p className="font-[Poppins] font-regular text-[16px] text-[#000000] opacity-[50%] ">Street Address*</p>
                                    <input type="text" className="p-3 bg-[#F5F5F5] rounded-[4px] w-full"></input>
                                </div>
                                <div className="w-full">
                                    <p className="font-[Poppins] font-regular text-[16px] text-[#000000] opacity-[50%] ">Apartment, floor, etc. (optional)</p>
                                    <input type="text" className="p-3 bg-[#F5F5F5] rounded-[4px] w-full"></input>
                                </div>
                                <div className="w-full">
                                    <p className="font-[Poppins] font-regular text-[16px] text-[#000000] opacity-[50%] ">Town/City*</p>
                                    <input type="text" className="p-3 bg-[#F5F5F5] rounded-[4px] w-full"></input>
                                </div>
                                <div className="w-full">
                                    <p className="font-[Poppins] font-regular text-[16px] text-[#000000] opacity-[50%] ">Phone Number*</p>
                                    <input type="text" className="p-3 bg-[#F5F5F5] rounded-[4px] w-full"></input>
                                </div>
                                <div className="w-full">
                                    <p className="font-[Poppins] font-regular text-[16px] text-[#000000] opacity-[50%] ">Email Address*</p>
                                    <input type="text" className="p-3 bg-[#F5F5F5] rounded-[4px] w-full"></input>
                                </div>
                                <div className="flex gap-5">
                                    <input type="checkbox" className="scale-150 accent-red-500"></input>
                                    <p className="font-[Poppins] font-regular text-[16px] text-[#000000]">
                                        Save this information for faster check-out next time
                                    </p>
                                </div>
                            </div>
                            <div className="w-[45%] flex flex-col">
                                <div className="w-full flex justify-between">
                                    <div className="w-full  p-6 flex flex-col gap-5">

                                        {/* Products */}
                                        {cart.map((item) => (
                                            <div key={item.id} className="flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <img src={item.img} alt={item.name} className="w-12" />
                                                    <p className="font-[Poppins] font-regular text-[16px] text-[#000000] ">{item.name}</p>
                                                </div>
                                                <p className="text-sm font-medium">
                                                    ${item.price * item.quantity}
                                                </p>
                                            </div>
                                        ))}

                                        {/* Divider */}
                                        <hr />

                                        {/* Subtotal */}
                                        <div className="flex justify-between text-sm">
                                            <span className="font-[Poppins] font-regular text-[16px] text-[#000000] ">Subtotal:</span>
                                            <span className="font-[Poppins] font-regular text-[16px] text-[#000000] ">${subtotal}</span>
                                        </div>

                                        <hr />

                                        {/* Shipping */}
                                        <div className="flex justify-between text-sm">
                                            <span className="font-[Poppins] font-regular text-[16px] text-[#000000] ">Shipping:</span>
                                            <span className="font-[Poppins] font-regular text-[16px] text-[#000000] ">Free</span>
                                        </div>

                                        <hr />

                                        {/* Total */}
                                        <div className="flex justify-between font-semibold text-base">
                                            <span className="font-[Poppins] font-regular text-[16px] text-[#000000] ">Total:</span>
                                            <span className="font-[Poppins] font-regular text-[16px] text-[#000000] ">${subtotal}</span>
                                        </div>

                                        {/* Payment Methods */}
                                        <div className="flex flex-col gap-5 mt-3">
                                            <label className="flex items-center gap-3 text-sm cursor-pointer">
                                                <input type="radio" name="payment" />
                                                <span className="font-[Poppins] font-regular text-[16px] text-[#000000] ">Bank</span>

                                                <div className="flex gap-2 ml-auto">
                                                    <img src={check_1} className="w-8" />
                                                    <img src={check_2} className="w-8" />
                                                    <img src={check_3} className="w-8" />
                                                    <img src={check_4} className="w-8" />
                                                </div>
                                            </label>

                                            <label className="flex items-center gap-3 text-sm cursor-pointer">
                                                <input type="radio" name="payment" defaultChecked />
                                                <span className="font-[Poppins] font-regular text-[16px] text-[#000000] ">Cash on delivery</span>
                                            </label>
                                        </div>

                                        {/* Coupon */}
                                        <div className="flex gap-3 mt-3">
                                            <input
                                                type="text"
                                                placeholder="Coupon Code"
                                                className="border px-4 py-2 flex-1 outline-none"
                                            />
                                            <button className="bg-[#DB4444] text-white px-6 py-2 ">
                                                Apply Coupon
                                            </button>
                                        </div>

                                        {/* Place Order */}
                                        <button className="bg-[#DB4444] text-white py-3 w-fit px-10 mt-3">
                                            Place Order
                                        </button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* footer */}
                <footer className="w-full bg-[#000] flex justify-center items-center flex-col text-white pt-10  mt-[5%] gap-[30px]">
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