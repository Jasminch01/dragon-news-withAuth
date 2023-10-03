import { FaGoogle, FaGithub, FaTwitter, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"

const Leftside = () => {
  return (
    <div>
        <div className="space-y-3 mb-10">
          <p className="text-2xl font-semibold mb-2">Log in with</p>
          <button className="btn btn-outline w-full">
            <FaGoogle className="text-2xl">
            </FaGoogle>
            Log in with Google
          </button>
          <button className="btn btn-outline w-full">
            <FaGithub className="text-2xl">
            </FaGithub>
            Log in with github
          </button>
        </div>

        <div className="my-5">
            <p className="text-2xl font-semibold mb-3">Find Us On</p>
            <button className="w-full flex items-center text-center justify-center  rounded-t-lg  border p-3 "> 
            <FaFacebookSquare className="mr-3 text-2xl"></FaFacebookSquare> Facebook</button>
            <button className="w-full flex items-center text-center justify-center  border-x p-3">
                <FaTwitter className="mr-3 text-2xl"></FaTwitter> Twitter</button>
            <button className="w-full flex items-center text-center justify-center  rounded-b-lg  border  p-3"> 
            <FaInstagram className="mr-3 text-2xl"></FaInstagram> Instagram</button>
        </div>

        <div className="p-3 bg-slate-100">
            <p className="text-2xl font-semibold">Q Zone</p>
            <div>
                <img src= {qzone1} alt=""  className="w-full"/>
                <img src= {qzone2} alt="" className="w-full" />
                <img src= {qzone3} alt=""  className="w-full"/>
            </div>

        </div>

    </div>
  );
};

export default Leftside;
