import axios from "axios";
import { useState, useEffect } from "react";
import { BlogCard } from "../components/Blogcard";

function Homepage() {
  const [input, setInputText] = useState("");
  const [blogcard, setBlogCard] = useState([]);

  const handleInput = (e) => {
    setInputText(e.target.value);
  };
  /* เพิ่ม tag เข้าไปใน input */
  const addTagToInput = (tag) => {
    setInputText((prev) => `${prev} ${tag}`.trim());
  };

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${input}`
      );
      setBlogCard(response.data.data);
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
      className="mt-36 md:m-auto w-full md:max-w-screen-2xl"
      style={{ fontFamily: "IBM Plex Sans Thai, sans-serif" }}
    >
      <h1 className="flex justify-center items-center text-7xl text-sky-400 font-semibold mb-10">
        เที่ยวไหนดี
      </h1>
      <h3 className="pl-10 md:pl-60">ค้นหาที่เที่ยว</h3>
      {/* Input Search */}
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
      {/* Render BlogCard */}
      <div className="mt-8">
        {blogcard.length > 0
          ? blogcard.map((item, index) => (
              <BlogCard
                key={index}
                title={item.title}
                description={item.description.substring(0, 100)}
                tags={item.tags}
                photos={item.photos}
                url={item.url}
                addTagToInput={addTagToInput}
              />
            ))
          : null}
      </div>
    </main>
  );
}

export default Homepage;
