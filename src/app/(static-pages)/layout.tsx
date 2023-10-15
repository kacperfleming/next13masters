import React, { type FC, type PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return <div className="text-center">{children}</div>;
};

export default Layout;
