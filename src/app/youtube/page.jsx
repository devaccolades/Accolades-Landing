export default function Page() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <iframe
        className="w-[500px] h-[500px] rounded-2xl shadow-lg object-fit"
        src="https://www.youtube.com/embed/CXVHxmKap4E"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}