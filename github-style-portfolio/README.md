# GitHub-Style Developer Portfolio

A lightweight, responsive portfolio with a GitHub-inspired repository view. It starts with **zero projects** by design.

## Personalize
1. Edit `profile.js` with your name, GitHub URL, bio, location, and optional contact links.
2. Open `projects.js` and add one object per project to `window.PORTFOLIO_PROJECTS`.
3. Save and refresh `index.html` to preview your portfolio.

Each project object supports:
- `name` — repository name
- `description` — short project summary
- `url` — GitHub repository URL
- `readme` — optional README URL
- `technologies` — array of technology tags
- `visibility` — e.g. Public or Private
- `language` — primary language
- `updated` — date or year label

See the commented example in `projects.js`. No project is preloaded.

## Add a project README
Copy `PROJECT-README-TEMPLATE.md` into the relevant project repository as `README.md`, then replace every prompt with details from that project. The template includes all nine requested sections.

## Preview locally
Open `index.html` in a browser. No build tools or dependencies are required.

## Publish with GitHub Pages
1. Create a new GitHub repository, for example `your-username.github.io` (or any repository you want to publish from).
2. Upload the contents of this folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for the Pages deployment and open the URL shown in Settings → Pages.

For a project repository rather than a user-site repository, the published URL is usually `https://your-username.github.io/repository-name/`.

## Notes
- This starter uses local JavaScript data, not the GitHub API. You control exactly which repositories appear by editing `projects.js`.
- Do not put credentials, access tokens, private keys, or other secrets in this public repository.
- Use the included README template for major projects and document actual cleanup commands for any cloud resources you create.
