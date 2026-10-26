# Search and agent discoverability

The site serves complete static HTML. JavaScript enhances entrance animations; it is not required to read content or use the mobile navigation. Navigation and green action buttons use ordinary links.

## Maintaining the content

- `src/data/profile.ts` supplies the visible identity and the shared Person metadata. Keep the role, location, current employment, aliases, and profile URLs accurate there.
- `src/data/research.ts` supplies project titles, status, canonical paths, and descriptions. Update a project's modification date only when its page content materially changes.
- Keep the project overview concise and use the dedicated pages for the question, contribution, approach, outputs, and limitations. SPAR remains an ongoing project without individual findings claimed.
- Each page has a unique title, description, canonical URL, author, and page metadata. The homepage identifies the person; project pages describe the work and include breadcrumbs.
- `public/robots.txt` allows crawling, including AI search, and advertises the generated sitemap. This retains the previous open policy; it does not introduce a training-crawler opt-out. Search and training preferences can be configured separately if desired.
- `llms.txt`, Markdown mirrors, and automatic search-submission integrations are not required for this implementation.

## After publishing

The following steps require the site owner's external accounts. They are not performed by a local build.

1. Deploy the reviewed branch through the existing GitHub Pages workflow after merging it into `main`.
2. Verify `infornomics.de` in Google Search Console and Bing Webmaster Tools if it is not already verified. A domain verification can use the provider's DNS record; alternatively, use its supplied verification file for the exact site URL. Do not invent verification tokens.
3. Submit `https://www.infornomics.de/sitemap-index.xml` in both tools.
4. Inspect the homepage and these URLs in the search tools, then request indexing where available:
   - `https://www.infornomics.de/projects/`
   - `https://www.infornomics.de/skills/`
   - `https://www.infornomics.de/projects/ai-decision-making/`
   - `https://www.infornomics.de/projects/technology-cost-trajectories/`
5. Validate the published homepage and project metadata with Google's Rich Results Test and Schema.org's validator. Valid metadata does not guarantee a rich result or an AI citation.
6. Add the homepage URL to your Substack author profile, GitHub profile, and LinkedIn profile. Where appropriate, use the dedicated project URL in project and event biographies you control.
7. Review indexing, impressions, clicks, and search queries in the webmaster tools. Bing's AI Performance report can also show citations across supported AI experiences. These measurements do not require adding visitor tracking to the site.

## Local checks

Use the Node version in `.nvmrc`, then run `npm run astro -- check` and `npm run build`. Preview the build with `npm run preview`.

Check the five pages with JavaScript enabled and disabled, mobile navigation, keyboard focus, reduced motion, and direct links to sections. Confirm the sitemap contains all five canonical HTML URLs, JSON-LD parses correctly, the Person ID is consistent, and the favicon and profile image resolve. Check `robots.txt` separately; it should not appear as an HTML page in the sitemap.

## Reference guidance

- [Google: generative AI search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: profile metadata](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- [OpenAI: search and training crawlers](https://developers.openai.com/api/docs/bots)
- [Bing: AI Performance reporting](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/)
