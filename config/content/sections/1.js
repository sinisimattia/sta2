export default {
  sections: [
    {
      id: 'design',
      reversed: true,
      title: 'Customizable Design',
      snippet:
        'Tweak the appearence to match your taste.',
      content: {
        paragraphs: [
          'You can either customize this page via simple options in the section file or by directly editing the source code.',
          "It's up to you, really."
        ],
      },
      type: 'primary',
      image: 'illustrations/ideation.svg',
    },
    {
      id: 'presets',
      title: 'Choose your preset',
      snippet:
        'Build now, learn later.',
      content: {
        paragraphs: [
          'Acces pre-built and pre-tested components and worry about your message, not its presentation.'
        ],
      },
      image: 'illustrations/team.svg',
    },
    {
      id: 'performance',
      title: 'Universally Performant',
      snippet: 'Generate vanilla pages.',
      type: 'dark',
      reversed: true,
      content: {
        paragraphs: [
          'No framework needed.',
          'The site is compiled and built ad hoc for the situation, making it universally deployable.',
        ],
      },
      image: 'illustrations/growing.svg',
    },
  ],
}
