import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdOutlineDateRange} from "react-icons/md";
import rightCardImg1 from '../../../assets/1.png'
import rightCardImg2 from '../../../assets/2.png'
import rightCardImg3 from '../../../assets/3.png'
import moment from "moment";

const Rightside = ({ categories }) => {
  return (
    <div>
      <div>
        <p className="text-2xl font-semibold">All category</p>
        <div>
          {categories.map((caregorie) => (
            <Link
              key={caregorie.id}
              className="block  hover:bg-slate-200 px-4 py-3 rounded-lg"
            >
              <span className="ml-7">{caregorie.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-4 space-y-8">
        <div>
            <img src= {rightCardImg1} alt="" className="w-full" />
            <p className="mt-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className="flex justify-between my-3">
                <p>sports</p>
                <p className="flex items-center"><MdOutlineDateRange className="mr-2"></MdOutlineDateRange> {moment().format(" MMMM D, YYYY")}</p>
            </div>
        </div>
        <div>
            <img src= {rightCardImg2} alt="" className="w-full" />
            <p className="mt-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className="flex justify-between my-3">
                <p>sports</p>
                <p className="flex items-center"><MdOutlineDateRange className="mr-2"></MdOutlineDateRange> {moment().format(" MMMM D, YYYY")}</p>
            </div>
        </div>
        <div>
            <img src= {rightCardImg3} alt="" className="w-full" />
            <p className="mt-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className="flex justify-between my-3">
                <p>sports</p>
                <p className="flex items-center"><MdOutlineDateRange className="mr-2"></MdOutlineDateRange> {moment().format(" MMMM D, YYYY")}</p>
            </div>
        </div>
      </div>
    </div>
  );
};
Rightside.propTypes = {
  categories: PropTypes.array.isRequired,
};
export default Rightside;
