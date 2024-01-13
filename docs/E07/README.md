# HASH etc etc

---


## Générer une string aléatoire pouvant être utilisé en tant que secret de session

```js
const crypto = require('node:crypto');
crypto.randomBytes(256).toString('base64');
```