/** @format */

interface ImageCardProps {
  image: string;
  title?: string;
  width: string;
  height: string;
  rounded: string;
}

function ImageCard({ image, title, width, height, rounded }: ImageCardProps) {
  return (
    <div className={`w-[${width}] h-[${height}] `}>
      <div className=" relative">
        <img
          className={`rounded-[${rounded}]`}
          src={image}
          width={width}
          height={height}
        />
        <p className=" absolute bottom-4 text-2xl text-white left-8 z-30">
          {" "}
          {title}
        </p>
      </div>
    </div>
  );
}

export default ImageCard;
