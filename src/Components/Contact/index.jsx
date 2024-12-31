import React from "react";

// Reusable Card Component
const Card = ({ title, description, contactInfo, buttonText, link, icon }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-auto px-4 xl:px-10 mb-10 md:mb-0">
      <div className="max-w-sm mx-auto h-full py-8 px-6 bg-orange-500 border border-gray-200 rounded-3xl">
        <div className="max-w-2xs mx-auto text-center">
          {icon && <img className="block mx-auto mb-3" src={icon} alt="icon" />}
          <h5 className="text-2xl font-bold text-red-900 mb-3">{title}</h5>
          <p className="text-white mb-3">{description}</p>
          <span className="block text-sm text-orange-900 mb-8">{contactInfo}</span>
          <a
            className="relative group inline-block py-4 px-6 text-white font-semibold bg-orange-900 rounded-full overflow-hidden"
            href={link}
          >
            <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
            <div className="relative flex items-center justify-center">
              <span className="mr-4">{buttonText}</span>
              <span>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.83 5.28999L2.59 1.04999C2.49704 0.956266 2.38644 0.881872 2.26458 0.831103C2.14272 0.780334 2.01202 0.754196 1.88 0.754196C1.74799 0.754196 1.61729 0.780334 1.49543 0.831103C1.37357 0.881872 1.26297 0.956266 1.17 1.04999C0.983753 1.23736 0.879211 1.49081 0.879211 1.75499C0.879211 2.01918 0.983753 2.27263 1.17 2.45999L4.71 5.99999L1.17 9.53999C0.983753 9.72736 0.879211 9.98081 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.70999C6.92373 6.61703 6.99813 6.50643 7.04889 6.38457C7.09966 6.26271 7.1258 6.13201 7.1258 5.99999C7.1258 5.86798 7.09966 5.73728 7.04889 5.61542C6.99813 5.49356 6.92373 5.38296 6.83 5.28999Z"
                    fill="#FAFBFC"
                  ></path>
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

function Contact() {
  return (
    <section className="relative py-20 md:py-32 bg-gray-800 overflow-hidden">
      <div className="relative container bg-gray-500 p-4 mx-auto rounded-3xl">
        <div className="max-w-2xl mx-auto mb-18 text-center">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
            AT YOUR SERVICE
          </span>
          <h1 className="font-heading text-5xl xs:text-6xl font-bold text-white mb-4">
            <span>Please! Feel Free to connect </span>
            <span className="font-serif italic">with me</span>
            <span>?</span>
          </h1>

        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <Card
            title="Contact me on Email"
            description="Don't hesitate to email me!!!"
            contactInfo="yyoyosze@gmail.com"
            buttonText="Contact"
            link="mailto:yyoyosze@gmail.com"
          />
          <Card
            title="Call me on phone"
            description="Don't hesitate to call me!!!"
            contactInfo="+1 (437) 848-9803"
            buttonText="Call Now"
            link="tel:+14378489803"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;