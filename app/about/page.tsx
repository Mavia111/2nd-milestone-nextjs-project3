import { Heading2, Heading3 } from "../components/headings";
import { Para } from "../components/para";

export default function About(){
    return(
        <div className="p-8">
            <div>
                <Heading2 name="About Us" />
                <Para name="Welcome to The Bloggers — where stories, insights, and inspiration meet. 
                Whether you're a curious mind, a seasoned traveler, or a passionate creator, we're here to
                 bring you the latest trends, thought-provoking articles, and engaging content to make your 
                 day just a little bit brighter."  />

                 <Heading3 name="Who We Are "/>
                 <Para name="At The Bloggers, we’re a passionate team of writers, creatives, and digital 
                 enthusiasts, united by one common goal: to share valuable content that educates, inspires, 
                 and entertains. Our blog covers a wide variety of topics, ranging from lifestyle and 
                 technology to personal growth and travel. But no matter the subject, we always focus on 
                 delivering well-researched, authentic, and engaging articles that you can trust."/>

                 <Para name="Our team is made up of experienced writers and professionals who are constantly 
                 exploring new ideas, technologies, and trends to bring you fresh perspectives. Whether it's a 
                 deep dive into the latest tech gadgets, a guide to living a more sustainable life, or tips 
                 for improving your mental well-being, we’ve got you covered. Every post is written with you, 
                 our readers, in mind — and we strive to provide content that not only informs but also sparks 
                 meaningful conversations."/>

                <Heading3 name="Our Mission"/>
                 <Para name="Our mission is simple: to empower our readers with knowledge, spark creativity, 
                 and cultivate a positive community. We believe in the power of storytelling and the impact 
                 that great content can have on our lives. In an ever-changing world, we aim to offer reliable,
                 engaging, and diverse content that helps you navigate both the big and small moments of life"/>
                  
                  <Para name="We understand that everyone’s journey is different, so whether you're looking for
                   actionable advice on personal development, inspiration for your next travel adventure, or 
                   the latest insights into the tech world, we want to be a source of knowledge and inspiration
                    for you."/>
                  </div>
                  </div>
    );}