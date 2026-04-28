import { useState } from "react";
import { useNavigate } from "react-router";
import signUp from './Assets/sign_up.png';
import { FcGoogle } from "react-icons/fc";
import { IoMdSend } from "react-icons/io";
import qrcode from './Assets/qrcode.png';
import playstore from './Assets/playstore.png';
import appstore from './Assets/appstore.png';
import { FaInstagram } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { MdOutlineCopyright } from "react-icons/md";


export const SignUp = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState(() => {
        const stored = localStorage.getItem("users");
        return stored ? JSON.parse(stored) : [];
    });
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSignup = () => {

        if (!user.name || !user.email || !user.password) {
            alert("All fields required");
            return;
        }
        //  check if email already exists
        const alreadyExistsMail = users.some(
            (u) => u.email === user.email
        );

        if (alreadyExistsMail) {
            alert("User already exists with this email");
            return;
        }
        //  check if email already exists
        const alreadyExistsName = users.some(
            (u) => u.email === user.email
        );

        if (alreadyExistsName) {
            alert("User already exists with this Name");
            return;
        }

        const updatedUsers = [...users, user];

        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        // clear inputs
        setUser({ name: "", email: "", password: "" });

        alert("User registered successfully");

        navigate("/login");
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
                        </div>
                    </div>
                </nav>
                <section className="w-full flex justify-center mt-10">
                    <div className="w-[80%] flex justify-between">
                        <div className="w-[50%]">
                            <img src={signUp} className="w-[100%]"></img>
                        </div>
                        <div className="w-[35%] flex flex-col gap-[20px] justify-center">
                            <h1 className="font-[Inter] font-medium text-[36px] text-[#000000]">Create an account</h1>
                            <p className="font-[Inter] font-regular text-[16px] text-[#000000]">Enter your details below</p>
                            <input type="text" id="name" name="name" onChange={handleChange} value={user.name} placeholder="Name" className="border-b-2 border-slate-400 pb-2 font-[Poppins] font-regular text-[16px] text-[#000000] opacity-[40%] mt-5 focus:outline-none focus:ring-0 border-0"></input>
                            <input type="text" id="email" name="email" onChange={handleChange} value={user.email} placeholder="Email or Phone Number" className="border-b-2 border-slate-400 pb-2 font-[Poppins] font-regular text-[16px] text-[#000000] opacity-[40%] mt-5 focus:outline-none focus:ring-0 border-0"></input>
                            <input type="text" id="password" name="password" onChange={handleChange} value={user.password} placeholder="Password" className="border-b-2 border-slate-400 pb-2 font-[Poppins] font-regular text-[16px] text-[#000000] opacity-[40%] mt-5 focus:outline-none focus:ring-0 border-0"></input>

                            <button type="button" onClick={handleSignup} className="bg-[#DB4444] py-4 text-white hover:cursor rounded-[4px]">Create Account</button>
                            <button type="button" className="flex items-center justify-center gap-[20px] border-2 border-black py-4 rounded-[4px]"><FcGoogle size={25} />Sign up with Google</button>
                            <p className="text-[16px] text-[#000000] opacity-[70%] font-[Poppins] font-regular flex items-center justify-center gap-3">Already have account? <span><a href="/login" className="font-[Poppins] font-regular text-[16px] hover:border-b-2 border-black">Log In</a></span></p>
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