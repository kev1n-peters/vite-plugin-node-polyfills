// eslint-disable-next-line n/prefer-global/buffer
globalThis = globalThis ?? window
globalThis.Buffer = globalThis.Buffer || Buffer
globalThis.global = globalThis.global || global
globalThis.process = globalThis.process || process
