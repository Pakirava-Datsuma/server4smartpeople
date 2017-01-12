# server for smart people
This is a server-side prototype of a new system that connects smart places (houses, cars or even phones) and their owners.

`src/main/java` - backend sources

`src/main/webapp` - backend **resources** dir for frontend build.

`src/main/frontend` - frontend sources (NodeJS+ReactJS).

`src/main/frontend/build` - frontend build **target** dir.

Consider to symlink **target** to **resources** (or vice versa). This avoids manual copying frontend build from **target** to **resources** after every `npm run build`.
