import React from "react";
import "../styles/Bio.css";

const Bio: React.FC = () => {
  return (
    <article className="biography">
      <h1> BIOGRAPHY </h1>
      <div className="image-container">
        <img src="/images/biography.jpg" alt="image of jayplay" />
      </div>
      <p> <b>Jay Play | The Journey of a Soulful Storyteller </b> <br />
        Born Olorunjuwon Adewale Jury, Jay Play’s journey  into music is one of passion, discovery, and purpose. From a young age,  music was more than just sound to him, it was a voice, a language, a way  to make sense of the world. He discovered his love for music at just 15 years old, shaped by the melodies of the church and the stories woven into everyday life around him. It wasn’t long before that love turned into something bigger. With a  heart full of dreams and a voice that refused to be silenced, Jay Play  released his debut single, “ROBO”, marking the start of a journey that would resonate with many. His music speaks to the soul,  blending emotion with rhythm, telling stories that feel deeply personal  yet universally understood.
      </p>
      <p>His latest single, “Don’t Put Me on Silent,” is more than just a song, t’s an experience. Inspired by a fleeting yet  unforgettable encounter, it’s a heartfelt plea for connection, a  reflection of the longing and emotions that make us human. Through every lyric, every note, Jay Play invites listeners into his world, proving  that music isn’t just what he does, it’s who he is. His story is still being written, but one thing is certain: Jay Play is here to leave an impact, one song at a time.</p>
    </article>
  );
};

export default Bio;
