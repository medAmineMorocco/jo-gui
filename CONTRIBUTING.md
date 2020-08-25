## Stratégie des branches Git :

Le model des branches du projet est le model de Gitflow :

![image info](https://miro.medium.com/max/1400/1*uUpzVOpdFw5V-tJ_YvgFmA.png)

Nommage des branches : 
        


      <libelle_type>/<id_card>/<nom_de_la_branche>


      exemple : 
      
      feat/152/gestion_de_profil
      
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

