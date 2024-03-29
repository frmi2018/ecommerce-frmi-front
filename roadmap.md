# 🛣️ Road map

Ecommerce-frmi-front / MERN project / 2021

#

## Prérequis

Pour le client final :  
Créer un email google  
Créer un compte github  
Créer un compte [Heroku](https://www.heroku.com/)  
Créer un compte [Netlify](https://www.netlify.com/)  
Créer la base de donnée sur [MongoDB Atlas](https://www.mongodb.com/)

## Mise en place du backend (optionnel)

https://github.com/frmi2018/ecommerce-frmi-api

## Mise en place de la partie frontend du projet

Ouvrir le terminal et initialiser le projet

`npx create-react-app nom-du-projet`  
`cd nom-du-projet`

Ouvrir éditeur de code

`code .`

Supprimer les fichiers non utilisés  
Créer le repository sur github et faire le 1er commit  
Mise en place du frontend sur Netlify (optionnel)

## Développement

🎫 Créer la route /signup  
🎫 Créer la route /signin  
🎫 Créer la route /

📦react-router-dom ([Doc](https://www.npmjs.com/package/react-router-dom)) / ([Aide V6](https://www.youtube.com/watch?v=hOg-hJDw1NM&t=4s))

✅commit "Routing pages"

🎫 Installer le framework CSS Bootstrap ([Doc](https://getbootstrap.com/))  
🎫 Créer le menu de navigation entre les pages  
🎫 Afficher le lien de la page active d'une couleur différente des autres liens

✅commit "Menu and active link"

🎫 Créer un layout commun à toutes les pages

✅commit "Shared layout component"

🎫 supprimer le fichier .env de github

✅commit

🎫 Créer le formulaire d'inscription

✅commit "Signup form handle change"

🎫 Envoyer les données en back pour créer le nouvel utilisateur dans la bdd

✅commit "User signup"

🎫 Controler la saisie name/email/password  
🎫 Rediriger sur la page signin une fois inscrit

✅commit "User signup success and error"

🎫 Externaliser la méthode signup

✅commit "Code refactoring - Signup"

🎫 Créer le formulaire de connexion  
🎫 Controler la saisie email/password  
🎫 Envoyer les données en back  
🎫 Rediriger sur la page home une fois connecté

✅commit "User signin"

🎫 Sauvegarder les infos utilisateur et le token dans le localstorage du client

✅commit "Save user and token in local storage"

🎫 Gérer la déconnexion

✅commit "User signout"

🎫 Afficher / cacher les liens du menu

✅commit "Show and hide links conditionally"

🎫 Créer la route /dashboard accessible uniquement si connecté

✅commit "Private route for authenticated users only"

🎫 Créer la page /dashboard de l'utilisateur

✅commit "User dashboard"

🎫 Sur la page /dashboard de l'utilisateur

- Ajouter un lien vers le panier
- Ajouter un lien pour mettre à jour le profil

✅commit "Links on user dashboard"

🎫 Créer la page /dashboard admin  
🎫 Sur la page /dashboard admin

- Ajouter un lien pour créer une catégorie
- Ajouter un lien pour créer un produit

🎫 Empécher l'accés aux différents dashboard en modifiant l'URL dans le navigateur

✅commit "Admin dashboard"

🎫 Créer la page /create/category

✅commit "AddCategory component"

🎫 Créer une catégorie dans la BDD

✅commit "Category create success and error"

🎫 Créer un produit dans la BDD

✅commit "Create product"

🎫 Sur la page /

- Afficher la liste des produits les plus vendus
- Afficher la liste des produits par arrivage

✅commit "Products by arrival and sell"

🎫 Afficher la liste des produits dans un composant Card sur la page /

✅commit "Show products in card"

🎫 Afficher l'image des produits

✅commit "Show products image"

🎫 Ajouter une animation de couleur au header des pages

✅commit "animation css"

🎫 Ajouter une page shop

✅commit "Shop page"

🎫 importer les catégories dans la page shop

✅commit "Get categories in shop page"

🎫 afficher les catégories dans la page shop

✅commit "Show categories in shop page"

🎫 enregistrer les catégories sélectionnées dans un tableau

✅commit "Handle categories toggle"

🎫 passer les catégories sélectionnées dans le composant parent (Shop)

✅commit "Passing categories filter to parent component"

🎫 Sur la page shop, afficher les articles des catégories sélectionnées et dont le prix est compris entre une valeur min/max

✅commit "Set filters with category"
✅commit "Fixed price range"
✅commit "Radio buttons for price range"
✅commit "Filter with price range"
✅commit "show products by filter on shop page"
✅commit "Pass products to card component"
✅commit "add load more button"

🎫 Ajouter un moteur de recherche de titre d'un livre par catégorie ou toutes les catégories

✅commit "search component"
📦query-string ([Doc](https://www.npmjs.com/package/query-string))
✅commit "implementing search"
✅commit "Backend implementation of search" + commit back avec le même nom
✅commit "Search message to users"

🎫 Afficher le détail d'un produit sur une page /product/id du produit

✅commit "Single product component" // import des données dans la page
✅commit "Reuse card for single product" // affichage des données dans la page
