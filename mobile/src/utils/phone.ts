export function formatPhoneNumber(phoneNumberString:string) {
		return `(${phoneNumberString.substr(0, 2)}) ${phoneNumberString.substr(
			2,
			1
		)} ${phoneNumberString.substr(3, 4)}-${phoneNumberString.substr(6, 4)}`;
}