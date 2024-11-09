import { Anc } from "./components/anchor";
import { Heading1, Heading2, Heading3 } from "./components/headings";
import { Para } from "./components/para";

export default function Home(){
  return(
    <div className="p5">
  
<section className=" body-font bg-violet-100" >
  <div className="container mx-auto  px-5 py-24 items-center">
     <div className="items-center text-center">
     <Heading1 name="Welcome To Our Website"/>       
     <Para name="Use power words like epic, mastering, expert, etc."/>
      
    </div>
    
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className=" w-full mx-auto text-center">
      <Heading2 name="About Us" />
      <Para name="Welcome to The Bloggers, your go-to destination for insightful, engaging, and 
      thought-provoking content. We are a passionate team of writers dedicated to sharing stories, tips, 
      and perspectives on a variety of topics, from lifestyle and travel to technology and personal growth.
       Our mission is to inspire, inform, and spark meaningful conversations among our readers. Whether you're 
       seeking expert advice, the latest trends, or just a fresh perspective, you'll find it here. Join our 
       community, explore our posts, and let us be a part of your daily reading journey!"/>
      
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="bg-violet-100 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
         <Heading3 name="Getting Started with Next.js: A Beginner’s Guide"/> 
         <Para name="Next.js is a powerful React framework that enables developers to build fast,.... "/>      
          <Anc link="/blogs"/>         
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="bg-violet-100 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
         <Heading3 name="Exploring Next.js Data Fetching:"/>       
         <Para name="Next.js offers several methods for fetching data in your application. Under.... "/>      
          <Anc link="/blogs"/>          
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="bg-violet-100 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
         <Heading3 name="How to Add Authentication in a Next.js Application"/> 
         <Para name="Adding authentication to your Next.js application is essential for many modern... "/>      
         <Anc link="/blogs"/>         
        </div>
      </div>
      
    </div>
  </div>
</section>



    </div>
  );
}