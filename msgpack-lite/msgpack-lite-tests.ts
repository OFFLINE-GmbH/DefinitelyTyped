
import * as msgpack from "msgpack-lite";

var encoded = msgpack.encode("");
msgpack.decode(encoded);
