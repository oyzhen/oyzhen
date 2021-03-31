type Protocol = 'tcp' | 'udp';

interface KillPortOptions {
    protocol?: Protocol;
    signo?: number;
}

const os = Deno.build.os;

export async function killPort(port: number, { protocol = 'tcp', signo = 9 }: KillPortOptions = {}) {
    const pid = await (os === 'windows'
        ? getPidWindows(port, protocol)
        : os === 'darwin'
        ? getPidDarwin(port, protocol)
        : getPidPort(port, protocol));

    // TODO: kill doesn't support windows now.
    return pid && Deno.kill(pid, signo);
}

async function getPidWindows(port: number, protocol: Protocol) {
    const cmd = Deno.run({
        cmd: ['cmd', '/c', 'netstat -a -n -o | findstr', `${port}`],
        stdout: 'piped',
        stderr: 'piped',
    });
    const output = new TextDecoder('utf-8').decode(await cmd.output());
    cmd.close();

    const lines = output.split('\n');
    const reg = new RegExp(`^ *${protocol.toUpperCase()} *[^ ]*:${port}`, 'gm');
    const line = lines.find(line => line.match(reg));

    const pid = line?.trim().split(/[\s, ]+/)[3];

    console.log('pid: ', pid);

    return pid ? parseInt(pid) : null;
}

async function getPidDarwin(port: number, protocol: Protocol) {
    const cmd = Deno.run({
        cmd: ['lsof', '-i', `${protocol}:${port}`],
        stdout: 'piped',
        stderr: 'piped',
    });
    const lines = new TextDecoder('utf-8').decode(await cmd.output());
    cmd.close();

    const line = lines.split('\n').find(l => l.includes('LISTEN'));
    const pid = line?.split(/\s+/)[1];

    return pid ? parseInt(pid) : null;
}

async function getPidPort(port: number, protocol: Protocol) {
    const cmd = Deno.run({
        cmd: ['fuser', `${port}/${protocol}`],
        stdout: 'piped',
        stderr: 'piped',
    });

    const pid = new TextDecoder('utf-8').decode(await cmd.output());
    cmd.close();

    console.log('pid: ', pid);

    return pid ? parseInt(pid.trim()) : null;
}
