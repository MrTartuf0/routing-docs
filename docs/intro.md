---
sidebar_position: 0
sidebar_label: "Routing statico e dinamico"
---

# Routing statico e routing dinamico

![Differenze](/img/differences.jpg)


Si è detto che il **routing** è il processo usato dal router per individuare l’interfaccia di uscita su cui rilanciare i pacchetti verso la destinazione che viene individuata in base al valore dell’IP address confrontandolo con i dati presenti nella tabella di routing.

Lo scopo ultimo di un protocollo di routing consiste nel creare una tabella di instradamentoin ciascun nodo della rete in modo che esso possa prendere la decisione locale sulla base della conoscenza dello stato dell’intera rete: questa è la “difficoltà principale” del routing.

:::tip Attenzione
Nella tabella sono presenti i possibili percorsi verso le reti remote: questi dati devono essere inseriti e memorizzati nel dispositivo e mantenuti costantemente aggiornati
:::

Esistono due modalità per creare e gestire le tabelle di routing:

- **routing statico** (static routing): la configurazione viene effettuata dall’amministratore della rete;
- **routing dinamico** (dynamic routing): le informazioni vengono ricevute dagli altri router.

Nel routing statico le operazioni possono essere divise in tre parti:

1. l’amministratore di rete individua la route manualmente;
2. “installa” questa route nelle routing table;
3. i pacchetti sono inoltrati usando la route statica.

Questa non è una tecnica scalabile e in caso di mo-difiche nella topologia di rete è necessario che l’ammi-nistratore apporti sempre manualmente le opportune variazioni alla configurazione delle route statiche: di fatto questo è un problema nella gestione di reti di grandi dimensioni

Titolo
: ciao

```txt title="Sistema Scalabile"
Un sistema è scalabile se può essere adattato a diversi contesti con forti diffe
renze di complessità senza che questo richieda la riprogettazione dello stesso sistema
```

Gli algoritmi che implementano il routing statico sono di tipo non adattivo in quanto le decisioni di routing sono prese in anticipo, all’avvio della rete, e comunicate ai router che poi vi si attengono sempre.

Nel routing dinamico le decisioni di routing sono riformulate molto spesso in quanto le tabelle sono in continuo aggiornamento in tempo reale in base al traffico, alla topologia della rete ecc.