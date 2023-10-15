"use client";
import clsx from "clsx";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { type PropsWithChildren, type FC } from "react";

interface IActiveLinkProps extends PropsWithChildren<LinkProps<"">> {
	activeClassName?: string;
}

export const ActiveLink: FC<IActiveLinkProps> = ({
	href,
	children,
	activeClassName = "underline",
	...restProps
}) => {
	const pathname = usePathname();

	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={clsx("text-blue-400 hover:text-blue-600", isActive && activeClassName)}
			{...(isActive ? { "aria-current": true } : {})}
			{...restProps}
		>
			{children}
		</Link>
	);
};
