# SUIVI DES TÂCHES — PROJET LANDING PAGES IFAM BÉNIN

> **Dernière mise à jour :** 8 Octobre 2026  
> **Gestionnaire de projet :** Creative Technologist & Lead Frontend Engineer  

---

## TABLEAU DE BORD D'AVANCEMENT

| Phase | Intitulé de la Phase | Statut | Livrables Associés |
| :---: | :--- | :---: | :--- |
| **01** | **Cadrage & Inventaire des Données Confirmées** |  **TERMINÉ** | [`referentiel-donnees.md`](file:///Users/boglerjudesaurel/Documents/IFAM%20BENIN%20LANDING%20PAGE%20/docs/referentiel-donnees.md), Inventaire des assets réels |
| **02** | **Cahier des Charges & Architecture Système** |  **TERMINÉ** | [`cahier-des-charges-architecture.md`](file:///Users/boglerjudesaurel/Documents/IFAM%20BENIN%20LANDING%20PAGE%20/docs/cahier-des-charges-architecture.md) |
| **02.B**| **Structure Détaillée & Copywriting Complet des Pages** |  **TERMINÉ** | [`copywriting-et-structure-des-pages.md`](file:///Users/boglerjudesaurel/Documents/IFAM%20BENIN%20LANDING%20PAGE%20/docs/copywriting-et-structure-des-pages.md) |
| **03** | **Design System Couture & Composants UI** | ⏳ *Prochaine étape* | `css/base.css`, `css/components.css`, design tokens, typographie |
| **04** | **Landing Page `/stylisme-modelisme`** | ⏳ *En attente Phase 3* | `stylisme-modelisme/index.html`, intégration des 11 sections |
| **05** | **Landing Page `/modelisme`** | ⏳ *En attente Phase 3* | `modelisme/index.html`, intégration des 11 sections |
| **06** | **Portail d'Accueil & Aiguillage Racine** | ⏳ *En attente Phase 4/5* | `index.html` (hub de redirection publicitaire) |
| **07** | **Audit de Conformité Stricte & Optimisations** | ⏳ *En attente finale* | Tests No-Price, audit responsive mobile, vérification liens WhatsApp |

---

## DÉTAIL DES TÂCHES PAR JALON

###  JALON 1 : CADRAGE & RÉFÉRENTIEL (TERMINÉ)
- [x] Récupération et catalogage du logo officiel IFAM BÉNIN (`assets/images/logo-ifam-officiel.jpg`)
- [x] Analyse et extraction des données officielles de formation (Brochures Stylisme-Modélisme et Modélisme)
- [x] Inventaire et vérification des 8 campus au Bénin (Cotonou, Calavi 1 & 2, Porto-Novo, Parakou, Cococodji, Bohicon, Akpakpa)
- [x] Organisation et renommage sémantique des photographies réelles d'apprenants, d'ateliers et de la soutenance IFW 2026
- [x] Établissement de la charte de conformité stricte (Zéro prix, Zéro 50%, Zéro GDIZ, Zéro fausse urgence)
- [x] Rédaction du document de référence [`docs/referentiel-donnees.md`](file:///Users/boglerjudesaurel/Documents/IFAM%20BENIN%20LANDING%20PAGE%20/docs/referentiel-donnees.md)

###  JALON 2 : CAHIER DES CHARGES & ARCHITECTURE (TERMINÉ)
- [x] Définition de l'expérience sensorielle de marque et de la direction artistique (Haute couture & atelier)
- [x] Élaboration de la palette de couleurs (Fuchsia `#E4007C`, Jaune or `#FFC72C`, Noir `#0B0B0E`, Blanc `#FFFFFF`)
- [x] Sélection de la typographie éditoriale (*Playfair Display* & *Plus Jakarta Sans*)
- [x] Définition de l'entonnoir publicitaire (Ad -> Landing -> Immersion -> Offres sans prix -> WhatsApp)
- [x] Découpage section par section de la page `/stylisme-modelisme` (11 sections stratégiques)
- [x] Découpage section par section de la page `/modelisme` (10 sections stratégiques)
- [x] Matrice des liens WhatsApp contextualisés avec messages pré-remplis sur-mesure
- [x] Rédaction du document [`docs/cahier-des-charges-architecture.md`](file:///Users/boglerjudesaurel/Documents/IFAM%20BENIN%20LANDING%20PAGE%20/docs/cahier-des-charges-architecture.md)

### ⏳ JALON 3 : DESIGN SYSTEM & COMPOSANTS FONDAMENTAUX (À VENIR)
- [ ] Création de `css/base.css` (variables CSS, reset moderne, polices Google Fonts embarquées)
- [ ] Création de `css/components.css` (boutons avec effet lueur fuchsia, cartes d'offres sans prix, badges d'autorité, accordéons FAQ, fiches campus)
- [ ] Création de `js/whatsapp.js` (fonction d'encodage et d'ouverture fluide de WhatsApp avec tracking)
- [ ] Création de `js/campus-selector.js` (filtrage interactif des 8 campus par ville avec coordonnées exactes)

### ⏳ JALON 4 : PRODUCTION DE LA PAGE `/stylisme-modelisme` (À VENIR)
- [ ] Intégration du balisage sémantique `stylisme-modelisme/index.html`
- [ ] Intégration du Hero immersif avec vidéo/visuels haute définition des ateliers
- [ ] Section Pédagogique : Les 18 mois d'école + 6 mois de stage
- [ ] Section Preuves Réelles : Galerie de la soutenance IFW 2026 (robes de mariées et tenues d'apparat)
- [ ] Grille comparative des 3 offres sans aucun prix
- [ ] Sélecteur des 8 campus avec repères géographiques
- [ ] FAQ et footer officiel avec numéro `+229 01 91 55 30 30`

### ⏳ JALON 5 : PRODUCTION DE LA PAGE `/modelisme` (À VENIR)
- [ ] Intégration du balisage sémantique `modelisme/index.html`
- [ ] Hero orienté précision technique, coupe parfaite et vêtement sur-mesure
- [ ] Clarification formelle : Modélisme (architecture du vêtement) vs Mannequinat
- [ ] Double spécialité : Confection vestiaire Homme et Dames
- [ ] Galerie photos d'ateliers et de patronnage en action
- [ ] Grille comparative des 3 offres sans aucun prix
- [ ] Intégration des campus et FAQ modélisme

### ⏳ JALON 6 : AIGUILLAGE RACINE & LIENS DE NAVIGATION (À VENIR)
- [ ] Conception de `index.html` (page de bienvenue élégante orientant vers l'une ou l'autre formation)

### ⏳ JALON 7 : AUDIT DE CONFORMITÉ & OPTIMISATIONS (À VENIR)
- [ ] Audit automatique No-Price (zéro trace de prix dans le DOM ou les scripts)
- [ ] Contrôle d'absence de mention 50%, GDIZ ou fausse urgence
- [ ] Test interactif des flux WhatsApp sur smartphone et desktop
- [ ] Validation responsive sous résolutions 375px, 414px, 768px, 1280px, 1920px
