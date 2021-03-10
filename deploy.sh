set -ex

if ! command -v deno &> /dev/null
then
    curl -fsSL https://deno.land/x/install/install.sh | sh
    export DENO_INSTALL="$HOME/.deno"
    export PATH="$DENO_INSTALL/bin:$PATH"
fi

deno --version

if ! command -v pagic &> /dev/null
then
    deno install --unstable --allow-read --allow-write --allow-net --allow-run -n pagic https://deno.land/x/pagic/mod.ts
fi

pagic build