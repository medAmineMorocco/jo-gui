## Nommage des messages commit :


Le nommage doit respecter le format suivant :

      <libelle_type>[id_card]: <titre du message>

      exemple : 
      
      feat[152]: mise à jour du profil

Libellé pour chaque type de traitements : 

*   feat: pour les évolutions
*   fix:  pour fixer des bugs
* 	css: pour css
* 	config: pour chaque traitement de configuration
* 	chore: pour chaque traitement genre : formmatage, clean code, ..)
* 	ci: pour l'intégration continue
* 	docs: pour tout ce qui concerne la documentation
* 	refactor: pour le refactpring du code
* 	revert: pour annuer les changements pushés
* 	test: pour l'ajout des tests

## Créer sa première MR :

1- créer la branche avec le même **id** de la tache :

![id](https://user-images.githubusercontent.com/12902041/98949774-6f233600-24f8-11eb-89e3-44cf050f0317.png)

2- créer la MR en mettant dans la description les captures d'écran des différents devices **Desktop/Tablet/Smartphone** en **chrome** et **firefox** :

![scrennshots chrome ff](https://user-images.githubusercontent.com/12902041/98949811-7f3b1580-24f8-11eb-88d9-a72fbc35c377.png)


3- Mettre le lien de la MR dans la description de la tache en **clickup** :

![MR link](https://user-images.githubusercontent.com/12902041/98949860-8f52f500-24f8-11eb-8396-16cdf8e26cbe.png)

4- Lancer la **pipeline** en Gitlab pour s'assurer que les tests passent et qu'aucune regression n'a été produite : 

