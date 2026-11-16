# Conferencia

Projet Angular 21 pour le Prosit 1.

## Demarrage

Dans ce dossier :

```powershell
npm install
npm start
```

Ouvrir http://localhost:4200 apres le demarrage du serveur.

## Premiere etape

Les six composants standalone se trouvent dans src/app/Components :
header, navbar, user-profile, friend-list, notifications et footer.
Chaque composant contient un fichier TypeScript, un template HTML et un fichier CSS.
Le header, la navbar, la liste des amis et les notifications sont integres dans app.html. Les noms des amis sont modifiables avec ngModel. Les notifications peuvent etre affichees, masquees et supprimees. Le profil utilisateur, le footer et la liste des conferences restent a completer.

## Verification

```powershell
npm run build
```