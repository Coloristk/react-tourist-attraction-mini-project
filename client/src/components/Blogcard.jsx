export const BlogCard = ({ description, photos, title, url, tags }) => {
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
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 font-semibold mb-6 inline-block"
        >
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
