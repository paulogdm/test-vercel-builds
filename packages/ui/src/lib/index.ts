// place files you want to import through the `$lib` alias in this folder.

export const greeting = "Hallo from UI package!";

export function formatMessage(name: string): string {
	return `${greeting} Welcome, ${name}!`;
}
