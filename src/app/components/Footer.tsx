"use client";
import Link from "next/link";

const Footer = () => {
  // Hardcoded data
  const data = {
    logo: [
      {
        url: "/images/halal-devco-logo.png", // Use local image path or another hardcoded URL
      },
    ],
    links: [
      {
        id: 1,
        title: "Company",
        footLinks: [
          { id: 1, footLinkHref: "/about", footLink: "About Us" },
          { id: 2, footLinkHref: "/services", footLink: "Services" },
          { id: 3, footLinkHref: "/contact", footLink: "Contact" },
        ],
      },
      {
        id: 2,
        title: "Resources",
        footLinks: [
          { id: 4, footLinkHref: "/blog", footLink: "Blog" },
          { id: 5, footLinkHref: "/faqs", footLink: "FAQs" },
        ],
      },
      {
        id: 3,
        title: "Legal",
        footLinks: [
          { id: 6, footLinkHref: "/privacy", footLink: "Privacy Policy" },
          { id: 7, footLinkHref: "/terms", footLink: "Terms of Service" },
        ],
      },
      {
        id: 4,
        title: "Social",
        footLinks: [], // This will be for social networks
      },
    ],
  };

  const footerLinks = {
    social_network: [
      { href: "https://facebook.com", name: "Facebook", icon: "📘" },
      { href: "https://twitter.com", name: "Twitter", icon: "🐦" },
      { href: "https://linkedin.com", name: "LinkedIn", icon: "🔗" },
    ],
  };

  return (
    <footer className="p-12 flex flex-col lg:flex-row items-start gap-x-36 gap-y-10 bg-secondary-gradient rounded-3xl bg-gradient-to-br from-[#00adef] to-[#0074b7]">
      <Link href={"/"}>
        <img
          src="/uix.png"
          alt="Halal DevCo. logo"
          width={180}
          height={37}
          className="mt-1"
        />
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
        {data.links.map((linkItem, linkIndex) => (
          <div className="space-y-4" key={linkItem.id}>
            <h3 className="font-semibold text-2xl">{linkItem.title}</h3>
            {linkIndex === data.links.length - 1 ? (
              <ul className="flex flex-wrap gap-6">
                {footerLinks.social_network.map((social, index) => (
                  <li key={index}>
                    <Link href={social.href} aria-label={social.name}>
                      {social.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="flex flex-col">
                {linkItem.footLinks.map((link) =>
                  link.footLinkHref !== null ? (
                    <li key={link.id}>
                      <Link href={link.footLinkHref}>{link.footLink}</Link>
                    </li>
                  ) : (
                    <li key={link.id}>{link.footLink}</li>
                  )
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
