---
sidebar_position: 3
sidebar_label: "Reti Grafi Alberi"
---

# Reti Grafi Alberi
## Introduzione

In una rete un host è connesso direttamente al cosiddetto router predefinito (default router) presente nel suo segmento di rete: questo router è anche chiamato router di primo hop e a esso trasferisce tutti i pacchetti che deve spedire.

Noi  chiameremo  router  origine  (o  di  primo  hop)  il  router  di  default  dell’host  mittente  e  router  destina-zione  il  router  predefinito  a  cui  è  connesso  l’host  di  destinazione. Il problema da risolvere, che è quello di instradare  un  pacchetto  tra  host  di  origine  e  host  di  destinazione,  si  riconduce  chiaramente  al  problema  d’instradare il pacchetto tra questi due router.

:::tip Nota Bene
Effettuare l’instradamento di un pacchetto in una rete  equivale  a  individuare  un  “percorso”  tra  sor-gente e destinazione: inoltre il cammino ricercato deve  essere  il  più  corto  possibile,  cioè  siamo  alla  ricerca di un cammino minimo
:::

Concettualmente  possiamo  indentificare  una  rete  di  calcolatori  con  una  struttura  dinamica  informatica  (o  matematica) particolare, il grafoe, quindi, effettuare la ricerca del cammino minimo tra due router equivale a effettuare la ricerca di un cammino minimo in un grafo:
* ricerca del cammino a minima distanza, cioè minimo numeri di archi (hop), se il grafo è non pesato;
* ricerca del cammino a minima lunghezza, nel caso di grafo pesato

In questa lezione analizzaremo le analogie tra le reti e la teoria matematica dei grafi, riprendendo le definizioni e i concetti generali per poi applicarli ai protocolli di routing.

:::tip Nota Bene
Come  vedremo  in  seguito,  il  peso  di  un  grafo  rappresenta  “la  distanza”  presente tra due nodi e la lunghezza di un percorso si ottiene dalla somma di tali valori: se non viene esplicitamente indicato, si assume che ogni di-stanza tra due router abbia valore unitario e quindi la distanza tra origine e destinatario è semplicemente il numero di archi intermedi.
:::

## Rappresentazione dei grafi
Tra le possibili rappresentazioni dei grafi ricordiamo la matrice delle adiacenze: essendo la matrice una struttura con dimensionamento statico, questa rappresentazione si utilizza nel caso in cui il grafo si riferisca a situazioni dove il numero dei vertici rimane pressoché invariato.

Nella matrice  delle  adiacenze  viene  riportato,  sia  in  ascissa  sia  in  ordinata,  l’elenco  dei  vertici:  nelle  celle  di  incrocio tra due nodi si indica con 1 la presenza di connessione e con 0 l’assenza. Osserviamo che, se il grafo è non orientato, la matrice presenta una simmetria diagonale.

![Tabella delle Adiacenze](/img/adiacenze.png)

#### MATRICE DELLE ADIACENZE
> Un grafo può essere rappresentato dalla sua matrice di adiacenza A, di dimensioni |V|x|V|, il cui generico elemento aij è definito nel modo seguente
* aij = 1 se (i,j)>EE
* aij = 0 altrimenti

Vediamo un secondo esempio:

![esempio](/img/esempio_adiacenze.png)

Vediamo un terzo esempio:

![esempio](/img/terzo_esempio.png)

L’utilizzo delle matrici si presta alla rappresentazione dei grafi pesati: basta sostituire nelle celle della matrice delle  adiacenze  al  valore  1  il  valore  del  peso  tra  il  vertice  rappresentato  in  ordinata  e  il  vertice  adiacente  in  ascissa, indicando con 0 o ∞ l’assenza di connessione.

![esempio](/img/due_tabelle.png)

## Grafi e reti
Vediamo ora come utilizzare i grafi per rappresentare le reti. Supponiamo di dover trasmettere un messaggio dall’host X verso l’host Y che appartengono alla rete rappresentata nella figura:

![esempio](/img/grafo.png)

Come primo passaggio assegniamo un identificatore a ogni router e quindi successivamente li indichiamo come nodi e li colleghiamo tra loro come nella seguente figura.

![esempio](/img/grafi.png)

A questo punto aggiungiamo i pesi agli archi e costruiamo la matrice delle adiacenze, dove il peso tra due router è il tempo (oppure il ritardo) per trasmettere un pacchetto tra di essi.Vediamo un secondo esempio. Alla rete rappresentata nella figura assegniamo una etichetta a ogni router:

![esempio](/img/due_reti.png)

e quindi la tabella delle adiacenze.

![esempio](/img/tabella_due_router.png)

## Ricerca del percorso minimo 
Sono molteplici gli algoritmi che effettuano la ricerca del percorso tra due nodi di un grafo così come gli algo-ritmi che ricercano i percorsi ottimi, cioè quelli con lunghezza minima (Shortest Path SP).

:::tip SHORTEST PATH
Uno shortest path (cammino minimo) dal nodo u al nodo v di Vè un cammino p = (u,v1,v2,...,v) tale che w(p) è minimo.
:::

Nel seguente esempio individuiamo su un grafo pesato orientato due cammini tra il nodo A e il nodo D. 

![esempio](/img/shortest_path.png)

In questo caso il cammino p2 è il cammino minimo.

Per ogni destinazione è possibile costruire un percorso minimo e l’insieme dei percorsi minimi definisce quello che prende nome di albero d’inoltro (forwarding tree) o albero di consegna (delivery tree) dove il router sorgente assume il ruolo della radice e gli ultimi router di ogni percorso, quelli che hanno sul loro segmento gli host destinazione, prendono il nome di router foglia (leaf router).L’algoritmo diDijkstra permette di trovare i cammini minimi (Shortest Pa-ths ) in un grafo ciclico con pesi non negativi sugli archi: in particolare l’algoritmo può essere utilizzato parzialmente per trovare il cammino minimo che unisce due nodi del grafo, totalmente per trovare quelli che uniscono un nodo d’origine a tutti gli altri nodi e, ripetendolo più volte, per trovare tutti i cammini minimi da ogni nodo a ogni altro nodo.

L’algoritmo di Bellman-Ford calcola i cammini minimi di un’unica sorgente su un grafo diretto pesato (dove alcuni pesi degli archi possono anche essere negativi).

## Grafi, alberi e spanning tree ottimo

Un grafo può essere visto come un caso particolare di albero, e cioè:

:::tip ALBERO
Un albero (tree) è un grafo non orientato, connesso e aciclico.
:::

In un albero non possono esistere quindi percorsi chiusi (cicli) e per ogni coppia di nodi esiste uno e un solo cammino che li congiunge.È possibile trasformare un grafo in un albero eliminando gli archi che determinano i cicli: in questo caso si ottiene un sottografo chiamato albero di ricoprimento (spanning tree).

:::tip ALBERO DI RICOPRIMENTO
Dato un grafo connesso non orientato G =(V,E), uno spanning tree
(albero di ricoprimento) di G è un sottografo G’ = (V’,T) 
tale che:
* G’ è un albero
* V’ = V

![esempio](/img/spanning_tree.png)
:::

:::danger Nota Bene
A partire da un grafo è possibile individuare molti alberi ricoprenti e all’aumentare del numero di cicli aumentano anche le differenti combinazioni:
![esempio](/img/combinazioni.png)
:::

Tra tutti gli alberi ricoprenti individuiamo il Minimum Spanning Tree (MST) come l’albero avente somma degli archi minima.

:::tip MINIMUM SPANNING TREE
Dato un grafo pesato connesso non orientato G = (V,E), un minimum spanning tree (albero di ricoprimento minimo) di G è uno spanning tree G’ = (V,T) di peso minimo, cioè tale che risulti minimo w(T) dove:
![esempio](/img/mst.png)
:::

Come è stato riportato nella figura precedente per lo stesso grafo possono esistere diversi MST, cioè Spanning Tree avanti tutti lo stesso valore (minimo) come somma degli archi.

:::tip SPANNING TREE OTTIMO
Definiamo Spanning Tree Ottimo lo Spanning Tree formato dai cammini a costo minimo (shortest path) che uniscono il nodo radice agli altri nodidel grafo (prende anche il nome di sink tree ).
:::

L’individuazione dei sink tree è l’obiettivo di un algoritmo di instradamento in un router e noi analizzeremo a tale scopo, nelle prossime lezioni, l’algo-ritmo di Dijkstra e di Bellman-Ford.