---
sidebar_position: 2
sidebar_label: "Routing Distribuito"
---

# Routing Distribuito
## Definizioni

Le reti WAN (o GAN come Internet) sono una aggregazione di LAN (chiamati anche Sistemi Autonomi, Auto-nomous System AS) aventi ciascuna una propria politica di gestione e di amministrazione, che però devono interagire tra loro.Per ogni AS possiamo definire un sistema interno con un ben determinato confine e un interfacciamento verso il sistema esterno.

:::tip Nota Bene
Un Autonomous  System  può  essere  an-ch’esso suddiviso in un insieme di Routing Area(RA) interconnesse da un backbone (dorsale) e in questo caso ogni network IP è tutta conte-nuta in una RA.
:::

I  protocolli  utilizzati  dai  router  presenti  nel  sistema  interno  sono  chiamati  Interior  Gateway  Protocol  (IGP) mentre i protocolli utilizzati per l’interconnessione sono gli Exterior Gateway Protocol (EGP).

![sistemi autonomi](/img/sistema_autonomo.png)

:::tip Nota Bene
Internet non è altro che un insieme di AS interconnessi
:::

## Protocolli per il routing distribuito

Nel routing distribuito ogni router calcola le sue tabelle dialogando con gli altri router: ogni router informa gli altri riguardo le “rotte” che conosce tramite dei protocolli ausiliari di livello rete che vedremo in seguito

Negli algoritmi che implementano queste politiche possiamo individuare due approcci principali:

1. algoritmi statici o con conoscenza completa (di link state ): ogni router contiene la topologia della rete e le informa-zioni  sui  “suoi  vicini”  vengono  mandate  a  tutti  gli  altri  router  con  un  messaggio  di  broadcast  (Link  State  Packet) solo quando ci sono stati dei cambiamenti della topolo-gia;  dato  che  ciascun  router  possiede  informazioni  sulla  topologia di rete completa è in grado di calcolare in modo indipendente il miglior hop successivo per ogni possibile destinazione della rete locale.

Gli algoritmi sono di tre tipi: 
* shortest path routing; 
* flooding; 
* flow-based routing

:::tip Nota Bene
Tra  questi  analizzeremo  in  dettaglio,  nella  lezione  3,  l’algoritmo Shortest Path First (SPF) implementato con l’algoritmo di Dijkstra
:::

2. Algoritmi dinamici o con conoscenza parziale (di di-stance  vector  ):  in  questi  protocolli  ciascun  router non dispone di informazioni sulla topo-logia  di  rete  completa  ma  dialoga  con  gli  altri  router e riceve informazioni che gli permettono di  popolare  la  tabella  raccogliendo  i  dati  sugli  aggiornamenti delle configurazioni delle diverse sottoreti: il processo di aggiornamento continua finché non si giunge ad avere delle informazioni stabili in ciascun router.

:::tip PER SAPERNE DI PIÙ
**PROTOCOLLI IGP E EGP**

I protocolli utilizzati per sistemi interni, cioè gli IGP, sono:
* Distance-vector routing protocol
    - Routing Information Protocol (RIP)
    - Interior Gateway Routing Protocol (IGRP)
    - Enhanced Interior Gateway Routing Protocol (EIGRP)
* Link-state routing protocol
    - Open Shortest Path First (OSPF)
    - Intermediate System To Intermediate System (IS-IS)

Per  l’interconnessione  tra  sistemi  in  Internet  si  utilizza  un  unico  protocollo,  il  Border  Gateway  Protocol  Version  4  (BGP-4) definito in RFC 1771che è quindi l’unico protocolloEGP

