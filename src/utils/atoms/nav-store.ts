import { atom } from "nanostores";

export const isMobileNavOpen = atom(false);

export function toggleMobileNav(open?: boolean) {
	isMobileNavOpen.set(open !== undefined ? open : !isMobileNavOpen.get());
}
