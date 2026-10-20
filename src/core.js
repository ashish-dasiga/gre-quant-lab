/* ===== GRE Quant Lab — core globals (loaded before data files) ===== */
'use strict';
// R`...` keeps backslashes literal so math can be written TeX-style: R`\(\frac{a}{b}\)`
const R = String.raw;
const TOPICS = [];
const CHAPTERS = [
  { id: 'alg', name: 'Algebra', sub: 'Equations, inequalities, exponents & functions' },
  { id: 'ari', name: 'Arithmetic', sub: 'Numbers, fractions, factors & sequences' },
  { id: 'wp', name: 'Word Problems', sub: 'Percent, rates, interest, ratios & sets' },
  { id: 'da', name: 'Data Analysis', sub: 'Statistics, counting & probability' },
  { id: 'geo', name: 'Geometry', sub: 'Coordinates, shapes & solids' }
];
/*
  Topic format:
  { id, ch, icon, title, desc, learn: R`html with <F t="..">formula</F>, <TIP>, <NOTE>, <EX t="..">q<SOL>solution</EX>, <BIG>`,
    quiz: [ { q, o:[correct, wrong, ...], e }            // multiple choice, first option is correct (shuffled on display)
          | { q, o:[...], a:idx, fix:1, e }               // fixed order, a = correct index
          | { q, n:'value', e } ] }                       // numeric entry
*/
