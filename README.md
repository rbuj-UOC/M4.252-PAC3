# PAC3

En aquesta PAC es construirà el prototip d'un lloc web sobre cura personal, salut i benestar.

Aquest prototip mostrarà quins seran els continguts principals del lloc, el sistema de navegació, així com el disseny que tindrà el lloc web un cop finalitzat.

El prototip constarà de quatre pàgines: la pàgina d'inici (index.html), la pàgina del blog (blog.html), la pàgina amb un article del blog (entrada.html) i la pàgina amb un recull de vídeos (videos.html).

El material necessari per a realitzar la PAC, el trobareu a l'arxiu. S'han inclòs les imatges (carpeta img), els textos del contingut i instruccions de maquetació (TextosCondicionsMaquetacio.rtf / TextosCondicionsMaquetacio.pdf) i els mockups (carpeta mockups).

Els mockups indiquen com s'han de disposar els elements de cada pàgina tal com han de ser visualitzats en dispositius petits (01-index-telefon.png , 02-blog-telefon.png , 03-entrada-telefon.png i 04-videos-telefon.png ); en dispositius mitjans (01-index-tablet.png , 02-blog-tablet.png, 03-entrada-tablet.png i 04-videos-tablet.png) i en dispositius grans ( 01-index-desktop.png , 02-blog-desktop.png , 03-entrada-desktop.png i 04-videos-desktop.png). Aquestes imatges mostren l'aspecte visual i estètic que heu de reproduir amb la màxima fidelitat possible; a l'arxiu TextosCondicionsMaquetacio.rtf / TextosCondicionsMaquetacio.pdf trobareu instruccions relacionades amb els tipus de font, colors i aspecte dels enllaços que també heu de tenir molt en compte.

## Consideracions generals

Ha de maquetar-se utilitzant HTML5, respectant els estàndards web i aplicant les millors tècniques apreses al llarg del semestre.

Totes les pàgines han de poder ser correctament visualitzades en dispositius diversos (telèfons, tauletes i ordinadors d'escriptori), per la qual cosa hauran de tenir un disseny responsive. Us aconsellem que en la seva construcció apliqueu el criteri mobile first, però podeu utilitzar l'estratègia
que considereu més adequada.

Per a la maquetació de les pàgines podeu utilitzar qualsevol dels mòduls CSS que s'expliquen en la unitat 5 (Flexbox o Grid); apliqueu el que considereu adient a cada cas (no s'acceptarà l'ús de taules, que estan completament desaconsellades en la creació d'aquest tipus d'estructures).

El lloc ha de tenir una estructura lògica i organitzada d'arxius i carpetes.

Cada pàgina ha de tenir un títol ( title ) que ha de ser apropiat i descriptiu del seu contingut.

Tant l'HTML com el CSS (en un únic arxiu per a tot el lloc) han de presentar el codi visualment ordenat i han d'estar lliures d'errors de validació.

## Descripció del contingut

Elements comuns de les quatre pàgines:

1. Amplada dels contenidors: com podeu veure en els mockups, en els dispositius petits i mitjans els continguts ocupen el 100% de l’amplada de la finestra del dispositiu (amb una separació raonable a esquerra i dreta per evitar que els continguts toquin les parets laterals). En els dispositius grans, els continguts no sempre ocupen el 100% de la finestra del navegador i es mostren horitzontalment centrats. La capçalera i el peu de totes de les pàgines ocupen el 100% de la finestra.
2. Capçalera
   - Logotip amb enllaç a index.html.
   - Menú de navegació principal format per una llista de dos ítems: "Blog" (amb enllaç a blog.html ), i "Vídeos" (amb enllaç a videos.html ).
   - Aquest menú haurà de mostrar-se sempre fix en la part superior de totes les pàgines.
   - En tractar-se d'un menú tan breu, en dispositius petits, mitjans i grans es mostrarà sempre igual, és a dir , en disposició horitzontal i alineat a la dreta.
   - No heu d'oblidar de tractar convenientment l'estat :hover dels enllaços del menú.
3. Peu de pàgina
   - Els continguts del peu de pàgina es mostraran en dos blocs.
   - En un primer bloc, a l'esquerra, el logotip i el nom i cognoms de l'estudiant.
   - En un segon bloc, a la dreta, hi ha dues files d'elements. A la fila superior , una llista no ordenada amb les icones de tres xarxes socials (amb enllaços buits). A la fila inferior , un menú de navegació amb tres ítems (amb enllaços buits): "Política de privacitat", "Política de cookies" i "Avís legal".
   - En dispositius mitjans i petits, el contingut es mostrarà centrat.
   - No heu d'oblidar de tractar convenientment l'estat :hover dels enllaços del peu.

A continuació us fem les indicacions per a la construcció de la resta de continguts de cadascuna de les pàgines del prototip. Els textos per copiar i enganxar els localitzareu a l'arxiu TextosCondicionsMaquetacio.rtf.

1. Pàgina d'entrada al lloc web (index.html):
   - Aquesta és la pàgina inicial del lloc, hi hem de poder accedir sempre des del logotip de la capçalera de cada pàgina.
   - A la part superior hi ha una imatge amb un lema superposat. A continuació hi ha un bloc amb un text d'introducció i un formulari de subscripció al butlletí de notícies. Finalment, hi ha un bloc amb quatre temes destacats formats per una imatge que, com podreu veureu en els mockups, està parcialment girada en dispositius mitjans i grans (no en els petits), un titular, una breu descripció i un enllaç amb aspecte de botó que enllaçaria amb una nova pàgina, però que haureu de deixar com a enllaç buit.
2. Pàgina "Blog" (blog.html):
   - A aquesta pàgina hi hem de poder accedir des del menú de navegació principal de totes les pàgines.
   - La pàgina consta d'una graella d'articles formats per una imatge, un títol, una descripció i unes metadades. Tant el títol com "Llegir-ne més" són enllaços que han de dur al text complet de l'article. El primer article enllaça amb entrada.html. En la resta d'articles, aquests enllaços seran buits.
   - Superposats a la imatge, hi han d'aparèixer la categoria (part superior esquerra), amb un enllaç buit, i l'autoria de la imatge (part inferior dreta).
   - En els dispositius més grans, els continguts es repartiran l'espai de la manera següent: en la primera fila ha d'haver-hi tres entrades, essent la primera entrada més gran que la resta; en la segona fila, les quatre entrades restants.
   - En dispositius petits i mitjans, tots els articles tenen la mateixa amplada. En dispositius mitjans es repartiran l'espai en dues columnes i en dispositius petits en una única columna.
   - Per sota de les entrades, un menú de navegació, amb enllaços buits, que conduiria a pàgines on es trobarien la resta d'entrades del blog.
3. Pàgina "Estratègies per a una vida activa" (entrada.html):
   - A aquesta pàgina hem de poder accedir sempre des dels enllaços del primer article de la pàgina del blog.
   - En la part superior de la pàgina una [ruta de navegació](https://ca.wikipedia.org/wiki/Ruta_de_navegaci%C3%B3).
   - Aquesta pàgina consta d'un article que inclou, entre d'altres qüestions, un parell de llistes i una citació de bloc.
   - Els mockups corresponents mostren com cadascun dels elements utilitza l'espai.
   - A la versió d'escriptori el contingut es mostra en dues columnes: una per a l'article i l'altre per a la barra lateral amb articles recents i una llista de categories. En dispositius més petits es mostrarà tot el contingut en una única columna, i el contingut de la barra lateral passarà a situar-se a continuació del contingut de l'article. En dispositius mitjans cal fer un canvi en la disposició dels articles recents que s'han de mostrar en tres columnes.
4. Pàgina "Vídeos" (videos.html):
   - A aquesta pàgina hi hem de poder accedir sempre des de l'ítem "Vídeos" del menú principal de cadascuna de les pàgines.
   - Aquesta pàgina consta de 6 vídeos de YouTube. Per a cadascun es mostra el nom, una breu descripció i el vídeo incrustat.
   - Tant els vídeos com els seus contenidors han de ser fluids (amb mida no fixa) i adaptar-se a les diferents mides de pantalla. En dispositius grans es mostrarà a tres columnes; en mitjans, a dues columnes i en dispositius petits, en una única columna.

## Altres activitats a realitzar

Heu d'elaborar un informe que documenti les característiques del lloc web. L'objectiu de l'informe és aconseguir que qualsevol que hagués de continuar construint el lloc tingués clar el procediment a seguir (organització d'arxius, arquitectura de la informació, disseny gràfic...). Aquest informe, com a mínim, inclourà una explicació dels elements HTML i de les declaracions CSS que s'han utilitzat, explicant el que es comú a totes les pàgines i també les estructures particulars de cadascuna d'elles. Aquest informe haurà de lliurar-se en un document amb qualsevol de les extensions següents: .doc, .odt o .pdf.

A més de lliurar la solució a l'apartat Entrega P3, s'haurà de fer la publicació per tal que sigui accessible des d'Internet.

Aquesta publicació es pot fer d'una de les maneres següents:

1. allotjar el lloc web al servei GitHub Pages, o
2. allotjar-lo dins del Campus mitjançant l'aplicació WebFTP que trobareu a l'aula.

En l'informe heu d'indicar quin servei de publicació heu utilitzat i indicar l'URL que condueix a la primera pàgina ( index.html ) del prototip que heu desenvolupat.