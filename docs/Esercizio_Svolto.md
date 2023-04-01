---
sidebar_position: 5
sidebar_label: "Esercizio svolto"
---

# Esercizio svolto

## Esercizio Cartaceo
Questo è lo svolgimento dell'esercizio svolto sul quaderno, con router iniziale n.4


![esempio](/img/hpscan001.png)
> Tabella di Dijkstra



![esempio](/img/hpscan002.png)
> Minimum Spanning Tree con i persorsi minimi evidenziati in verde

> L'esercizio inizialmente era evidenziato con i colori, ma lo scanner della stampante lo ha scannerizzato in bianco e nero

## Esercizio Digitalizzato

![esempio](/img/cisco_blank.png)
> Grafo della rete

### Tabella di Dijkstra
|   PASSO|   N'             |   1       |   2       |   3       |   5       |   6       |   7       |   8       |   9       |   10      |   11      |   12      |
|:-:|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|   0   |   4               |   60 [4]  |   ∞       |   ∞       |   80 [4]  |   `40 [4]`|   ∞       |   ∞       |   ∞       |   ∞       |   ∞       |   ∞       |
|   1   |   46              |   60 [4]  |   ∞       |   90 [6]  |   70 [6]  |           |   ∞       |   `60[6]` |   90 [6]  |   ∞       |   ∞       |   ∞       |
|   2   |   468             |   `60[4]` |   ∞       |   90 [6]  |   70 [6]  |           |   80 [8]  |           |   80 [8]  |   ∞       |   130 [8] |   ∞       |
|   3   |   4681            |           |   90 [1]  |   90 [6]  |   `70[6]` |           |   80 [8]  |           |   80 [8]  |   ∞       |   130 [8] |   90 [8]  |
|   4   |   46815           |           |   90 [1]  |   90 [6]  |           |           |   `80[8]` |           |   80 [8]  |   160[5]  |   130 [8] |   90 [8]  |
|   5   |   468157          |           |   90 [1]  |   90 [6]  |           |           |           |           |   `80[8]` |   160[7]  |   130 [8] |   90 [8]  |
|   6   |   4681579         |           |   `90[1]` |   90 [6]  |           |           |           |           |           |   160[7]  |   120 [9] |   90 [8]  |
|   7   |   46815792        |           |           |   `90[6]` |           |           |           |           |           |   160[7]  |   120 [9] |   90 [8]  |
|   8   |   468157923       |           |           |           |           |           |           |           |           |   160[7]  |   120 [9] |   `90[8]` |
|   8   |   46815792312     |           |           |           |           |           |           |           |           |   160[7]  |  `120[9]` |           |
|   9   |   4681579231211   |           |           |           |           |           |           |           |           |   `160[7]`|           |           |
|   10  |   468157923121110 |           |           |           |           |           |           |           |           |           |           |           |

:::danger Attenzione
su questo grafo è possibile ricavare ben due Minumum Spanning Tree
:::

![esempio](/img/cisco_msb.png)
> Applicando l'algoritmo di Djikstra abbiamo ottenuto il Minimum Spanning Tree con i persorsi esterni eliminati

![esempio](/img/riorganizza.png)
> Riorganiziamo la struttura della rete rendendola più ordinata

