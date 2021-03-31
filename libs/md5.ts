/**
 * md5 cycle
 */
function cycle(x: number[], k: number[]) {
    let [a, b, c, d] = x;

    a += (((b & c) | (~b & d)) + k[0] - 680876936) | 0;
    a = (((a << 7) | (a >>> 25)) + b) | 0;
    d += (((a & b) | (~a & c)) + k[1] - 389564586) | 0;
    d = (((d << 12) | (d >>> 20)) + a) | 0;
    c += (((d & a) | (~d & b)) + k[2] + 606105819) | 0;
    c = (((c << 17) | (c >>> 15)) + d) | 0;
    b += (((c & d) | (~c & a)) + k[3] - 1044525330) | 0;
    b = (((b << 22) | (b >>> 10)) + c) | 0;
    a += (((b & c) | (~b & d)) + k[4] - 176418897) | 0;
    a = (((a << 7) | (a >>> 25)) + b) | 0;
    d += (((a & b) | (~a & c)) + k[5] + 1200080426) | 0;
    d = (((d << 12) | (d >>> 20)) + a) | 0;
    c += (((d & a) | (~d & b)) + k[6] - 1473231341) | 0;
    c = (((c << 17) | (c >>> 15)) + d) | 0;
    b += (((c & d) | (~c & a)) + k[7] - 45705983) | 0;
    b = (((b << 22) | (b >>> 10)) + c) | 0;
    a += (((b & c) | (~b & d)) + k[8] + 1770035416) | 0;
    a = (((a << 7) | (a >>> 25)) + b) | 0;
    d += (((a & b) | (~a & c)) + k[9] - 1958414417) | 0;
    d = (((d << 12) | (d >>> 20)) + a) | 0;
    c += (((d & a) | (~d & b)) + k[10] - 42063) | 0;
    c = (((c << 17) | (c >>> 15)) + d) | 0;
    b += (((c & d) | (~c & a)) + k[11] - 1990404162) | 0;
    b = (((b << 22) | (b >>> 10)) + c) | 0;
    a += (((b & c) | (~b & d)) + k[12] + 1804603682) | 0;
    a = (((a << 7) | (a >>> 25)) + b) | 0;
    d += (((a & b) | (~a & c)) + k[13] - 40341101) | 0;
    d = (((d << 12) | (d >>> 20)) + a) | 0;
    c += (((d & a) | (~d & b)) + k[14] - 1502002290) | 0;
    c = (((c << 17) | (c >>> 15)) + d) | 0;
    b += (((c & d) | (~c & a)) + k[15] + 1236535329) | 0;
    b = (((b << 22) | (b >>> 10)) + c) | 0;

    a += (((b & d) | (c & ~d)) + k[1] - 165796510) | 0;
    a = (((a << 5) | (a >>> 27)) + b) | 0;
    d += (((a & c) | (b & ~c)) + k[6] - 1069501632) | 0;
    d = (((d << 9) | (d >>> 23)) + a) | 0;
    c += (((d & b) | (a & ~b)) + k[11] + 643717713) | 0;
    c = (((c << 14) | (c >>> 18)) + d) | 0;
    b += (((c & a) | (d & ~a)) + k[0] - 373897302) | 0;
    b = (((b << 20) | (b >>> 12)) + c) | 0;
    a += (((b & d) | (c & ~d)) + k[5] - 701558691) | 0;
    a = (((a << 5) | (a >>> 27)) + b) | 0;
    d += (((a & c) | (b & ~c)) + k[10] + 38016083) | 0;
    d = (((d << 9) | (d >>> 23)) + a) | 0;
    c += (((d & b) | (a & ~b)) + k[15] - 660478335) | 0;
    c = (((c << 14) | (c >>> 18)) + d) | 0;
    b += (((c & a) | (d & ~a)) + k[4] - 405537848) | 0;
    b = (((b << 20) | (b >>> 12)) + c) | 0;
    a += (((b & d) | (c & ~d)) + k[9] + 568446438) | 0;
    a = (((a << 5) | (a >>> 27)) + b) | 0;
    d += (((a & c) | (b & ~c)) + k[14] - 1019803690) | 0;
    d = (((d << 9) | (d >>> 23)) + a) | 0;
    c += (((d & b) | (a & ~b)) + k[3] - 187363961) | 0;
    c = (((c << 14) | (c >>> 18)) + d) | 0;
    b += (((c & a) | (d & ~a)) + k[8] + 1163531501) | 0;
    b = (((b << 20) | (b >>> 12)) + c) | 0;
    a += (((b & d) | (c & ~d)) + k[13] - 1444681467) | 0;
    a = (((a << 5) | (a >>> 27)) + b) | 0;
    d += (((a & c) | (b & ~c)) + k[2] - 51403784) | 0;
    d = (((d << 9) | (d >>> 23)) + a) | 0;
    c += (((d & b) | (a & ~b)) + k[7] + 1735328473) | 0;
    c = (((c << 14) | (c >>> 18)) + d) | 0;
    b += (((c & a) | (d & ~a)) + k[12] - 1926607734) | 0;
    b = (((b << 20) | (b >>> 12)) + c) | 0;

    a += ((b ^ c ^ d) + k[5] - 378558) | 0;
    a = (((a << 4) | (a >>> 28)) + b) | 0;
    d += ((a ^ b ^ c) + k[8] - 2022574463) | 0;
    d = (((d << 11) | (d >>> 21)) + a) | 0;
    c += ((d ^ a ^ b) + k[11] + 1839030562) | 0;
    c = (((c << 16) | (c >>> 16)) + d) | 0;
    b += ((c ^ d ^ a) + k[14] - 35309556) | 0;
    b = (((b << 23) | (b >>> 9)) + c) | 0;
    a += ((b ^ c ^ d) + k[1] - 1530992060) | 0;
    a = (((a << 4) | (a >>> 28)) + b) | 0;
    d += ((a ^ b ^ c) + k[4] + 1272893353) | 0;
    d = (((d << 11) | (d >>> 21)) + a) | 0;
    c += ((d ^ a ^ b) + k[7] - 155497632) | 0;
    c = (((c << 16) | (c >>> 16)) + d) | 0;
    b += ((c ^ d ^ a) + k[10] - 1094730640) | 0;
    b = (((b << 23) | (b >>> 9)) + c) | 0;
    a += ((b ^ c ^ d) + k[13] + 681279174) | 0;
    a = (((a << 4) | (a >>> 28)) + b) | 0;
    d += ((a ^ b ^ c) + k[0] - 358537222) | 0;
    d = (((d << 11) | (d >>> 21)) + a) | 0;
    c += ((d ^ a ^ b) + k[3] - 722521979) | 0;
    c = (((c << 16) | (c >>> 16)) + d) | 0;
    b += ((c ^ d ^ a) + k[6] + 76029189) | 0;
    b = (((b << 23) | (b >>> 9)) + c) | 0;
    a += ((b ^ c ^ d) + k[9] - 640364487) | 0;
    a = (((a << 4) | (a >>> 28)) + b) | 0;
    d += ((a ^ b ^ c) + k[12] - 421815835) | 0;
    d = (((d << 11) | (d >>> 21)) + a) | 0;
    c += ((d ^ a ^ b) + k[15] + 530742520) | 0;
    c = (((c << 16) | (c >>> 16)) + d) | 0;
    b += ((c ^ d ^ a) + k[2] - 995338651) | 0;
    b = (((b << 23) | (b >>> 9)) + c) | 0;

    a += ((c ^ (b | ~d)) + k[0] - 198630844) | 0;
    a = (((a << 6) | (a >>> 26)) + b) | 0;
    d += ((b ^ (a | ~c)) + k[7] + 1126891415) | 0;
    d = (((d << 10) | (d >>> 22)) + a) | 0;
    c += ((a ^ (d | ~b)) + k[14] - 1416354905) | 0;
    c = (((c << 15) | (c >>> 17)) + d) | 0;
    b += ((d ^ (c | ~a)) + k[5] - 57434055) | 0;
    b = (((b << 21) | (b >>> 11)) + c) | 0;
    a += ((c ^ (b | ~d)) + k[12] + 1700485571) | 0;
    a = (((a << 6) | (a >>> 26)) + b) | 0;
    d += ((b ^ (a | ~c)) + k[3] - 1894986606) | 0;
    d = (((d << 10) | (d >>> 22)) + a) | 0;
    c += ((a ^ (d | ~b)) + k[10] - 1051523) | 0;
    c = (((c << 15) | (c >>> 17)) + d) | 0;
    b += ((d ^ (c | ~a)) + k[1] - 2054922799) | 0;
    b = (((b << 21) | (b >>> 11)) + c) | 0;
    a += ((c ^ (b | ~d)) + k[8] + 1873313359) | 0;
    a = (((a << 6) | (a >>> 26)) + b) | 0;
    d += ((b ^ (a | ~c)) + k[15] - 30611744) | 0;
    d = (((d << 10) | (d >>> 22)) + a) | 0;
    c += ((a ^ (d | ~b)) + k[6] - 1560198380) | 0;
    c = (((c << 15) | (c >>> 17)) + d) | 0;
    b += ((d ^ (c | ~a)) + k[13] + 1309151649) | 0;
    b = (((b << 21) | (b >>> 11)) + c) | 0;
    a += ((c ^ (b | ~d)) + k[4] - 145523070) | 0;
    a = (((a << 6) | (a >>> 26)) + b) | 0;
    d += ((b ^ (a | ~c)) + k[11] - 1120210379) | 0;
    d = (((d << 10) | (d >>> 22)) + a) | 0;
    c += ((a ^ (d | ~b)) + k[2] + 718787259) | 0;
    c = (((c << 15) | (c >>> 17)) + d) | 0;
    b += ((d ^ (c | ~a)) + k[9] - 343485551) | 0;
    b = (((b << 21) | (b >>> 11)) + c) | 0;

    x[0] = (a + x[0]) | 0;
    x[1] = (b + x[1]) | 0;
    x[2] = (c + x[2]) | 0;
    x[3] = (d + x[3]) | 0;
}

/**
 * Compute block
 */
function block(a: ArrayLike<number>) {
    const blk = [];

    for (let i = 0; i < 64; i += 4) {
        blk[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
    }
    return blk;
}

/**
 * Update md5
 */
function update(view: Uint8Array, hash = [1732584193, -271733879, -1732584194, 271733878]) {
    const length = view.length;
    let i: number;

    for (i = 64; i <= length; i += 64) {
        cycle(hash, block(view.slice(i - 64, i)));
    }
    view = i - 64 < length ? view.slice(i - 64) : new Uint8Array(0);
    return [view, hash] as [Uint8Array, number[]];
}

/**
 * Digest
 */
function digest(view: Uint8Array, hash: number[], totalLength: number) {
    const tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let i: number;
    const length = view.length;
    for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= view[i] << (i % 4 << 3);
    }
    tail[i >> 2] |= 0x80 << (i % 4 << 3);
    if (i > 55) {
        cycle(hash, tail);
        for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
        }
    }
    const tmp = /(.*?)(.{0,8})$/.exec((totalLength * 8).toString(16)) ?? [];
    const lo = parseInt(tmp[2], 16);
    const hi = parseInt(tmp[1], 16) || 0;
    tail[14] = lo;
    tail[15] = hi;
    cycle(hash, tail);

    return new Uint8Array(new Int32Array(hash).buffer);
}

/**
 * Concat buffer
 */
function concatBuffer(buf1: Uint8Array, buf2: Uint8Array) {
    const result = new Uint8Array(buf1.length + buf2.length);
    result.set(buf1);
    result.set(buf2, buf1.length);
    return result;
}

/**
 * Compute md5
 */
export function md5(buffer: Uint8Array) {
    // cycle
    const [view, hash] = update(buffer);
    // digest
    return digest(view, hash, buffer.length);
}

/**
 * Hasher
 */
interface Hasher {
    update(buffer: Uint8Array): Hasher;
    digest(): Uint8Array;
}

/**
 * Create Hasher for chunk update
 */
export function createHasher(): Hasher {
    let hash: number[] | undefined;
    let totalLength = 0;
    let tail = new Uint8Array(0);

    const reset = () => {
        hash = void 0;
        totalLength = 0;
        tail = new Uint8Array(0);
    };

    const hasher = {
        update(buffer: Uint8Array) {
            totalLength += buffer.length;
            buffer = concatBuffer(tail, buffer);

            [tail, hash] = update(buffer, hash);
            return hasher;
        },
        digest() {
            if (!hash || !hash.length) {
                throw new Error('Nothing to digest, call update first.');
            }
            const result = digest(tail, hash, totalLength);
            reset();

            return result;
        },
    };

    return hasher;
}
