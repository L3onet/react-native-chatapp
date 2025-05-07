export function imageExpoFormat(uri) {
    // Dividir por ambos tipos de separadores: / y \
    const parts = uri.split(/[/\\]/);
    const filename = parts[parts.length - 1];
  
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : "image";
  
    return { uri, name: filename, type };
}