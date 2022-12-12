import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Katashi Fujino. All Rights Reserved.`,
  author: {
    name: "Katashi Fujino",
    accounts: [
      {
        url: "https://github.com/kryptify",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/Katashi",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://dev.to/katashi",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://linkedin.com/in/katashi-fujino",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "https://www.quora.com/profile/katashi-fujino",
        label: "Quora Account",
        type: "red",
        icon: <FaQuora />
      },
      {
        url: "mailto:work.katashi@gmail.com",
        label: "Mail katashi",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
