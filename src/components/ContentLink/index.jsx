import React from "react";
import Styles from "./styles.module.scss";
function ContentLink() {
  const links = [
    {
      text: "Twitter",
      url: "https://www.twitter.com/camblackwood95",
      description: "Tepid Takes on Tech",
    },
    {
      text: "TikTok",
      url: "https://www.tiktok.com/@cameronblackwoodcode",
      description: "Quick bites of useful info!",
    },
    {
      text: "Podcast",
      url: "https://www.youtube.com/c/thecodercareer",
      description:
        "The Coder Career - a podcast about getting the most out of your tech career.",
    },
    {
      text: "GitHub",
      url: "https://www.github.com/reikon95",
      description: "My Repos... look at your on risk!",
    },
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/cameron-blackwood/",
      description:
        "Follow me on LinkedIn - or connect if you want to reach me!",
    },
    {
      text: "YouTube",
      url: "https://www.youtube.com/channel/UCX6jvWxIvSDohlXRyawwymQ",
      description:
        "My career advice and tech tips, beamed to you in high definition",
    },
  ];
  return (
    <div className={Styles.linksWrapper}>
      {links.map((link) => {
        return (
          <div className={Styles.linkWrapper}>
            <a href={link.url} target="_blank">
              <button className={Styles.btn}>{link.text}</button>
            </a>
            <span>{link.description}</span>
          </div>
        );
      })}
    </div>
  );
}
export default ContentLink;
