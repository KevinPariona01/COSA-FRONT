FROM nginx:alpine

COPY deploy/default.conf /etc/nginx/conf.d/default.conf

COPY deploy/docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

COPY dist/rima /usr/share/nginx/html/siscore/monitoreo
COPY version.json /usr/share/nginx/html/siscore/monitoreo/version.json

# Comando que va a ejecutar la aplicacion
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
