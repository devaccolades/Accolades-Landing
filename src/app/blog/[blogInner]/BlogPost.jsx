import React from "react";
import {
  Calendar,
  User,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
} from "lucide-react";
import Image from "next/image";
import Img17 from "../../../../public/blog/img17.png";
import Img18 from "../../../../public/blog/img18.png";
import Img19 from "../../../../public/blog/img19.png";
import Img20 from "../../../../public/blog/img20.png";
import Img21 from "../../../../public/blog/img21.png";
import Icon1 from "../../../../public/blog/icon1.svg";
import Icon2 from "../../../../public/blog/icon2.svg";
import Icon3 from "../../../../public/blog/icon3.svg";
import Icon4 from "../../../../public/blog/icon4.svg";

export default function BlogPost() {
  const relatedPosts = [
    {
      title: "Digital Marketing Strategies That Convert",
      image: Img19,
    },
    {
      title: "Creating an Effective Brand Identity Through Social Media",
      image: Img20,
    },
    {
      title: "The Ultimate Guide to Social Media Analytics and What They Mean",
      image: Img21,
    },
  ];

  const socialIcons = [
    {
      src: Icon1,
      alt: "Facebook",
      href: "https://facebook.com/share-url",
    },
    {
      src: Icon2,
      alt: "Twitter",
      href: "https://twitter.com/share-url",
    },
    {
      src: Icon3,
      alt: "LinkedIn",
      href: "https://linkedin.com/share-url",
    },
    {
      src: Icon4,
      alt: "Copy Link",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 pb-20"       style={{
        background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
      }}>
      <div className="containers py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-4 ">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="md:px-8 px-4 pt-8">
                <span className="font-mont p-2 font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[120%] text-[#7B7B7B] rounded-[30px] border-2 border-[#F1F1F1]">
                  DIGITAL MARKETING
                </span>
                <h1 className="font-mont font-semibold xl:text-[28px] lg:text-[26px] text-[24px] leading-[100%] text-[#000000]  ">
                  From Likes to Leads: Services Offered by Social Media Agencies
                  in Mumbai
                </h1>
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2 font-mont p-2 font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[120%] text-[#7B7B7B]">
                    <Calendar className="w-4 h-4" />
                    <span>December 28, 2024</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:px-8 px-4 pb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#000000] mb-6">
                    Social media agencies are an integral part of forming
                    business marketing in the dynamic environment like Mumbai,
                    where businesses thrive. Social media has been a
                    game-changer that brings in more customer loyalty and
                    awareness. Mumbai has seen a rapid rise in top-tier services
                    as traditional forms of marketing now converge with the new
                    digital landscape and the new ways firms interact with other
                    companies during platforms. Agencies have unique competitive
                    features in this ever-changing landscape, and the
                    technological requirements for the social media marketing
                    industry grow from building brand image to creating
                    comprehensive client generation systems.
                  </p>

                  <p className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#000000] mb-8">
                    Strategic content development is one of these agencies' main
                    offerings. Social media marketing isn't just the content of
                    one particular and comprehensive technique that appeals to
                    the target demographics. These agencies use a data-driven
                    method to generate content by analyzing creative practices,
                    optimizing imagery, and in providing positioning. This
                    includes integrating ways that be part of modern social
                    media features and is essential for companies that want to
                    be visible in Mumbai's dynamic and competitive market.
                  </p>
                </div>

                <div className="mb-4">
                  <Image src={Img17} alt="img17" />
                </div>

                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Social media campaigns in Mumbai are characterized by
                    focused advertising. Mumbai's agencies provide social media
                    management and customer acquisition. Due to their expertise,
                    agencies create campaigns that promote content across the
                    social demographics to calling through targeted advertising
                    to most effectively the target market. This necessitates
                    campaign management and refinement, which these agencies can
                    provide. Social media optimization and related services are
                    excellent for startups, small businesses, and enterprises.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    These agencies also use a variety uses and analytical tools
                    and advanced indicators. They provide detailed analytics and
                    insights to help businesses understand their customers
                    better and how they can improve outcomes. These services
                    help companies enhance and optimize their performance. An
                    digital analytics, social media approach effective data is
                    vital for success because problems help them understand
                    whether their brand success.
                  </p>
                </div>

                <div className="mb-4">
                  <Image src={Img18} alt="img18" />
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    Social media businesses also provide community engagement
                    services as they build trust and authenticity by quickly
                    answering inquiries and comments. They help online
                    communities but also feel focused to each person fans,
                    building brand image. Most importantly, these agencies of
                    social media business needs to understand that a consistent
                    brand presence. It requires time, knowledge, and skills more
                    necessary growth, and engagement develops a solid lead.
                    These agencies can be managing director's customers that
                    focus on their core business, allowing business owners to
                    focus and the running their business because it a customer
                    experience needed in various digital campaigns to acquire
                    advanced infrastructure based in which customer growth and
                    engagement develops a lead. Agencies have the specialized
                    knowledge and automation that run the entire digital
                    process, ultimately, this helps company business.
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Related Posts */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-mont font-semibold lg:text-[22px] md:text-[20px] text-[18px] leading-[150%] text-[#707070] mb-6">
                  Related posts
                </h3>
                <div className="space-y-6">
                  {relatedPosts.map((post, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="flex gap-4">
                        <Image src={post.image} alt={post.title} />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-mont font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] group-hover:text-teal-600 transition-colors line-clamp-3">
                            {post.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Icons */}
              <div className=" p-2">
                <div className="flex justify-center gap-4">
                  {socialIcons.map((icon, index) => (
                    <a
                      key={index}
                      href={icon.href || "#"}
                      className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                      aria-label={icon.alt}
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}