---
layout: page
title: Driving Down Emissions A Serious Game Approach to Transport Decarbonisation
description: Research Associated with University of The West of England, UK
img: assets/img/portfolio/mscresearch2/msc_research2_card.png
permalink: /msc-research-2/
importance: 2
category: Research
---


<p align="justify">
<em><strong>Supervisor: </strong><a href="https://people.uwe.ac.uk/Person/BethanyMackey" target="_blank">Mackey, B. A</a> (Senior lecturer of creative technology, School of Computing & Creative Technologies, University of the West of England, United Kingdom)</em>
<br>
<em><strong>Technologies: </strong>Unity, Unity ML-Agents, IBM SPSS, Deep Reinforcement Learning</em>
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
            {% include play_video.liquid id="6S2gGLJNX_w" category="Exclusive Sneak Peek" caption="Video Presentation" %}
        </div>
    </div>
    <!-- Text Column -->
    <div class="col-12 col-md-8 pl-md-3">
        <p align="justify">      
            While conducting my master's, I had an opportunity to contribute to another research project with two other co-authors under Dr. N. Ersotelos, Dr. E. Pantelaki, and Dr M. Adeel at UWE. The research focused on developing a serious game to educate users about the importance of transport decarbonisation and achieving net-zero carbon emissions by 2050, aligning with the UK's commitments to the Paris Agreement. The prototype models real‑world vehicle‑emission data and offers eight policy levers, such as upgrading fleets to electric vehicles. Play‑testing with university students and professionals showed that richer visuals, interactive tutorials, and immediate audio‑visual feedback dramatically improved engagement, comprehension of transport‑decarbonisation strategies, and learning motivation. While limited by a small, campus‑based sample, the results highlight serious games’ potential to boost public awareness of climate policy and point to future work on larger, more diverse cohorts and deeper gameplay loops to sustain long‑term interest.
        <br>
        <br>
        The game mechanics included basic strategic elements such as lateral movement, slash attacks with a cooldown, and a health system where agents aim to reduce their opponent's health to zero. The environment featured a clearly defined 2D arena with visual health indicators to monitor agent status. Agents were designed to make real-time decisions based on observations of position, distance, and health state, receiving positive and negative rewards shaped to encourage optimal combat behaviour. Agents were trained against a scripted trainer (pre-defined action set) agent, which moves towards the target, then attacks if the opponent is within the attack range and waits until the cooldown period finishes before attacking again. Hyperparameter tuning was conducted using the grid search method, varying the learning rate and neuron counts in the hidden layer, while other parameters were held constant. The best-performing set was selected based on the cumulative reward mean value and standard deviation while considering performance and consistency. The Shapiro-Wilk test shows that the data is not normally distributed (p-value < 0.001), hence the Mann-Whitney U    test is used for statistical significance. Results indicated a significant performance difference between the two algorithms (p = 0.016), with DQN outperforming PPO in mean cumulative rewards (approximately 15.0 versus 12.0). Further validation came from where trained agents played 1,000 matches against each other; DQN demonstrated a notable strategic advantage, winning 71.5% of games compared to PPO's 28.5%. These findings confirm DQN’s superior efficacy for decision-making in 2D dynamic, real-time gaming scenarios.
        </p>
    </div>
  </div>
</div>