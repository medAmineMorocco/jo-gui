docker build -t jo2024-gui -f ../Dockerfile ..
docker login hub-docker.norsys.fr -u="" -p=""
docker tag jo2024-gui:latest hub-docker.norsys.fr/jo2024-gui:latest
docker push hub-docker.norsys.fr/jo2024-gui:latest
echo 'deploying jo2024-gui finished.'