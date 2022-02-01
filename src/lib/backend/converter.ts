const convert = (str: string): string => {
    if (str === 'smile') {
        return '🙂 ';
    } else {
        return '';
    }
}

export const convertMessage = (message: string): string => {
    const result = message.split(' ').map((value) => {
        if (value.startsWith(':') && value.endsWith(':') && value.length > 2) {
            const raw =  value.replace(':', '').replace(':', '');
            return convert(raw);
        } else {
            return value;
        }
    }).join(' ');

    return result;
};
