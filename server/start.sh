if ! [ -x "$(command -v deno)" ]; then
  echo 'Error: deno is not installed. See https://deno.land/manual/getting_started/installation' >&2
  exit 1
fi
deno run  --allow-net index.ts