## How to run

- `npm run dev` - Starts a dev server at http://localhost:5173/
- `npm run build` - Builds for production, emitting to `dist/`
- `npm run preview` - Starts a server at http://localhost:4173/ to test production build locally

## Decisions

- Picked [Preact](https://preactjs.com/) for this assessment due to being the lightweight alternative to React ([link here for more info](https://preactjs.com/guide/v10/differences-to-react/)).
- I assumed that the lower the number is stated for priority the higher it is ranked, which was the case based on the design shown in Figma and the `mock_tasks.json` file given.
  - Order of tasks was done only for the non-completed tasks table, not the table for completed tasks.
- I tried to follow the design stated in the Figma URL given, though there are some minor differences done on purpose which includes but not limited to:
  - Some spacings and sizes of badges and buttons being made smaller/larger than stated in Figma.
  - Color of badge in offcanvas for non-completed tasks set to red instead, as yellow is used for one of the categories as seen in Figma. This would make it inconsistent if yellow is also being used for badge in offcanvas.
  - Button for marking task for completion in offcanvas is put underneath the parsed long description instead of bottom of page, as it would feel off if the long description goes beyond the height of page in my personal opinion.
- I assumed that both the title and the CTA button of the task will open up the offcanvas.
- If have more time to work on this project, I would add unit tests on components and utils.
