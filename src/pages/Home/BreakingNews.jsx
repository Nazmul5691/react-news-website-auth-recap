import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className=" bg-slate-200 rounded-lg h-[70px]">
      <div className="flex p-3">
        <button className="btn btn-secondary">Breaking News</button>
        <Marquee speed={100} pauseOnHover="true">
          <Link className="mr-12" to="/">
            I can be a React component, multiple React components....
          </Link>
          <Link className="mr-12" to="/">
            I can be a React component, multiple React components....
          </Link>
          <Link className="mr-12" to="/">
            I can be a React component, multiple React components......
          </Link>
          <Link className="mr-12" to="/">
            I can be a React component, multiple React components.....
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
