---
title: 'Skills'
subtitle: 'Where I worked and studied and what I learned'
date: 2024-06-16
summary: "A less formal CV on the web with more visualisation and"
description: "Philipp Petermeier's education and professional experience. Learn about my work at Fraunhofer IEE, skills in Python, Machine Learning, Deep Reinforcement Learning, and experience with energy systems and data science."
type: landing
draft: false
design:
  spacing: 'rem'

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: resume-biography
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
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
      title: "What I experienced so far"
      text: |
        I spent a lot of time studying humanities with a focus on philosophy, only to change course and start my B.S. to learn how to build complex things with a clear purpose using software.
        

        This part of my education is not listed here, mainly because I find it difficult to explain what concrete practical skills I have acquired during my time there. 


        At the same time, I'm sure that my experiences have structured many of my cognitive processes and views in a fundamental way, and have made me a much better software engineer, developer, modeller, team member and human being.    


        If you are curious about this side of me, I would encourage you to visit the  <a href="https://infornomics.substack.com/p/about-me" target="_blank">About this place</a>-Section of my substack. How I think about things I find interesting can be seen in the posts themselves. I hope you like it.

        ___    
      design:
      spacing:
    # Customize the section spacing. Order is top, right, bottom, left.
        padding: ['0', '0', '0', '0']


  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false      
      spacing:
    # Customize the section spacing. Order is top, right, bottom, left.
        padding: ['0', '0', '0', '0']
  - block: resume-skills
    content:
      title: What I learned doing it
      username: admin
    design:
      show_skill_percentage: true
      view: article-grid
      spacing:
    # Customize the section spacing. Order is top, right, bottom, left.
        padding: ['0', '0', '0', '0']
  - block: resume-languages
    content:
      title: How I can interact with you 
      show_skill_percentage: true
      username: admin
---
