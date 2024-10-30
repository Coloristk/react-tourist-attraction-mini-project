import axios from "axios";
import { useState, useEffect } from "react";

function Homepage() {
  const [input, setInputText] = useState("");
  const [search, setSearch] = useState([]);

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${input}`
      );
      setSearch(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (input.trim() !== " ") {
      fetchdata(input);
    }
  }, [input]);

  return (
    <main
      className="mt-36"
      style={{ fontFamily: "IBM Plex Sans Thai, sans-serif" }}
    >
      <h1 className="flex justify-center items-center text-7xl text-sky-400 font-semibold mb-10">
        เที่ยวไหนดี
      </h1>
      <h3 className="pl-10 md:pl-60">ค้นหาที่เที่ยว</h3>
      <div className="w-3/4 mx-auto mt-2">
        <div className="flex justify-center items-center border-b">
          <input
            type="text"
            value={input}
            onChange={handleInput}
            className="text-center w-full h-10 outline-none"
            placeholder="หาที่เที่ยวแล้วไปกัน..."
          />
        </div>
      </div>
      <div className="mt-8">
        {search.length > 0
          ? search.map((item, index) => (
              <BlogCard
                key={index}
                title={item.title}
                description={item.description.substring(0, 100)}
                tags={item.tags}
                photos={item.photos}
                url={item.url}
              />
            ))
          : null}
      </div>
    </main>
  );
}

export default Homepage;

const BlogCard = ({ description, photos, title, url, tags }) => {
  return (
    <div className="flex flex-col md:flex-row p-6 border-b justify-center">
      <div className="w-full md:w-1/3">
        <img src={photos[0]} alt={title} className="w-full h-96 rounded-3xl" />
      </div>
      <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0">
        <a href={url} className="text-3xl font-semibold mb-2">
          {title}
        </a>
        <p className="text-gray-600 mb-8">{description}</p>
        <a href={url} className="text-sky-500 font-semibold mb-6 inline-block">
          อ่านต่อ
        </a>
        <div className="flex flex-wrap gap-2 mb-10">
          หมวด
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm text-sky-600 border border-sky-600 rounded-full px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-5">
          {photos.slice(1).map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt="sub"
              className="w-24 h-24 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
