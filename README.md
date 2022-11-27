# Workshop 4 - Misión TIC 2022

## client

Desarrollado en Angular

**Errores encontrados**

`materialize-css` no funciona ya que al iniciar con `ng serve --open` no cargan los estilos

![](https://i.imgur.com/xW3U1xG.png)

## server

Desarrollado en Loopback

**Errores encontrados**

Al parecer un error de autorización de acceso a la base de datos después de inicializar `npm start`

```
Request GET /tipo-inmuebles failed with status code 500. MongoError: (Unauthorized) not authorized on admin to execute command { find: "TipoInmueble", filter: {  }, sort: { _id: 1 }, lsid: { id: {4 [253 154 161 231 197 112 77 94 149 53 157 57 25 251 186 46]} }, $clusterTime: { clusterTime: {1669569412 9}, signature: { hash: {0 [77 225 136 77 10 147 114 187 179 118 8 111 207 171 20 62 112 179 186 38]}, keyId: 7116979260098609152.000000 } }, $db: "admin" }
    at MessageStream.messageHandler (/home/anon/Desktop/Workshop4/server/node_modules/loopback-connector-mongodb/node_modules/mongodb/lib/cmap/connection.js:299:20)
    at MessageStream.emit (node:events:513:28)
    at processIncomingData (/home/anon/Desktop/Workshop4/server/node_modules/loopback-connector-mongodb/node_modules/mongodb/lib/cmap/message_stream.js:144:12)
    at MessageStream._write (/home/anon/Desktop/Workshop4/server/node_modules/loopback-connector-mongodb/node_modules/mongodb/lib/cmap/message_stream.js:42:5)
    at writeOrBuffer (node:internal/streams/writable:392:12)
    at _write (node:internal/streams/writable:333:10)
    at MessageStream.Writable.write (node:internal/streams/writable:337:10)
    at TLSSocket.ondata (node:internal/streams/readable:766:22)
    at TLSSocket.emit (node:events:513:28)
    at addChunk (node:internal/streams/readable:324:12)
    at readableAddChunk (node:internal/streams/readable:297:9)
    at TLSSocket.Readable.push (node:internal/streams/readable:234:10)
    at TLSWrap.onStreamRead (node:internal/stream_base_commons:190:23)

```
![](https://i.imgur.com/NnWdTg0.png)