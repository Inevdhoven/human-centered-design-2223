# Kies je emoji in een chat app

![kies_je_emoji](https://github.com/Inevdhoven/human-centered-design-2223/assets/43877754/cc6a0c3f-363f-42a2-8b1c-fd0642addb7b)

## Onderzoeksvraag

> Voor Eric zijn emoji's niet krachtig genoeg. Hij wil een manier om zijn emotie en body language krachtiger te kunnen uiten in chat apps, zoals Signal.

## Probleemdefinitie

Eric maakt gebruik van een elktrische rolstoel door zijn beperking. Door deze beperking kan hij zijn armen niet volledig optillen en kan hij zijn handen en vingers minder goed gebruiken. Hierdoor zijn voor hem bepaalde bewegingen en het bedienen van zijn laptop of telefoon lastiger. Hij maakt net als bijna iedereen dagelijks gebruik van chatapps om te kunnen communiceren met anderen. In deze chatapps zitten mega veel emoji's, waaruit Eric het lastig vind om te kunnen kiezen. Dit komt doorat hij vaak niet goed weet welke emoji nou precies goed bij zijn emotie past. Daarnaast hebben emoji's in verschillende landen ook nog eens verschillende betekenissen hebben, wat het nog lastiger maakt om er een uit te kiezen.

## Oplossing

Mijn oplossing is om een button toe te voegen aan de chat app. Door op de button emoji toevoegen te klikken word er een popup geopend waar Eric zijn eigen emoji kan samenstellen. Hij kan uit vier verschillende onderdelen kiezen. Hij kan kiezen uit de onderdelen ogen, mond, wenkbrauwen en bodylanguage. Omdat niet elke emoji wenkbrauwen of bodylanguage heeft, kan Eric er ook voor kiezen om deze niet toe te voegen. Wanneer hij klaar is met het samenstellen van zijn emoji kan hij deze versturen naar de chatroom.

Dan heb ik ervoor gekozen om de chatapp en popup met het maken van de emoji bedienbaar te maken met muis en toetsenbord. Wanneer je in de chatapp bent kun je met tab van het ene element naar het andere element gaan. Wanneer je in de popup bent kun je ook met tab door de elementen. Bij de radio buttons kun je doormiddel van de pijltjes toetsen van de ene naar de andere radio button.

_Mijn chatapp werkt niet helemaal, ik heb geprobeerd zo ver mogelijk te komen in de tijd die ik had._

<hr>

# Documentatie

## Introductie

Voor het vak Human Centerd Design ga ik een nieuw functie aan een chat app toevoegen. Voor dit vak ga ik een chat app maken met een focus op de gebruiker en hoe hij zicht op een krachtigere manier kan uitdrukken, doormiddel van emotie en body language. De gebruiker is Eric, hij is 50 jaar oud, woont in Amsterdam en gebruikt een elektrische rolstoel. Eric werkt als accessibility employee en helpt bijvoorbeeld bij het toegankelijker maken van gebouwen voor mensen met prikkelgevoeligheid.

## Inhoud

- [Uitleg](#uitleg)
- [Hoe installeer je dit project?](#hoe-installeer-je-dit-project)
- [Hoe gebruik je dit project?](#hoe-gebruik-je-dit-project)
- [Features](#features)
- [User senario](#user-senario)
- [Proces](#proces)
  - [Test 1](#test-1)
  - [Test 2](#test-2)
  - [Uiteindelijk resultaat](#uiteindelijk-resultaat)
- [Exclusive design Principles](#exclusive-design-principles)
  - [Study situation](#study-situation)
  - [Ignore conventions](#ignore-conventions)
  - [Prioritise identity](#prioritise-identity)
  - [Add nonsense](#add-nonsense)
- [Reflectie](#reflectie)
- [License](#license)
- [Bronnen](#bronnen)

## Uitleg

### Wat is de opdracht?

De opdracht is om een ontwerp te maken specifiek voor een persoon. In mijn geval is dit Eric. Eric heeft een probleem en dat is dat hij zich niet krachtig genoeg kan uitdrukken in chat apps. Hij wil graag een manier om zijn emotie en body language krachtiger beter te kunnen uiten in chat apps. Gedurende het maken van deze opdracht moet ik twee keer testen met Eric om er achter te komen wat wel en wat niet goed werkt, om zo tot een oplossing te komen.

### Mijn idee

Mijn idee is om aan de chat app een button toe te voegen, zodat als je dat wil je een emoji kan toevoegen. Wanneer je op de button klikt komt er een popup. Hierin kun je je eigen emoji samen stellen, om zo ervoor te zorgen dat het goed weergeeft wat jouw emotie is. Je kunt uit vier verschillend onderdelen kiezen. Je kunt ogen, een mond, wenkbrauwen en een bodylanguage toevoegen. Wenkbrauwen en een bodylanguage kunnen ook wegelaten worden, omdat je deze niet altijd wilt gebruiken.

Mijn idee is te gebruiken met een muis of met het toetenbord, zodat je er of doorheen kan gaan doormiddel van het toetsenbord. Wanneer je in de popup bent met het samen stellen van de emoji kun je niet zomaar uit de popup gaan met het toetsenbord. Dit kan alleen wanneer je op het kruisje staat op op emoji versturen klikt. Met de muis kun je ook gewoon uit de popup gaan door op het kruisje te klikken of door op de button emoji versturen te klikken.

## Hoe installeer je dit project?

Om dit project te installeren moet je de repository clonen naar je lokale machine. Dit doe je door een map te openen waar je de repository in wilt clonen. Vervolgens open je je terminal en typ je het volgende commando:

```
git clone https://github.com/Inevdhoven/human-centered-design-2223.git
```

Nu moet je naar de map gaan waar je de repository in hebt gecloned. Dit doe je door het volgende commando in te typen:

```
cd human-centerd-design-2223
```

Om de dependencies te installeren moet je het volgende commando uitvoeren:

```
npm install
```

Om het project te starten moet je het volgende commando uitvoeren:

```
npm run dev
```

Open het project in je browser door naar localhost:4343 te gaan.

## Hoe gebruik je dit project?

Je kunt dit project gebruiken door je naam in het input veld met in het veld ernaast een bericht te schrijven. Vervolgens kun je op de button verstuur klikken om je bericht te versturen. Wanneer je een emoji wilt toevoegen kun je op de button emoji toevoegen klikken. Er opent dan een popup waar je je eigen emoji kunt samenstellen. Je kunt uit vier verschillende onderdelen kiezen. Je kunt ogen, een mond, wenkbrauwen en een bodylanguage toevoegen. Wenkbrauwen en een bodylanguage kunnen ook weggelaten worden, omdat je deze niet altijd wilt gebruiken. Wanneer je dan op versturen klikt word de emoji verstuurd naar in de chatroom.

## Features

- Een chatroom waarin je berichten kunt sturen
  - Een input veld waarin je je naam kunt invullen
  - Een input veld waarin je een bericht kunt typen
  - Een button om je bericht te versturen
- Een popup waarin je je eigen emoji kunt samenstellen
  - In de popup kunnen kiezen uit vier verschillende onderwerpen: Ogen, mond, wenkbrauwen en bodylanguage
  - Wenkbrauwen en bodylanguage kunnen ook weggelaten worden
  - De emoji kunnen versturen naar de chatroom

## User senario

Eric is 50 jaar en maakt door zijn handicap gebruik van een elektrische rolstoel. Door zijn handicap, kan hij zijn armen niet volledig omhoog bewegen en kan hij zijn handen en vingers minder goed gebruiken. Hij werkt als toegankelijkheidsmedewerker en woont in Amsterdam in een focus groep, met 15 aangepaste woningen. Hier kan hij hulp krijgen met de dingen die hij niet geheel zelf kan. Zijn hobby’s zijn het kijken naar films en series, luisteren naar muziek, het spelen van bordspellen en het lezen van boeken. In zijn dagelijks leven maakt hij om te communiceren met mensen, net als veel anderen gebruik van chat apps. Om zijn emoties hierin te weergeven maakt hij vaak gebruik van emoji’s.

Er is alleen zoveel keuze uit verschillende emoji’s dat het erg lastig is om te kiezen wat nou precies zijn emotie omschrijft. Daarnaast hebben veel emoji’s voor verschillende culturen een andere mening.

Hij wil dus graag dat het makkelijker wordt gemaakt om een emoji te kiezen met de juiste emotie en body language. Deze manier om een emoji te kiezen met de juiste emotie en body language moet daarbij rekening houden met zijn beperking, zo wil hij graag dat het makkelijk in gebruik is en dat hij er makkelijk door heen kan klikken met een muis en/of toetsenboord.

Eric zou eerder mijn manier van het sturen van emoji's + bodylanguage gebruiken, omdat het voor hem is gemaakt. Met mijn manier kan hij zelf een emoji samenvoegen en kiezen of hij wenkbrauwen of een bepaalde bodylanguage wilt toevoegen. Daarnaast heb ik het makkelijker voor hem gemaakt door de knoppen groter te maken en het gebruik van muis en toetsenbord toe te voegen. Hierdoor kan hij zelf kiezen hoe hij het liefst de emoji's wilt toevoegen aan het chatgesprek.

## Proces

Hier kun je meer lezen over mijn proces gedurende dit vak.

<details>
    <summary>
        <h3>Test 1</h3>
    </summary>
    <h4>Mijn eerste idee</h4>
    <p>Het eerste idee dat bij mij opkwam om ervoor te zorgen dat je krachtiger emoties en body language kan uitdrukken. Is om een foto functie toe te voegen aan de chatapp, wanneer je dan een foto hebt gemaakt deze aan een emotie kan koppelen, zodat het echt jouw emoties zijn die worden gezien door de persoon waarmee je aan het chatten bent.</p>
    <p>Ik hoorde dat je dit ook in de app BeReal hebt dat je daar ook aan een emoij een foto kan koppelen die de emotie weergeeft.</p>
    <h4>Gemaakt opzetje:</h4>
    <p>Om mijn idee te kunnen testen heb ik een opzetje gemaakt waarbij je een foto kan nemen van jezelf en dat je deze dan kan terug zien. Dit heb ik gemaakt en heb ik laten testen.</p>
  
  <img width="360" alt="chatroom app test 1" src="https://github.com/Inevdhoven/human-centered-design-2223/assets/43877754/f17af4b5-0550-444e-b435-dc748c8dee91">
  
<img width="361" alt="chatroom bericht gestuurd test 1" src="https://github.com/Inevdhoven/human-centered-design-2223/assets/43877754/c977cee1-a23e-4bb1-ae75-c0d8c664fd75">
  
<img width="362" alt="chatroom camera open en foto gemaakt test 1" src="https://github.com/Inevdhoven/human-centered-design-2223/assets/43877754/2f78c1bf-466a-4fe1-9418-e794200d6e7a">

 <h4>Vragen die ik wil stellen onder de eerste test:</h4>
    <ol>
        <li>
            <b>Waarom wilt u zich beter en krachtiger uidrukken in chat apps?</b>
            <p>Eric wil graag een oplossing met minder verschillende emoji's. Nu is er namelijk zoveel keus dat hij niet goed kan kiezen. Ook weet hij vaak niet wat welke emoji precies beteken en hebben de emoji's in verschillende landen verschillende betekenissen. Hij wil dus graag een oplossing waaruit hij een makkelijkere keuze kan maken om zijn emotie te uiten.</p>
        </li>
        <li>
            <b>Wat zijn uw problemen nu met het uitdrukken van emoties in een chat app?</b>
            <p>Het is te moeilijk om een keuze te maken uit alle verschillende emoji's die er nu zijn.</p>
        </li>
        <li>
            <b>Hoe gebruikt u chat apps op het moment? Kunt u dit ons laten zien?</b>
            <p>Om berichten te sturen gebuikt Eric een styles. Deze styles gebruikt hij veel voor het gebruik van zijn telefoon. Hierbij maakt hij met de styles ook gebruik van gestures.</p>
        </li>
        <li>
            <b>Hoe vind u het om foto's te maken? Gaat dit makkelijk of is het moeilijk?</b>
            <p>Het is voor Eric niet heel makkelijk om een foto te maken van zichzelf. Als hij snel een foto wilt maken wordt het al snel een foto van maar de helft van zijn hoofd en als hij wat meer de tijd neemt dan moet hij eerst instellen dat het drie seconden duurt voordat de foto genomen word en dan kan hij de foto's gaan nemen.</p>
        </li>
        <li>
            <b>Maakt u liever gebruik van kleine, medium of grotere knoppen?</b>
            <p>Kleine knoppen zijn niet handig, omdat Eric met een stylis werkt. Wanneer de telefoon dan iets beweegt (wanneer hij bijvoorbeeld gebruik maakt van het openbaar vervoer) klikt hij dan al snel mis. Daarom zijn grotere buttons handiger, zodat de kans op mis klikken kleiner is.</p>
        </li>
    </ol>
    <h4>Wat ik graag zou willen testen:</h4>
    <ol>
        <li>
            <b>Open een chat app, typ een bericht naar iemand en verstuur deze.</b>
            <p>Eric pakte zijn telefoon erbij en zijn styles, om de telefoon te besturen. Met een styles gaat het besturen van zijn telefoon makkelijker, omdat hij dan niet met zijn hand voor het scherm zit en niet kan zien wat hij aan het doen is. Met de styles kan hij op een gemakkelijkere manier en ook snel een bericht sturen naar iemand.</p>
        </li>
        <li>
            <b>Maak een foto van u zelf. (Hoe houd Eric zijn telefoon vast)</b>
            <p>Het nemen van een foto is voor Eric een redelijke opgave, doordat hij zijn telefoon niet makkelijk omhoog kan houden. Dit kost voor hem veel tijd, doordat hij eerst de telefoon moet instellen. Hij moet er namelijk voor zorgen dat de foto pas na drie seconden wanneer hij klikt word genomen. Hierdoor heeft hij drie seconden om de telefoon in de juiste houding te brengen, zodat hij er goed op kan staan.</p>
            <p>Doordat het nemen van een foto voor Eric veel werk is heeft hij liever niet dat hij elke keer dat hij een bepaalde emotie of body language wilt uitdrukken niet dat hij dan steeds op nieuw een foto moet nemen. Een oplossing hiervoor zou kunnen zijn dat hij de foto's van te voren maakt, zodat hij deze al heeft.</p>
        </li>
        <li>
            <b>Navigeer door uw telefoon, zodat wij kunnen zien hoe u die precies gebruikt.</b>
            <p>Eric navigeert makkelijk door zijn telefoon, door de styles die hij gebruikt kan hij ook gebruik maken van bepaalde gestures. De gestures die Eric bijvoorbeeld gebruikt zijn: het opzij swipen van een menu en door de verschillende open tabbladen swipen.</p>
        </li>
        <li>
            <b>Zoom in en uit op een foto.</b>
            <p>Het in en uit zoomen van een foto is voor erg lastig voor Eric, dit kan uit bijna alleen maar door dubbel te tikken op het scherm. Dit komt doordat hij zijn vingers niet in de juiste positie kan brengen. Als dit hem wel lukt kan hij niet precies zien waar hij nou op inzoomt doordat zijn handen ervoor zitten.</p>
        </li>
        <li>
            <b>Van hoeveel van het scherm kunt maakt u gebruik.</b>
            <p>Op een desktop computer kan Eric het gehele scherm gebruiken, met de muis. Hiervoor gebruikt hij een normale muis of de Apple trackpad voor. De Apple trackpad kan namelijk als een van de weinige onderscheid maken tussen de twee knokkels die hij gebruikt om bijvoorbeeld te kunnen scrollen. Waardoor hij veel verschillende gestures uit kan voeren. Op telefoon is de bovenkant van het scherm wat lastiger om te bereiken, doordat hij de telefoon bijna altijd ergens moet neerleggen om er gebruik van te kunnen maken.</p>
        </li>
    </ol>
    <h4>Bevindingen:</h4>
    <ul>
        <li>
            Groter scherm is handiger voor Eric
        </li>
        <li>
            Grotere knoppen, zodat hij minder snel mis klikt
        </li>
        <li>
            Keuze emojis is te groot
        </li>
        <li>
            Het nemen van foto's is lastig
        </li>
        <li>
            Het in en uit zoomen van foto's is lastig
        </li>
        <li>
            Kan zelf minder goed bepaalde body language uitdrukken, daarom in de emoji's verwerken
        </li>
        <li>
            Manier vinden waarbij muis niet nodig is
        </li>
    </ul>
</details>
<details>
    <summary><h3>Test 2</h3></summary>
    <h4>Idee 2</h4>
    <p>Samen met Sasja heb ik een nieuw idee bedacht om verschillende emoji's te laten veranderen van uitdrukingen en bodylanguage. De gebruiker kan zelf aangeven wat hij wilt laten zien. Ik ga ervoor zorgen dat dit voor Eric te gebruiken is op de comupter. Dat hij er met toetsenbord en of muis doorheen kan gaan en de keuzes kan maken. Standaard wil ik dat de gebruiker ogen en een mond kan toevoegen. Daarnaast kan de gebruiker kiezen of hij wenkbrauwen en of bodylanguage wil toevoegen. Doormiddel van tab, pijltjestoetsen, spacebar en enter kan Eric navigeren door de website. Daarnaast kan hij de muis gebruiken.</p>
    <h4>Gemaakte opzetje:</h4>
    <p>Voor dit idee heb ik een opzetje gemaakt waar het mogelijk is om in een chatroom een popup te openen waar je emoji's kan toevoegen. Door deze popup is het ook mogelijk te tabben, maar je kan ook met de muis een emoji naar keuze maken.</p>
    <h4>Wat wil ik testen:</h4>
    <ol>
        <li>Het toevoegen van een emoji met de muis aan het chatgesprek</li>
        <li>Het toevoegen van een emoji doormiddel van het toetsenbord aan het chatgesprek</li>
    </ol>
  <img width="1437" alt="chatroom_zonder_berichten" src="https://github.com/Inevdhoven/human-centered-design-2223/assets/43877754/f43bec01-9b51-4cd2-8727-9bd53ee5dce0">
<img width="1440" alt="chatroom_met_bericht" src="https://github.com/Inevdhoven/human-centered-design-2223/assets/43877754/da94eedd-a229-4074-8912-3a43e119bc72">
<img width="1438" alt="emoij_popup" src="https://github.com/Inevdhoven/human-centered-design-2223/assets/43877754/0299b214-7812-44e7-b33d-06bc71a0e22f">
    <h4>Wat wil ik te weten komen:</h4>
    <ul>
        <li>
            <b>Ik wil te weten komen of de gebruiker het fijner vind om met muis of toetsenbord te werken.</b>
            <p>Eric kan beide muis en toetsenbord prima gebruiken, maar ik zag al wel snel dat hij sneller de muis gebruikt. Waneer hij wel het toetsenbord gebruikt, maakt hij gebruik van de pijltjes toesten en minder van tab. Hierdoor kwam ik erachter dat hij dus minder gebruik maakt van het toetsenbord hoe die gebruikt wordt voor bijvoorbeeld screenraeders. Hij gebruikt het meer zoals het met gamen wordt gebruikt. Daarnaast is Eric rechtshandig, waardoor hij makkelijker bij bijvoorbeeld de pijltjes toetsen.</p>
        </li>
        <li>
            <b>Ik wil te weten komen of de knoppen groot genoeg zijn.</b>
            <p>De knoppen zijn goed te gebruiken. Eric kon er makkelijk op klikken en met het gebruik van het toetsenbord maakt het niet uit hoe groot de knoppen zijn.</p>
        </li>
        <li>
            <b>Is het op deze manier goed te besturen of zijn er nog punten waar Eric moeite mee heeft?</b>
            <p>Het is goed te gebruiken, doordat ik nog niet alles functioneel is waren sommige onderdelen lasiger dan andere onderdelen. Hij vond het leuk dat je je eigen emoji kon samen stellen en ook kan kiezen of je wel of niet wenkbrauwen of bodylanguage wilt toevoegen. Het tabben vond Eric eerst wel lastig, maar daarna toen hij door had hoe het precies werkte ging het makkelijker. Hij vond het lastig doordat hij normaal met pijltjes toetsen werkt. Hierdoor zou het voor hem makkelijker zijn er geheel met pijltjes toetsen doorheen zou kunnen gaan.</p>
        </li>
    </ul>
    <h4>Testplan</h4>
    <ol>
        <li>
            <b>Vul uw naam in en stuur een chatbericht</b>
            <p>Eric ging meteen zijn naam invullen en een bericht typen. Deze verstuurde hij en dit ging makkelijk.</p>
        </li>
        <li>
            <b>Open de popup voor het maken van de emoji's</b>
            <p>Eerst probeerde Eric om een emoji te type, zoals :). Alleen is dit niet mogelijk. Daarna ging hij wel meteen naar de button om een emoji toe te voegen.</p>
        </li>
        <li>
            <b>Maak een emoji naar keuze</b>
            <p>Eric ging meteen aan de slag met het maken van een emoji hij klikte verschillende opties aan. Dit vind het leuk dat hij zelf kan kiezen hoe hij wil dat de emoij er uit moet komen te zien.</p>
        </li>
        <li>
            <b>Stuur de emoji naar de chatroom</b>
            <p>Door op de button verstuur emoji te klikken kon hij deze zij gemaakte emoji versturen. Hij begreep meteen hoe hij dit kan doen, alleen werkt deze functie nog niet. Ook snapte hij hoe hij dit met muis en toetsenbord kon doen.</p>
        </li>
    </ol>
    <h4>Bevindingen:</h4>
    <ul>
        <li>Het gebruik van TAB was eerst niet heel duidelijk.</li>
        <li>Gebruikt toch meer de muis dan toetsenbord, maar vond het toetsenbord wel handig toen hij het snapte.</li>
        <li>Inplaats van dat je eerst de checkbox moet aan klikken om de wenkbrauwen en bodylanguage te kunnen gebruiken. Meteen de opties kunnen aanklikken en als ze niet zijn aangeklikt niet laten zien. Of als het is aangeklikt de checkbox aanvinken.</li>
        <li>Fijn dat wenkbrauwen en bodylanguage optioneel zijn.</li>
        <li>Misschien plaatsen van een default emoji, zodat bij de ogen en mond misschien al iets is geselecteerd.</li>
    </ul>
</details>

<details>
    <summary><h3>Eindresultaat</h3></summary>
    <p>Bij de laaste test heb ik verschillende bevindingen opgedaan. Zo ben ik er achter gekomen, dat Eric vooral gebruik maakt van de pijltjes toetsen inplaats van tab. Dit omdat hij eerst niet door had dat hij tab kon gebruiken om van element naar element te gaan en door gamen gewend is de pijltjes toetsen te gebruiken. Ik wil in mijn eindresultaat of voor zorgen dat wanneer je voor het eerst op de site komt er een popup komt met de verschillende manieren hoe je de site kunt gebruiken of tab veranderen naar de pijltjes toetsen. Het veranderen van de pijltjes toesten is wel lastig, omdat je met tab van formulier element naar een ander element gaat en met de pijltjes toetsen van radio button naar naar radio button gaat. Dus dan moet ik nog even kijken hoe ik dat het beste kan oplossen. Daarnaast is het gebruiken van tab het meest gebruikt wanneer je met het toetsenbord van element naar element gaat.</p>
    <p>Daarnaast gaf Eric aan dat hij het fijn zou vinden als je niet eerst zou moeten aangeven of je wenkbrauwen of bodylanguage wil toevoegen, doormiddel van het klikken op de checkbox. Maar meteen op de wenkbrauwen of bodylanguage icoontjes kan klikken en wanneer deze niet zijn geselecteerd dan worden ze ook niet toegevoegd.</p>
    <h4>Wat heb ik nog kunnen aanpassen:</h4>
    <p>In de tijd die ik had heb ik er nog voor kunnen zorgen dat wanneer je op een van de wenkbrauwen of bodylangauge klikt de checkbox er boven word aangevinkt zodat deze kan worden toegevoegd.</p>
    <h4>Wat had ik nog willen aanpassen/toevoegen:</h4>
    <p>Ik heb helaas niet genoeg tijd gehad voor deze opdracht om alles geheel werkend te krijgen. Dit komt ook voor een deel doordat ik na de eerste test voor iets heel anders ben gegaan en dus voor een deel opnieuw ben begonnen. Om zo tot een beter passende uitwerking te komen.</p>
    <p>De onderdelen die ik graag nog had willen toevoegen zijn:</p>
    <ul>
        <li>Wanneer je de verschillende onderdelen aanklikt deze ook echt op het hoofd van de emoji komen te staan.</li>
        <li>Wanneer je op verstuur emoji klikt dat de emoji dan ook echt wordt verstuurd.</li>
        <li>Uitleg toevoegen over hoe je precies de app kunt gebruiken met het toetsenbord.</li>
    </ul>
  <h4>Het eindresultaat</h4>
  ![eindresultaat](https://github.com/Inevdhoven/human-centered-design-2223/assets/43877754/2b5d1320-7c95-448e-a5b3-b098c5b8321b)

</details>

## Exclusive Design Principles

### Study situation

#### Wat is het?

Het exclusieve ontwerpprincipe "study situation" houdt in dat ontwerpers zich richten op één specifieke context of situatie en hier veel kennis over opdoen. Door dit te doen komen ontwerpers erachter wat de behoeften en uitdagingen zijn waarmee gebruikers in die specifieke situatie te maken hebben. Hierdoor kunnen ontwerpers oplossingen ontwerpen die zijn afgestemd op specifieke eisen. Dit leidt tot meer inclusieve en toegankelijke ontwerpen die beter voldoen aan de behoeften van alle gebruikers.

#### Hoe heb ik het toegepast?

In de eerste test gaf Eric aan dat hij naast zijn telefoon ook gebruik maakt van zijn laptop om te chatten. Zijn laptop gebruikt hij dan veel thuis. Op de latop kan hij makkelijk gebruik van de muis en toetsenbord. Daarom heb ik ervoor gekozen om een oplossing te maken die vooral is gefocused op de latop. In mijn oplossing kan Eric kiezen of hij gebruik wil maken van een muis of van een laptop.

### Ignore conventions

#### Wat is het?

Het exclusieve ontwerpprincipe "ignore conventions" gaat over dat ontwerpers niet bang moeten zijn om de huidige conventies te negeren. Door de huidige conventies te negeren, kunnen ontwerpers nieuwe en innovatieve oplossingen bedenken die beter aansluiten bij de behoeften van gebruikers. Wat er uiteindelijk ook voor gaat zorgen dat het ontwerp inclusiever en toegankelijker wordt.

#### Hoe heb ik het toegepast?

Ik heb gebruikt gemaakt van deze principle door na te gaan denken wat specifiek voor Eric fijn is. Zo gaf hij in het eerste gesprek aan dat hij thuis vaak chat via de laptop en dat hij daarbij wel gebruik maakt van de muis, maar ook soms zonder muis de laptop gebruikt. Daarom heb ik mijn idee zo gemaakt dat je hem en met muis en met toetsenbord kan gebruiken. Daarnaast heb ik ook gekeken naar de grootte van de knoppen, zodat hij makkelijker kan klikken met de muis.

### Prioritise identity

#### Wat is het?

Het exclusieve ontwerpprincipe "prioritise identity" vertelt ons dat we gebruikers moeten helpen focussen op de core functionaliteiten, features en content, door dat prioriteit te geven in de layout en content. Er is ook een andere manier om naar dit principe te kijken, zoals het kijken naar identiteit, bijvoorbeeld door naar de identiteit te kijken van de gebruiker. Wat gebeurd er als je je specifiek richt op een bepaalde identiteit?

#### Hoe heb ik het toegepast?

Gedrurende de tests heb ik goed gekeken hoe Eric bepaalde dingen doet en hoe hij apparaten gebruikt. Hierdoor kwam ik er bijvoorbeeld achter dat veel buttons vaak te klein zijn voor hem, hierdoor heeft hij sneller de kans om mis te klikken. Daarom heb ik ervoor gekozen om grotere button te gebruiken en deze ook met toesten toegankelijk te maken, zodat het mis klikken minder snel gebeurd. Verder ben ik er ook achter gekomen dat Eric meer zijn recher hand gebruikt, omdat hij rechtshandig is. Hierdoor is het slim om vooral gebruik te gaan maken van de knoppen aan de rechterkant van het toetsenbord, zodat hij er makkelijker bij kan. Daarnaast is Eric het sowieso gewend om de pijltjes toetsen te gebruiken doordat hij veel gamede.

### Add nonsense

#### Wat is het?

Het exclusieve ontwerpprincipe "add nonsense" betekent het toevoegen van onzin. Voordat je dit gaat toevoegen moet je wel eerst onderzoek doen naar de verschillende manieren van het toevoegen van de nonsens. Dit kun je doen door bijvoorbeeld het design team verschillende ideeën te laten bedenken, somige ideeën kunnen voor sommige raar zijn maar voor anderen kunnen deze veel betekenen.

#### Hoe heb ik het toegepast?

Aan de oplossing die ik heb gemaakt heb ik nonsens toegevoegd door de gebruiker zelf een emoji te laten samenstellen. Hierdoor kan de gebruiker zelf kiezen hoe hij zijn emotie wilt uitdrukken. Daarnaast kan de gebruiker ook kiezen of hij wenkbrauwen en bodylanguage wilt toevoegen. Dit is iets wat Eric graag wilde, omdat hij zelf niet goed bepaalde bodylanguage kan uitdrukken.

## Reflectie

Gedurende dit vak heb ik veel geleerd op het gebied van testen en opletten hoe een persoon bepaalde dingen doet. Daarnaast heb ik ook geleerd dat het ook nog kan verschillen per apparaat hoeveel een persoon met een beperking kan en dat veel websites en apps eigenlijk helemaal niet gemaakt zijn voor mensen met een beperking. Onder de tests kwam ook wel echt naar voren dat testen eigenlijk heel belangrijk is en dat het ook handig is om dit met personen te doen die een beperking hebben. Je weet namelijk niet wat zij wel en niet kunnen en daar heb je dan vooroordelen over die voor een groot deel niet kloppen. Ik wil daarom dan ook meenemen dat het erg belangrijk is om te testen en dit eventueel ook te doen met mensen met een beperking.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Bronnen

https://blog.prototypr.io/make-a-camera-web-app-tutorial-part-1-ec284af8dddf
https://getstream.io/blog/create-effective-user-scenarios/
