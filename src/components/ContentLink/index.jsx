import React from "react";
import "./styles.css";
function ContentLink() {
  const links = [
    { text: "Twitter", url: "https://www.twitter.com/camblackwood95" },
    { text: "TikTok", url: "https://www.tiktok.com/@cameronblackwoodcode" },
    { text: "Podcast", url: "https://www.youtube.com/c/thecodercareer" },
    { text: "GitHub", url: "https://www.github.com/reikon95" },
    { text: "LinkedIn", url: "https://www.linkedin.com/in/cameron-blackwood/" },
  ];
  return (
    <div className="links-wrapper">
      {links.map((link) => {
        return (
          <a href={link.url} target="_blank">
            <button className="btn">{link.text}</button>
          </a>
        );
      })}
    </div>
  );
}
export default ContentLink;
