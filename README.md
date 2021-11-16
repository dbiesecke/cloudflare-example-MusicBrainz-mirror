# MusicBrainz / Example Cloudflare Mirror


* Simple Proxy for MusicBrainz to overcome the IP Limitation

* host can change to other & fit your needs


[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/dbiesecke/cloudflare-example-MusicBrainz-mirror)


## Example

 * [musicbrainz.bcgd1.workers.dev](https://musicbrainz.bcgd1.workers.dev)


## Build and Deploy

- [Install Wrangler CLI](https://github.com/cloudflare/wrangler#installation)

```sh
npm install -g @cloudflare/wrangler
```

- Generate from [cloudflare-example-MusicBrainz-mirror](https://github.com/dbiesecke/cloudflare-example-MusicBrainz-mirror)

```sh
wrangler generate booster https://github.com/dbiesecke/cloudflare-example-MusicBrainz-mirror
```

- Install dependencies

```sh
cd booster
npm install
```

- Authenticate Wrangler with a Cloudflare API Token

```sh
wrangler login
wrangler config
```

- Edit the configuration object in `src/index.js`

- Build and publish to Cloudflare Workers

```sh
wrangler build
wrangler publish
```


## Deps

![Header](https://raw.githubusercontent.com/booster-labs/rocket-booster/master/.github/img/header.jpg)

:rocket: The template to kickstart rocket-booster workers. The `src/index.js` file contains the code and configuration of the template. Documentation and examples for `rocket-booster` can be found [here](https://github.com/booster-labs/rocket-booster).

)
