/**
 * Fake Blob
 */
class FakeBlob {
    #type: string | void;
    #buffer = new Uint8Array();

    constructor(blobParts?: BlobPart[], options?: { type?: string }) {
        this.#type = options?.type;
        const chunks: Array<Uint8Array> = [];
        let length = 0;
        if (!blobParts?.length) {
            return;
        }
        for (const part of blobParts) {
            let buffer: Uint8Array;
            if (typeof part === 'string') {
                buffer = new TextEncoder().encode(part);
            } else if (ArrayBuffer.isView(part)) {
                buffer = new Uint8Array(part.buffer.slice(part.byteOffset, part.byteLength));
            } else if (part instanceof ArrayBuffer) {
                buffer = new Uint8Array(part);
            } else {
                buffer = new Uint8Array();
            }
            length += buffer.length;
            chunks.push(buffer);
        }

        this.#buffer = new Uint8Array(length);
        let l = 0;
        for (const buffer of chunks) {
            this.#buffer.set(buffer, l);
            l += buffer.length;
        }
    }

    /**
     * Get Type
     */
    get type() {
        return this.#type;
    }

    /**
     * Get ArrayBuffer
     */
    arrayBuffer() {
        return Promise.resolve(this.#buffer.buffer);
    }
}

/**
 * Create Blob
 * @param blobParts blob parts
 * @param options options
 */
export default function createBlob(blobParts?: BlobPart[], options?: BlobPropertyBag): Blob {
    if (typeof Blob === 'function') {
        return new Blob(blobParts, options);
    }
    return (new FakeBlob(blobParts, options) as unknown) as Blob;
}
