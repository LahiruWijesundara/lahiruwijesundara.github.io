---
layout: page
title: A Depth-First Search-Based Approach To Improving The Molecular Pathway Search
description: Final Year Bachelor’s Thesis  Associated with University of Perdeniya, Sri Lanka
img: assets/img/portfolio/bscresearch/bsc_research_card.png
permalink: /bsc-thesis/
importance: 3
category: Research
cv_pdf: example_pdf.pdf # you can also use external links here
---

<p align="justify">
    <em>
        <strong>Supervisors: </strong>
        <a href="https://sci.pdn.ac.lk/scs/staff/Ruwanthini-Siyambalapitiya" target="_blank">Dr. R. Siyambalapitiya (Senior Lecturer, Faculty of Science, University of Peradeniya, Sri Lanka), 
        </a>
        <a href="https://www.linkedin.com/in/prabhath-gunathilake-50870218/" target="_blank">Mr. P. Gunathilake (Senior Lecturer, Faculty of Science, University of Peradeniya, Sri Lanka)
        </a>
    </em>
    <br>
    <em><strong>Technologies: </strong>JAVA, JAVA Threads, Parallel Computing, Bioinformatics Databases</em>
    <br>
    <em><strong>Additional Resources: </strong>
        <a href="/assets/pdf/bsc_research/PGIS_Research Congress_Abstract_Wijesundara.pdf" target="_blank">Publication,</a>
        <a href="/assets/pdf/bsc_research/Thesis_BSc_Wijesundara.pdf" target="_blank">Thesis</a>
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
                full="/assets/img/portfolio/bscresearch/bsc_research_1_n.png"
                thumb="/assets/img/portfolio/bscresearch/bsc_research_1_n.png"
                loading="eager"
                category="Exclusive Sneak Peek"
            %}
        </div>
    </div>
    <!-- Text Column -->
    <div class="col-12 col-md-8 pl-md-3">
        <p align="justify">      
            I conducted my final-year bachelor’s research on enhancing molecular pathway search efficiency using a Depth-First Search (DFS) algorithm. Molecular pathways represent networks of molecules within cells (human or animal), where analysing interactions is crucial for understanding health-related processes. 
            <br>
            <br>
            Due to extensive data complexity, Traditional pathway analyses typically take 21-28 days. To address this, I developed a three-stage Java-based pipeline. Initially, XML data files were processed into a structured virtual graph, with nodes representing molecules and edges illustrating reactions. Next, an enhanced DFS algorithm was implemented, incorporating custom input parameters, including start node, end node, and nodes to include and exclude, to find all connected pathways efficiently. Introduced a novel termination condition limiting node visits to prevent infinite loops in large graphs exceeding 500 nodes (a common issue in DFS). Two parallel computing methods were integrated in the final stage, significantly reducing search times. Testing on a cluster computing system demonstrated a reduction in execution time by up to nine days. <strong><em>This research was successfully published at the Postgraduate Institute of Science, University of Peradeniya (PGIS) Research Congress 2018.</em></strong>
        </p>
    </div>
  </div>
</div>