E-commerce de pasteles
## Variables

Primary color: green
Secondary: grey
Grey
wrapper width:
width: 85%
margin: 0 auto
Breakpoints:
mobile 0 - 768
tablet 768 - 1200 @media all and (min-width: 768px)
desktop 1200 - oo @media all and (min-width: 1200px)
Componentes comunes
### Header Lorena

Desktop: flex-row
Tablet: flex-row
Mobile: Menu Separar el logo del nav Media queries para mostrar y ocultar el nav y el burguer button.
### Cards Zoe

Desktop: width: 30%
Tablet: width: 45%
Mobile: width: 100%
### Footer top

Dektop: flex-row
Tablet y mobile: flex-column
Footer left: title + ul
Footer right: cámara
### Footer bottom

Dektop: flex-row
Tablet y mobile: flex-column
Componentes particulares
Home Hero
Img BG para todo el contenedor y dentro el wrapper
home hero left: text + buttons
home hero right (solo desktop): imagen con mano y móvil.
H1, H2, buttons -> flex-row (desktop y tablet) flex-column (mobile)
About main
Dektop: flex-row
Tablet y mobile: flex-column
Contact main
Dektop: flex-row
Tablet y mobile: flex-column
Form
Label + input
Maquetacion
Styles
_vars.scss
_header.scss
_footer.scss
_card.scss
_accordeon.scss
_form.scss
### HOME index.html

header

hero

card container + cards

footer

index.scss

_header.scss
_footer.scss
_card.scss
estilos para hero y card container
About
about.html

header

about container

accordeon

card

footer

about.scss

_header.scss
_footer.scss
_card.scss
estilos about container + accordeon
Contact
contact.html

header

contact container

form

card

footer

contact.scss