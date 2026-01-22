# ST Common Components

Una libreria di componenti UI/UX condivisi progettata per essere utilizzata come submodule Git in altre applicazioni del progetto ST.

## 📋 Indice

- [Panoramica](#panoramica)
- [Architettura dei Componenti](#architettura-dei-componenti)
- [Tecnologie e Librerie](#tecnologie-e-librerie)
- [Requisiti](#requisiti)
- [Setup del Submodule](#setup-del-submodule)
- [Installazione e Sviluppo](#installazione-e-sviluppo)
- [Comandi Disponibili](#comandi-disponibili)
- [Aggiornamento del Submodule](#aggiornamento-del-submodule)
- [Struttura del Progetto](#struttura-del-progetto)
- [Utilizzo nei Progetti Parent](#utilizzo-nei-progetti-parent)

## 🎯 Panoramica

Questo progetto è un **submodule Git** che contiene una collezione di componenti UI/UX riutilizzabili costruiti con React, TypeScript e TailwindCSS. È progettato per essere integrato in altre applicazioni come libreria di componenti comuni, garantendo coerenza visiva e funzionale tra tutti i progetti dell'ecosistema Storyteller.

### Caratteristiche Principali

- 🎨 **Design System Unificato**: Componenti consistenti basati su PrimeReact e TailwindCSS
- 📦 **Architettura Atomica**: Organizzazione dei componenti seguendo il pattern Atomic Design
- 📚 **Storybook Integrato**: Documentazione interattiva e sviluppo isolato dei componenti
- 🔒 **Type-Safe**: Completamente tipizzato con TypeScript
- 🧪 **Testing**: Configurato con Vitest e Playwright per test unitari e di integrazione

## 🏗️ Architettura dei Componenti

I componenti sono organizzati secondo il pattern **Atomic Design**:

```
src/components/
├── atoms/          # Componenti base atomici (Button, Message, etc.)
├── molecules/      # Combinazioni di atoms
├── organisms/      # Sezioni complesse dell'UI
├── pages/          # Composizioni complete di pagine
└── templates/      # Layout e template riutilizzabili
```

### Componenti Disponibili

#### Atoms
- **BasicButton**: Button personalizzato basato su PrimeReact con supporto per icone, badge, loading states
- **BasicMessage**: Componente per visualizzare messaggi e notifiche
- **DeleteChatMenuAction**: Azione specifica per eliminazione chat

## 🛠️ Tecnologie e Librerie

### Core Framework & Build Tools
- **React 19.0.0** - Libreria UI principale
- **TypeScript 5.7.3** - Type safety e developer experience
- **Vite 7.2.4** - Build tool e dev server ultra veloce
- **SWC** - Compilatore JavaScript/TypeScript ad alte prestazioni

### UI Libraries & Styling
- **TailwindCSS 4.1.1** - Framework CSS utility-first
- **PrimeReact 10.9.1** - Libreria di componenti UI enterprise
- **PrimeIcons 7.0.0** - Set di icone
- **React Icons 5.5.0** - Libreria di icone aggiuntive
- **Ant Design Icons 5.6.1** - Icone Ant Design

### Form Management & Validation
- **Formik 2.4.6** - Gestione form React
- **Yup 1.6.1** - Schema validation

### Routing & Navigation
- **React Router 7.12.0** - Routing per applicazioni React

### Utilities
- **Luxon 3.5.0** - Manipolazione date e orari
- **UUID 11.1.0** - Generazione UUID
- **js-cookie 3.0.5** - Gestione cookie
- **react-error-boundary 5.0.0** - Gestione errori React

### Development Tools
- **Storybook 10.1.10** - Sviluppo e documentazione componenti
  - `@storybook/react-vite` - Integrazione Vite
  - `@storybook/addon-a11y` - Testing accessibilità
  - `@storybook/addon-docs` - Documentazione automatica
  - `@storybook/addon-vitest` - Integrazione testing
  - `storybook-addon-vis` - Visualizzazioni avanzate

### Testing
- **Vitest 4.0.13** - Framework di testing
- **Playwright 1.56.1** - Testing browser
- **@vitest/coverage-v8** - Code coverage

### Code Quality
- **ESLint 9.39.2** - Linting JavaScript/TypeScript
  - `@typescript-eslint/eslint-plugin` - Regole TypeScript
  - `eslint-plugin-storybook` - Regole Storybook
- **Prettier 3.8.0** - Code formatter

## 📋 Requisiti

- **Node.js** >= v22.12.0
- **npm** >= 10.9.0

## 🚀 Setup del Submodule

### Aggiungere il submodule ad un nuovo progetto

Se stai configurando questo repository come submodule in un nuovo progetto:

```bash
# Naviga nel progetto parent
cd /path/to/your/parent-project

# Aggiungi il submodule
git submodule add TECO_LLM_storyteller-common-components

# Inizializza e aggiorna il submodule
git submodule update --init --recursive
```

### Clonare un progetto che contiene questo submodule

Se stai clonando un progetto che già include questo submodule:

```bash
# Opzione 1: Clone con submodules
git clone --recurse-submodules <URL_PROGETTO_PARENT>

# Opzione 2: Clone normale seguito da inizializzazione submodules
git clone <URL_PROGETTO_PARENT>
cd <PROGETTO_PARENT>
git submodule update --init --recursive
```

## 💻 Installazione e Sviluppo

Una volta che il submodule è stato configurato:

```bash
# Naviga nella directory del submodule
cd TECO_LLM_storyteller-common-components/app

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm start

# Oppure avvia Storybook per sviluppo isolato dei componenti
npm run storybook
```

## 📜 Comandi Disponibili

```bash
# Development
npm start                 # Avvia il server di sviluppo Vite (con --host)
npm run storybook        # Avvia Storybook su porta 6006

# Build
npm run build            # Build di produzione con TypeScript check
npm run build-storybook  # Build statico di Storybook

# Testing
npm test                 # Esegue i test con Vitest
npm run test-storybook   # Esegue test Storybook con coverage

# Code Quality
npm run lint             # Esegue ESLint (max 0 warnings)
npm run format           # Formatta il codice con Prettier

# Preview
npm run preview          # Preview della build di produzione
```

## 🔄 Gestione e Aggiornamento del Submodule

### Setup Iniziale per Prevenire Modifiche Accidentali

Questo submodule è progettato per essere **sviluppato direttamente nel suo repository** e utilizzato come read-only nei progetti parent. Per evitare modifiche accidentali dal parent:

```bash
# Nel progetto parent, dopo aver clonato con i submodules
cd /path/to/parent-project

# 1. Assicurati che il submodule sia su un branch (non detached HEAD)
cd TECO_LLM_storyteller-common-components
git checkout master
cd ..

# 2. Configura Git per ignorare modifiche "dirty" nel submodule
git config submodule.TECO_LLM_storyteller-common-components.ignore dirty

# 3. Opzionale: Crea un alias per aggiornamenti sicuri
git config alias.update-components 'submodule update --remote --merge'
```

Aggiungi anche al file `.gitmodules` del progetto parent:

```ini
[submodule "TECO_LLM_storyteller-common-components"]
    path = TECO_LLM_storyteller-common-components
    url = <URL_DEL_REPOSITORY>
    branch = master
    ignore = dirty
    update = merge
```

### Workflow di Sviluppo Componenti

**Importante:** Lo sviluppo dei componenti avviene **direttamente nel submodule**, non nel repository parent separatamente.

#### 1. Sviluppare Nuovi Componenti

```bash

# Assicurati di essere sul branch master aggiornato
git checkout master
git pull origin master

# Opzionale: Crea un branch feature per il tuo lavoro
git checkout -b feature/nuovo-componente

# Naviga nella directory app per sviluppare
cd app

# Installa dipendenze (se necessario)
npm install

# Sviluppa con Storybook
npm run storybook

```

#### 2. Committare e Pushare dal Submodule

```bash
# Stage e commit delle modifiche
git add .
git commit -m "feat: aggiungi BasicInput component"

# Push
git push origin feature/nuovo-componente
git checkout master
git merge feature/nuovo-componente
git push origin master

```

#### 3. Aggiornare il Riferimento nel Parent

Dopo aver pushato le modifiche nel submodule, aggiorna il riferimento nel parent:

```bash
# Nel progetto parent (directory root)
# Git rileva che il submodule punta a un nuovo commit

# Verifica lo stato
git status
# Output: modified:   TECO_LLM_storyteller-common-components (new commits)

# Stage e committa il nuovo riferimento
git add .
git commit -m "chore: aggiorna TECO_LLM_storyteller-common-components - aggiunti nuovi componenti"
git push
```

### Aggiornamento Automatico dal Remote

Quando qualcun altro ha aggiornato il submodule e vuoi sincronizzare:

```bash
# Nel progetto parent
git submodule update --remote --merge

# Oppure usa l'alias se l'hai configurato
git update-components

# Committa il riferimento aggiornato
git add TECO_LLM_storyteller-common-components
git commit -m "chore: aggiorna TECO_LLM_storyteller-common-components submodule"
git push
```

**Cosa fa `--merge`**: Mantiene il submodule sul branch `master` e mergia le modifiche remote invece di lasciarlo in stato "detached HEAD". Questo permette di continuare a lavorare normalmente nel submodule.

### Sincronizzare Modifiche da Altri Sviluppatori

Quando un collega ha aggiornato il riferimento del submodule nel parent:

```bash
# Nel progetto parent
git pull

# Aggiorna i submodules al nuovo riferimento
git submodule update --remote --merge

# Verifica che tutto sia allineato
git submodule status
```

### Gestione Conflitti

Se hai modifiche locali non committate nel submodule e c'è un conflitto durante l'update:

```bash
# Opzione 1: Stash delle modifiche locali
cd TECO_LLM_storyteller-common-components
git stash
cd ..
git submodule update --remote --merge
cd TECO_LLM_storyteller-common-components
git stash pop

# Opzione 2: Scartare modifiche locali (attenzione!)
cd TECO_LLM_storyteller-common-components
git checkout .
git clean -fd
cd ..
git submodule update --remote --merge
```

### Pre-commit Hook (Opzionale)

Per prevenire commit accidentali di modifiche nel submodule dal parent, crea `.git/hooks/pre-commit`:

```bash
#!/bin/bash

# Controlla se ci sono modifiche nel submodule
if git diff --cached --name-only | grep -q "^TECO_LLM_storyteller-common-components$"; then
    cd TECO_LLM_storyteller-common-components 2>/dev/null || exit 0
    
    # Verifica se ci sono modifiche non committate nel submodule
    if ! git diff-index --quiet HEAD --; then
        echo "❌ ERRORE: Hai modifiche non committate nel submodule!"
        echo ""
        echo "Il workflow corretto è:"
        echo "  1. cd TECO_LLM_storyteller-common-components"
        echo "  2. git add . && git commit -m 'messaggio'"
        echo "  3. git push origin master"
        echo "  4. cd .. && git add TECO_LLM_storyteller-common-components"
        echo "  5. git commit -m 'chore: aggiorna submodule'"
        echo ""
        exit 1
    fi
    
    cd - > /dev/null
fi

exit 0
```

Rendilo eseguibile:
```bash
chmod +x .git/hooks/pre-commit
```

## 📁 Struttura del Progetto

```
TECO_LLM_storyteller-common-components/
├── app/                              # Directory principale dell'applicazione
│   ├── src/
│   │   ├── components/              # Componenti React
│   │   │   ├── atoms/               # Componenti atomici base
│   │   │   ├── molecules/           # Combinazioni di componenti
│   │   │   ├── organisms/           # Sezioni complesse
│   │   │   ├── pages/               # Composizioni di pagine
│   │   │   └── templates/           # Layout template
│   │   ├── assets/                  # Risorse statiche
│   │   │   ├── fonts/               # Font personalizzati (Inter, Poppins)
│   │   │   ├── icons/               # Icone custom
│   │   │   └── images/              # Immagini
│   │   ├── helpers/                 # Funzioni di utilità
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── providers/               # Context providers
│   │   ├── services/                # Servizi API e business logic
│   │   ├── styles/                  # Stili globali
│   │   └── types/                   # TypeScript type definitions
│   ├── public/                      # File pubblici statici
│   ├── package.json                 # Dipendenze e script
│   ├── vite.config.mts              # Configurazione Vite
│   ├── tsconfig.json                # Configurazione TypeScript
│   ├── tailwind.config.js           # Configurazione TailwindCSS
│   ├── eslint.config.js             # Configurazione ESLint
│   └── prettier.config.mjs          # Configurazione Prettier
└── README.md                        # Questo file
```

## 🔗 Utilizzo nei Progetti Parent

### Import dei componenti

```typescript
// Nel progetto parent, importa i componenti dal submodule
import { BasicButton } from './TECO_LLM_storyteller-common-components/app/src/components/atoms/BasicButton'
import { BasicMessage } from './TECO_LLM_storyteller-common-components/app/src/components/atoms/BasicMessage'

// Utilizzo
function MyComponent() {
  return (
    <div>
      <BasicButton 
        label="Click Me" 
        severity="primary"
        onClick={() => console.log('Clicked!')}
      />
      <BasicMessage 
        severity="success"
        text="Operation completed!"
      />
    </div>
  )
}
```

### Configurazione Path Aliases (Opzionale)

Per semplificare gli import, puoi configurare path aliases nel progetto parent:

```typescript
// vite.config.ts o tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@common/*": ["./TECO_LLM_storyteller-common-components/app/src/*"]
    }
  }
}
```

Poi importare così:

```typescript
import { BasicButton } from '@common/components/atoms/BasicButton'
```

### Condivisione delle dipendenze

Assicurati che il progetto parent abbia le peer dependencies necessarie:
- React 19.x
- React DOM 19.x
- PrimeReact 10.x
- TailwindCSS 4.x

## 📝 Best Practices

### Sviluppo di nuovi componenti

1. **Crea il componente** nella directory appropriata (atoms, molecules, etc.)
2. **Aggiungi TypeScript types** in un file `.types.ts` separato
3. **Crea una story** Storybook per documentazione e testing visivo
4. **Esporta** il componente tramite `index.ts` nella cartella del componente
5. **Scrivi test** utilizzando Vitest
6. **Documenta** con commenti JSDoc per autocomplete e documentazione automatica

### Workflow Git con Submodules - Riepilogo

1. **Entra nel submodule**: `cd TECO_LLM_storyteller-common-components`
2. **Sviluppa componenti**: lavora direttamente nel submodule con Storybook
3. **Committa nel submodule**: `git add . && git commit && git push origin master`
4. **Torna al parent**: `cd ..`
5. **Aggiorna riferimento nel parent**: `git add TECO_LLM_storyteller-common-components && git commit -m "chore: update"`
6. **Pusha parent**: `git push`

### Regole Importanti ⚠️

- ✅ **DO**: Sviluppa sempre direttamente dentro il submodule
- ✅ **DO**: Committa prima nel submodule, poi aggiorna il riferimento nel parent
- ✅ **DO**: Usa `git submodule update --remote --merge` per sincronizzare
- ✅ **DO**: Mantieni il submodule sul branch `master` (non detached HEAD)
- ❌ **DON'T**: Non aggiungere il submodule al `.gitignore` del parent
- ❌ **DON'T**: Non lasciare modifiche non committate nel submodule
- ❌ **DON'T**: Non lavorare in stato "detached HEAD"

## 🤝 Contributing

Per contribuire a questo progetto:

1. Entra nel submodule: `cd TECO_LLM_storyteller-common-components`
2. Crea un branch feature: `git checkout -b feature/nome-feature`
3. Implementa le modifiche seguendo le convenzioni stabilite
4. Esegui linting e testing: `cd app && npm run lint && npm test`
5. Committa nel submodule: `git add . && git commit -m "feat: descrizione"`
6. Pusha: `git push origin feature/nome-feature`
7. Crea una pull request per review
8. Dopo il merge su master, aggiorna il riferimento nel progetto parent

## 📄 License

ISC

## 👥 Authors

ST Team

---

**Note**: Questo è un submodule condiviso. Le modifiche devono essere coordinate con tutti i progetti che lo utilizzano. Segui sempre il workflow descritto per evitare conflitti e mantenere la sincronizzazione tra i repository.
