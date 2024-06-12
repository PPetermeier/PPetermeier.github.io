---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
summary: Introductory overview to this website, my interests, education and skills
type: landing

design:
  # Default section spacing
  spacing: "rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: " ## Introduction 

      Hey, nice of you to drop by.
      I'm collecting my various outputs here. 


      Right now my main focus is finding a great team of wonderful, smart people to work with on something important. 
      
      
      Maybe you or someone you know could fit that description? I'd love to hear from you. 
      

      You can visit my [Education & Skills](skills) section to get an idea what I could do for you and your team.


      Otherwise I hope you find what I aggregated here interesting, useful or at least entertaining."
      # Show a call-to-action button under your biography? (optional)
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-waves.svg
          filters:
            brightness: 0.9
          size: cover
          position: center
          parallax: false
  - block: markdown
    content:
      title: '🗺 Overview'
      subtitle: 'A short orientation what to expect in which of my feeds'
      text: "A short guide what to expect behind the icons and links on the top. This overview will get updated if need be. 

      - The programming sideprojects that I deemed worthy are public on my {{< icon name=\"brands/github\" >}}[**Github**](https://github.com/PPetermeier) page where this pages itself is also hosted.

      - I'm most active on {{< icon name=\"brands/twitter\" >}}[**Twitter**](https://x.com/infornomics), where I aggregate posts according to my outlined interests and occasionally engage with others, hopefully to the benefit of both of us and others.

      - {{< icon name=\"brands/linkedin\" >}}[**LinkedIn**](https://www.linkedin.com/in/philipp-petermeier-6ba469229) is mainly a platform for professional contacts and more of a communication channel than a public space for me.

      - On my {{< icon name=\"custom/substack\" >}}[**Substack**](https://infornomics.substack.com/) you will find longer discussions about various topics that are on my mind and needed to get pinned down in writing.

      - You can{{< icon name=\"envelope\" >}} <a href=\"mailto:p.petermeier@posteo.de\">contact me directly</a> through my mail adress embedded.

      - My <a href=\"uploads/CV_for_Website.pdf\" target=\"_blank\">CV</a> without private information can be downloaded on the last icon, if the [Education & Skills](skills) leaves you wanting for something more formal."
    design:
      spacing:
    # Customize the section spacing. Order is top, right, bottom, left.
        padding: ['10px', '0', '10px', '0']
        show_skill_percentage: true
  - block: resume-skills
    content:
      title:  ⌨️ Skills
      username: admin
    design:
      spacing:
    # Customize the section spacing. Order is top, right, bottom, left.
        padding: ['10px', '0', '10px', '0']
        show_skill_percentage: true



  - block: resume-languages
    content:
      title: Languages
      username: admin
      design:
        spacing:
    # Customize the section spacing. Order is top, right, bottom, left.
        padding: ['10px', '0', '10px', '0']
        show_skill_percentage: true
---
