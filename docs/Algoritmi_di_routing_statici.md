---
sidebar_position: 4
sidebar_label: "Algoritmi di Routing Statici"
---

# Algoritmi di Routing Statici

## Introduzione

La classificazione degli algoritmi di routing nelle reti viene fatta sostanzialmente mediante due criteri:

1. per come vengono gestite le informazioni sulla topologia:

* algoritmi distribuiti: in essi ciascun nodo conosce solo i propri vicini e i link che lo collegano ai propri vicini senza avere una visione globale della topologia di rete; i nodi attivano un processo interattivo scam-biando tra nodi adiacenti le informazioni in loro possesso sulla metrica del segmento di rete del quale sono a conoscenza;
* algoritmi isolati: ogni LAN calcola in modo indipendente le tabelle di instradamento senza scambiare informazioni con le altre (come algoritmi di routing isolato ricordiamo hot potato e backward learning);
* algoritmi centralizzati: ciascun nodo ha conoscenza completa della topologia della rete e calcola i cammini migliori verso tutti gli altri nodi indipendentemente dal resto della rete.

2. per adattabilità:
* algoritmi statici: sono algoritmi utilizzati nelle reti che cambiamo molto raramente in quanto non sono in grado di accorgersi dei mutamenti della struttura della rete stessa dato che i criteri di scelta dei percorsi sono decisi in anticipo, all’avvio della rete;
* algoritmi statici: sono algoritmi utilizzati nelle reti che cambiamo molto raramente in quanto non sono in grado di accorgersi dei mutamenti della struttura della rete stessa dato che i criteri di scelta dei percorsi sono decisi in anticipo, all’avvio della rete;

Analizzeremo gli algoritmi di routing in base alla adattabilità e in questa lezione affronteremo lo studio degli algoritmi statici.

Gli algoritmi di routing statici sono di tipo non adattivo (static routing) e le decisioni di routing sono prese in an-ticipo, all’avvio della rete, e comunicate ai router che poi vi si attengono sempre; possono inoltre essere classificati per tipo in tre gruppi:

Gli algoritmi di routing statici sono di tipo non adattivo (static routing) e le decisioni di routing sono prese in an-ticipo, all’avvio della rete, e comunicate ai router che poi vi si attengono sempre; possono inoltre essere classificati per tipo in tre gruppi:

* shortest path routing
* flooding
* flow-based routing

:::tip Nota Bene
Agli  algoritmi  presenti  in  queste  categorie  è  necessario  aggiungere  il  metodo  “statico  per  eccellenza”  utilizzato  per  la  costruzione  delle  tabelle di routing, ossia il metodo manuale.
:::

## Configurazione manuale delle tabelle di routing
Prima di analizzare gli algoritmi statici che permettono di definire le tabelle di routing è opportuno sottolineare che il metodo più diffuso per configurare i router è quello di effettuare manualmente l’inserimento dei dati nelle tabelle.

:::tip Nota Bene
Questo  metodo  risulta  essere  difficoltoso  da  utilizzarsi non appena aumenta le dimensione della rete e in presenza di topologie a grafo.
:::

Spesso la configurazione manuale è anche la sola dispo-nibile e viene fatta dall’amministratore di rete dopo aver effettuato l’analisi dei cammini possibili avendo a dispo-sizione  tutte  le  informazioni  della  rete,  cioè  topologia,  caratteristiche dei link ecc.

La presenza di grafi, infatti, rende complessa la determinazione “manuale” dei cammini ottimi e quindi diffi-cilmente l’amministratore della rete riesce a definire tabelle che configurano la rete in modo ottimale.La  configurazione  manuale  viene  comunque  sempre  utilizzata  negli  end-host  nei  quali  è  sempre  prevista  la  presenza della route di default. Per definire manualmente le tabelle di routing ci si può avvalere degli alberi di instradamento.

### Albero di instradamento
La costruzione dell’albero di instradamento è molto sem-plice  e  viene  effettuata  a  partire  dallo  schema  della  rete  evidenziando il router mittente e “seguendo” il percorso che i pacchetti compiono per raggiungere tutte le desti-nazioni.

:::tip Nota Bene
Come  si  è  detto  questo  metodo  è  utilizzabile  per reti di piccole dimensioni e con topologia semplice dove è immediato individuare il per-corso  più  corto:  vedremo  che  la  ricerca  dello  shortest  path  verrà  effettuata  con  appositi  al-goritmi nel caso di reti complesse.
:::

![esempio](/img/instradamento.png)

dalla rete rappresentata nella figura si ottiene il seguente albero di instradamento

![esempio](/img/costi.png)

:::tip Nota Bene
n questo caso il risultato si ottiene molto sem-plicemente  perché  oltre  alle  piccole  dimen-sioni della rete non vi sono neppure cammini ciclici  che  porterebbero  alla  generazione  di  alternative nei percorsi.Link State Packet LSP Is  a  packet  of  information  generated  by  a  network router in a link state routing protocol that lists the router’s neighbors.
:::

dove a ogni rete si sostituisce un nodo e a ogni router un arco.Utilizzando gli alberi di instradamento è inoltre immediato determinare il numero di hop per raggiungere ogni desti-nazione e quindi completare la tabella di instradamento.

### Principio di ottimalità 
Nel caso di reti con cicli è necessario individuare il miglior percorso che collega ogni destinazione al router di partenza, che sappiamo essere il minimum spanning tree. È possibile fare una considerazione generale sull’ottimalità dei cammini, chiamato principio di ottimalità.

:::tip PRINCIPIO DI OTTIMALITÀ
Il principio di ottimalità dice che se il router j è nel cammino ottimo fra i e k, allora anche il cammino ottimo fra j e k è sulla stessa strada:
![esempio](/img/ottimibilita.png)
:::

Dimostriamolo per assurdo, ipotizzando cioè che nell’esempio rappresentato nella figura esista un cammino tra j e k (che nel disegno è tratteggiato in blu) con costo minore di quello indicato in rosso: se così fosse, ci sarebbe un altro cammino fra i e k migliore di quello ottimo (c.v.d.).

## Link State Packet 
Gli algoritmi statici prendono anche il nome di algoritmi di link state in quanto ogni nodo dopo che ha acqui-sito le informazioni dei nodi a esso adiacenti e le relative distanze per raggiungerle, le invia a tutti gli altri nodi della rete mediante dei Link State Packet (LSP)  contenenti i seguenti dati:
* stato di ogni link connesso al router
* identità di ogni vicino connesso all’altro estremo del link
* costo del link
* numero di sequenza per l’LSP
* checksum
* lifetime

Al  ricevimento  dei  LSP  ogni  nodo  si  costruisce  un  data-base di LSP e una mappa completa della topologia della rete e sulla base di questa informazione provvede succes-sivamente  a  calcolare  i  cammini  minimi  verso  tutte  le  destinazioni.

:::tip Nota Bene
Tale  approccio  è  utilizzato  nello  standard  ISO  10589  (protocollo  IS-IS)  e  nel  protocollo  OSPF  (adottato in reti TCP/IP).
:::
Ogni LSP viene analizzato dal router e:

* se non ha mai ricevuto LSP da quel router o se l’LSP è più recente di quello presente nel proprio link state da-tabase, lo memorizza e lo ritrasmette in flooding su tutte le linee eccetto quella da cui l’ha ricevuto
* se l’LSP ha lo stesso numero di sequenza di quello pos-seduto, non fa nulla
* se l’LSP è più vecchio di quello posseduto, trasmette al mittente il pacchetto più recente che è in suo possesso

:::tip Flooding
Significa allagamento. Infatti, per essere sicuri di aver bagnato una certa pianta, basta allagare tutto l’orto!
:::

La semplice rete riportata nella figura a latoè rappresentata dal seguente database:

![esempio](/img/tabella.png)

|   DA   |      VERSO      |    LINK    |   COSTO   |   NUMERO DI SEQUENZA  |
|:-:|:-:|:-:|:-:|:-:|
| A | B | 1 | 1 | 1 | 
| A | D | 3 | 1 | 1 | 
| B | A | 1 | 1 | 1 | 
| B | C | 2 | 1 | 1 | 
| B | E | 4 | 1 | 1 | 
| C | B | 2 | 1 | 1 | 
| C | E | 5 | 1 | 1 | 
| D | A | 3 | 1 | 1 | 
| D | E | 6 | 1 | 1 | 
| E | B | 4 | 1 | 1 | 
| E | C | 5 | 1 | 1 | 
| E | D | 6 | 1 | 1 | 

Con questa tabella ogni nodo può calcolare il percorso più breve verso tutti gli altri nodi.

## Algoritmi statici: generalità 
### Shortest path routing
L’algoritmo di Dijkstra (che descriveremo in seguito) permette di calcolare il miglior percorso in un grafo in modo da ottenere per ogni router il sink tree verso ogni altro possibile nodo della rete: questo algoritmo viene mandato in esecuzione all’avvio della rete da un host di gestione che mantiene le informazioni di tutta la rete e invia i risultati a ogni router dove vengono memorizzati nel LSDB.

:::tip Nota Bene
È la stessa possibile alternativa offerta dai navigatori satellitari, cioè quella di poter scegliere un itinerario cercando o di percorrere il numero minimo di chilometri oppure di impiegare il minore tempo possibile
:::

<!-- ### Flooding
La  tecnica  del  flooding consiste  nell’inviare  ogni  pacchetto  su  tutte  le  porte  di  uscita  (tranne  naturalmente  quella da cui è arrivato).

Un generico pacchetto verrà sicuramente ricevuto da tutti i nodi della rete compreso quello a cui è effettiva-mente destinato e quindi, in linea di principio, il flooding può essere usato come algoritmo di routing.

È quindi necessario evitare che lo stesso pacchetto venga inoltrato all’infinito, a tal fine si introducono due semplici meccanismi di controllo:

1. viene  stabilito  dal  mittente  un  numero  massimo  di  hop  che  il  pacchetto  può  fare  e  viene  inserito  in  un  contatore che viene decrementato a ogni hop fino a giungere a 0;
2. ogni router tiene memoria di ogni pacchetto che instrada, in modo tale che se lo riceve per la seconda volta lo ignora (ogni router per ogni pacchetto tiene una coppia di dati: source router ID, sequence number).

Il vantaggio della tecnica di floodingcome algoritmo di instradamento è l’estrema semplicità dato che l’elabora-zione eseguita in ciascun nodo è praticamente nulla: è particolarmente adatto alla trasmissione broadcastingdove l’informazione deve proprio essere inviata a tutti gli host.

Un altro campo nel quale viene utilizzato è quello militare, dove è necessario avere la massima sicurezza, mas-sima affidabilità e robustezza anche a scapito dell’efficienza.

:::tip Nota Bene 
Questo algoritmo risulta essere il più semplice ed efficace in quanto trova sempre il percorso migliore nel minor tempo possibile ma, naturalmente, a scapito della efficienza dato che tende a saturare i canali trasmissivi: per questo motivo viene utilizzato come termine di paragone per gli altri algoritmi di ricerca del cammino ottimo.
:::

### Flow-based routing

Questo algoritmo calcola il percorso migliore in base al traffico medio di ogni linea, ipotizzandolo “abbastanza” costante nel tempo. I valori di ritardo per ogni linea vengono calcolati conoscendo le caratteristiche fisiche della linea stessa e la stima del traffico medio per ogni coppia di router.

:::tip Nota Bene 
Questo  metodo  è  simile  a  quello  che  ogni  automobilista  utilizza  per  raggiungere  una  destinazione  evitando  le  strade dove sa già, per esperienza, che saranno trafficate: se però tutti utilizzassero questo metodo di fatto nessuno passerebbe sulle strade trafficate, che diventerebbero deserte, e tutti gli automobilisti finirebbero “in coda” su strade alternative.
::: -->

## L’algoritmo di Dijkstra
L’algoritmo di Dijkstra è un algoritmo che rientra tra gli shortest path routing e permette di calcolare l’albero dei cammini minimi tra un nodo di un grafo e tutti gli altri in modo da configurare le tabelle di routing: data la sua natura statica, se cambia la configurazione della rete, è necessario ricalcolare l’albero dei cammini minimi ripartendo da capo.

È un algoritmo di tipo centralizzato in quanto ciascun nodo calcola il cammino ottimo da se stesso verso tutti gli altri nodi in modo indipendente, partendo unicamente dalle informazioni complete sulla topologia della rete e sulle caratteristiche dei link.

Prima di vedere come procedere, definiamo innanzitutto l’obiettivo che è quello di trovare i cammini minimi tra un nodo 1 (sorgente) e tutti gli altri nodi partendo dall’ipotesi che tutti gli archi abbiano pesi positivi.

Il metodo di Dijkstra si assegna ai nodi delle etichette, che possono essere:
* temporanee: il costo massimo per la raggiungibilità del nodo in esame;
* permanenti: costo del cammino minimo.

Vediamo  un  semplice  esempio  applicando  l’algoritmo  al  grafo  non  orientato della figura:

![esempio](/img/d1.png)

Scegliamo  “a  piacere”  un  nodo,  in  quanto  il  risultato  che  otteniamo  è  ininfluente dal nodo di partenza, e iniziamo a scrivere le etichette prov-visoriesui due nodi a esso adiacenti.

Partiamo da A ed etichettiamo B con 1 e F con 3.

![esempio](/img/d2.png)

Scegliamo  ora  il  “percorso  meno  costoso”  che  si  è  individuato,  cioè  quello  che  parte  dal  nodo  B,  e  ripetiamo  le  stesse  operazioni  asse-gnando le etichette provvisorie ai nodi C, F ed E ottenute come somma dei percorsi dal nodo precedente (1) e dei nuovi pesi dei rispettivi archi:

![esempio](/img/d3.png)

:::tip Nota Bene 
La  scelta  secondo  la  quale  il  nodo  successivo  da  visitare  è  quello  più  vicino  a  uno  dei  nodi  già  visitati  dà  il  nome  all’al-goritmo Shortest Path First, cioè prima il percorso più breve.
:::

Procediamo in modo analogo scegliendo il percorso più corto tra  i  tre  sino  a  ora  individuati,  cioè  quello  che  ha  raggiunto  il  nodo  F  (peso  2),  e  aggiorniamo  le  etichette  dei  nodi  a  esso  adiacenti (DD = 2 + 6 = 8, DE = 2 + 2):

![esempio](/img/d4.png)

Con lo stesso criterio il prossimo nodo da analizzare è il nodo E  (peso  4):  dal  nodo  E  possiamo  raggiungere  il  nodo  D  con  peso DD = 4 + 1 = 5 che è minore del precedente valore dell’e-tichetta  provvisoria:  la  sostituiamo  con  una  nuova  etichetta  provvisoria.Il  nodo  con  peso  minore  tra  quelli  che  non  sono  ancora  stati  analizzati è il C che ha peso 4, ma non porta migliorie in quanto la  sua  distanza  da  D  ha  peso  2  che  peggiorerebbe  l’etichetta  parziale

![esempio](/img/d5.png)

Ultimo nodo è il nodo D, ma anch’esso non introduce migliorie e quindi le etichette provvisorie diventano permanenti e si ottiene il seguente albero minimo:

![esempio](/img/d6.png)

:::tip per saperne di più
### PSEUDOCODIFICA
Vediamo un esempio di codifica in linguaggio di progetto dell’algoritmo di Dijkstra, dopo aver introdotto la notazione che verrà utilizzata per comodità nello pseudocodice: 

* c(x,y): costo del collegamento dal nodo x al nodo y; è posto a ∞ se non sono adiacenti;
* D(v): costo del cammino dal nodo origine alla destinazione v per quanto riguarda l’iterazione corrente
* p(v): immediato predecessore di v lungo il cammino
* N’: sottoinsieme di nodi per cui il cammino a costo minimo dall’origine è definitivamente noto;
* N: insieme di tutti i nodi presenti nel grafo
``` txt 
1 Inizializzazione 
2 N’ = {u} 
3 per tutti i nodi v // oppure finché N’ = N 
4  se v è adiacente a u 
5  allora D(v) = c(u,v) 
6  altrimenti D(v) = ∞ 
7  ripeti 
8    determina un w non in N’ tale che D(w) sia minimo 
9    aggiungi w a N’
10  per ciascun nodo v adiacente a w e non in N’
11    aggiorna D(v) = min(D(v), D(w) + c(w,v))
```

Dove con l’istruzione:

```txt
11 D(v) = min(D(v), D(w) + c(w,v))
```

si  assegna  a  D(v)  il  nuovo  costo  verso  v  che  è  il  valore  minimo  tra il vecchio costo presente nella etichetta temporanea oppure il costo del cammino minimo noto verso w più il costo da w a v.Lo applichiamo alla seguente rete:

![esempio](/img/algo.png)

ottenendo: 

![esempio](/img/table.png)









