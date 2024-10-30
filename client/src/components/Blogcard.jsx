import { Link } from "lucide-react";
export const BlogCard = ({
  description,
  photos,
  title,
  url,
  tags,
  addTagToInput,
}) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="flex flex-col md:flex-row p-6 border-b justify-center">
      <div className="w-full md:w-1/3">
        <img
          src={photos[0]}
          alt={title}
          className="w-full h-auto rounded-3xl md:h-96"
        />
      </div>
      <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0">
        <a href={url} target="_blank" className="text-3xl font-semibold mb-2">
          {title}
        </a>
        <p className="text-gray-600 mb-2">{description}</p>
        <a
          href={url}
          target="_blank"
          className="text-sky-500 font-semibold mb-6 inline-block"
        >
          อ่านต่อ
        </a>
        <div className="flex flex-wrap gap-2 mb-10">
          หมวด
          {tags.map((tag, index) => (
            <span
              key={index}
              onClick={() => addTagToInput(tag)}
              className="text-sm text-sky-600 border border-sky-600 rounded-full px-2 py-1 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-8 md:mt-20">
          {photos.slice(1).map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt="sub"
              className="w-20 h-20 object-cover rounded-lg md:w-40 md:h-36 md:rounded-2xl "
            />
          ))}
          <Link
            className="w-16 h-16 border border-sky-400 text-sky-400 rounded-full ml-60 mt-10 cursor-pointer"
            onClick={handleCopyClick}
          />
        </div>
      </div>
    </div>
  );
};
