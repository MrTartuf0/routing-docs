---
sidebar_position: 1
sidebar_label: "Algoritmi di Instradamento"
---

# Politiche di instradamento (o algoritmi di instradamento)

Il tipo di inoltro (forwarding) utilizzato dalle reti IP condiziona la scelta delle politiche di routing : ricordiamo che il forwar-ding IP è basato sull’indirizzo di destinazione (destination-ba-sed) con inoltro al nodo successivo (next hop routing) e quindi, come conseguenza, i pacchetti diretti a una stessa destinazione D che giungono in un router R seguono lo stesso percorso da Rverso D indipendentemente dal link di ingresso in R

```txt title:"Politica di routing"
La politica di routing (o algoritmo di routing) è quella che defi-nisce i criteri di scelta del 
cammino nella rete per i pacchetti che viaggiano tra un nodo di ingresso e uno di uscita: 
è dunque quella che costruisce le tabelle di routing che viene usata dai nodi per effettuare 
il forwarding.
```

:::tip Attenzione
Il vincolo che ogni politica di routing deve soddisfare è che l’insieme dei cammini da ogni sorgente verso una desti-nazione D deve essere un albero(quindi senza percorsi ciclici) per ogni possibile destinazione D, come nella seguente figura:

![albero](/img/albero.png)

In  questo  caso  da  ogni  nodo  sorgente  S2, S3, S4, S5, S6  deve  essere  presente  un  cammino  che  raggiunge  il  nodo  D e ogni pacchetto segue sempre lo stesso percorso fino a che non vengono cambiate le tabelle di instradamento presenti nei router intermedi
:::

Il  percorso  sorgente-destinazione  deve  essere  de-terminato  considerando  quindi  l’intero  cammino  da percorrere e la politica di routing utilizzata sin dall’introduzione  delle  reti  TCP/IP  è  basata  sul  cal-colo dei cammini minimi.

:::danger Importante
Come  vedremo  nelle  prossime  lezioni  tale  calcolo  è  effettuato sul grafo che rappresenta la rete nel quale a  ogni  arco  è  associato  un  peso  opportunamente  scelto  (metrica)  e  su  di  esso  vengono  applicati  algo-ritmi classici della teoria dei grafi che permettono di individuare i cammini minimi generando l’albero dei cammini minimi.
:::

Le politiche che permettono di realizzare l’instradamento all’interno delle reti sono tra loro differenti in base a quando ricevono le informazioni, come ricevono le informazioni, a quanto spesso rivedono le loro decisioni e alla metrica di valutazione che adottano. In base a queste caratteristiche vengono classificati in politiche:

- **isolate**: calcolano il routing con sole informazioni locali, indipendentemente dallo stato degli altri nodi e dallo stato della intera rete
- **centralizzate**: è quello più semplice, ma non scalabile in quanto un centro di controllo conosce lo stato globale e calcola il cammino ottimo per ogni coppia (mittente, destinatario) e dirama le tabelle (per esempio TYMNET)
- miste: si  uniscono  i  vantaggi  delle  precedenti,  combinando  politiche  isolate  e  centralizzate  (per  esempio  TRANSPAC)
- **distribuite**: è quello più complesso, ma è scalabile e robusto; in esso i nodi cooperano e comunicano frequen-temente il proprio stato e quello della rete (come per esempio in Internet)