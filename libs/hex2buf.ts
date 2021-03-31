/**
 * Hex string to Uint8Array
 * @param hex Hex string
 */
export default function hex2buf(hex: string) {
    const l = hex.length;
    if (l % 2) {
        throw new TypeError('The length of input string should be even!');
    }
    const buf = new Uint8Array(l / 2);
    let i = 0;
    let j = 0;
    while (i < l) {
        buf[j++] = parseInt(hex.substr(i, 2), 16);
        i += 2;
    }
    return buf;
}
