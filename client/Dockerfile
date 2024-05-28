# Utilisez une image de base Node.js
FROM node:14-alpine

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json dans le conteneur
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application dans le conteneur
COPY . .

# Construisez l'application Next.js
RUN npm run build

# Exposez le port sur lequel l'application écoute
EXPOSE 3000

# Démarrez l'application Next.js
CMD ["npm", "start"]