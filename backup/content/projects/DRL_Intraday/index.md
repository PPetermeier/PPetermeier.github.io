--- 
title: DRL-Python package for Intraday electricity trading
summary: Retrospective of my degree earning work
date: 2023-10-24
type: docs
math: true
tags:
- Intraday electricty market
- Deep Reinforcement Learning
image: 
    filename: commercial_electricity_markets_germany_localisation.jpg
    caption: 'How I earned my B.Sc. Degree'
---


## Quick facts

*Why:*

To earn my degree and ... for science!

Ultimately, to further the energy transition by enhancing flexibility and efficiency.

*Who:*

Me, my co-worker at [Fraunhofer IEE](https://www.iee.fraunhofer.de/), supervised by my team lead and additional co-worker on a PhD track

*How:*

Self-directed agile IT-Project Management utilising Python and MongoDB within the Fraunhofer IEE IT-Ecosystem

<a href="/uploads/Expose_BSC_for_Website.pdf" target="_blank">Non-technical exposé</a>

<a href="https://www.thm.de/site/en/university/campus/current/from-teaching-and-research/four-award-winning-ideas-for-the-future.html" target="_blank">I won a Prize for my work! You can read the article about the award ceremony of my alma mater here</a>

If you are interested in taking a peek, feel free to contact me on your channel of choice.

## Table of contents

1. [Introduction and context](#table-of-contents)
2. [The project itself](#the-project-persons-and-process)
3. [Results](#results)
4. [Lessons learned](#lessons-learned)

## Introduction

### The Challenge

The accelerating proliferation of renewable energy sources presents a technological and social challenge to the current configuration of electricity infrastructure. Before, electricity has been mainly produced at central facilities on a big scale and production adjusted to demand. This is no longer possible with renewables because of their intermittent nature. The institutional framework to coordinate supply and demand of electricity is in large part the EPEX in Leipzig providing a market and clearing service for customers with direct access to the power system, thus enabling the socially cheapest provision of electricity for each time of the day, at least to the extent to which externalities are priced into the system. The amount of manual control and action still present in current institutional arrangements within the power system is quite surprising to most unfamiliar with the domain assuming similar sophistication as in modern production lines with robots, automation, digitisation and even Industry 4.0.

### The long term goal

Enabling automated trading and constant self-optimisation through retraining is one crucial step in the direction of a cybernetic power system that is able to adjust itself to the demands of consumers not by central command-and-control structure but as an emergent feature enabled by self-coordination of individual functional units. The project set out to contribute to the development of applied scientific practice towards this specific part of that vision by enabling the application of state-of-the-art Machine Learning algorithms to the problem of trading on the EPEX itself, with lots of further development possible and necessary in order to achieve this goal. The first proximate project goal was the creation of a package demonstrating a proof-of-concept, with the ultimate goal a dynamically adjusting automated trading software for every intermittant energy source on the grid integrating latest market developments and optimising their economic returns by integrating production predictions of their own and competitors, demand forecasts and aggregated market behaviour.

### Proximate individual goals

- doing **my mandatory internship** in order to start my degree and writing **my Bachelor Thesis** about the work in order to finish my degree
- for my employer, **the Fraunhofer IEE the production of publishable research** and acquisition of industrial cooperation
- for my team the creation of a **new scientific software** with which to produce additional research
- for my **co-worker the start of his PhD track for which papers** have to be published

## The project: persons and process

### Outline

I entered the project together with my aforementioned co-worker starting his PhD track. We were both new to the Fraunhofer IEE and thus had to learn how to work together, how to work in this new environment and how to do research all at once. I found the environment to be wonderfully welcoming and supportive while the work itself was quite challenging in an exciting and fruitful way. Establishing a productive and enjoyable working relationship took some time. I had absolutely underestimated the challenges of interdisciplinary work: my co-worker had just finished his M.Sc. in mathematics with relatively little coding experience, and a quite different approach when trying to solve the problems we were supposed to tackle. We had to communicate quite a lot in order to establish a solid base of understanding from which we were able to work quite productively. We were lucky to be mentored by our team lead and another PhD student with experience in the same domain from whom we took over the project.

### First steps

The first part of the project came down to orientating ourselves: Getting to know each other and familiarising ourselves with the domain specifics, Reinforcement Learning and the tools. One of our main objectives was not only to write a software to enable Deep Reinforcement Learning on the provided Data, but also do so in a runtime efficient way as this had been one of the main bottlenecks before - this became my main responsibility to monitor together with establishing basics of IT-Project management I had familiarity with due to my educational background.

### Production Phase

Following the orientation, we developed two possible solutions which we benchmarked against each other on runtime efficiency and got approval to start implementation, which consisted of basic prototyping upon which we iterated until satisfactory results were achieved after which an additional required feature was added and the iteration loop started anew. Our solution consisted of two software components: An on-premise MongoDB-Database filled up by automated custom-written (by me) ETL-Pipeline in Python saving the previously unstructured Data specifically as needed, as well as the mentioned Python-Package implementing the Market Mechanism to use the Data to simulate the market movements. Once the feature list was complete, we started to run the package on on the HPC-cluster after creating a running environmental configuration and integrating the Ray Package which implemented  our RL-Algorithm of choice, PPO. This enabled me to benchmark runtime of actual training with the package resulting in the empirical section of my B.Sc. Thesis.

## Results

When I left the project, the following results were achieved:

- A theoretical way to apply **Reinforcement Learning on a LimitOrder Book Datastructure** had been developed
- The available Data extracted, transformed and loaded into a **MongoDB with reproduceable Python Code**
- A **Python Package implementing the theoretical solution** on the Data in said Database had been implemented and properly documented
- Said Package ran on the local **HPC-Cluster with a runtime performance** that made synthetic Data generation and subsequent training feasable, thus demonstrating a working proof-of-concept
- I finished writing my B.Sc. Thesis about the project and evaluated specifically runtime performance: trading episodes of differing chronological length consisting of an average of **35.000 events could be simulated in slightly under 11 seconds** on average
- A **first draft of the paper** documenting the process had been cooperatively written
- My thesis was graded with **92% (1,2 in german grades)**, and subsequently awarded the **Karl-Heinz Lust Innovation Award 2024 in Digital Economy / Industry 4.0 / AI**

## Lessons learned

### Professional

- Self-direction and self-management in an agile IT-Project
- How to write software collaboratively
- Database Administration, MongoDB, and the MongoDB OpsManager
- Basics of DevOps
- A lot more familiarity with python
- How to apply and work with design patterns and data structures
- The importance of fit:
  - How the teammembers fit personally with each other
  - How the used tools fit with your team (skills, personality)
  - How the employed technique (algorithms) with the task **and** your data(!)

### Personally

- I really like working self-managed
- It helps me a lot to have the use cases specified descriptively but not prescriptively (akin to asking open vs. closed questions)
- My motivation depends a lot on feeling in contact with the task and my team members
- Time for introversion, reflection and intense coding can clear a lot of blockage in the day-to-day routine
- It's important to me to understand what the ultimate goals for me and the project I'm working on are
- While being able to sprint is important, it's mainly a marathon. Consistency is key!
- Being productive makes me happy
- Flow states are amazing

I learned so much about in my two years and am immensely grateful for all the wonderful relationships, opportunities and experiences I enjoyed in my time there.
Of course [Björn Hoppmann](https://www.linkedin.com/in/bj%C3%B6rn-hoppmann-3314a2236/), my Co-Worker, and [Christoph Scholz](https://www.linkedin.com/in/christoph-scholz-a15162183/), my team lead, deserve a special mention and thanks as my two main contacts.
Additionally, I want to thank my thesis supervisor at the THM, [Nicolas Stein](https://www.linkedin.com/in/nicolas-stein-45919420b/) without whose care and advise I would not have been able to write and work the way I was able to.

[TOP](#quick-facts)
