# Use nginx (lightweight web server)
FROM nginx:alpine

# Copy your html/js files into nginx's html folder
COPY . /usr/share/nginx/html

# Nginx automatically serves from that folder
