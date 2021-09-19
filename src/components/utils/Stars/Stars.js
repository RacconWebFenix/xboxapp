import React from "react";
import "../Stars/stars.css"
const STARS = {
  empty: "☆",
  full: "★",
};

export default function Stars({ value }) {
  const fullStars = STARS.full.repeat(value);
  const emptyStars = STARS.empty.repeat(10 - value);

  return <div className="stars">{fullStars}{emptyStars}</div>;
}
