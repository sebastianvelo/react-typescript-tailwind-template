class TailwindClass {
  classNames: string[] = [];

  static builder(): TailwindClass {
    return new TailwindClass();
  }

  add(className?: string, condition: boolean = true): TailwindClass {
    condition && this.classNames.push(className ?? ``);
    return this;
  }

  build() {
    return this.classNames.join(` `).trim();
  }
}

export default TailwindClass;
