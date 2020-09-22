import React from 'react';

export default function AboutMe() {
  const aboutMe = 'ABOUT ME';
  const content =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, cumque distinctio magni quam expedita velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.';

  return (
    <section className="aboutMe">
      <h1>{aboutMe}</h1>
      <p>{content}</p>
    </section>
  );
}
