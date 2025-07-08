---
layout: page
title: A Comparative Study of DQN and PPO Algorithms in a 2D Fighting Game Using Unity ML-Agents
description: Master's Dissertation - Associated with University of The West of England, UK
img: assets/img/portfolio/mscdissertation/msc_dis_card.png
permalink: /msc-dissertation/
importance: 1
category: Research
---

<p align="justify">
<em><strong>Supervisor: </strong><a href="https://people.uwe.ac.uk/Person/BethanyMackey" target="_blank">Mackey, B. A</a> (Senior lecturer of creative technology, School of Computing & Creative Technologies, University of the West of England, United Kingdom)</em>
<br>
<em><strong>Technologies: </strong>Unity, Unity ML-Agents, IBM SPSS, Deep Reinforcement Learning</em>
<br>
<em><strong>Additional Resources: </strong>
    <a href="/assets/pdf/msc_research_1/DissertationProposal_MSc_Wijesundara.pdf" target="_blank">Proposal,</a>
    <a href="https://gitlab.com/lmwijesundara/fighter2dml" target="_blank">Git Repository,</a>
    <a href="/assets/ppt/msc_research_1/lahiru_dissertation_presentation.pptx" target="_blank">Final Viva Presentation,</a>
    <a href="/assets/xls/msc_research_1/lahiru_dissertation_gantt_chart.xlsx" target="_blank">Gantt Chart,</a>
    <a href="https://uweacuk-my.sharepoint.com/:u:/g/personal/wijesundara2_wijesundara_live_uwe_ac_uk/EcXvFA-2hKFJudd0hFOZQhgBd5gvUrxKlIvrMvdGbkJWaw?e=jsNtAm" target="_blank">Prototype</a>
</em>
<br>
<br>

<div class="container-fluid p-0 m-0">
  <div class="row">
    <!-- Image Column -->
    <div class="col-12 col-md-4 mb-3">
        <!-- Image 1 -->
        <div class="mb-4">
            {% include image_fancybox.liquid
                full="/assets/img/portfolio/mscdissertation/2DMLFighter.gif"
                thumb="/assets/img/portfolio/mscdissertation/2DMLFighter.gif"
                loading="eager"
                category="Exclusive Sneak Peek"
                caption="Prototype - Train agent fight"
            %}
        </div>
        <!-- Video 1 -->  
        <div>
            {% include play_youtube.liquid id="6S2gGLJNX_w" category="Exclusive Sneak Peek" caption="Video Presentation" %}
        </div>
    </div>
    <!-- Text Column -->
    <div class="col-12 col-md-8 pl-md-3">
        <p align="justify">      
        My master's dissertation focused on a comparative performance analysis of Deep Q-Network (DQN) and Proximal Policy Optimisation (PPO) deep reinforcement algorithms within a challenging 2D fighting game environment developed using Unity game engine and Unity ML-Agents toolkit. According to the literature review, there was a gap where both algorithms have been widely used to train 2D fighting game agents. Still, a thorough analysis of their training performance (in terms of learning efficiency) and the performance of the trained agents (in terms of win rates) had not been thoroughly explored. This research fills this gap by rigorously evaluating and comparing these two algorithms to provide deeper insights into their strengths and suitability for complex gaming scenarios. 
        <br>
        <br>
        The game mechanics included basic strategic elements such as lateral movement, slash attacks with a cooldown, and a health system where agents aim to reduce their opponent's health to zero. The environment featured a clearly defined 2D arena with visual health indicators to monitor agent status. Agents were designed to make real-time decisions based on observations of position, distance, and health state, receiving positive and negative rewards shaped to encourage optimal combat behaviour. Agents were trained against a scripted trainer (pre-defined action set) agent, which moves towards the target, then attacks if the opponent is within the attack range and waits until the cooldown period finishes before attacking again. Hyperparameter tuning was conducted using the grid search method, varying the learning rate and neuron counts in the hidden layer, while other parameters were held constant. The best-performing set was selected based on the cumulative reward mean value and standard deviation while considering performance and consistency. The Shapiro-Wilk test shows that the data is not normally distributed (p-value < 0.001), hence the Mann-Whitney U    test is used for statistical significance. Results indicated a significant performance difference between the two algorithms (p = 0.016), with DQN outperforming PPO in mean cumulative rewards (approximately 15.0 versus 12.0). Further validation came from where trained agents played 1,000 matches against each other; DQN demonstrated a notable strategic advantage, winning 71.5% of games compared to PPO's 28.5%. These findings confirm DQN’s superior efficacy for decision-making in 2D dynamic, real-time gaming scenarios.
        </p>
    </div>
  </div>
</div>