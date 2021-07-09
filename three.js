class OwnError extends Error {
   constructor(titleError, code, description) {
      super(titleError);
      this.title = titleError;
      this.code = code;
      this.description = description;
  }
  pretty() {
     console.log(`
     error title : ${this.title}
     code : ${this.code}
     description : ${this.description}
     `);
  }
}
module.exports = OwnError;