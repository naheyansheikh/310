export class Instructor {
	constructor(
		public id: string,
		public certifications: string[],
		public firstName: string,
		public lastName?: string
	) {}

	public role(): string {
		return "instructor";
	}

	public isCertifiedFor(category: string): boolean {
		return this.certifications.includes(category);
	}
	public label(): string {
		return `${this.firstName} ${this.lastName} (${this.role()})`;
	}
}
