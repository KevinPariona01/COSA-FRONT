#!/bin/sh
# vim:sw=4:ts=4:et

set -e

if [ -z "${NGINX_ENTRYPOINT_QUIET_LOGS:-}" ]; then
    exec 3>&1
else
    exec 3>/dev/null
fi

if [ "$1" = "nginx" -o "$1" = "nginx-debug" ]; then
    if /usr/bin/find "/docker-entrypoint.d/" -mindepth 1 -maxdepth 1 -type f -print -quit 2>/dev/null | read v; then
        echo >&3 "$0: /docker-entrypoint.d/ is not empty, will attempt to perform configuration"

        echo >&3 "$0: Looking for shell scripts in /docker-entrypoint.d/"
        find "/docker-entrypoint.d/" -follow -type f -print | sort -n | while read -r f; do
            case "$f" in
                *.sh)
                    if [ -x "$f" ]; then
                        echo >&3 "$0: Launching $f";
                        "$f"
                    else
                        # warn on shell scripts without exec bit
                        echo >&3 "$0: Ignoring $f, not executable";
                    fi
                    ;;
                *) echo >&3 "$0: Ignoring $f";;
            esac
        done

        echo >&3 "$0: Configuration complete; ready for start up"
    else
        echo >&3 "$0: No files found in /docker-entrypoint.d/, skipping configuration"
    fi
fi

echo "Reemplazando las variables de ambiente"

[ "${APPLICATION_OEFA_RIMA_API_ENDPOINT+1}" ] || echo "El inicio del path en la url de APPLICATION_OEFA_RIMA_API_ENDPOINT no esta definido, por favor definirlo"
[ "${APPLICATION_OEFA_SEGURIDAD_API_ENDPOINT+1}" ] || echo "El inicio del path en la url de APPLICATION_OEFA_SEGURIDAD_API_ENDPOINT no esta definido, por favor definirlo"
[ "${APPLICATION_OEFA_CORE_API_ENDPOINT+1}" ] || echo "El inicio del path en la url de APPLICATION_OEFA_CORE_API_ENDPOINT no esta definido, por favor definirlo"
[ "${BASE_HREF+1}" ] || echo "El inicio del path en la url de BASE_HREF no esta definido, por favor definirlo"
[ "${DEPLOY_HREF+1}" ] || echo "El inicio del path en la url de DEPLOY_HREF no esta definido, por favor definirlo"

sed -i "s~{{{APPLICATION_OEFA_RIMA_API_ENDPOINT}}}~$APPLICATION_OEFA_RIMA_API_ENDPOINT~g" /usr/share/nginx/html/siscore/monitoreo/default-node_modules_expertsystems_xs-angular-common_*.*.js
sed -i "s~{{{APPLICATION_OEFA_SEGURIDAD_API_ENDPOINT}}}~$APPLICATION_OEFA_SEGURIDAD_API_ENDPOINT~g" /usr/share/nginx/html/siscore/monitoreo/default-node_modules_expertsystems_xs-angular-common_*.*.js
sed -i "s~{{{APPLICATION_OEFA_CORE_API_ENDPOINT}}}~$APPLICATION_OEFA_CORE_API_ENDPOINT~g" /usr/share/nginx/html/siscore/monitoreo/default-node_modules_expertsystems_xs-angular-common_*.*.js
sed -i "s~{{{BASE_HREF}}}~$BASE_HREF~g" /usr/share/nginx/html/siscore/monitoreo/*.js
sed -i "s~{{{DEPLOY_HREF}}}~$DEPLOY_HREF~g" /usr/share/nginx/html/siscore/monitoreo/*.js
sed -i "s~{{{BASE_HREF}}}~$BASE_HREF~g" /usr/share/nginx/html/siscore/monitoreo/*.html
sed -i "s~{{{DEPLOY_HREF}}}~$DEPLOY_HREF~g" /usr/share/nginx/html/siscore/monitoreo/*.html

exec "$@"
