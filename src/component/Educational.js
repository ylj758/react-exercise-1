import React from 'react';

export default function education() {
  const title = 'EDUCATION';
  const educations = [
    {
      year: 1990,
      abstract: 'I was born in Katowice',
      content:
        'Lorem ipsum dolor sit amet,consectetur adipisicing elit.Sapiente,exercitationem,totam,dolores iste dolore est aut modi.',
    },
    {
      year: 2005,
      abstract: 'Secondary school specializeing in artistic',
      content:
        'Eos,explicabo,nam,tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
    },
    {
      year: 2009,
      abstract: 'First level graduation in Graphic Design',
      content:
        'Aspernatur,mollitia,quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis?Iusto,quibusdam asperiores unde repellat.',
    },
    {
      year: 2012,
      abstract: 'Second level graduation in Graphic Design',
      content: 'Ducimus,aliquam tempore autem itaque et accusantium!',
    },
  ];

  function getEducations() {
    return educations.map((education, index) => (
      <li className="li" key={index}>
        <p className="year">{education.year}</p>
        <section className="info">
          <p className="abstract">{education.abstract}</p>
          <p className="content">{education.content}</p>
        </section>
      </li>
    ));
  }

  return (
    <section className="education">
      <h1>{title}</h1>
      <ul>{getEducations()}</ul>
    </section>
  );
}
