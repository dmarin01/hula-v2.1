import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { baseURL_Image } from "../../utils/const";

function CardItem({ result }) {
  return (
    <div className="group cursor-pointer p-3 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-20">
      <Image
        height={1080}
        width={1920}
        layout="responsive"
        src={
          `${baseURL_Image}${result.backdrop_path || result.poster_path}` ||
          `${baseURL_Image}${result.poster_path}`
        }
        alt="Image"
      />
      <div className="p-3">
        <h2 className="text-2xl group-hover:text-white py-2 transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="truncate max-w-md">{result.overview}</p>
        <div className="flex justify-between items-center opacity-0 group-hover:opacity-95">
          <p className="py-2 pr-6">Release date: {result.release_date}</p>
          <div className="flex">
            votes: {result.vote_count}
            <ThumbUpIcon className="h-5 mb-1 pl-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
