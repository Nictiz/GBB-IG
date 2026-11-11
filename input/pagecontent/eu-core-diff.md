Deze gids is een demo voor een mogelijke manier om de verschillen tov. eu-core te visualiseren. Voor de profielen die een connectie hebben met een eu-core-profiel (imposeProfile or compliesWithProfile), is er een extra tabje bijgekomen: "diff met eu-core". Als je hierop klikt, zie je een diff-view, maar dan niet met de onderliggende resource maar tov. het eu-core-profiel.

Dit werkt nog niet volgens een geautomatiseerd proces, het is alleen maar een demo en de aanpak is nogal omslachtig:

- Voor de relevante profielen wordt eerst een kopie gemaakt, met toevoeging "-on-eu-core":
    - canonical en id krijgen deze toevoeging.
    - de `StructureDefinition.baseDefinition` wordt aangepast naar het gerefereerde eu-core-profiel.
    - de imposeProfile/compliesWithProfile-extensie wordt verwijderd.
- Elk profiel wordt geopend en opgeslagen in Forge. Dit her-genereert de differential op basis van het eu-core-profiel.
- Dan wordt de gids een keer gebouwd om de relevante HTML te genereren.
- De relevante HTML moet as-is toegevoegd worden aan de IG. Hiervoor wordt een nieuw mapje in de input-folder gemaakt, genaamd "rebased-html". Deze wordt aan de `path-pages`-parameter toegevoegd in `sushi-config.yaml`. Dit zorgt ervoor dat alles wat hier staat, op de relevante plek terechtkomt voor Jekyll:
  ```yaml
  path-pages:
  - 'input/rebased-html'
  ```
- De volgende content wordt naar deze folder gekopieerd:
  - `temp/pages/_includes/StructureDefinition-*-on-eu-core-diff-nl.xhtml`
  - `temp/pages/_includes/StructureDefinition-*-on-eu-core-diff-en.xhtml`
  - `temp/pages/_includes/StructureDefinition-*-on-eu-core-diff-obligations-nl.xhtml`
  - `temp/pages/_includes/StructureDefinition-*-on-eu-core-diff-obligations-en.xhtml`
  - `temp/pages/_includes/StructureDefinition-*-on-eu-core-tx-diff-nl.xhtml`
  - `temp/pages/_includes/StructureDefinition-*-on-eu-core-tx-diff-en.xhtml`
  - `temp/pages/_includes/StructureDefinition-*-on-eu-core-inv-diff-nl.xhtml`
  - `temp/pages/_includes/StructureDefinition-*-on-eu-core-inv-diff-en.xhtml`
- De *-on-eu-core profielen worden nu weggegooid, deze moeten niet in de IG en het package terechtkomen.
- Er wordt een custom template gebruikt waarin `layouts/layout-profile.html` aangepast is. Dit is het template dat de output voor een profiel genereert uit de losse delen. De aanpassing zorgt ervoor dat er gedetecteerd wordt of output is voor `on-eu-core`, en als dat er is, wordt dat toegevoegd in een extra tabje.
- Nu wordt de gids opnieuw gebouwd.

Dit werkt zeker niet perfect. De build faalt zelfs in de autobuild-omgeving (lokaal slaagt deze wel), alhoewel er wel output gegenereerd wordt. Ook werken de linkjes vanuit de diff-view bv. niet, maar dat is voor de demo even genegeerd.