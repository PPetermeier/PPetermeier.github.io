# Website maintenance

Use Node 22.23.4 (`nvm install && nvm use`) and npm 10.9.4
(`npm install --global npm@10.9.4`).

Pushing to `main` installs dependencies, builds the static site, and deploys it
to GitHub Pages. Dependabot opens weekly dependency update PRs; it does not
merge them automatically. Before merging an update, check it locally:

```sh
npm ci
npm audit
npm run build
```

## KaTeX dependency override

`package.json` overrides KaTeX to `^0.18.2` because `rehype-katex` and
`micromark-extension-math` still request the vulnerable `^0.16.0` series.
Version 0.18.2 fixes
[GHSA-238p-pmpm-9mq7](https://github.com/advisories/GHSA-238p-pmpm-9mq7).
Keep the override until both upstream dependencies accept a patched version.
Avoid `npm audit fix --force`: its suggested plugin downgrades are breaking changes.

## Previous dependency advisory — reviewed October 3, 2026

Update October 22, 2026: this advisory is no longer reported by `npm audit`
for the current lockfile. The following notes describe the earlier review.

[GHSA-ch52-4w7c-c8xp](https://github.com/advisories/GHSA-ch52-4w7c-c8xp)
affects Astro's http-cache-semantics dependency. At review time, no patched
release was available; npm reported two high findings for this one issue.
The suggested `npm audit fix --force` would downgrade Astro from 7 to 2;
avoid applying it blindly.

The affected code handles remote-image caching. This site does not use Astro's
remote-image processing and publishes only static files to GitHub Pages,
so no reachable path for this issue was identified in the current site.
The dependency remains unpatched. Check for an upstream fix when updating
dependencies, and reassess if adding server rendering or remote-image processing.
