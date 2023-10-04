import PropTypes from "prop-types";
import { GoBookmark } from "react-icons/go";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const NewsCard = ({ post }) => {
  const { _id, rating, title, total_view, details, image_url, author } = post;
  return (
    <div className="border ">
      <div className="p-5 bg-slate-100 flex justify-between">
        <div className="flex space-x-3">
          <div>
            <img src={author.img} alt="" className="w-12 rounded-full" />
          </div>
          <div>
            <p>{author?.name ? author?.name : "unknown"}</p>
            <p>{author?.published_date ? author?.published_date : ""}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <GoBookmark className="text-2xl cursor-pointer "></GoBookmark>
          <FiShare2 className="text-2xl cursor-pointer"></FiShare2>
        </div>
      </div>
      <div className="p-5 space-y-10">
        <p className="text-xl">{title}</p>
        <div>
          <img src={image_url} alt="" className="w-full" />
        </div>
        {details.length > 300 ? (
          <p>
            {details.slice(0, 300)}{" "}
            <Link to={`/postdetails/${_id}`} className="text-blue-500">
              Read more..
            </Link>{" "}
          </p>
        ) : (
          <p>{details}</p>
        )}
        <div className="flex justify-between">
          <Rating
            initialRating={rating.number}
            readonly
            emptySymbol={
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            }
            fullSymbol={
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
            }
          />
          <p className="flex items-center">
            <AiOutlineEye className="mr-3 text-xl"></AiOutlineEye>
            {total_view}
          </p>
        </div>
      </div>
    </div>
  );
};
NewsCard.propTypes = {
  post: PropTypes.object.isRequired,
};
export default NewsCard;
