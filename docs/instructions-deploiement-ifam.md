# Instructions de Déploiement & Publication — IFAM BÉNIN

> **Nature du projet :** Site 100 % statique Haute Performance (HTML5, Vanilla CSS, JavaScript Vanilla, GSAP via CDN).  
> **Avantage majeur :** Aucun serveur d'application, aucun build complexe, aucun coût de licence. Se déploie en quelques secondes sur n'importe quel hébergeur standard.

---

## 1. LES DEUX URLS CIBLES POUR LES CAMPAGNES PUBLICITAIRES

Dès que votre nom de domaine sera relié (exemple : `https://ifambenin.com` ou `https://admissions.ifambenin.com`) :

| Campagne Publicitaire | URL de Destination Publicitaire (Landing Page) |
|---|---|
| **Campagnes Stylisme-Modélisme** (Meta Ads / TikTok Ads) | `https://[DOMAINE-IFAM]/stylisme-modelisme/` |
| **Campagnes Modélisme** (Meta Ads / TikTok Ads) | `https://[DOMAINE-IFAM]/modelisme/` |
| *Portail Racine d'Aiguillage* | `https://[DOMAINE-IFAM]/` |

---

## 2. MODALITÉS DE DÉPLOIEMENT SELON VOTRE INFRASTRUCTURE

### Option A : Hébergement web existant de l'IFAM (cPanel, Apache, Nginx, Hostinger, OVH)
1. Connectez-vous à votre gestionnaire de fichiers cPanel ou via FTP (FileZilla / WinSCP).
2. Rendez-vous dans le répertoire web public (généralement `public_html` ou `www`).
3. Téléversez l'intégralité des fichiers et dossiers :
   ```
   ├── assets/
   │   ├── images/
   │   └── videos/
   ├── css/
   ├── js/
   ├── stylisme-modelisme/
   │   └── index.html
   ├── modelisme/
   │   └── index.html
   └── index.html
   ```
4. Vos pages sont immédiatement accessibles en direct et le rechargement des routes fonctionne nativement car chaque page dispose de son propre répertoire avec un fichier `index.html`.

### Option B : Hébergement Statique Haute Performance Gratuit (Recommandé)
Sans souscrire aucun abonnement payant, vous pouvez héberger ce site sur un réseau CDN mondial ultra-rapide et sécurisé :
* **Cloudflare Pages** : Gratuit, bande passante illimitée, certificat SSL automatique, vitesse maximale sur mobile au Bénin et à l'international. Déploiement direct en glissant-déposant le dossier.
* **Netlify / Vercel** : Déploiement instantané par simple glisser-déposer de dossier ("Drag & Drop").

---

## 3. INFORMATIONS NÉCESSAIRES POUR FINALISER LA MISE EN LIGNE

Pour procéder à la publication effective dès que vous donnerez votre accord, il suffira de préciser :
1. **Le nom de domaine ou sous-domaine retenu** (ex: `ifambenin.com` ou `formations.ifambenin.com`).
2. **Le mode d'hébergement choisi** :
   - Vos identifiants FTP / cPanel si l'IFAM possède déjà un serveur, **OU**
   - La création d'un déploiement Cloudflare / Netlify gratuit si vous souhaitez que tout soit configuré immédiatement sans frais.
