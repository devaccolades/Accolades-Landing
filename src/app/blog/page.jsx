import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import BlogThings from "./BlogThings";
import { getBlogs } from "../Server";

export default async function page() {
  const data = await getBlogs();
  console.log("data",data)
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
