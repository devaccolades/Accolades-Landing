import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import BlogThings from "./BlogThings";


export default async function page() {
  const data = await getBlogs();
  return (
    <>
      <Navbar />
      <BlogThings data={data}/>
      <main className="-mt-[65px]">
        <Footer />
      </main>
    </>
  );
}
