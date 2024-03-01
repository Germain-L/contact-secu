# Contact Secu

Contact Secu est une application Next.js qui utilise Postgres.js pour gérer une liste de contacts.

## Comment utiliser

### Configuration

1. Installez les dépendances du projet avec `npm install`.

2. Configurez votre base de données Postgres localement ou utilisez votre fournisseur préféré.

3. Copiez le fichier `.env.local.example` dans ce répertoire en `.env.local` (ceci sera ignoré par Git) :

```bash
cp .env.local.example .env.local
```

Fonctionnalités de sécurité :

Le projet intègre plusieurs fonctionnalités et pratiques pour renforcer la sécurité :

Joi pour la validation de données :
Utilisez Joi pour valider les schémas des données entrantes, assurant ainsi que les données envoyées à l'API respectent les formats attendus.

Hachage de mot de passe :
Les mots de passe sont hachés avant d'être stockés en base de données, offrant une couche de protection supplémentaire contre les accès non autorisés.

OWASP ZAP pour les tests de sécurité :
Intégré dans le pipeline d'intégration continue via .github/workflows/zap.yml, OWASP ZAP automatise la recherche de vulnérabilités de sécurité dans l'application.

Sécurité avec Next.js
Next.js offre plusieurs mécanismes pour protéger votre application :

Protection contre les XSS : Next.js échappe automatiquement les contenus pour prévenir les attaques XSS.
Protection CSRF : Bien que Next.js n'offre pas de solution CSRF out-of-the-box pour les API routes, il est recommandé d'utiliser des jetons CSRF ou des techniques similaires pour les formulaires.
Isolation des routes API : Les routes API sont isolées et gérées séparément des pages, réduisant le risque d'exposition accidentelle de logique ou de données côté serveur.
Support HTTPS : Encourage l'utilisation de HTTPS pour sécuriser la communication entre le client et le serveur.
Content Security Policy (CSP) : Implémentez CSP pour réduire le risque d'attaques XSS et autres injections.
HTTP Strict Transport Security (HSTS) : Ajoutez HSTS pour forcer les navigateurs à utiliser des connexions sécurisées.

Dependabot : un outil d'automatisation qui surveille les dépendances de votre projet pour identifier les versions obsolètes ou vulnérables. Il propose des mises à jour via des pull requests pour maintenir le projet à jour et sécurisé. En automatisant la gestion des dépendances, Dependabot aide à prévenir les failles de sécurité et améliore la maintenance du code, tout en économisant du temps et des efforts de développement.

ESLint : un outil d'analyse statique du code qui aide les développeurs à identifier et à corriger des problèmes de syntaxe, des erreurs potentielles et à appliquer un style de codage cohérent dans leur projet JavaScript ou TypeScript. Il est hautement configurable, permettant aux équipes de définir leurs propres règles ou d'adopter des conventions standardisées, contribuant ainsi à améliorer la qualité du code, à faciliter la maintenance et à encourager les bonnes pratiques de programmation.