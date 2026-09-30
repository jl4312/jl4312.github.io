HOW TO EDIT YOUR PORTFOLIO
==========================

Everything you'd normally want to change is in this folder. Open a file in
any text editor (VS Code, Notepad++, even Notepad), change the text between
the quotes, save, and refresh the site.

  about.js       About Me intro paragraphs, portrait, Education
  experience.js  Jobs (short version on Home, full list on About)
  skills.js      Skills boxes on the About page
  projects.js    Projects: Home list, Projects page, Demo Reel cards, popups
  artwork.js     Artwork grid on Home and Demo Reel

Each file starts with instructions, and projects.js / experience.js end
with a TEMPLATE you can copy to add a new entry.

Text shortcuts that work in every file:
  **bold words**            -> bold
  [link text](https://...)  -> a link that opens in a new tab

If something disappears after an edit, it's almost always a missing comma
or quote. Press F12 in the browser and look at the Console: it shows the
file name and line number of the mistake.

To preview locally, run this in the repo folder, then open
http://localhost:8000
    py -m http.server
