//Banner
import BannerImg from "./Banner_img.jpg"


//products
import LaptopImg_1 from "./laptop1.webp"
import LaptopImg_2 from "./laptop2.webp"
import LaptopImg_3 from "./laptop3.webp"
import LaptopImg_4 from "./laptop4.webp"
import LaptopImg_5 from "./laptop5.webp"

import MobileImg_1 from "./mobile1.webp"
import MobileImg_2 from "./mobile2.webp"
import MobileImg_3 from "./mobile2.webp"
import MobileImg_4 from "./mobile4.webp"
import MobileImg_5 from "./mobile5.webp"

import TvImg_1 from "./tv1.webp"
import TvImg_2 from "./tv2.webp"
import TvImg_3 from "./tv3.webp"
import TvImg_4 from "./tv4.webp"
import TvImg_5 from "./tv5.webp"


export const assets = {
  CartImg,
  SearchIcon,
  LoginIcon,

  BannerImg,

  LaptopImg_1,
  LaptopImg_2,
  LaptopImg_3,
  LaptopImg_4,
  LaptopImg_5,

  MobileImg_1,
  MobileImg_2,
  MobileImg_3,
  MobileImg_4,
  MobileImg_5,

  TvImg_1,
  TvImg_2,
  TvImg_3,
  TvImg_4,
  TvImg_5,

};

export const products = [

  {
    _id: 111111,
    name: "Laptop",
    description: "best laptop for codigng",
    price: "45,000",
    image: [LaptopImg_1, LaptopImg_2, LaptopImg_3, LaptopImg_4, LaptopImg_5,],
    category: "Laptop",
    subCategory: "HP Laptop",
    sizes: ["", "", ""],
    date: 123456789,
    bestselloer: ture
  },
  {
    _id: 22222,
    name: "Mobile",
    description: "best mobile for camera and gaming",
    price: "20,000",
    image: [MobileImg_1, MobileImg_2, MobileImg_3, MobileImg_4, MobileImg_5,],
    category: "Mobile",
    subCategory: "Vivo Mobile",
    sizes: ["", "", ""],
    date: 123456789,
    bestselloer: ture
  },
  {
    _id: 22222,
    name: "Tv",
    description: "best Tv",
    price: "45,000",
    image: [TvImg_1, TvImg_2, TvImg_3, TvImg_4, TvImg_5,],
    category: "Tv",
    subCategory: "s Tv",
    sizes: ["", "", ""],
    date: 123456789,
    bestselloer: ture
  },




]

