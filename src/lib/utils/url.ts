export const BASE_URL = import.meta.env.DEV
    ? 'http://127.0.0.1:8787'
    : 'https://api.npkg.lorypelli.dev';

export function fixURL(url: string): string {
    if (!/^https?:\/\//.test(url)) {
        return 'https://' + url;
    }
    return url;
}
