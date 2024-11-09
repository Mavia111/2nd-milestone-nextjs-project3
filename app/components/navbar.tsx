import Link from "next/link";
export function Navbar(){
return(
<header className="text-violet-600 body-font bg-violet-100 border-b-4 border-violet-500">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3  text-violet-600 text-3xl font-bold font-mono">The Bloggers </span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900 text-violet-500 text-1xl font-bold font-mono">Home</Link>
      <Link href="/about" className="mr-5 hover:text-gray-900 text-violet-500 text-1xl font-bold font-mono">About</Link>
      <Link href="/blogs" className="mr-5 hover:text-gray-900 text-violet-500 text-1xl font-bold font-mono">Blogs</Link>
      <Link href="/contact" className="mr-5 hover:text-gray-900 text-violet-500 text-1xl font-bold font-mono">Contact</Link>
      
    </nav>
    
  </div>
</header>
);}
