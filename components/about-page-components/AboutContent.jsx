import React from 'react';

function AboutContent() {
  return (
    <main className='px-3 w-full sm:w-10/12 sm:mx-auto lg:w-3/5 md:mt-6 mb-40'>
      <h1 className='text-center text-3xl md:text-4xl mb-4 mt-10 font-bold montserrat'>
        About Reactify
      </h1>
      <section className='text-[17px] leading-[30px] m-serif'>
        <p>
          Reactify is primarily a project(an opensource blog) that is meant to
          help people learn some web development technologies that I have come
          to love. Like the name of the project already states, the first of
          such amazing web development technologies, is ReactJs. Reactify is a
          project that I built to primarily help people learn ReactJs and NextJs
          in a way that helps them optimize the learning process. Although the
          main themes of Reactify are ReactJs and NextJs, I added some extras to
          the mix.
        </p>
        <br />
        <p>
          In{' '}
          <a
            href='https://zhacks.hashnode.dev/how-to-build-a-complete-blog-with-nextjsreact-js-and-contentful-cmspart-2'
            target='_blank'
            className='underline font-bold'
          >
            my last blog post
          </a>{' '}
          , I completed a series-tutorial in which I showed how to build a
          complete blog with NextJs, tailwindCSS, and Contentful CMS. In the
          post, I stated that I was going to scale the blog project into an
          awesome resource for learning ReactJs and NextJs. Even though the idea
          of how to come around with Reactify was not totally clear by then,
          Reactify is what I was talking about – now it’s here. Since it is an
          opensource project, it surely won’t be a bad idea to have a section
          dedicated to helping people learn about opensource – so I added an
          opensource category. The final category(to make it four), which is
          currently present on Reactify, is a category dedicated to helping
          people get started with CMS by learning how to use Contentful CMS. I
          must admit that I fell in love with Contentful CMS after discovery all
          the amazing features it had to offer users and developers.
        </p>
        <br />
        <p>
          Please{' '}
          <a
            href='https://zhacks.hashnode.dev/finish-celebrating-hacktoberfest-2022-by-contributing-to-reactify'
            target='_blank'
            className='underline font-bold'
          >
            read the Reactify-project release article
          </a>{' '}
          to learn more about the reactify project and how to contribute to it.
        </p>
        <h1 className='text-2xl mt-3 mb-2 montserrat font-bold capitalize'>
          Our Philosophy
        </h1>
        Reactify is an opensource project that will be receiving contributions
        from various contributors who are of different backgrounds and different
        skill levels. Hence, it is important for everyone to collaborate
        peacefully and as a team. Reactify Code of conduct follows the
        Contributor Covenant code of conduct. By making a contribution to the
        project, every contributor agrees to abide by the dictates of the
        Contributor Covenant code of conduct, and agrees that their
        contributions are out of goodwill and not for any financial returns from
        Reactify. The project maintainer(s) reserve the right to direct the
        project and make decisions as seen fit for the progress of the project.
        All relevant suggestions are very much welcomed – we’re one big team
        guys.
      </section>
    </main>
  );
}

export default AboutContent;
