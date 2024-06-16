---
title: "Ambitions"
subtitle: "Hopefully future projects"
date: 2024-06-16
summary: "Why I'm interested in programming languages, open science, tiny machine learning, and theoretical computer science"
type: landing
draft: false
design:
  # Section spacing
    spacing: 'rem'

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
      title:  "What I still want to do"
      text: |
        I want to contribute to solving today's hard and important challenges, preferably by writing good software in collaboration with others. 
        

        Some of the most obvious areas in which to do this at least for me are:

        - Helping us understand more about the world we live in.

        - Enabling us to do what we already do more efficiently and effectively by improving the solutions we already use.

        - Creating new solutions to our pressing problems - better ones if we already have them, or entirely new ones if we lack them.

        ___   


        ## What I would like to learn doing that


        Here are the tools that I cannot use at the moment but that I would like to familiarise myself with in order to better achieve my goals and learn what I want, ordered by area:

        ___


        ## Programming languages:

        - ### <a href="https://www.rust-lang.org/" target="_blank"> {{< icon name=\"devicon/rust\">}} Rust </a >

        - ### <a href="https://cplusplus.com/" target="_blank">{{< icon name=\"devicon/cplusplus\" >}} C++  </a >

        - ### <a href="https://go.dev//" target="_blank">{{< icon name=\"devicon/go-wordmark\" >}}  Go  </a >



        ___


        ## Management and communication


        ![Fair Data Principles](FAIR_data_principles.jpg) <p style="text-align:right"> [^1]</p>



        Standards of reproduceability and <a href="https://en.wikipedia.org/wiki/Open_science" target="_blank">  open science </a >, <a href="https://en.wikipedia.org/wiki/FAIR_data" target="_blank">  FAIR data </a > and  their correlates in commercial context. This includes, of course, practices for successful compliance with these standards such as <a href="https://makefiletutorial.com/" target="_blank">  .make-files</a >.


        ![Open Science Pillars](UNESCO-Open_science-pillars-en.jpg)<p style="text-align:right"> [^2]</p>

            
        ___


        ## Applied Computer Science


        ### <a href="https://arxiv.org/abs/2403.19076" target="_blank">  Tiny Machine Learning</a >
        is an emerging field that focuses on deploying machine learning models on resource-constrained edge devices, such as microcontrollers and sensors, commonly used in the Internet of Things (IoT). The basic premise of TinyML is to enable real-time, on-device inference with minimal power and memory consumption, thus bypassing the need for cloud connectivity and improving privacy and responsiveness. [^3] 
      
        At the moment, I would need to learn more before I could work efficiently in this area, not least a high-performance language (see above) as well as principles of embedded architectures and signal processing. I'm absolutely sure that this is a really productive direction to work in the field of AI and ML, even if not prestigious and impressive.
        ![Arduino Tiny Machine Learning Kit](tinymachinelearning_arduino.webp)<p style="text-align:right"> [^4]</p>


        ___

        ## Math, Models and theoretical CS


        ### <a href="https://en.wikipedia.org/wiki/Graph_theory" target="_blank">  Graph Theory</a >
        is a fundamental area of mathematics and theoretical computer science, studies structures called graphs, which consist of nodes (vertices) connected by edges. It provides a powerful framework for modelling relationships and interactions in complex systems. Fundamental concepts include paths, cycles, connectivity, and graph colouring. Key algorithms in graph theory include Dijkstra's algorithm for shortest paths, Kruskal's and Prim's algorithms for minimum spanning trees, and the Ford-Fulkerson algorithm for maximum flow problems. Graph theory is widely used to model real-world phenomena, such as social networks, where nodes represent individuals and edges represent relationships; transportation networks, where nodes are locations and edges are routes; and biological networks, where nodes can represent genes or proteins and edges represent interactions. These models help to optimise routes, understand social dynamics, and unravel biological processes.[^3]

        Graphs are used in many different areas I'm interested in and can even be combined with Deep Learning Models into Graph Neural Networks. I would like to learn more about them.
        ![Types of Graphs](graphs.png)<p style="text-align:right"> [^5]</p>


        ____
        ### <a href="https://en.wikipedia.org/wiki/Information_theory" target="_blank">  Information Theory</a >, <a href="https://en.wikipedia.org/wiki/Entropy_(information_theory" target="_blank">  Entropy</a >, <a href="https://en.wikipedia.org/wiki/Data_compression" target="_blank">  Compression</a >

        **Entropy (H):**

        {{< math >}}
        $$
        H(X) = - \sum_{i} P(x_i) \log P(x_i)
        $$
        {{</math >}}

        Information theory, pioneered by Claude Shannon, is a fundamental area of applied mathematics and theoretical computer science that focuses on quantifying information, encoding data, and transmitting messages efficiently. A central concept in information theory is entropy, which measures the uncertainty or randomness in a set of data and provides a limit to the best possible lossless compression. High entropy indicates more unpredictability and therefore more information content, while low entropy indicates redundancy. Compression algorithms, such as Huffman coding and Lempel-Ziv-Welch (LZW), leverage entropy to reduce the size of data without losing information. Practical applications of information theory and compression include data storage, efficient data transmission in telecommunications, image and audio compression formats such as JPEG and MP3, and error detection and correction in digital communication systems, ensuring reliable and efficient data exchange across different platforms and technologies.[^3]

        For me, information compression is a modern marvel. And every bit of Information Theory I learned to explain how it works has left me even more in awe than before. I feel really bad about not understanding how a computer works at a fundamental level and I want to change that. Information theory is one part of that knowledge. 
         
        **Binary erasure channel:** 
        ![Binaryerasurechannel png](Binaryerasurechannel.png)<p style="text-align:right"> [^6]</p>


        ___


        ### <a href="https://en.wikipedia.org/wiki/Multi-agent_system" target="_blank">  Multi-agent systems</a >

        involve multiple interacting agents, which can be autonomous entities such as robots, software programs, or individuals, each capable of independent decision-making and cooperation. Fundamental concepts in MAS include agent communication, coordination, negotiation, and distributed problem-solving. Agents in an MAS operate based on local knowledge and interactions, often leading to emergent behavior that solves complex problems more efficiently than a single agent could. Applications of MAS are diverse and include areas such as distributed artificial intelligence where they optimize logistics and supply chains, smart grid management for efficient energy distribution, and autonomous vehicle coordination for traffic management. In addition, MAS are used in the simulation and modeling of social systems, enabling better understanding and prediction of phenomena such as market dynamics, social behaviors, and ecological systems.[^3]

        What fascinates me about multi-agent systems is their tendency towards <a href="https://en.wikipedia.org/wiki/Self-organization" target="_blank">  Self-organization</a >, which I first encountered in the context of <a href="https://en.wikipedia.org/wiki/Emergence" target="_blank"> Emergence</a > in philosophy. The applications are widespread and seem to be more practical than theoretical. In my introduction to Julia class I worked on an agent-based transportation optimization problem using a graph space with <a href="https://juliadynamics.github.io/Agents.jl/stable/" target="_blank"> Agents.jl</a >. It fascinated me and is a fairly intuitive way of modeling very different real world phenomena. I would like to stress that societies at large and thus also political science and economics can be modeled this way.     
        ![Gif of Sheep Wolf Grass Simulation](sheepwolfgrass.gif)<p style="text-align:right"> [^7]</p>


        ___


        ### <a href="https://en.wikipedia.org/wiki/Evolutionary_algorithm" target="_blank"> Evolutionary Algorithms (EAs) </a>

        are a subset of optimization algorithms inspired by the principles of natural selection and genetics. These algorithms utilize a population of potential solutions, which evolve over iterations to find optimal or near-optimal solutions to complex problems. Key concepts in EAs include selection, crossover (recombination), mutation, and fitness evaluation. Selection chooses the best-performing individuals, crossover combines pairs of individuals to produce offspring, mutation introduces random changes, and fitness evaluation measures how well solutions meet the desired objectives. The applications of evolutionary algorithms are vast and include optimizing engineering designs, training neural networks, solving combinatorial problems such as the traveling salesman problem, and evolving strategies in game theory. They are particularly useful in scenarios where the search space is large, complex, and poorly understood, providing robust and adaptive solutions in fields such as bioinformatics, finance, logistics, and artificial intelligence.[^3]

        I cannot tell you why but in the field of optimisation algorithms evolutionary algorithms simply have a special place in my heart that I cannot even explain to myself. 
        Using the principle of fitness selection which structures every biological system we know, just feels beautiful and elegant to me. I think I understand the basic principles but there is surely so much more. 

        ![Classification of evolutionary algorithms](evoalgs.png)<p style="text-align:right"> [^8]</p>

        
        [^1]: Picture Source: https://en.wikipedia.org/wiki/FAIR_data
        [^2]: Picture Source: https://en.wikipedia.org/wiki/UNESCO
        [^3]: Big thanks to ChatGPT for those concise overviews
        [^4]: Picture Source: https://store.arduino.cc/products/arduino-tiny-machine-learning-kit 
        [^5]: Picture Source: https://sitn.hms.harvard.edu/flash/2021/graph-theory-101/
        [^6]: Picture Source: https://en.wikipedia.org/wiki/Entropy_(information_theory)
        [^7]: Picture Source: https://juliadynamics.github.io/Agents.jl/stable/examples/predator_prey/
        [^8]: Picture Source: https://www.researchgate.net/figure/The-classification-of-evolutionary-algorithms_fig1_324994158


      design:
      spacing:
    # Customize the section spacing. Order is top, right, bottom, left.
        padding: ['0', '0', '0', '0']

---
