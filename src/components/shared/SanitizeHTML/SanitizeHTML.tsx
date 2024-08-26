import { createElement, HTMLAttributes } from "react"
import sanitize from "sanitize-html"

type SanitizeHtmlProps = {
	children: string
	tag: string
} & HTMLAttributes<HTMLElement>

export const SanitizeHtml = ({ tag, children, ...rest }: SanitizeHtmlProps) => {
	const sanitizedHTML = sanitize(children, {
		allowedTags: ["b", "i", "em", "strong"]
	})
	
	return createElement(tag, {...rest}, sanitizedHTML)

}