import fs from "node:fs/promises";

async function create_file(content) {
    await fs.writeFile("data.txt", content, "utf8");
}

async function update_file(content) {
    await fs.appendFile("data.txt", content, "utf8");
}

async function delete_file() {
    await fs.unlink("data.txt");
}


await create_file("Hello\n");
await update_file("My name is Chandan\n");