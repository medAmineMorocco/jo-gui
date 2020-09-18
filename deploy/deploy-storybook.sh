docker build -t jo2024-storybook -f ../Dockerfile-storybook ..
docker login hub-docker.norsys.fr -u="" -p=""
docker tag jo2024-storybook:latest hub-docker.norsys.fr/jo2024-storybook:latest
docker push hub-docker.norsys.fr/jo2024-storybook:latest
echo 'deploying jo2024-storybook finished.'