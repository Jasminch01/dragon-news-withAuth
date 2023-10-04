import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Home/Header/Header";
import Leftside from "../Home/Leftside/Leftside";
import Navbar from "../Home/Navbar/Navbar";


const PostDetails = () => {
  const { id } = useParams();
  const news = useLoaderData();
  const aNews = news.find((post) => post._id === id);
  const { title,  details, image_url } = aNews;
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
        <div className="col-span-3">
          <div className="border ">
            <div className="p-5 space-y-10">
              <p className="text-2xl font-bold">{title}</p>
              <div>
                <img src={image_url} alt="" className="w-full" />
              </div>
              <p>{details}</p>
              <button className="p-3 bg-rose-500 text-white">All news in this category</button>
            </div>
          </div>
        </div>
        <div>
          <Leftside></Leftside>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
