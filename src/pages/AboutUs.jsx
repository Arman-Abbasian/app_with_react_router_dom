import React from "react";

const AboutUs = () => {
  return (
    <div>
      <article
        className="container max-w-4xl mx-auto
            prose prose-img:w-full prose-img:h-full prose-img:object-center prose-img:object-cover prose-img:rounded-md prose-img:mb-4
         prose-headings:text-project-light-sky
         prose-a:text-blue-400 prose-a:no-underline prose-a:leading-10
          prose-p:text-black
        "
      >
        <img
          src="image/personnel/pressing.png"
          className=" !rounded-full ring-4 ring-project-dark-green ring-offset-4 ring-offset-project-light-sky "
        />
        <h1>SISAKO</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi
          rerum eos dolor numquam? Suscipit in itaque quidem molestias deleniti
          asperiores, voluptates eos <a href="#">Link</a> culpa quam labore
          aliquam, neque, consequuntur natus.
        </p>
        <figure>
          <div className="aspect-w-6 aspect-h-4 mb-10">
            <img src="image/aboutUs/pressing saloon2.webp" />
          </div>
          <figcaption>Fig.1 - pressing saloon</figcaption>
        </figure>
        <p>
          Lorem ipsum, dolor sit amet{" "}
          <span>
            <img
              src="image/personnel/pressing.png"
              className="!w-5 !h-5 !m-0 !rounded-full  ring-1 ring-project-light-sky  inline"
            />
          </span>{" "}
          consectetur adipisicing elit. Ipsa deleniti neque quos eum cumque{" "}
          <a href="#">Link</a> voluptatibus incidunt officia sunt voluptates
          ipsam iure blanditiis delectus fugit similique laudantium doloribus
          cum, rem veritatis?
        </p>
        <h2>sisako 1</h2>
        <h3>sisako 1-1</h3>
        <p>
          In a professional context it often happens{" "}
          <span>
            <img
              src="image/personnel/pressing.png"
              className="!w-5 !h-5 !m-0 !rounded-full  ring-1 ring-project-light-sky  inline"
            />
          </span>{" "}
          that private or corporate clients corder a publication to be made and
          presented with the actual content still not being ready. Think of a
          news blog that's filled with content hourly on the day of going live.
          However, reviewers tend to be distracted by comprehensible content,
          say, a random text copied from a newspaper or the internet. The are
          likely to focus on the text, disregarding the layout and its elements.
        </p>
        <figure>
          <div className="aspect-w-6 aspect-h-4 mb-10">
            <img src="image/aboutUs/pressing saloon.webp" />
          </div>
          <figcaption>Fig.2 - pressing saloon</figcaption>
        </figure>
        <h2>sisako 2</h2>
        <h3>sisako 2-1</h3>
        <p>
          In a professional context it often happens that private or corporate{" "}
          <a href="#">Link</a> clients corder a publication to be made and
          presented with the actual content still not being ready. Think of a
          news blog that's filled with content hourly on the day of going live.
          However, reviewers tend to be distracted by comprehensible content,
          say, a random text copied from a newspaper or the internet. The are
          likely to focus on the text, disregarding the layout and its elements.
        </p>
        <figure>
          <div className="aspect-w-6 aspect-h-4 mb-10">
            <img src="image/aboutUs/welding.jpg" />
          </div>
          <figcaption>Fig.3 - welding saloon</figcaption>
        </figure>
      </article>
    </div>
  );
};

export default AboutUs;
