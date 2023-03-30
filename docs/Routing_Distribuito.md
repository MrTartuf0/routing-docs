---
sidebar_position: 2
sidebar_label: "Routing Distribuito"
---

# Routing Distribuito
## Definizioni

Le reti WAN (o GAN come Internet) sono una aggregazione di LAN (chiamati anche Sistemi Autonomi, Auto-nomous System AS) aventi ciascuna una propria politica di gestione e di amministrazione, che però devono interagire tra loro.Per ogni AS possiamo definire un sistema interno con un ben determinato confine e un interfacciamento verso il sistema esterno.

:::danger Nota Bene
Un Autonomous  System  può  essere  an-ch’esso suddiviso in un insieme di Routing Area(RA) interconnesse da un backbone (dorsale) e in questo caso ogni network IP è tutta conte-nuta in una RA.
:::

I  protocolli  utilizzati  dai  router  presenti  nel  sistema  interno  sono  chiamati  Interior  Gateway  Protocol  (IGP) mentre i protocolli utilizzati per l’interconnessione sono gli Exterior Gateway Protocol (EGP).

![sistemi autonomi](/img/sistema_autonomo.png)