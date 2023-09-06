# Secret Key Generation

To create a secret key:

```sh
node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"
```
