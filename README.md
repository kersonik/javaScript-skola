# Grafické menu v p5.js

Školní projekt v JavaScriptu využívající knihovnu **p5.js**. Aplikace vykresluje interaktivní plátno s poloprůhledným navigačním panelem (HUD menu) a přepíná mezi jednotlivými grafickými režimy pomocí klávesových zkratek.

---

## 1. Struktura projektu

```text
├── index.html       # HTML struktura a import p5.js
├── sketch.js        # Hlavní aplikační logika a grafika
└── README.md        # Dokumentace projektu
```

---

## 2. Popis souboru `sketch.js`

### Konstanty a stav aplikace
* `menuItems`: Pole řetězců definující názvy dostupných efektů.
* Procházení pole pomocí cyklu `for` zajišťuje automatické číslování položek bez nutnosti manuálního přepisování.

### Klíčové funkce knihovny p5.js
* `setup()`: Spustí se jednou při inicializaci. Vytváří plátno o rozměrech 800×800 px (`createCanvas(800, 800)`).
* `drawMenu()`: Samostatná modulární funkce zajišťující:
  * Vykreslení obdélníkového boxu menu se zaoblenými rohy a průhledností (RGBA: `fill(150, 100, 200, 100)`).
  * Vykreslení nadpisu a dělící linky.
  * Iterativní výpis jednotlivých položek z pole `menuItems` s dynamickým výpočtem vertikální souřadnice Y (`80 + i * 20`).
* `draw()`: Běží ve smyčce (typicky 60 FPS). Zajišťuje:
  * Přemazání plátna barvou pozadí (`background(220)`).
  * Řízení stavů pomocí konstrukce `switch (key)`.
  * Překreslení menu do popředí (HUD vrstva).

---

## 3. Ovládání

| Klávesa | Akce | Volaná funkce |
| :---: | :--- | :--- |
| `1` | Vykreslení náhodných linek | `linky()` |
| `2` | Režim "Čáry máry" | `caryMary()` |
| `3` | Vykreslení šachovnice | `sachovnice()` |

---

## 4. Spuštění

1. Otevři soubor `index.html` v libovolném moderním webovém prohlížeči (např. přes rozšíření *Live Server* ve VS Code).
2. Pro přepínání grafických efektů stiskni na klávesnici čísla `1`, `2` nebo `3`.
