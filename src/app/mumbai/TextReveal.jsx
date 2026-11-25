"use client";

import { useEffect } from "react";

// The site header, the hero (it plays on load) and the parts marked data-no-text-reveal (they run their own animation) stay out of this
const SKIP = "header, [aria-labelledby='mumbai-heading'], [data-no-text-reveal], select, textarea, svg, [hidden], .sr-only";

// Every piece of text on the page, grouped by the nearest non-inline element, plus non-text blocks marked mumbai-reveal
function findBlocks(root) {
  const blocks = new Set(root.querySelectorAll(".mumbai-reveal"));
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const text = walker.currentNode;
    if (!text.nodeValue.trim() || text.parentElement.closest(SKIP)) continue;
    let block = text.parentElement;
    while (block !== root && getComputedStyle(block).display === "inline") block = block.parentElement;
    if (block !== root && block.getClientRects().length) blocks.add(block);
  }
  return [...blocks].filter((block) => {
    for (let parent = block.parentElement; parent; parent = parent.parentElement) if (blocks.has(parent)) return false;
    return true;
  });
}

function splitWords(heading) {
  if (heading.dataset.words) return;
  heading.dataset.words = "true";
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
  const texts = [];
  while (walker.nextNode()) texts.push(walker.currentNode);
  let index = 0;
  for (const text of texts) {
    const words = document.createDocumentFragment();
    for (const part of text.nodeValue.split(/(\s+)/)) {
      if (!part.trim()) {
        words.append(part);
        continue;
      }
      const word = document.createElement("span");
      word.className = "mumbai-word";
      word.style.setProperty("--word", index++);
      word.textContent = part;
      words.append(word);
    }
    text.replaceWith(words);
  }
}

// Only hides what is below the screen when the page loads, so nothing flashes, and without JavaScript all the text simply stays visible
export default function TextReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const waiting = findBlocks(document.querySelector("main")).filter((block) => block.getBoundingClientRect().top > window.innerHeight);
    const observer = new IntersectionObserver((entries) => {
      entries.filter((entry) => entry.isIntersecting).forEach((entry, index) => {
        entry.target.style.setProperty("--reveal-delay", `${Math.min(index * 70, 350)}ms`);
        entry.target.dataset.textReveal = "in";
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    for (const block of waiting) {
      if (block.matches("h2, h3, h4")) splitWords(block);
      block.dataset.textReveal = "waiting";
      observer.observe(block);
    }

    return () => {
      observer.disconnect();
      for (const block of waiting) if (block.dataset.textReveal === "waiting") delete block.dataset.textReveal;
    };
  }, []);

  return null;
}
