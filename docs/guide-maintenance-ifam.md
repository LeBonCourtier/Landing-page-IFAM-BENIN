# Guide de Maintenance & Modifications — IFAM BÉNIN
> **Destinataires :** Équipe technique et éditoriale d'IFAM BÉNIN  
> **Objectif :** Permettre des mises à jour rapides et autonomes sans casser la mise en page ni les règles de conformité.

---

## 1. MODIFIER LA DATE DE RENTRÉE ACADÉMIQUE

La rentrée actuelle est fixée au **26 octobre 2026**. Pour la modifier lors d'une session future :

* Dans `stylisme-modelisme/index.html` et `modelisme/index.html` :
  1. Balise `<meta name="description">` (ligne ~7) : mettre à jour la date.
  2. Hero `<div class="repere-tag highlight">` (ligne ~130) : modifier le texte `Rentrée le [NOUVELLE DATE]`.
  3. Section Campus `<div class="campus-sidebar">` : modifier `Prochaine rentrée : [NOUVELLE DATE]`.
  4. Section Étapes d'admission `<p class="step-desc">` : modifier la date de début des cours.
  5. Bannière CTA finale `<span class="cta-banner-badge">` : modifier `Rentrée le [NOUVELLE DATE]`.
  6. Pied de page `<footer>` : modifier la mention officielle `Rentrée officielle : [NOUVELLE DATE]`.
* Dans `index.html` (portail racine) :
  - Modifier le paragraphe d'introduction (`portal-desc`) et la meta description.

---

## 2. MODIFIER OU AJOUTER DES PHOTOS

Toutes les photos sont situées dans le dossier :  
`assets/images/`

### Remplacer une photo existante
1. Optimisez votre nouvelle image (format JPEG ou WebP, poids conseillé < 400 Ko).
2. Conservez de préférence le nom existant (ex : `hero-stylisme-robe-bleue-beige.jpeg` ou `atelier-patronnage-formatrice.jpeg`) pour un remplacement instantané sans toucher au code HTML.
3. Si vous donnez un nouveau nom de fichier :
   - Mettez à jour l'attribut `src="../assets/images/votre-nouveau-nom.jpeg"` dans le fichier HTML concerné.
   - Mettez à jour l'attribut `alt="Description détaillée du vêtement ou de la scène d'atelier"`.

> [!CAUTION]
> **Règle absolue :** Ne jamais insérer une image montrant un montant, un reçu ou un tableau de frais de scolarité chiffré.

---

## 3. MODIFIER OU REMPLACER LES VIDÉOS

Les vidéos sont stockées dans :  
`assets/videos/`

* **Vidéo d'ambiance (courte / prioritaire) :** `assets/videos/video-ambiance-cours.mp4`
  - Attributs HTML : `preload="metadata"`, `poster="../assets/images/nom-du-poster.jpeg"`
* **Vidéo d'immersion (longue) :** `assets/videos/video-immersion-atelier.mp4`
  - Attributs HTML : `preload="none"` (impératif pour éviter de consommer les données mobiles des visiteurs avant clic).

### Pour changer une vidéo :
1. Compressez le fichier MP4 (codec H.264 / AAC pour une compatibilité totale iPhone et Android).
2. Déposez-le dans `assets/videos/`.
3. Assurez-vous d'associer une image de couverture nette dans l'attribut `poster=""`.
4. Ne modifiez jamais le sens d'un témoignage et n'intégrez aucune vidéo où un prix est mentionné oralement.

---

## 4. MODIFIER LES COORDONNÉES ET LES LIENS WHATSAPP

Les coordonnées officielles d'IFAM BÉNIN sont :
* **Numéro d'appel affiché :** `+229 01 91 55 30 30`
* **Format international lien WhatsApp :** `2290191553030`

### Pour changer le numéro ou le message pré-rempli :
Les liens ont la structure suivante :
```html
<a href="https://wa.me/2290191553030?text=Bonjour%20IFAM%20B%C3%89NIN..." target="_blank" rel="noopener noreferrer">
```
* Pour modifier le message transmis, encodez les espaces par `%20`, les virgules par `%2C`, et les accents en UTF-8 standard.
* **Important :** Chaque bouton doit clairement indiquer la filière et la formule (ex : `Offre 1`, `Offre 2` ou `Offre 3`) pour que le conseiller sache instantanément comment répondre.

---

## 5. MODIFIER LES OFFRES OU LES CAMPUS

### Les Offres
* Situées dans la section `<section class="section" id="offres">`.
* **Rappel strict de conformité :**
  - **ZÉRO PRIX :** Conserver systématiquement le badge `Modalités d'accès sur entretien`.
  - Pas de mention d'acompte de 50%.
  - Pas de mention de financement dans la formation Modélisme (la mention de facilitation d'équipement est réservée exclusivement à l'Offre 1 de Stylisme-Modélisme).

### Les 8 Campus
* Situés dans `<section class="section" id="centres">` sous forme d'accordéons accessibles.
* Pour mettre à jour un repère géographique (ex : une nouvelle von ou un nouveau point de repère), modifiez directement le paragraphe `<p><strong>Adresse exacte :</strong> ...</p>` dans l'élément `<div class="accordion-panel">` correspondant.
