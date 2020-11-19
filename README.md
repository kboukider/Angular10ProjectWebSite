Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0, et utilise [Angular Material](https://material.angular.io/) et [Material Design for Bootstrat 4](https://mdbootstrap.com/) pour le style.

# Développement et maintenance du site du Master CCI.


## Prérequis

1.	Bootstrap (https://getbootstrap.com) est une boîte à outils open source pour le développement avec HTML, CSS et JS. Prototypez rapidement vos idées ou créez l'intégralité de votre application avec nos variables et mixins Sass, un système de grille réactif, de nombreux composants préconstruits et des plugins puissants construits sur jQuery.
2.	Angular (https://material.angular.io) est un cadriciel côté client, open source, basé sur TypeScript, et co-dirigé par l'équipe du projet « Angular » à Google et par une communauté de particuliers et de sociétés.
3.	Git (https://git-scm.com/downloads) est un logiciel de gestion de versions décentralisé.
4.	Chart bootstrap(https://mdbootstrap.com/docs/jquery/javascript/charts) pour les statistiques, c'est des représentations graphiques de données.
5.	NodeJS (https://nodejs.org/en/download/) est plateforme logicielle libre en JavaScript orientée vers les applications réseau événementielles hautement concurrentes qui doivent pouvoir monter en charge.

Après l’installation du NodeJS, il fault installer le CLI d’Angular de manière globale sur votre machine avec la commande suivante : 

-----
	npm install -g @angular/cli
-----

6.	Firebase (https://firebase.google.com) Firebase est un ensemble de services d'hébergement pour n'importe quel type d'application.

## Faire fonctionner le projet

1. Installez node_modules

Naviguez vers le dossier du projet, lancez l'invite de commande et saisissez la commande suivante:

-----
	npm install
-----

2. 	Installez Firebase
-----
	npm install firebase
-----

## Démarrer le projet en local
-----
ng serve
-----
Le serveur démarrera à l'adresse http://localhost:4200/


## Identifiants du compte Gmail connecté à Firebase
Site web : https://firebase.google.com/
Adresse Mail: anciensccitours@gmail.com   
Mot de passe: ccitours2020

## Deploy Functions: Cloud Functions for Firebase
Pour pouvoir déployer de nouvelles fonctions ou modifier les fonctions existantes il faut:

1. Installer Firebase-tools
-----
	npm install -g firebase-tools
-----

2. Se connecter à Firebase
-----
	firebase login
-----

3. Initier Firebase
-----
	firebase init
-----

4. Installer nodemailer dotenv dans le dossier functions
-----
	cd functions
	npm i nodemailer dotenv
-----

5. Déployer 
-----
	firebase deploy
-----

6. Supprimer une fonction
-----
	firebase functions:delete yourFunction
-----
# Exemple
-----
	firebase functions:delete sendEmailNotification
-----

7. Changer le projet par défaut que firebase CLI utilise dans un dépot
-----
	firebase use --add
-----

8. Résoudre une erreur de déploiement  de type: 
# Firebase serve: Error: Server Error. connect ETIMEDOUT 216.58.200.234:443

Pour résoudre cette erreur il faut mettre à jour firebase tools et se connecter de nouveau:
	Run
	-----
		npm install -g firebase-tools
		firebase logout
		firebase login
	-----
	Ressayer le deployement
	-----
		firebase deploy
	-----
