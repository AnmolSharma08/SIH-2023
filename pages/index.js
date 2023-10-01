import Head from "next/head";
import Navbar from "@/components/NavBar/NavBar";
import HomePage from "@/components/HomePage/HomePage";
import AboutUs from "@/components/AboutPage/AboutUs";
import OurTeam from "@/components/OurTeam/OurTeam";
function homepage() {
  return(
         <div>
           <Head>
        <title>
                Always say YES to new adventure
        </title>
        <meta
          name="description"
          content=""
        />
        <meta
          name="keywords"
          content=""
        />
      </Head>

      <Navbar/>
      <HomePage />
      <AboutUs/>
      <OurTeam />
  </div>
  );
}

export default homepage;
