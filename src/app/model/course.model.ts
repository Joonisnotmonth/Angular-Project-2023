export class Course {
  constructor(
    public id?: number,
    public name?: string,
    public subject?: string,
    public teacher?: string,
    public hours?: number,
    public photo?: string,
    public description?: string
  ) {}
}
