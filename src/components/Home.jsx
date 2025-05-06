import noodles from '../assets/noodles.jpg';
import dosa from '../assets/dosa.jpg';
import momos from '../assets/momos.jpg';
import friedrice from '../assets/friedrice.jpg';
import biryani from '../assets/biryani.jpg';
import pasta from '../assets/pasta.jpg';
import burger from '../assets/burger.jpg';
import idli from '../assets/idli.jpg';
import naan from '../assets/naan.jpg';
import roll from '../assets/roll.jpg';
import pizza from '../assets/pizza.jpg';
import sandwich from '../assets/sandwich.jpg';
import cake from '../assets/cake.jpg';
import icecream from '../assets/icecream.jpg';
import cookies from '../assets/cookies.jpg';
import pie from '../assets/pie.jpg';
import brownies from '../assets/brownies.jpg';
import Doughnuts from '../assets/Doughnuts.jpg';
import FriedDesserts from '../assets/FriedDesserts.jpg';
import dessertVariety from '../assets/more.jpg';

function Menu() {
    const menuItems = [
        { name: 'Noodles', image: noodles, path: '/Home/Noodles' },
        { name: 'Momos', image: momos, path: '/Home/Momos' },
        { name: 'Biryani', image: biryani, path: '/Home/biryani' },
        { name: 'Fried Rice', image: friedrice, path: '/Home/Friedrice' },
        { name: 'Dosa', image: dosa, path: '/Home/Dosa' },
        { name: 'Pasta', image: pasta, path: '/Home/Pasta' },
        { name: 'Burger', image: burger, path: '/Home/Burger' },
        { name: 'Idli', image: idli, path: '/Home/Idli' },
        { name: 'Naan', image: naan, path: '/Home/Naan' },
        { name: 'Roll', image: roll, path: '/Home/Roll' },
        { name: 'Pizza', image: pizza, path: '/Home/Pizza' },
        { name: 'Sandwich', image: sandwich, path: '/Home/Sandwitch' },
    ];

    const desserts = [
        { name: 'Cake', image: cake, path: '/desserts/cake' },
        { name: 'Ice Cream', image: icecream, path: '/desserts/Icecream' },
        { name: 'Cookies', image: cookies, path: '/desserts/Cookies' },
        { name: 'Pie', image: pie, path: '/desserts/Pie' },
        { name: 'Brownies', image: brownies, path: '/desserts/Brownie' },
        { name: 'Doughnuts', image: Doughnuts, path: '/desserts/doughnuts' },
        { name: 'Fried Desserts', image: FriedDesserts, path: '/desserts/FriedDesserts' },
        { name: 'More', image: dessertVariety, path: '/desserts' },
    ];

    return (
        <div className="bg-[#f6f6e5]">
            <div className="bg-[#f6f6e5] min-h-screen py-8 px-6">
                {/* Welcome Section */}
                <div className="relative w-full max-w-5xl mx-auto mt-10">
                    <div className="absolute inset-0 transform -skew-y-3 bg-[#ff3131]"></div>
                    <div className="relative bg-[#122348] text-center py-8 px-4">
                        <h1 className="text-4xl font-bold text-[#ff3131]">Welcome to <span className="text-[#f6f6e5]">Crave Corner</span></h1>
                        <p className="text-2xl font-bold text-[#f6f6e5] mt-4">Crave. Savor. Repeat.</p>
                    </div>
                </div>

                {/* Menu Section */}
                <div className="mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl mt-20 font-bold text-[#ff3131] mb-4">ME<span className="text-[#122348]">NU</span></h1>
                    <p className="text-[#122348] mb-10 text-lg">Explore our delicious menu featuring a variety of mouthwatering dishes that will satisfy your cravings.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-13 place-items-center">
                        {menuItems.map((item, index) => (
                            <a key={index} href={item.path} className="relative group">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-40 h-40 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
                                />
                                <div className="absolute -top-5 -right-7 w-25 bg-[#122348] text-[#f6f6e5] text-sm sm:text-md font-semibold italic px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-md">
                                    <center>{item.name}</center>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Desserts Section */}
                <div className="mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
  <h1 className="text-3xl mt-20 font-bold text-[#ff3131] mb-4">
    DESS<span className="text-[#122348]">ERTS</span>
  </h1>
  <p className="text-[#122348] mb-10 text-lg">
    Indulge in our delightful desserts, crafted to satisfy your sweet cravings.
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
    {desserts.map((item, index) => (
      <a key={index} href={item.path} className="relative group">
        <img
          src={item.image}
          alt={item.name}
          className="w-40 h-40 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
                                <div className="absolute -top-5 -right-7 w-25 bg-[#122348] text-[#f6f6e5] text-sm sm:text-md font-semibold italic px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-md">
                                <center>{item.name}</center>
        </div>
      </a>
    ))}
  </div>
</div>
            </div>
        </div>
    );
}

export default Menu;
