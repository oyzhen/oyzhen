/**
 * ArrayBuffer to hex string
 */
 export default function buf2hex(buffer: Uint8Array): string {
    let result = '';
    for (let i = 0, l = buffer.length; i < l; i++) {
        result += ('00' + buffer[i].toString(16)).slice(-2);
    }
    return result;
}
