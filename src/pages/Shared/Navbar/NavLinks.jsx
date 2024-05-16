import { IoIosArrowDown } from "react-icons/io";
import { IoHome } from "react-icons/io5";

const NavLinks = () => {
    return (
        <div className="flex items-center pl-28">
            <div className="p-3 text-2xl border-r border-[#e8d3d3] hover:text-red-600">
                <IoHome />
            </div>

            {/* 1 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>ATTAR</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4">
                    <a className="border-b border-[#d4caca] pb-2" href="#">WHOLESALE ATTAR</a>
                    <a className="border-b border-[#d4caca] pb-2" href="#">COMBO & GIFTS</a>
                    <a href="#">ATTAR JERSEY COMBO</a>
                </div>
            </div>

            {/* 2 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>CLOTHING</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4">
                    <a className="border-b border-[#d4caca] pb-2" href="#">PANJABI</a>
                    <a href="#">DAWAH JERSEY</a>
                </div>
            </div>

            {/* 3 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>DAWAH CANVAS</span></button>
            </div>

            {/* 4 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>OTHERS</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4">
                    <a href="#">RECHARGEABLE FAN</a>
                </div>
            </div>

            {/* 5 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>COMBO OFFERS</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4">
                    <a className="border-b border-[#d4caca] pb-2" href="#">DAWAH CAP COMBO</a>
                    <a href="#">10 PCS POPULAR ATTAR + T-SHIRT COMBO</a>
                </div>
            </div>

            {/* 6 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>FOOD</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4">
                    <a className="border-b border-[#d4caca] pb-2" href="#">MEDJOOL DATES</a>
                    <a href="#">LITCHI FLOWER HONEY</a>
                </div>
            </div>

            {/* 7 */}
            <div className="dropdown">
                <button className="flex gap-2 items-center dropbtn p-3 border-r border-[#e8d3d3]"><span>WOMEN'S CLOTHING</span> <IoIosArrowDown className="mt-1" /></button>
                <div className="dropdown-content space-y-2 py-5 px-4">
                    <a className="border-b border-[#d4caca] pb-2" href="#">ESSENTIAL LONG KHIMAR</a>
                    <a className="border-b border-[#d4caca] pb-2" href="#">SALAT KHIMAR</a>
                    <a href="#">BORKA</a>
                </div>
            </div>


        </div>
    );
};

export default NavLinks;