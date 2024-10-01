const { v4: uuidv4 } = require("uuid");

class Note {
  constructor(title, body, option) {
    this.id = uuidv4();
    this.title = title;
    this.body = body;
    this.pinned = option.pinned || false;
    this.backgroundColor = option.backgroundColor || "white";
    this.currentTime = Math.floor(Date.now() / 1000);
    this.createdAt = this.currentTime;
    this.updatedAt = this.currentTime;
  }
}

module.exports = Note;
