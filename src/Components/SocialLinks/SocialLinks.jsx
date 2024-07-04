import React from "react";

export default function SocialLinks(props) {
  console.log(props,"log")
  return (
    <nav>
      <ul>
        <li>
          <a
            className="flex justify-center flex-row"
            target="_blank"
            href={props.link}
          >
            {props.icon}
  
          </a>
        </li>
      </ul>
    </nav>
  );
}
