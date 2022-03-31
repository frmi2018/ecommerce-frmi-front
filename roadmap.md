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

🎫 Sur la page /

- Afficher la liste des produits sous forme de cartes

✅commit "Show products in card"
