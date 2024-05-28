# Utilisez une image de base appropriée pour votre application
FROM node:14

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json dans le conteneur
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install

# Copiez le reste des fichiers de l'application dans le conteneur
COPY . .

# Exposez le port sur lequel votre application écoute
EXPOSE 4000

# Démarrez votre application lorsque le conteneur est lancé
CMD [ "npm", "start" ]