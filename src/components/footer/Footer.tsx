import React from "react";
import {
  FaceBookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../ui/Icons";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    icon: GithubIcon,
    href: "https://github.com/ThanhTumG",
    label: "GitHub",
    key: "github",
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/_tmg.pct",
    label: "Instagram",
    key: "instagram",
  },
  {
    icon: FaceBookIcon,
    href: "https://www.facebook.com/zenith.0102",
    label: "Twitter",
    key: "facebook",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/tung-pctt2510/",
    label: "LinkedIn",
    key: "linkedin",
  },
];
const Footer = () => {
  return (
    <>
      {/* Fixed Social Links - Left Side */}
      <div className="fixed bottom-0 left-4 hidden lg:block z-10">
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:w-px after:h-24 after:bg-light-slate">
          {socialLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-slate hover:text-cyan hover:translate-y-1 transition-all duration-300"
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </div>

      {/* Fixed Email - Right Side */}
      <div className="fixed bottom-0 right-4 hidden lg:block z-10">
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:w-px after:h-24 after:bg-light-slate">
          <Link
            href="mailto:thanhtumg.2510@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="text-light-slate hover:text-cyan font-mono text-sm tracking-widest hover:translate-y-1 transition-all duration-300"
            style={{ writingMode: "vertical-rl" }}
          >
            thanhtumg.2510@gmail.com
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="pb-10 pt-28 px-6 text-center lg:pl-20 lg:pr-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-8 mb-8 lg:hidden">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-slate hover:text-cyan transition-colors"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </Link>
            ))}
          </div>

          <div className="text-center text-light-slate transition-colors font-mono text-sm">
            <span className="block mb-2">Built and deploy by Tung Pham</span>
            <span className="block mb-2">
              Design inspired by{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan tracking-tighter"
                href={"https://brittanychiang.com"}
              >
                Brittany Chiang
              </Link>
            </span>
            <Link
              href="https://github.com/ThanhTumG/personal-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan"
            >
              <span className="flex items-center justify-center gap-1 text-xs opacity-75">
                <ExternalLink size={12} />
                View Source
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
