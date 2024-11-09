import { Heading2, Heading3, Heading4 } from "../components/headings";
import { Images } from "../components/images";
import { Para } from "../components/para";

export default function About(){
    return(
        <div className="p-8">
            <div>
                <Heading2 name="Blogs" />
                
                <Images image="../images/blog1.png"/>
                 <Heading3 name="Getting Started with Next.js: A Beginner’s Guide "/>
                 <Heading4 name="Introduction:"/>
                 <Para name="Next.js is a powerful React framework that enables developers to build fast, 
                 scalable, and SEO-friendly web applications. If you're new to Next.js, this guide will walk 
                 you through the basics of setting up your first project, understanding its key concepts, and 
                 building your first Next.js app."/>
                 <Heading4 name="Key Sections:"/>
                 <Heading4 name="What is Next.js?"/>
                 <Para name="A brief overview of Next.js and its core features (SSR, SSG, routing, etc.)."/>

                <Heading4 name="Setting Up a Next.js Project"/>
                 <Para name="Step-by-step instructions for creating a Next.js app using create-next-app."/>
                 <Para name="Initial project structure."/>

                 <Heading4 name="Building Pages in Next.js"/>
                 <Para name="Introduction to Next.js routing with pages directory."/>
                 <Para name="Static pages vs dynamic pages."/>

                 <Heading4 name="Running the Development Server"/>
                 <Para name="Running and testing your app with npm run dev."/>
                 <Heading4 name="Deploying to Vercel"/>
                 <Para name="How to deploy your Next.js project to Vercel with minimal setup."/>
                 <Heading4 name="Conclusion:"/>
                 <Para name="Wrap up with the benefits of using Next.js for web development and suggest next steps (like exploring API routes, dynamic routing, or data fetching methods)."/>
                 <Images image="../images/blog2.png"/>
                  {/* 2nd Blog */}
                 <Heading3 name="Exploring Next.js Data Fetching: SSR vs. SSG vs. ISR "/>
                 <Heading4 name="Introduction:"/>
                 <Para name="Next.js offers several methods for fetching data in your application. Understanding when to use Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR) can help you optimize performance and SEO. In this post, we’ll compare these strategies and explore their use cases."/>
                 <Heading4 name="Key Sections:"/>
                 <Heading4 name="What is Server-Side Rendering (SSR)?"/>
                 <Para name="Explanation of how SSR works in Next.js"/>
                 <Para name="Example of using getServerSideProps for SSR."/>
                 <Para name="Benefits of SSR for dynamic content."/>

                <Heading4 name="What is Static Site Generation (SSG)?"/>
                 <Para name="Explanation of SSG and when it’s the best choice for your project."/>
                 <Para name="Example of using getStaticProps for SSG."/>
                 <Para name="Benefits of SSG for static content and SEO."/>

                 <Heading4 name="What is Incremental Static Regeneration (ISR)?"/>
                 <Para name="Introduction to ISR and how it combines the best of SSR and SSG."/>
                 <Para name="Example of using revalidate in getStaticProps."/>
                 <Para name="How ISR enables real-time content updates without rebuilding the entire site."/>

                 <Heading4 name="Choosing the Right Data Fetching Strategy"/>
                 <Para name="Comparison of SSR, SSG, and ISR based on use cases (e.g., blog, e-commerce, dashboard)."/>
                 <Heading4 name="Conclusion:"/>
                 <Para name="Summarize when to use each method based on your needs and project requirements, helping developers decide the best data-fetching approach."/>
                 <Images image="../images/blog3.png"/>
                    {/* 3nd Blog */}
                 <Heading3 name="How to Add Authentication in a Next.js Application "/>
                 <Heading4 name="Introduction:"/>
                 <Para name="Adding authentication to your Next.js application is essential for many modern web apps. In this guide, we'll walk you through how to implement authentication using a popular solution like NextAuth.js, which integrates seamlessly with Next.js."/>
                 <Heading4 name="Key Sections:"/>
                 <Heading4 name="What is NextAuth.js?"/>
                 <Para name="Brief introduction to NextAuth.js and why it’s a great choice for Next.js apps."/>
                 <Para name="Benefits like built-in OAuth providers, JWT, and session management."/>

                <Heading4 name="Installing NextAuth.js in Your Next.js Project"/>
                 <Para name="Installation and setup of next-auth package."/>
                 <Para name="Create a simple authentication provider."/>

                 <Heading4 name="Setting Up OAuth Providers (Google, GitHub, etc.)"/>
                 <Para name="How to configure OAuth authentication for Google, GitHub, or other providers."/>
                 
                 <Heading4 name="Handling Sessions in Next.js"/>
                 <Para name="Using the useSession hook to manage authenticated sessions in your app."/>
                 <Para name="Protecting pages with getSession."/>

                 <Heading4 name="Securing API Routes"/>
                 <Para name="Example of protecting API routes using NextAuth’s getSession method."/>

                  <Heading4 name="Conclusion:"/>
                 <Para name="Highlight the ease of implementing secure authentication in Next.js with NextAuth.js and suggest further enhancements like email/password authentication or custom providers.

"/>
                    
                  </div>
                  </div>
    );}