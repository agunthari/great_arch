# Projet Grande Arche (great_arch)

---

## Prérequis
- [WAMP](https://sourceforge.net/projects/wampserver/files/), [XAMPP](https://www.apachefriends.org/fr/index.html) ou autres
	- PHP version 7.3
	- MYSQL version 5.7
	- Apache 2.4
- NVM [Install for Windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) / [Install for Mac](https://www.chrisjmendez.com/2018/02/07/install/#:~:text=How%20to%20install%20Node%20on%20Mac%20using%20NVM,Install%20Node.%20...%206%20Set%20Node%20Globally.%20) ou autres Node Version Manager
	- NodeJS version 6.9
- [Composer](https://getcomposer.org/download/)
- [Symfony CLI](https://symfony.com/download) (facultatif)

---

## Installation

### Apache

Editer le fichier etc/hosts et ajouter la ligne :
```
127.0.0.1	rf.local
```
Ajouter les lignes de configuration de VHost dans votre fichier httpd-vhosts.conf dans vos configurations Apache :
```
<VirtualHost rf.local:80>
  ServerName rf.local
  ServerAlias rf.local
  DocumentRoot "${INSTALL_DIR}/www/great_arch/public/"
  <Directory "${INSTALL_DIR}/www/great_arch/public/">
    Options +Indexes +Includes +FollowSymLinks +MultiViews
    AllowOverride All
    Order Allow,Deny
    Allow from All
    FallbackResource /index.php
    Require local
  </Directory>
</VirtualHost>
```
Attention: Penser a definir la variable INSTALL_DIR en entete du meme fichier, de la facon suivante
```
Define INSTALL_DIR /path/to/install
```

### Application

Dans votre terminal, aller a la racine du projet et lancer l'installation via la commande composer :
```bash
composer install
```
Puis, installer les modules Nodes JS :
```bash
npm install
```
Installer Gulp en global afin de generer les fichiers de styles et de scripts
```bash
npm i gulp -g
```

---

## Utilisation

### Compilation des scripts et des less
```bash
gulp build-less
```

### Vider le cache Symfony
```bash
php bin/console cache:clear --env=prod
```