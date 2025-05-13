function firstWord(s) {
    s = s.trim();
    const index = s.indexOf(' ');
    if (index === -1) {
        return s;
    }
    return s.substring(0, index);
}
const s = prompt("Enter String:");
alert(firstWord(s));
