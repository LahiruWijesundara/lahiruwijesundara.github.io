---
layout: page
title: CSE Pulse <br> <em>Full-Stack AI-Powered Portfolio Tracker</em>
img: assets/img/portfolio/csepulse/CSE-Pulse-Card.png
permalink: /cse-pulse/
importance: 1
category: Work Experience - AI Engineer
description: "AI Engineer (Jan 2026 – Present) <br> CSE Pulse, Sri Lanka"
_styles: >
  .post-header { display: none; }
  .post > article { margin-top: 0; padding-top: 0; }
---

{% include apple/hero.liquid
    eyebrow="Client Project · Jan 2026 – Present"
    title="CSE Pulse"
    subtitle="A full-stack web application for retail investors on the Colombo Stock Exchange — live market data, portfolio management, multi-indicator technical analysis, and AI-driven trade verdicts with dual-LLM fallback, all in one platform."
    meta="!Full-Stack AI Engineer,CSE Pulse,Sri Lanka"
    tech="Next.js 16,React 19,PostgreSQL,Prisma 7,Anthropic SDK,Google Gemini"
%}

<div class="apple-overview">
  <p>
    <span class="lead-emphasis">CSE Pulse</span> is a web application built for retail investors on the Colombo Stock Exchange. No single local platform covered the complete investor workflow — monitoring the market at open, tracking unrealized P&L, running technical analysis, getting AI trade verdicts, and analysing annual and quarterly financial reports. CSE Pulse brings all of it together.
  </p>
  <p>
    I designed and built the entire application: the data pipelines ingesting live CSE market data, the AI verdict engine with dual-provider fallback, the PDF report analyser with sector-adaptive KPIs, the news aggregation and fuzzy symbol-matching layer, and the full front-end experience.
  </p>
</div>

<section class="apple-section">
  {% include apple/section_head.liquid
      eyebrow="What I Built"
      title="Feature Highlights"
      lead="Eleven integrated modules covering the full investor workflow, from live market monitoring to AI-assisted research."
  %}

  <div class="apple-grid">

    <article class="apple-card">
      <span class="apple-icon">📊</span>
      <h3>Market Dashboard &amp; Portfolio Management</h3>
      <p>Live ASPI and S&P SL20 index tracking with real-time top gainers and losers, and a portfolio diversification breakdown. Per-position unrealized P&L, today's gain in LKR, and auto-calculated break-even sell price. Bulk CSV import and full realized P&L tracking with accurate CSE brokerage charge breakdown. Built with <strong>Next.js 16</strong>, <strong>Recharts</strong>, and <strong>Prisma 7</strong> on <strong>Neon PostgreSQL</strong>.</p>
    </article>

    <article class="apple-card">
      <span class="apple-icon">🤖</span>
      <h3>AI Trade Verdicts</h3>
      <p>Separate swing-trade and long-term verdicts per symbol — each with a BUY/HOLD/SELL signal, confidence score, three reasoning points, and an invalidation condition. The AI synthesizes technical signals, live price data, latest financials, news sentiment, and director dealings. Powered by <strong>Anthropic Claude</strong> with <strong>Google Gemini 2.5 Flash</strong> as automatic fallback; verdicts are cached for 12 hours.</p>
    </article>

    <article class="apple-card">
      <span class="apple-icon">📈</span>
      <h3>Technical Analysis Engine</h3>
      <p>Composite BUY/HOLD/SELL signal computed from five indicators — RSI-14, SMA 20/50/200, MACD histogram, Volume Z-score, and ATR-14. Each contributes a directional vote; the final signal and confidence percentage reflect the weighted consensus across all five.</p>
    </article>

    <article class="apple-card">
      <span class="apple-icon">📄</span>
      <h3>PDF Report Analyser</h3>
      <p>Drag-and-drop upload for annual and quarterly financial reports. LLM extraction pulls every quantitative metric with a citation to the exact report page, and adapts sector-specific KPIs by GICS Industry Group — NIM/NPL for Banks, GWP/combined ratio for Insurance. Output covers earnings quality, balance sheet, cash flow, governance, valuation, bull/bear cases, and a conviction-rated recommendation. Files stored in <strong>Vercel Blob</strong>.</p>
    </article>

    <article class="apple-card">
      <span class="apple-icon">📰</span>
      <h3>News &amp; Sentiment</h3>
      <p>Aggregates market news from four local sources — CSE announcements, ft.lk, EconomyNext, and Biz English. Headlines are automatically linked to portfolio holdings via fuzzy company-name and ticker matching. AI summarisation assigns bullish/bearish/neutral sentiment and flags high-materiality items. Filterable by source, sentiment, or "My Holdings".</p>
    </article>

    <article class="apple-card">
      <span class="apple-icon">🗓️</span>
      <h3>Dividends, Risk &amp; Telegram Briefings</h3>
      <p>Dividend calendar with a "My Holdings" filter for upcoming payments. Risk module flags portfolio concentration, sector over-weighting, and portfolio beta. Configurable <strong>Telegram Bot</strong> briefings deliver a morning report, intraday news watch, evening snapshot, and weekly review on schedule via <strong>node-cron</strong>.</p>
    </article>

  </div>
</section>

<section class="apple-section">
  {% include apple/section_head.liquid
      eyebrow="Tech Stack"
      title="Built with"
  %}

  <div class="apple-tag-grid">
    <span class="apple-tag">Next.js 16 (App Router)</span>
    <span class="apple-tag">React 19</span>
    <span class="apple-tag">TypeScript 5</span>
    <span class="apple-tag">Prisma 7 + adapter-pg</span>
    <span class="apple-tag">Neon PostgreSQL</span>
    <span class="apple-tag">NextAuth v5</span>
    <span class="apple-tag">Tailwind CSS v4</span>
    <span class="apple-tag">shadcn/ui v5 (base-ui)</span>
    <span class="apple-tag">Anthropic SDK 0.95</span>
    <span class="apple-tag">@google/genai 2.0</span>
    <span class="apple-tag">Vercel Blob</span>
    <span class="apple-tag">Recharts</span>
    <span class="apple-tag">p-queue</span>
    <span class="apple-tag">string-similarity-js</span>
    <span class="apple-tag">node-cron</span>
  </div>
</section>

<section class="apple-section">
  {% include apple/section_head.liquid
      eyebrow="Behind the Scenes"
      title="Challenges &amp; solutions"
      lead="Technical problems specific to this stack, this market, and this scale."
  %}

  <div class="apple-cs">
    {% include apple/cs_card.liquid
        label="Edge Runtime"
        challenge_title="NextAuth v5 middleware crashes on Vercel's Edge runtime when it imports Node.js-only modules."
        challenge_body="Bcryptjs and Prisma are Node.js-only. Importing either into the auth middleware caused build failures with cryptic 'module not found in edge runtime' errors."
        solution_body="Split auth configuration into two files: an edge-safe auth.config.ts (credentials shape only, no hashing, no DB) used by the middleware proxy, and a full auth.ts with Prisma and bcrypt used exclusively by API routes."
    %}
    {% include apple/cs_card.liquid
        label="LLM Schema Loops"
        challenge_title="Google Gemini 2.5 Flash entered infinite generation loops on structured output requests."
        challenge_body="Without strict constraints, missing enum values on string fields or no maxItems on arrays caused the model to keep generating tokens until the context limit was hit — producing a hard error instead of a structured response."
        solution_body="Hardened every Gemini schema with explicit enum arrays on all string fields (e.g. BUY/HOLD/SELL) and maxItems constraints on every array. Eliminated the looping behavior entirely."
    %}
    {% include apple/cs_card.liquid
        label="CSE API Rate Limits"
        challenge_title="Portfolio page enriching 15+ positions with live prices in parallel saturated the undocumented CSE API."
        challenge_body="The CSE API is rate-sensitive with no published limits. Firing all price requests concurrently triggered 429s and stale data errors."
        solution_body="Wrapped all CSE API calls in a p-queue singleton with concurrency 1 and a 500 ms minimum interval, shared across all server-side requests in the same process. Different TTLs applied during market hours versus after-hours."
    %}
    {% include apple/cs_card.liquid
        label="Serverless Payloads"
        challenge_title="Annual reports (50–200 pages) exceeded serverless function payload limits on Vercel."
        challenge_body="Streaming large PDFs through a Next.js API route caused timeout and 413 errors. Vercel's serverless limit cannot be raised arbitrarily."
        solution_body="Upload pipeline chunks large PDFs client-side and reassembles them server-side before writing to Vercel Blob, with allowOverwrite: true for idempotent re-uploads. A local chunk-storage fallback handles Blob write retries without leaving orphaned files."
    %}
    {% include apple/cs_card.liquid
        label="Fuzzy Matching"
        challenge_title="News headlines rarely mention a company's CSE ticker symbol."
        challenge_body="Matching 'Commercial Bank of Ceylon posts record profits' to COMB.N0000 required more than a simple string comparison. Direct ticker lookups missed the vast majority of articles."
        solution_body="Built a fuzzy matcher using string-similarity-js that compares headlines against both ticker symbols and full company names. A confidence threshold filters low-quality matches; the score is stored on the NewsSymbolLink join table and surfaced in the UI."
    %}
  </div>
</section>

<section class="apple-section">
  {% include apple/section_head.liquid
      eyebrow="Gallery"
      title="Screen captures"
  %}

  <div class="apple-gallery">

    <figure class="apple-shot">
      {% include image_fancybox.liquid
          full="/assets/img/portfolio/csepulse/CSE-Pulse-Card.png"
          thumb="assets/img/portfolio/csepulse/CSE-Pulse-Card.png"
          loading="eager"
          category="screen captures"
      %}
      <figcaption class="apple-shot-caption">CSE Pulse · Overview</figcaption>
    </figure>

    <figure class="apple-shot">
      {% include image_fancybox.liquid
          full="/assets/img/portfolio/csepulse/cse-pulse-news.png"
          thumb="assets/img/portfolio/csepulse/cse-pulse-news.png"
          loading="lazy"
          category="screen captures"
      %}
      <figcaption class="apple-shot-caption">News &amp; Sentiment</figcaption>
    </figure>

    <figure class="apple-shot">
      {% include image_fancybox.liquid
          full="/assets/img/portfolio/csepulse/cse-pulse-report.png"
          thumb="assets/img/portfolio/csepulse/cse-pulse-report.png"
          loading="lazy"
          category="screen captures"
      %}
      <figcaption class="apple-shot-caption">Company Report Analysis</figcaption>
    </figure>

  </div>
</section>
