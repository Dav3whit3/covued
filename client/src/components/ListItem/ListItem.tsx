import React from "react";

const ListItem = (props: any) => {
	console.log(
		{...props}
	)
	return (
		<li {...props.li}>
			<a {...props.a}>
				<i {...props.i}></i>
				<span> {props.name} </span>
				{
					props.dropdown ? 
						<i className="bi bi-chevron-down ms-auto"></i>
						: null
				}
			</a>
		</li>
	);
};

export { ListItem };
