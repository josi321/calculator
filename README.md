<h1> Markup Calculator </h1>
<p>This is a markup calculator for Nulogy's coding challenge. It is writen in Javascript/ES6, and mocha chai is used as the testing framework.
The objective of this calculator is to calculate the total cost of packaging materials given an input price, a flat markup, a markup depending on the category (drugs, food, electronics, other), and a markup depending on the number of workers required to get the work down.</p>

<p>The markup calculator should produce the following given: </p>
<p>*for each person that needs to work on the job, there is a markup of 1.2%</p>
<p>*Without exception, there us a flat markup on all jobs of 5%</p>
<p>*for food, there is a 13% markup</p>
<p>*electronics require a 2% markup</p>
<p>*everything else, has no markup</p>

example 1:
-----------
<p>input: $1299.99, 3 people, food</p>
<p>output: $1591.58 </p>

example 2:
-----------
<p>input: $5432.00, 1 person, drugs</p>
<p>output: $6199.81</p>

example 3:
-----------
<p>input: $12456.95, 4 people, books</p>
<p>output: $13707.63 </p>

<h1>Installation</h1>
<p> This calculator script requires that you install all the dependencies needed to run and to test the file. The dependencies are listed in the package.json file. This script is writen in javascript/ES6, which requires babel(v6.23.0), and the testing framework is mocha(v 3.2.0) chai(v 3.5.0). </p>
<p>Download the markup calculator folder, and go to this folder's location in your terminal. Run <strong>npm install</strong> to install all the dependencies. To test the file, type in your terminal <strong>npm test</strong>. </p>

<h1>Reflection</h1>
<p>This project was challenging yet rewarding. It was difficult in the sense that I initially wrote the code in "old school" javascript and later then had to refactor it into ES6 to match current trends of Javascript.  Secondly, I have never worked with testing frameworks prior to this project. I had to learn by reading the documentation for mocha and chai and then implement testing with my ES6 code. The testing process for me was trial and error, with each error, I tried different ways of writing it until the problem is resolved. </p>

