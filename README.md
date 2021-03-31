# oyzhen

[WIP] I will do some interesting things by using Deno, and all pages will be deployed to [`Deno Deploy`](https://deno.com/deploy).

## Development

1. Install Deno

```Shell
curl -fsSL https://deno.land/x/install/install.sh | sh
```

2. Setup Deno Deploy locally

```Shell
deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -f https://deno.land/x/deploy/deployctl.ts
```

3. Run dev server

```Shell
deployctl run main.ts
```

4. Test

```Shell
deno test -A --unstable test.ts
```
