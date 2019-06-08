export function getPrimaryColor(): string {
    const choices = [
        '#F53030',
        '#673AB7',
        '#03A9F4',
        '#4CBF50',
        '#FF5722'
    ];

    return choices[Math.floor(Math.random() * choices.length)];
}
