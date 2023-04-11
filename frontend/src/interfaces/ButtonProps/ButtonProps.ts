type ColorsType =
	| "whiteFixed"
	| "grey0"
	| "grey1"
	| "grey2"
	| "grey3"
	| "grey4"
	| "grey5"
	| "grey6"
	| "grey7"
	| "grey8"
	| "grey9"
	| "grey10"
	| "brand1"
	| "brand2"
	| "brand3"
	| "brand4"
	| "alert1"
	| "alert2"
	| "alert3"
	| "sucess1"
	| "sucess2"
	| "sucess3"
	| "random1"
	| "random2"
	| "random3"
	| "random4"
	| "random5"
	| "random6"
	| "random7"
	| "random8"
	| "random9"
	| "random10"
	| "random11"
	| "random12"
	| "tranparent";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color?: ColorsType;
	bgcolor?: ColorsType;
	component?: "medium" | "big";
	border?: ColorsType;
	width?: "fullWidth" | string;
	hover?: {
		color?: ColorsType;
		bgcolor?: ColorsType;
		border?: ColorsType;
	};
	children?: any;
}
