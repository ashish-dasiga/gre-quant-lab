/* ===== GRE Quant Lab — Geometry Topics ===== */
'use strict';

// 21. Coordinate Geometry
TOPICS.push({
  id: 'coord',
  ch: 'geo',
  icon: '📍',
  title: 'Coordinate Geometry',
  desc: 'Distance formula, midpoints, slope rules, linear intercepts, perpendicular lines & circles.',
  learn: R`
<h3>Cartesian Plane & Formulas</h3>

<F t="Essential Coordinate Formulas">
Given two points \((x_1, y_1)\) and \((x_2, y_2)\):
<ul>
  <li><b>Distance:</b> \(d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\)</li>
  <li><b>Midpoint:</b> \(M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)\)</li>
  <li><b>Slope (\(m\)):</b> \(m = \frac{y_2 - y_1}{x_2 - x_1}\)</li>
</ul>
</F>

<F t="Slopes of Parallel & Perpendicular Lines">
<ul>
  <li><b>Parallel Lines:</b> Have identical slopes: \(m_1 = m_2\)</li>
  <li><b>Perpendicular Lines:</b> Slopes are negative reciprocals: \(m_1 \cdot m_2 = -1 \iff m_2 = -\frac{1}{m_1}\)</li>
  <li><b>Horizontal Line (\(y = c\)):</b> Slope is \(0\)</li>
  <li><b>Vertical Line (\(x = k\)):</b> Slope is <i>undefined</i></li>
</ul>
</F>

<F t="Equation of a Circle">
A circle with center \((h, k)\) and radius \(r\):
<BIG>\((x - h)^2 + (y - k)^2 = r^2\)</BIG>
</F>
`,
  quiz: [
    {
      q: R`What is the distance between the points \((3, 4)\) and \((7, 1)\)?`,
      o: [R`\(5\)`, R`\(\sqrt{15}\)`, R`\(7\)`, R`\(\sqrt{41}\)`, R`\(6\)`],
      e: R`\(d = \sqrt{(7 - 3)^2 + (1 - 4)^2} = \sqrt{4^2 + (-3)^2} = \sqrt{16 + 9} = \sqrt{25} = 5\).`
    },
    {
      q: R`The midpoint of the line segment joining \((2, 5)\) and \((6, a)\) lies on the line \(3y + 4x = 19\). What is the value of \(a\)?`,
      o: [R`\(-3\)`, R`\(3\)`, R`\(-1\)`, R`\(1\)`, R`\(5\)`],
      e: R`Midpoint \(M = \left(\frac{2+6}{2}, \frac{5+a}{2}\right) = \left(4, \frac{5+a}{2}\right)\).<br>Substitute into line: \(3\left(\frac{5+a}{2}\right) + 4(4) = 19 \Rightarrow 3\left(\frac{5+a}{2}\right) = 3 \Rightarrow \frac{5+a}{2} = 1 \Rightarrow 5 + a = 2 \Rightarrow a = -3\).`
    },
    {
      q: R`Which of the following points has the greatest slope when connected to the origin \((0,0)\)?`,
      o: [R`\((1, 4)\)`, R`\((2, 3)\)`, R`\((1, 3)\)`, R`\((-1, 3)\)`, R`\((-3, -3)\)`],
      e: R`Slope to origin is \(y/x\):<br>\((1, 4) \Rightarrow 4/1 = 4\)<br>\((2, 3) \Rightarrow 3/2 = 1.5\)<br>\((1, 3) \Rightarrow 3/1 = 3\)<br>\((-1, 3) \Rightarrow -3\)<br>\((-3, -3) \Rightarrow 1\)<br>The maximum is 4 at \((1, 4)\).`
    },
    {
      q: R`What is the slope of a line that is perpendicular to the line \(2y + 4x = 2\)?`,
      o: [R`\(\frac{1}{2}\)`, R`\(-2\)`, R`\(-\frac{1}{2}\)`, R`\(2\)`, R`\(4\)`],
      e: R`Put in slope-intercept form: \(2y = -4x + 2 \Rightarrow y = -2x + 1\).<br>The slope of this line is \(m = -2\).<br>A perpendicular line has slope \(m_{\perp} = -\frac{1}{-2} = \frac{1}{2}\).`
    },
    {
      q: R`A circle has diameter endpoints at \((6, 0)\) and \((0, 8)\). What is the radius of the circle?`,
      o: [R`\(5\)`, R`\(10\)`, R`\(\sqrt{7}\)`, R`\(2.5\)`, R`\(7\)`],
      e: R`Diameter length \(= \sqrt{(6 - 0)^2 + (0 - 8)^2} = \sqrt{36 + 64} = \sqrt{100} = 10\).<br>Radius \(= \frac{\text{Diameter}}{2} = \frac{10}{2} = 5\).`
    }
  ]
});

// 22. Lines, Angles & Triangles
TOPICS.push({
  id: 'tri',
  ch: 'geo',
  icon: '📐',
  title: 'Lines, Angles & Triangles',
  desc: 'Parallel transversals, triangle inequality, Pythagoras, special right triangles & similarity.',
  learn: R`
<h3>Angles & Transversals</h3>
<p>When two parallel lines are intersected by a transversal:</p>
<ul>
  <li><b>Alternate Interior Angles</b> are equal (\(\angle 3 = \angle 5\)).</li>
  <li><b>Corresponding Angles</b> are equal (\(\angle 1 = \angle 5\)).</li>
  <li><b>Consecutive Interior Angles</b> add up to \(180^\circ\).</li>
</ul>

<F t="The Triangle Inequality Theorem">
For ANY triangle with side lengths \(a, b, c\):
<BIG>\(|a - b| < c < a + b\)</BIG>
<p>The third side must be strictly between the difference and the sum of the other two sides!</p>
</F>

<F t="Special Right Triangles (Memorize for GRE!)">
<ul>
  <li><b>\(45^\circ - 45^\circ - 90^\circ\) Isosceles Right:</b> Ratio of sides is \(1 : 1 : \sqrt{2}\).</li>
  <li><b>\(30^\circ - 60^\circ - 90^\circ\) Right Triangle:</b> Ratio of sides is \(1 : \sqrt{3} : 2\).
    <br><i>Side opposite \(30^\circ\) is half the hypotenuse!</i>
  </li>
  <li><b>Common Pythagorean Triplets:</b> \(3-4-5\), \(5-12-13\), \(7-24-25\), \(8-15-17\).</li>
</ul>
</F>

<F t="Equilateral Triangle Formulas">
For side length \(s\):
<BIG>\(\text{Height } h = \frac{\sqrt{3}}{2} s, \qquad \text{Area } A = \frac{\sqrt{3}}{4} s^2\)</BIG>
</F>
`,
  quiz: [
    {
      q: R`Two sides of a triangle have lengths 4 and 10. If the third side has an integer length, what is the largest possible length of the third side?`,
      o: [R`\(13\)`, R`\(14\)`, R`\(15\)`, R`\(10\)`, R`\(12\)`],
      e: R`By triangle inequality: \(10 - 4 < s < 10 + 4 \Rightarrow 6 < s < 14\).<br>The largest integer strictly less than 14 is 13.`
    },
    {
      q: R`A hiker walks 9 miles due North, and then 12 miles due East. How many miles is the hiker from the starting point?`,
      o: [R`\(15\text{ miles}\)`, R`\(21\text{ miles}\)`, R`\(\sqrt{117}\text{ miles}\)`, R`\(18\text{ miles}\)`, R`\(16\text{ miles}\)`],
      e: R`North and East form a right angle: \(d = \sqrt{9^2 + 12^2} = \sqrt{81 + 144} = \sqrt{225} = 15\text{ miles}\) (a 3-4-5 triplet scaled by 3).`
    },
    {
      q: R`In right triangle \(ABC\), \(\angle B = 90^\circ\) and \(\angle A = 30^\circ\). If the hypotenuse \(AC = 5\), what is the length of side \(BC\)?`,
      o: [R`\(2.5\)`, R`\(2.5\sqrt{3}\)`, R`\(5\sqrt{3}\)`, R`\(1.25\)`, R`\(\frac{5}{\sqrt{2}}\)`],
      e: R`Side \(BC\) is opposite the \(30^\circ\) angle. In a \(30^\circ-60^\circ-90^\circ\) triangle, the side opposite \(30^\circ\) is half the hypotenuse: \(\frac{5}{2} = 2.5\).`
    },
    {
      q: R`Two similar triangles \(ABC\) and \(PQR\) have areas in the ratio \(4 : 25\). If side \(AB = 16\), what is the length of the corresponding side \(PQ\)?`,
      o: [R`\(40\)`, R`\(100\)`, R`\(20\)`, R`\(32\)`, R`\(50\)`],
      e: R`The ratio of sides is the square root of the ratio of areas: \(\frac{\text{Side}_1}{\text{Side}_2} = \sqrt{\frac{4}{25}} = \frac{2}{5}\).<br>\(\frac{16}{PQ} = \frac{2}{5} \Rightarrow PQ = \frac{16 \times 5}{2} = 40\).`
    }
  ]
});

// 23. Quadrilaterals, Polygons & Circles
TOPICS.push({
  id: 'poly',
  ch: 'geo',
  icon: '🛑',
  title: 'Quadrilaterals, Polygons & Circles',
  desc: 'Polygons angle sum, diagonals, parallelogram & rhombus areas, circular arcs & inscribed angles.',
  learn: R`
<h3>Polygons Formulas</h3>

<F t="Polygon Angles & Diagonals">
For any convex \(n\)-sided polygon:
<ul>
  <li><b>Sum of Interior Angles:</b> \((n - 2) \times 180^\circ\)</li>
  <li><b>Sum of Exterior Angles:</b> ALWAYS \(360^\circ\) (regardless of \(n\)!)</li>
  <li><b>Each Interior Angle (Regular \(n\)-gon):</b> \(\frac{(n - 2) \times 180^\circ}{n}\)</li>
  <li><b>Number of Diagonals:</b> \(\frac{n(n - 3)}{2}\)</li>
</ul>
</F>

<F t="Special Quadrilaterals">
<ul>
  <li><b>Parallelogram:</b> Area \(= \text{base} \times \text{height}\). Diagonals bisect each other.</li>
  <li><b>Rhombus:</b> All 4 sides equal. Diagonals are <b>perpendicular bisectors</b>.
    <BIG>\(\text{Area} = \frac{1}{2} d_1 d_2\)</BIG>
  </li>
  <li><b>Trapezoid:</b> \(\text{Area} = \frac{1}{2}(a + b) h\)</li>
  <li><b>Square:</b> \(\text{Area} = s^2 = \frac{1}{2} d^2\)</li>
</ul>
</F>

<F t="Circle Geometry">
<ul>
  <li><b>Circumference:</b> \(C = 2\pi r\), \quad <b>Area:</b> \(A = \pi r^2\)</li>
  <li><b>Arc Length:</b> \(L = \frac{\theta}{360^\circ} \times 2\pi r\)</li>
  <li><b>Sector Area:</b> \(A_{\text{sector}} = \frac{\theta}{360^\circ} \times \pi r^2\)</li>
  <li><b>Inscribed Angle Theorem:</b> Central angle \(= 2 \times\) Inscribed angle subtending the same arc.</li>
  <li><b>Angle in a Semicircle:</b> ALWAYS a right angle (\(90^\circ\))!</li>
</ul>
</F>
`,
  quiz: [
    {
      q: R`What is the sum of the interior angles of a convex hexagon (6-sided polygon)?`,
      o: [R`\(720^\circ\)`, R`\(540^\circ\)`, R`\(900^\circ\)`, R`\(1080^\circ\)`, R`\(360^\circ\)`],
      e: R`Sum \(= (n - 2) \times 180^\circ = (6 - 2) \times 180^\circ = 4 \times 180^\circ = 720^\circ\).`
    },
    {
      q: R`How many diagonals does a regular decagon (10-sided polygon) have?`,
      o: [R`\(35\)`, R`\(45\)`, R`\(20\)`, R`\(70\)`, R`\(40\)`],
      e: R`Diagonals \(= \frac{n(n - 3)}{2} = \frac{10(10 - 3)}{2} = \frac{70}{2} = 35\).`
    },
    {
      q: R`A rectangular garden has an area of \(240\text{ m}^2\). A fence is placed around the perimeter, except along one of the long sides measuring \(40\text{ m}\). What is the total length of fencing required?`,
      o: [R`\(52\text{ m}\)`, R`\(46\text{ m}\)`, R`\(92\text{ m}\)`, R`\(86\text{ m}\)`, R`\(60\text{ m}\)`],
      e: R`Length \(= 40\text{ m}\). Width \(= \frac{240}{40} = 6\text{ m}\).<br>Fencing 3 sides (1 length + 2 widths) \(= 40 + 2(6) = 40 + 12 = 52\text{ m}\).`
    },
    {
      q: R`A circle has a radius of 6 cm. What is the length of an arc that subtends a central angle of \(60^\circ\)?`,
      o: [R`\(2\pi\text{ cm}\)`, R`\(\pi\text{ cm}\)`, R`\(3\pi\text{ cm}\)`, R`\(6\pi\text{ cm}\)`, R`\(4\pi\text{ cm}\)`],
      e: R`\(L = \frac{60}{360} \times 2\pi(6) = \frac{1}{6} \times 12\pi = 2\pi\text{ cm}\).`
    },
    {
      q: R`What is the area of a rhombus whose diagonals have lengths 12 cm and 16 cm?`,
      o: [R`\(96\text{ cm}^2\)`, R`\(192\text{ cm}^2\)`, R`\(100\text{ cm}^2\)`, R`\(48\text{ cm}^2\)`, R`\(80\text{ cm}^2\)`],
      e: R`\(\text{Area} = \frac{1}{2} d_1 d_2 = \frac{1}{2} \times 12 \times 16 = 96\text{ cm}^2\).`
    }
  ]
});

// 24. 3D Solids
TOPICS.push({
  id: 'solid',
  ch: 'geo',
  icon: '🧊',
  title: '3D Solids',
  desc: 'Cylinders, cones, spheres, rectangular boxes, space diagonals & surface area calculations.',
  learn: R`
<h3>Formulas for 3D Solids</h3>

<F t="Rectangular Solid (Box)">
<ul>
  <li><b>Volume:</b> \(V = l \cdot w \cdot h\)</li>
  <li><b>Total Surface Area:</b> \(TSA = 2(lw + wh + lh)\)</li>
  <li><b>Longest Rod (Space Diagonal):</b> \(d = \sqrt{l^2 + w^2 + h^2}\)</li>
</ul>
</F>

<F t="Cylinders & Cones">
<ul>
  <li><b>Cylinder Volume:</b> \(V = \pi r^2 h\)</li>
  <li><b>Cylinder Curved Surface:</b> \(CSA = 2\pi r h\), \quad <b>Total:</b> \(2\pi r(h + r)\)</li>
  <li><b>Cone Volume:</b> \(V = \frac{1}{3} \pi r^2 h\)</li>
  <li><b>Cone Slant Height:</b> \(l = \sqrt{r^2 + h^2}\), \quad <b>CSA:</b> \(\pi r l\)</li>
</ul>
</F>

<F t="Spheres">
<ul>
  <li><b>Volume:</b> \(V = \frac{4}{3} \pi r^3\)</li>
  <li><b>Surface Area:</b> \(A = 4\pi r^2\)</li>
</ul>
</F>
`,
  quiz: [
    {
      q: R`A cylindrical water container has a capacity of 60 liters. If its radius is doubled while keeping its height unchanged, what is the INCREASE in capacity in liters?`,
      o: [R`\(180\text{ liters}\)`, R`\(240\text{ liters}\)`, R`\(120\text{ liters}\)`, R`\(60\text{ liters}\)`, R`\(300\text{ liters}\)`],
      e: R`Original: \(V = \pi r^2 h = 60\).<br>New: \(V' = \pi (2r)^2 h = 4\pi r^2 h = 4 \times 60 = 240\text{ liters}\).<br>Increase \(= 240 - 60 = 180\text{ liters}\).`
    },
    {
      q: R`A rectangular room has dimensions \(4\text{ m} \times 3\text{ m} \times 2.5\text{ m}\). You want to paint the 4 walls and the ceiling (excluding the floor). The room has one window measuring \(1\text{ m} \times 0.5\text{ m}\) and one door measuring \(2\text{ m} \times 0.5\text{ m}\). If painting costs \(\$2\) per square meter, what is the total cost?`,
      o: [R`\(\$91\)`, R`\(\$94\)`, R`\(\$88\)`, R`\(\$100\)`, R`\(\$96\)`],
      e: R`Ceiling: \(4 \times 3 = 12\text{ m}^2\).<br>4 Walls: \(2(4 + 3) \times 2.5 = 2(7) \times 2.5 = 35\text{ m}^2\).<br>Unpainted areas: window \(= 0.5\text{ m}^2\), door \(= 1.0\text{ m}^2\). Total unpainted \(= 1.5\text{ m}^2\).<br>Net area to paint \(= 12 + 35 - 1.5 = 45.5\text{ m}^2\).<br>Cost \(= 45.5 \times \$2 = \$91\).`
    },
    {
      q: R`What is the length of the longest straight rod that can fit completely inside a closed cylinder of radius 5 cm and height 10 cm?`,
      o: [R`\(10\sqrt{2}\text{ cm}\)`, R`\(15\text{ cm}\)`, R`\(5\sqrt{5}\text{ cm}\)`, R`\(10\text{ cm}\)`, R`\(20\text{ cm}\)`],
      e: R`The rod lies along the diagonal of the vertical cross-section of the cylinder.<br>The base diameter is \(2 \times 5 = 10\text{ cm}\), and height is \(10\text{ cm}\).<br>Diagonal \(= \sqrt{10^2 + 10^2} = \sqrt{200} = 10\sqrt{2}\text{ cm} \approx 14.14\text{ cm}\).`
    },
    {
      q: R`What is the radius of the largest sphere that can fit completely inside a closed cylinder of radius 10 cm and height 40 cm?`,
      o: [R`\(10\text{ cm}\)`, R`\(20\text{ cm}\)`, R`\(5\text{ cm}\)`, R`\(40\text{ cm}\)`, R`\(15\text{ cm}\)`],
      e: R`The sphere's diameter cannot exceed the cylinder's diameter (\(20\text{ cm}\)) nor its height (\(40\text{ cm}\)).<br>Thus max diameter is \(20\text{ cm}\), meaning max radius is 10 cm.`
    }
  ]
});

// 25. Formula Master Challenge
TOPICS.push({
  id: 'review',
  ch: 'alg',
  icon: '🏆',
  title: 'Formula Master Challenge',
  desc: 'Comprehensive review quiz testing fast recall of core GRE quant rules and trap avoidance.',
  learn: R`
<h3>GRE Quant Rapid-Fire Rules</h3>
<p>This challenge tests your instant recall across the major quantitative reasoning traps and formula relationships found on the official exam.</p>

<F t="Key Quick-Check Rules">
<ul>
  <li>\((-1)^n = 1\) if \(n\) is even; \(-1\) if \(n\) is odd.</li>
  <li>\(x^2 = 9 \Rightarrow x = \pm 3\), but \(\sqrt{9} = 3\) only!</li>
  <li>Consecutive integers are ALWAYS co-prime (\(\text{HCF} = 1\)).</li>
  <li>If \(a:b = 7:1\) and \(b:c = 2:5\), then \(a:b:c = 14:2:5\).</li>
  <li>The product of any 3 consecutive integers is ALWAYS divisible by \(3! = 6\).</li>
</ul>
</F>
`,
  quiz: [
    {
      q: R`If \(a:b = 7:1\) and \(b:c = 2:5\), what is the combined ratio \(a:b:c\)?`,
      o: [R`\(14 : 2 : 5\)`, R`\(7 : 2 : 5\)`, R`\(14 : 1 : 5\)`, R`\(7 : 1 : 5\)`, R`\(14 : 2 : 10\)`],
      e: R`Multiply the first ratio by 2: \(a:b = 14:2\). Since \(b:c = 2:5\), we have \(a:b:c = 14:2:5\).`
    },
    {
      q: R`Worker A completes \(\frac{2}{3}\) of a job. Worker B completes \(\frac{1}{5}\) of the REST of the job. Worker C completes \(\frac{1}{4}\) of the remaining portion. What fraction of the original job remains uncompleted?`,
      o: [R`\(\frac{1}{5}\)`, R`\(\frac{1}{4}\)`, R`\(\frac{1}{6}\)`, R`\(\frac{2}{15}\)`, R`\(\frac{1}{10}\)`],
      e: R`After A: \(1 - \frac{2}{3} = \frac{1}{3}\) remains.<br>After B: takes \(\frac{1}{5}\), so \(\frac{4}{5}\) of \(\frac{1}{3}\) remains \(= \frac{4}{15}\).<br>After C: takes \(\frac{1}{4}\), so \(\frac{3}{4}\) of \(\frac{4}{15}\) remains \(= \frac{3}{4} \times \frac{4}{15} = \frac{3}{15} = \frac{1}{5}\).`
    },
    {
      q: R`If \(x^2 > 3^2\), which of the following describes all possible values of \(x\)?`,
      o: [R`\(x > 3\) or \(x < -3\)`, R`\(x > 3\) only`, R`\(-3 < x < 3\)`, R`\(x > 9\) or \(x < -9\)`, R`\(x \ne 3\)`],
      e: R`\(x^2 > 9 \iff |x| > 3 \iff x > 3\) or \(x < -3\).`
    },
    {
      q: R`If \(c = a \cdot b\), where \(a\) and \(b\) are distinct prime numbers, how many positive divisors does \(c\) have?`,
      o: [R`\(4\)`, R`\(2\)`, R`\(3\)`, R`\(6\)`, R`Cannot be determined`],
      e: R`The divisors of \(c = ab\) are \(1, a, b,\) and \(ab\) (exactly 4 divisors). Formula: \((1+1)(1+1) = 4\).`
    },
    {
      q: R`What is the greatest common factor (HCF) of any two consecutive positive integers \(n\) and \(n+1\)?`,
      o: [R`\(1\)`, R`\(2\)`, R`\(n\)`, R`\(n+1\)`, R`Depends on whether \(n\) is even or odd`],
      fix: 1, a: 0,
      e: R`Any common factor of \(n\) and \(n+1\) must also divide their difference \((n+1) - n = 1\). Thus \(\text{HCF} = 1\).`
    }
  ]
});
