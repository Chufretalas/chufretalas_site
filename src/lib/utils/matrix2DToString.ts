export default function matrix2DToString(m: any[][]): string {
    let flattenedScores = "";
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            flattenedScores += m[i][j] ?? "undefined";
            if (j !== m[i].length - 1) {
                flattenedScores += ";";
            }
        }
        if (i !== m.length - 1) {
            flattenedScores += ";";
        }
    }
    return flattenedScores;
}