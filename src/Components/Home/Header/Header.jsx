import moment from "moment/moment";
import logo from "../../../assets/logo.png";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="my-3">
      <div className="text-center ">
        <img src={logo} alt="logo" className="mx-auto" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="p-3 bg-slate-200 my-3 flex items-center">
        <div>
          <button className="px-4 py-2 bg-rose-500 text-white">Latest</button>
        </div>
        <div>
            <Marquee>
                <p>Match Highlights: Germany vs Spain — as it happened <span>| Match Highlights: Portugal vs argentina — as it happened  | </span> </p>
            </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Header;
