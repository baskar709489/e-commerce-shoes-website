import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/layout"
import Page from "./components/header/page"
import BannerImg from '../src/assets/images/banner-bg.png'
import ClientImg from '../src/assets/images/client-img.png'
import FBImg from '../src/assets/images/fb-icon.png'
import CycleImg from '../src/assets/images/icon-1.png'
import Img1 from '../src/assets/images/img-1.png'
import Img2 from '../src/assets/images/img-2.png'
import Img3 from '../src/assets/images/img-3.png'
import Img4 from '../src/assets/images/img-4.png'
import Img5 from '../src/assets/images/img-5.png'
import Img6 from '../src/assets/images/img-6.png'
import Img7 from '../src/assets/images/img-7.png'
import Img8 from '../src/assets/images/img-8.png'
import InstaImg from '../src/assets/images/instagram-icon.png'
import LeftImg from '../src/assets/images/left-arrow.png'
import LikdinImg from '../src/assets/images/linkedin-icon.png'
import LogoImg from '../src/assets/images/logo.png'
import RightImg from '../src/assets/images/right-arrow.png'
import SearchImg from '../src/assets/images/search-icon.png'
import ToggleImg from '../src/assets/images/toggle-icon.png'
import TwitterImg from '../src/assets/images/twitter-icon.png'
import About from "./components/about/about"
import Pageerror from "./components/404/pageerror"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Layout/>} />
            <Route index element={<Page/>} />
            <Route path="about" element={<About />} />
            <Route path='*' element={<Pageerror />} />
          </Route>
        </Routes>



      </BrowserRouter>
    </>
  )
}


export function Logo1() { return <img src={LogoImg} alt="logoimg" /> }
export function Banner1() { return <img src={BannerImg} alt="logoimg" /> }
export function Img01() { return <img src={Img1} alt="logoimg" /> }
export function Img02() { return <img src={Img2} alt="logoimg" /> }
export function Img03() { return <img src={Img3} alt="logoimg" /> }
export function Img04() { return <img src={Img4} alt="logoimg" /> }
export function Img05() { return <img src={Img5} alt="logoimg" /> }
export function Img06() { return <img src={Img6} alt="logoimg" /> }
export function Img07() { return <img src={Img7} alt="logoimg" /> }
export function Img08() { return <img src={Img8} alt="logoimg" /> }
export function FB1() { return <img src={FBImg} alt="logoimg" /> }
export function InstaImg1() { return <img src={InstaImg} alt="logoimg" /> }
export function TwitterImg1() { return <img src={TwitterImg} alt="logoimg" /> }
export function ToggleImg1() { return <img src={ToggleImg} alt="logoimg" /> }
export function SearchImg1() { return <img src={SearchImg} alt="logoimg" /> }
export function LikdinImg1() { return <img src={LikdinImg} alt="logoimg" /> }
export function ClientImg1() { return <img src={ClientImg} alt="logoimg" /> }
export function Left1() { return <img src={LeftImg} alt="logoimg" /> }
export function Right1() { return <img src={RightImg} alt="logoimg" /> }
export function CycleImg1() { return <img src={CycleImg} alt="logoimg" /> }

export default App
