# Hópverkefni 2

## Hvernig skal keyra verkefnið

Eftir að clonað hefur verið repository, þarf að installa node.js (https://nodejs.org/en/download/).
Þar á eftir skal opna þitt local repository í commandline, og skrifa inn "npm install".
Þegar install er lokið skal einfaldlega skrifa inn "npm run dev" og VOILA, verkefnið opnast í vafra.

## Uppsetning verkefnis

* `dist/` mappa sem inniheldur _þýddar_ sass og JavaScript skrár
* `img/` með öllum myndum sem þarf í verkefnið
* `src/` mappa með
  - `styles/` undirmöppu með `styles.scss` grunni
  - `lib/` undirmappa sem inniheldur JavaScript kóða
  - `index.js` skrá sem vísar í `lib/`
* `.editorconfig` sem samræmir notkun á tabs og spaces, bilum [og fleira](https://editorconfig.org/)
* `.eslintrc` skrá sem segir til um hvernig lint fyrir JavaScript skrár skuli háttað
* `.gitattributes` sem kemur í veg fyrir ósamræmi sem geta komið upp þegar unnið er á milli stýrikerfa
* `.gitignore` sem hunsar algengar skrár, [sjá nánar](https://help.github.com/ignore-files/)
* `.stylelintrc` með upplýsingum um hvernig stylelint eigi að haga sér. Setja þarf upp `stylelint-config-primer` pakkann
* `fyrirlestur.html` sem inniheldur HTML gögn fyrir einstaka fyrirlestra
* `grid.css` til að sjá grid sem fyrirmynd er unnin eftir
* `index.html` sem inniheldur HTML gögn fyrir forsíðuna
* `lectures.json` sem inniheldur fyrirlestrargögn
* `package.json` hefur uppsett script ásamt dependencies
  - `eslint` til að keyra eslint
  - `stylelint` til að keyra stylelint
  - `test` til að keyra bæði `eslint` og `stylelint`
  - `browser-sync` til að keyra verkefni, bæta þarf við skrám sem vaktaðar eru
  - `sass` til að keyra fyrstu þýðingu
  - `sass-watch` til að fylgjast með sass skrám og þýða
  - `dev` til að keyra `sass` og `browser-sync`
  - `rollup` til að pakka saman JavaScript kóða
  - `babel` til að transpila kóða

## Upplýsingar um alla sem unnu verkefnið

* Ívar Jónsson (ivj3@hi.is)

* Jón Karl Kristján Traustason (jkk17@hi.is)

* Aron Bjarki Kristjánsson (abk18@hi.is)