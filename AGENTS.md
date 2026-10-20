<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Rules

- Shared portfolio sections and analytics schematics live in reusable components; content records stay separate from presentation. Why: the homepage and dedicated pages must remain consistent as real assets arrive.
- A missing resume or project URL renders an unavailable control, never a fake download or completed project. Why: visitors must not encounter fabricated work or broken asset links.
- Case-study frameworks are explicitly proposed and have no invented numeric series; actual findings require supplied evidence. Why: research scope must remain distinct from measured performance.

- Credential images are the original uploaded scans, served through Lovable Assets pointer files in `src/assets`; render them at their natural aspect ratio (never `object-cover`, fixed crops, or AI redraws) and open the full file in a new tab. Why: they are official documents and the portfolio must not misrepresent them.
