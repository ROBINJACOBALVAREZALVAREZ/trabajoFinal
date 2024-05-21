# Usar la imagen base de Nginx
FROM nginx:alpine

# Eliminar los archivos de configuración predeterminados de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar el archivo de configuración personalizado de Nginx
COPY nginx.conf /etc/nginx/conf.d

# Copiar los archivos estáticos del proyecto al contenedor
COPY ./ /usr/share/nginx/html

# Exponer el puerto 80 para el tráfico HTTP
EXPOSE 80

# Iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]