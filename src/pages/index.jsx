---
// Component Imports
import MainHead from "../components/MainHead.astro";
import Button from "../components/Button/index.jsx";
import Nav from "../components/Nav/index.jsx";
import Footer from "../components/Footer/index.jsx";
import PortfolioPreview from "../components/PortfolioPreview/index.jsx";

// Data Fetching: List all Markdown posts in the repo.
const projects = await Astro.glob("./project/**/*.md");

const displayDeveloper = false;
const displayHacker = false;
const displayPodcaster = false;

// Full Astro Component Syntax:
// https://docs.astro.build/core-concepts/astro-components/
---

<html lang="en">
  <head>
    <MainHead
      title="Cameron Blackwood: Personal Site"
      description="Cameron Blackwood: Developer, Speaker, and Writer..."
    />
    <style lang="scss">
      $w-s: 750px;

      .hero {
        position: relative;
        overflow: hidden;

        @media (min-width: $w-s) {
          height: 45vw;
        }
      }

      .img {
        display: block;
        width: 100%;
        height: auto;
      }

      .gradient,
      .gradient2 {
        background-color: black;
        color: white;
        background-size: cover;
        pointer-events: none;
        mix-blend-mode: screen;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      }

      .gradient2 {
        mix-blend-mode: multiply;
        background-size: cover;
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-left: 2rem;

        @media (min-width: $w-s) {
          padding-left: 4rem;
        }
      }

      .title {
        font-weight: 900;
        font-size: var(--f-u8);
        margin-bottom: 0.5rem;
        margin-top: 0;
        color: white;
        @media (min-width: $w-s) {
          font-size: var(--f-u12);
        }
      }

      .grid {
        display: grid;
        grid-gap: 2rem;

        @media (min-width: 1200px) {
          grid-template-columns: 2fr 1fr;
        }
      }

      .sectionTitle {
        font-weight: 700;
        font-size: var(--f-u8);
        margin-top: 4rem;
        margin-bottom: 2rem;
      }

      .role {
        cursor: pointer;
        position: relative;
        display: inline-block;
        font-weight: 900;
        color: var(--t-bg);
        background-color: var(--t-fg);
        padding: 0.25em 0.5em;
        z-index: 2;

        @media (min-width: $w-s) {
          font-size: var(--f-u3);
        }

        + .role {
          margin-left: 1em;
        }

        &:nth-of-type(1) {
          .invert {
            background-color: var(--c-pink);
          }
        }

        &:nth-of-type(2) {
          .invert {
            background-color: var(--c-blue);
          }
        }

        &:nth-of-type(3) {
          .invert {
            background-color: var(--c-green);
          }
        }

        &:hover {
          .invert {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }
      }

      .invert {
        position: absolute;
        color: var(--t-fg);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        clip-path: polygon(0% 100%, 100% 100%, 100% 200%, 0% 200%);
        transition: clip-path cubic-bezier(0.4, 0, 0.5, 1) 150ms;
      }

      .desc {
        font-size: var(--f-u2);
        margin-top: 1.5rem;
        margin-bottom: 0;
      }

      .subtitle {
        display: block;
        font-weight: 400;
        font-size: var(--f-d6);
        letter-spacing: -0.0625em;
      }

      .bio {
        line-height: 2;
        margin-bottom: 2rem;

        > span:first-of-type {
          line-height: 1;
          margin-bottom: 0.5em;
          display: block;
          font-weight: 700;
          font-size: var(--f-u4);
        }
      }
    </style>
  </head>
  <body>
    <Nav />
    <header class="hero">
      <div class="gradient"></div>
      <div class="gradient2"></div>
      <div class="overlay">
        <h1 class="title">Cameron Blackwood</h1>
        <div>
          <span class="role" onclick={() => (displayDeveloper = true)}
            >👨‍💻 Developer <span class="invert">👨‍💻 Developer</span>
          </span>&nbsp;
          <span class="role"
            >📈 Indie Hacker <span class="invert">📈 Indie Hacker</span>
          </span>&nbsp;
          <span class="role"
            >🎙️ Podcaster <span class="invert">🎙️ Podcaster</span>
          </span>
        </div>
        <span class="role">Click an option to find out more.</span>
      </div>
    </header>
    <Footer />
  </body>
</html>
